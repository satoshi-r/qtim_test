<template>
  <form class="contacts-form" @submit.prevent="submit">
    <div class="contacts-form__title">{{ formData.title }}</div>
    <div class="contacts-form__description" v-html="formData.description"></div>
    <div class="row" v-for="(row, index) in formRows" :key="index">
      <div class="col" v-for="field in row.fields" :key="field.id">
        <div class="form-group" v-if="field.field_type in fieldTypes">
          <label class="input">
            <div class="input__title">{{ field.label }}</div>
            <input
              :id="`field_${field.id}`"
              v-maska
              :data-maska="field.field_type === 'phone' ? '+7 ### ### ####' : ''"
              v-model="form[`field_${field.id}`]"
              :type="field.checkbox_value ? fieldTypes.checkbox : fieldTypes[field.field_type]"
              :name="`field_${field.id}`"
              :placeholder="`${field.label} ${field.required ? '*' : ''}`"
              :step="field.field_type === 'number_int' ? 1 : undefined"
              :maxlength="field.max_length || undefined"
              @blur="touchField(v$, `field_${field.id}`)"
              :class="{
                'has-error': v$['field_' + field.id].$dirty && v$['field_' + field.id].$invalid,
                'form-check-input mt0': field.checkbox_value,
              }"
            />
          </label>
        </div>
        <div class="form-group" v-else-if="field.field_type === 'text_area'">
          <label class="input">
            <div class="input__title">{{ field.label }}</div>
            <textarea
              id="form_message"
              :name="`field_${field.id}`"
              :placeholder="`${field.label} ${field.required ? '*' : ''}`"
              v-model="form[`field_${field.id}`]"
              @blur="touchField(v$, `field_${field.id}`)"
              :class="{
                'has-error': v$['field_' + field.id].$dirty && v$['field_' + field.id].$invalid,
              }"
            ></textarea>
          </label>
        </div>
        <div class="form-group" v-else-if="field.field_type === 'list' && field.list && field.list.items">
          <Dropdown
            :title="`${field.label} ${field.required ? '*' : ''}`"
            :placeholder="textSelectedItem || `${field.label} ${field.required ? '*' : ''}`"
            :items="field?.list.items"
            @select="selectItem($event, field.id)"
          />
        </div>
        <!-- <div
          v-show="v$[`field_${field.id}`].$dirty && v$[`field_${field.id}`].$invalid"
          class="form-error"
        > Неверное значение поля {{ field.label }}
        </div> -->
      </div>
    </div>

    <div class="contacts-form__agreement" v-html="formData.bottom_text"></div>
    <button class="btn contacts-form__submit">{{ formData.submit_button }}</button>
  </form>
</template>
<script setup>
import { useVuelidate } from '@vuelidate/core'
import API from '@/api'

const { $api, error } = useNuxtApp()

const props = defineProps({
  formId: {
    type: Number,
    required: true,
  },
})

const emits = defineEmits(['close'])

const { forms } = useVarsStore()

// Initial data
const { getInitForm, getRows, touchField, getRules, fieldTypes } = useFormData()
const formData = computed(() => forms[props.formId])
const form = ref(getInitForm(formData.value.fields))
const formRows = computed(() => getRows(formData.value.fields))
const rules = computed(() => getRules(formData.value.fields))

const v$ = useVuelidate(rules, form)

const emitter = useEmitter()

const clear = () => {
  form.value = getInitForm(formData.value.fields)
}

// Запоминаем состояние для кастомного select
const textSelectedItem = ref('')
const selectItem = (item, id) => {
  form.value[`field_${id}`] = item.value
  textSelectedItem.value = item.text
}

let submitting = false

const submit = () => {
  if (submitting) return

  v$.value.$touch()
  if (v$.value.$invalid) return

  submitting = true
  $api(API.forms.accepted(props.formId), { method: 'POST', body: form.value })
    .then((response) => {
      emitter.emit('openThanksForm', formData.value.success_message)
      emits('close')
      console.log('submit')
      v$.value.$reset()
      textSelectedItem.value = ''
      clear()
    })
    .catch((er) => error(e))
    .then(() => {
      submitting = false
    })
}
</script>
