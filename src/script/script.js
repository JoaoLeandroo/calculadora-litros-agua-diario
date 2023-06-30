const button = document.querySelector("button")
let input = document.querySelector("input")

button.addEventListener("click", () => {
    if(input.value === 0 || input.value === "") {
        alert("Informe o seu peso corretamente, em KG.")
        input.value = ""
        return
    }


    const valueInput = 35 * parseFloat(input.value)
    console.log(valueInput)
    if(valueInput < 1000) {
        console.log("Necessario " + valueInput + "ML de agua por dia")
        input.value = ""
        return
    }

    const formatterValue = valueInput.toLocaleString()
    const formatterValueToNumber = parseFloat(formatterValue)
    const result = formatterValueToNumber.toFixed(1)

    console.log("Necessario " + result + 'L por dia.')
    
    input.value = ""

})