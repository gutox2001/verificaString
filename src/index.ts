import Regex from './Classes/Regex';
import './styles.css';

const regex = new Regex('^[a-z0-9]+@[a-z]+[com]*.[br]*$');

function updateOutputString(element: HTMLElement, output: string): void {
    element.textContent = output;
}

function receiveInputEvent(elementIn: HTMLInputElement, elementOut: HTMLElement, input: string, output: string, message?: string): void {
    elementIn.addEventListener('input', (event) => {
        input = (event.target as HTMLInputElement).value;
        output = regex.isEmailValid(input) ? 'Válida' : 'Inválida';

        updateOutputString(elementOut, output);
        console.log(message, input);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado!');

    let inputStringDefault: string = "";
    let outputStringDefault: string = "";

    let inputRegex: string = "";
    let inputStringWithRegex: string = "";
    let outputStringWithRegex: string = "";

    const inputElementDefault = document.getElementById('input-string-default') as HTMLInputElement;
    const outputElementDefault = document.getElementById('result-default') as HTMLElement;

    const inputElementRegex = document.getElementById('input-regex') as HTMLInputElement;
    const inputElementWithRegex = document.getElementById('input-string-regex') as HTMLInputElement;
    const outputElementWithRegex = document.getElementById('result-regex') as HTMLElement;

    // Atualiza a constante e o texto exibido quando o input muda
    receiveInputEvent(inputElementDefault,
        outputElementDefault,
        inputStringDefault,
        outputStringDefault,
        "String Default de entrada atualizada: "
    );
});