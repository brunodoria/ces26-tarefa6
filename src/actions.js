// definir alguns comportamento adicionais
// uso de botao de digito
export const digitPressed = function (number) {
    return {
        type : 'DIGIT_PRESSED',
        digit : number
    }
}
// uso de botao de operacao
export const operationPressed = function (operation) {
    return {
        type : 'OPERATION_PRESSED',
        operation : operation
    }
}
// uso de botao = para calculo da expressao 
export const evaluationPressed = function () {
    return {
        type : 'Evaluation_PRESSED',
        operation : '='
    }
}
