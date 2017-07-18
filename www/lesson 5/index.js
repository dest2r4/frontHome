var x=confirm ("ОК - арифметическая, НЕТ - математическая");
var y;
// 1 - арифметическая 0 - математическая	
(x==true)?y=1:y=0;
//q - чисто для удобства, чтоб не прописывать <br> постоянно
var q="<br>";
var a=prompt("Первый член");
var b=prompt("К-во итераций");
var c=prompt("Множитель");
var look=confirm("Посмотреть результат всех  итераций цикла?");
(look==true)?look=1:look=0;

//само решение
(y==1)?Arith(a,b,c,look):Math(a,b,c,look);
// a - первый член b - кво элем с-сколько добавить
function Math( a, b=1, c=1,l){
	var result=0;
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);
	l=parseInt(l);
	if(l==1){
	for (var i = 0; i < b; i++) {
		 
		 result=result+(a+c);
		 document.write(i+" ==> "+result+q);
		 
		}	
	}
	else{
		for (var i = 0; i < b; i++) {
		 
		 result=result+(a+c);
		 
		 
		}
		document.write (b+" --> "+result);	
	}
	

}
//Math(a,b,c);

function Arith( a, b=1, c=1,l){
	var result=true;
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);
	l=parseInt(l);
	if(l==1){
	if (a==0|| b==0||c==0) {
		document.write ("НЕЛЬЗЯ множить на 0");
	}
	else{
	for (var i = 0; i < b; i++) {
		 
		 result=result*(a*c);
		 document.write(i+" ==> "+result+q);
		 
		}	
	}}
	else{
		if (a==0|| b==0||c==0) {
		document.write ("НЕЛЬЗЯ множить на 0");
	}
	else{
	for (var i = 0; i < b; i++) {
		 
		 result=result*(a*c);
		}	
		document.write (b+" --> "+result);
	}}


}
