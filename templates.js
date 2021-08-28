 import {row, col, css} from './utils'
 
 
 
 function title(block){
      const {tag='h1', styles} = block.options
      
     return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}


  function text(block){
       const styles = block.options.styles
     return row(col(`<${block.options.tag}>${block.value}</${block.options.tag}>`), css(styles))
          
}


 function columns(block){
 const styles = block.options.styles
const column = block.value.map(col).join('')
  return row(column,css(styles)) 

}

 function image(block){
     const {styles, alt = '', imageStyles:is} = block.options
          return row(col(`<img src="${block.value}" alt= "${alt}", style="${css(is)}"></img>`), css(styles))
}


export const template = {
     title,
     text,
     columns,
     image,
}