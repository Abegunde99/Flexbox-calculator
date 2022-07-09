const input = document.querySelector('input')
const buttons = document.querySelectorAll('#width1')
const buttons2 = document.querySelectorAll('#width2')


for(let button of buttons){
    // let btnValue = button.value
    input.value = " ";
    button.addEventListener('click', () =>{
        let btnValue = button.textContent
        input.value += `${btnValue}`
        
    })
}
for(let button2 of buttons2){
    // let btnValue = button.value
    input.value = " ";
    button2.addEventListener('click', () =>{
        let btnValue = button2.textContent
        input.value += ` ${btnValue} `
        
    })
}

const button3 = document.querySelector('#delete')
    button3.addEventListener('click' , () =>{
    input.value = " ";
})
const button4 = document.querySelector('#width3')
button4.addEventListener('click' , () =>{
    input.value = " ";
})

const equal = document.querySelector('.equal')
equal.addEventListener('click', () =>{
    let equalTo = input.value;
    input.value = eval(equalTo)
    input.style.textAlign = "right"
    input.style.paddingRight = '15px'
    input.style.fontWeight = "bold"
})