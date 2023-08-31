class Validator {
    constructor() {
        this.validations = [

        ]

    }
    /* iniciar as validações em todos os campos */
    validadte(params) {
        /* obter todos os inputs do formulário */
        let inputs = params.getElementsByTagName('input')
        //vou transformar de HTML collegtion para Array
        //console.log(inputs)
        let inputArray=[...inputs]
        //console.log(inputArray)
        //looping nos inputs e validação mediante ao que for encontrado
        inputArray.forEach(function(input){
            console.log(input)

        })
    }
}
let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();
/* evento que dispara as validações */
submit.addEventListener('click', function (e) {
    e.preventDefault();
    validator.validadte(form)
})