export default function () {
    const hooks = useNuxtApp().hooks;
  
    return {
      emit: hooks.callHook,
      on: hooks.hook,
    }
}

// usage in components

// someFunction() {
//     const emitter = useEmitter();
//     emitter.emit("test-emit", "hello world");
// }
  
// anoter components

//    const emitter = useEmitter();
//    emitter.on("test-emit", (payload) => {
//       console.log(payload);
//    });