import image from './assets/image.png'
import { Block } from './classes/blocks'


export const model = [
     new Block ('title', 'Конструктор сайтов на чистом JS',  {
          tag: 'h2',
          styles: {
               background: 'linear-gradient(to right, #ff0099, #493240)',
               color:'#fff',
               padding : '1rem',
               'text-align': 'center',
               'font-family': 'Roboto'
          }
     } ),
     new Block ('image',image, {
          tag: 'img',
          styles: {
               padding: '2rem auto',
               display: 'flex',
               'justify-content' : 'center'
               },
          imageStyles: {
               width:'500px',
               height:'auto'
          },
          alt: 'Это картинка',
     }),
    new Block ('columns', [
     '111111111',
     '111111111',
     '111111111', 
     '4444444444'
], {
     tag: 'div',
     styles: {
          background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
          color:'#fff',
          padding : '0.5rem',
          'font-weight': 'bold',
          'font-family': 'Roboto'
}}),

new Block ('text', 'Here we go again', {
     tag: 'p',
     styles: {
          background: 'linear-gradient(to left, #f2994a, #f2c94c)',
          padding : '1rem',
          'font-weight': 'bold',
          'font-family': 'Roboto'
     }}),
     ]