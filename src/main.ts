import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const defaultBackgroundColor = 'lightBlue'
const defaultText = 'blue'

//createApp(App).use(router).mount('#app')


const app = createApp(App)
app.use(router).mount('#app')
app.directive('background', (el, binding) => {
    console.log(binding.arg)

    el.style.backgroundColor = binding.arg || defaultBackgroundColor
    el.innerHTML = 'My background text is : ' + binding.arg || defaultBackgroundColor
})
