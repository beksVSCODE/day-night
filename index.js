// let words = ['hello','hi','how','hello','how','car']

// function cleanWords(a){
// let clean = a.filter( (element,numbers,array) => {
//     if(array.indexOf(element)!==numbers){
//         return element
//     }
// })
// console.log(clean);
// }

// cleanWords(words)

const block = document.querySelector('.block')
const circle = document.querySelector('.circle')
const body = document.querySelector('body')




circle.addEventListener('click',function changeColor(){
   block.classList.toggle('active')
   circle.classList.toggle('active')
   body.classList.toggle('active')


})