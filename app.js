
alert("This application will calculate your pay for the week.");


let numberOne= prompt("Please enter hours worked",0);
let numberTwo= prompt("Enter pay rate",0);

if(numberOne>40){
	let numberThree = 40 * numberTwo;
	let numberFour = (numberOne - 40) * (numberTwo * 1.5);
	console.log(numberThree + numberFour);
	console.log("")
}
else{
	console.log(numberOne * numberTwo);
}


console.log(numberOne);

console.log(numberTwo);