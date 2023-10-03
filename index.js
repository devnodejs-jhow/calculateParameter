const input_rotate_diam = document.querySelector("#diam-tool")
const input_rotate_vc = document.querySelector("#velocidadedecorte")
const input_rotate_avanco = document.querySelector("#rotate-avanco")
const input_avanco_faca = document.querySelector("#avanco-faca")
const input_numero_faca = document.querySelector("#numero-faca")
const calculate1 = document.querySelector("#buttom1")
const calculate2 = document.querySelector("#buttom2")
const Pi = 3.1415926535897932384626433832795
const print_result_rotate = document.querySelector("#container-result-rotate")
const print_result_avanço = document.querySelector("#container-result-avanco")


const rotacao_fuction = (vc, diamTool) => {
    return (vc * 1000) / (Pi * diamTool)
}
const avanco_fuction = (rotate, avanco_faca, numeroFacas) => {
    return (rotate*avanco_faca*numeroFacas)
}

calculate1.addEventListener("click", () => {
    rotacao_fuction(input_rotate_vc.value , input_rotate_diam.value )
    print_result_rotate.textContent = `Resultado:${Math.floor(rotacao_fuction(input_rotate_vc.value , input_rotate_diam.value))}`
    console.dir(Math.floor(rotacao_fuction(input_rotate_vc.value , input_rotate_diam.value)));
})
calculate2.addEventListener("click", () => {
    avanco_fuction(input_rotate_avanco.value,input_avanco_faca.value,input_numero_faca.value)
    print_result_avanço.textContent = Math.round(avanco_fuction(input_rotate_avanco.value,input_avanco_faca.value,input_numero_faca.value))
    console.log(Math.round(avanco_fuction(input_rotate_avanco.value,input_avanco_faca.value,input_numero_faca.value)));
})