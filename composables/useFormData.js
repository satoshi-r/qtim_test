import { required, email, minLength } from '@vuelidate/validators'

export const useFormData = () => {
  const getInitForm = (fields = []) => {
    const form = {}

    if (!fields || !fields.length) return form

    fields.forEach((field) => {
      let value = null
      const name = `field_${field.id}`

      if (field.field_type === 'list' && field.list) {
        const item = field.list.items.find((o) => o.is_default) || null
        value = item ? item.value : null
      }
      form[name] = value
    })
    return form
  }

  const getRows = (fields = []) => {
    const rows = []
    if (!fields || !fields.length) return rows

    const sizeMap = {
      full: 100,
      half: 51,
      third: 34,
    }

    let temFields = []
    let width = 0
    fields.forEach((field) => {
      temFields.push(field)
      width += sizeMap[field.width]
      if (width >= 100) {
        rows.push({ cls: `col${temFields.length}`, fields: temFields })
        temFields = []
        width = 0
      }
    })
    return rows
  }

  const touchField = (v$, field) => {
    if (v$ && v$[field]) {
      v$[field].$touch()
    }
  }

  const fieldTypes = {
    email: 'email',
    number_int: 'number',
    text_input: 'text',
    phone: 'tel',
    checkbox: 'checkbox',
  }

  const getRules = (fields = []) => {
    const rules = {}
    fields.forEach((field) => {
      const id = `field_${field.id}`
      rules[id] = {}
      if (field.required) {
        rules[id].required = required
      }
      if (field.field_type === 'email') {
        rules[id].email = email
      }
      if (field.field_type === 'phone') {
        rules[id].phone = minLength(15)
      }
    })
    return rules
  }

  return {
    getInitForm,
    getRows,
    touchField,
    getRules,
    fieldTypes,
  }
}
