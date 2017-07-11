var c=prompt("tell the operation");
var a=prompt("first argument");
var b=prompt("second argument");

 calc (a,b,c);
function calc (a,b,c){
	a=parseInt(a);
	b=parseInt(b);
	/*
	Переменные:
	a- первое число
	b - второе
	c - что с ними делать
	result 
	*/
	var result;
	switch (c){
		case '+':
		result=a+b;
		break;
		case '-':
		result=a-b;
		break;
		case '*':
		result=a*b;
		break;
		case '/':
		result=a/b;
		break;
		default:
		result=100;
		break;
}
document.write('a '+ c+' b == '+result);
}