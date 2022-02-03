const inputed = document.querySelector('.inputedValue p');
const resultingValue = document.querySelector('.resultValue p');
let leftValue = '';
let rigthValue = '';
let operator = '';
let result = 0;
const btnClear = document.getElementById('clear');
btnClear.onclick = () => clearScreen();

let sum = (a,b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;


let doCalc = (a, operate, b) =>{
	switch(operate){
		case '+':
			result = sum(a, b);
			break;
		case '-':
			result = subtract(a, b);
			break;
		case 'x':
			result = multiply(a, b);
			break;
		case '/':
			if (b != 0){
				result = divide(a, b);
			}
			else {
				result = 0;
			}
			break;
		default:
			break;
	}
}

function assingOperator(op){
	if (operator === '' && !leftValue == ''){
		operator += op;
		inputed.textContent = `${leftValue} ${op}`;
		resultingValue.textContent = '';
	}
	else if(operator  !== '' && rigthValue == ''){
		operator = '';
		operator += op;
		inputed.textContent = `${result} ${op}`;
		resultingValue.textContent = '';
	}
	else if (operator !== '' && rigthValue != ''){
		parseValues();
		operator = '';
		operator += op;
		inputed.textContent = `${result} ${op}`;
		resultingValue.textContent = '';
	}
}

function addText(e){
	if (operator == ''){
		leftValue += e;
		resultingValue.textContent = leftValue;
}
	else if (!operator == '' && result == 0){
		rigthValue += e;
		resultingValue.textContent = rigthValue;
	}
	else if (!operator == '' && result){
		rigthValue += e;
		resultingValue.textContent = rigthValue;
	}
}

function parseValues(){
	let a = 0;
	let b = 0;
	if (result == 0 && leftValue != ''){
		a = parseFloat(leftValue);
		b = parseFloat(rigthValue);
		inputed.textContent = `${leftValue} ${operator} ${rigthValue}`;
		rigthValue = '';
		leftValue = '';
		doCalc(a, operator, b);
		resultingValue.textContent = result;
	}
	else if (result != 0 || (result == 0 && leftValue == '' && rigthValue != '')){
		a = result;
		if(rigthValue != ''){
			b = parseFloat(rigthValue);
		}
		else{b = 0;};
		inputed.textContent = `${result} ${operator} ${rigthValue}`;
		rigthValue = '';
		leftValue = '';
		doCalc(a, operator, b);
		resultingValue.textContent = result;
	}
}

function clearScreen(){
	leftValue = '';
	rigthValue = '';
	operator = '';
	inputed.textContent = '';
	resultingValue.textContent = '';
	result = 0;
}

function delChar(){
	if (operator == '' ){
		leftValue = leftValue.slice(0,-1);
		resultingValue.textContent = leftValue;
	}
	else if(operator != '' && rigthValue != '' && result == 0){
		rigthValue = rigthValue.slice(0,-1);
		resultingValue.textContent = rigthValue;
	}
	else if(result != 0){
		result = Math.floor(result / 10);
		resultingValue.textContent = result;
	}
}
