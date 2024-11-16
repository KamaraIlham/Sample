//let random = (a,b) => a+b;
//console.log(random(5,6))

// document.getElementById('title').innerHTML = 'Hello World' ;
// document.querySelector('#title').innerHTML = 'Hey world' ;


document.getElementById('btn').addEventListener('click' , () => {
    const numberDice = document.getElementById('numberDice').value
    const result = document.getElementById('result')
    const images = document.getElementById('images')
    const values = []
    const imagess = []

    for(let i = 0; i < numberDice; i++) {
        const value = Math.floor (Math.random() * 6) + 1
        values.push(value)
        imagess.push(`<img src="img/${value}.png"> ` )


    }

    result.textContent = ` dice == ${values.join(', ')}`
    images.innerHTML = imagess.join(' ')

})
