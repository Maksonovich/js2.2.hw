const btn = document.querySelector("#red")
const btn2 = document.querySelector("#yellow")
const btn3 = document.querySelector("#green")
const btn4 = document.querySelector("#reset")

const body = document.body

btn.addEventListener("click",() => {
    btn.disabled = true
    btn4.disabled = false
    let timer = setTimeout(() => {
        body.style.backgroundColor = "red"
        console.log("REd");
    },3000)
    btn2.addEventListener('click',() => {
        btn2.disabled = true
        btn4.disabled = false
        let timer2 = setTimeout(() => {
            body.style.backgroundColor = 'yellow'
            console.log("yellow");
        },3000)
    })
    btn3.addEventListener('click',() => {
        btn3.disabled = true
        btn4.disabled = false
        let timer3 = setTimeout(() => {
            body.style.backgroundColor = 'green'
            console.log("green");
        },3000)
    })
    btn4.addEventListener('click',() => {
        btn.disabled = false
        btn2.disabled = false
        btn3.disabled = false
        btn4.disabled = true
        body.style.backgroundColor = '#fff'
        console.log("reset");
    })
})