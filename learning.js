// const btns = document.querySelectorAll('button');
// const input = document.querySelector('input');

// btns.forEach(btn => {
//   btn.addEventListener('click', (event) => {
//     if (event.target.value === "ac") {
//       input.value = '';
//     }
//     else if (event.target.value === "c") {
//       input.value = input.value.slice(0, input.value.length-1);
//     }
//     else if (event.target.value === "=") {
//       input.value = eval(input.value);
//     } else {
//       input.value += event.target.value;
//     }
//   });
// });









































const btns = document.querySelectorAll('button');
const input = document.querySelector('input')

btns.forEach(btn =>{
    btn.addEventListener('click', (event) =>{
       if (event.target.value === 'ac'){
        input.value = '';
       } 
       else if (event.target.value === 'c'){
        input.value = input.value.slice(0,input.value.length -1);
       }

       else if (event.target.value === '='){
        input.value = eval(input.value);
       }
       else {
        input.value += event.target.value;
       }
    
    
    
    }
    
    )
} )