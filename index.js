import { model } from "./model"
import { template } from "./templates"
import './styles/main.css'


const $site = document.querySelector('#site')


model.forEach(block => {
     const toHTML = template[block.type]
     
     if (toHTML){
     $site.insertAdjacentHTML("beforeend", toHTML(block))
     }
})









