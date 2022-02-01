const inputed = document.querySelector('.inputedValue p');
const inserting = document.querySelector('.insertingValue p');
let leftValue = '';
let rigthValue = '';
let operator = '';
let result = 0

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
			result = divide(a, b);
			break;
		default:
			break;
	}
}

function assingOperator(op){
	operator += op
	inputed.textContent = leftValue + op;
	inserting.textContent = '';
}

function addText(e){
	if (operator == ''){
		leftValue += e;
		inserting.textContent = leftValue;
}
	else if (!operator == ''){
		rigthValue += e;
		inserting.textContent = rigthValue;
	}
}

function parseValues(){
	let a = 0;
	let b = 0;
	a = parseInt(leftValue);
	b = parseInt(rigthValue);
	inputed.textContent = `${leftValue} ${operator} ${rigthValue}`;
	doCalc(a, operator, b);
	inserting.textContent = result;

}

