function calculoInvestimento(){ //início da função
    var quantia = document.getElementById ('quantia').value; //chama valor de quantia
    var rads = document.querySelector('input[name="risco"]:checked').value;//chama valor do input  radio 
    var projecao = (quantia + (quantia * rads))//cálculo de verif. de retorno de invest.
    console.log (rads)
        if (rads == 0){
        rads = 0.05 //valor predeterminado
        console.log('Projeção de Retorno: R$', + projecao)
        } else if (rads == 1){
        rads = 0.10 //valor predeterminado
        console.log('Projeção de Retorno: R$', + projecao)
        } else {
        rads = 0.20 //valor predeterminado
        console.log('Projeção de Retorno: R$', + projecao)
        }
}