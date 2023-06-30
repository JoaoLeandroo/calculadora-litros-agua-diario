const button = document.querySelector("button")
let input = document.querySelector("input")
const response = document.querySelector(".response")

button.addEventListener("click", () => {
    if(input.value === 0 || input.value === "") {
        alert("Informe o seu peso corretamente, em KG.")
        response.innerHTML = ""
        input.value = ""
        return
    }


    const valueInput = 35 * parseFloat(input.value)
    console.log(valueInput)
    if(valueInput < 1000) {
        response.innerHTML = "Necessario " + valueInput + "ML de água por dia"
        input.value = ""
        return
    }

    const formatterValue = valueInput.toLocaleString()
    const formatterValueToNumber = parseFloat(formatterValue)
    const result = formatterValueToNumber.toFixed(1)

    response.innerHTML = "Necessario " + result + 'L de água por dia.'
    
    input.value = ""

})