var x=confirm ("ОК - арифметическая, НЕТ - математическая");
var y;
// 1 - арифметическая 0 - математическая	
(x==true)?y=1:y=0;
//q - чисто для удобства, чтоб не прописывать <br> постоянно
var q="<br>";
var a=prompt("Первый член");
var b=prompt("К-во итераций");
var c=prompt("Множитель");
//само решение
(y==1)?Arith(a,b,c):Math(a,b,c);
// a - первый член b - кво элем с-сколько добавить
function Math( a, b=1, c=1){
	var result=0;
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);
	for (var i = 0; i < b; i++) {
		 
		 result=result+(a+c);
		 document.write(result+q);
		 
		}	


}
//Math(a,b,c);

function Arith( a, b=1, c=1){
	var result=true;
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);
	if (a==0|| b==0||c==0) {
		document.write ("НЕЛЬЗЯ множить на 0");
	}
	else{
	for (var i = 0; i < b; i++) {
		 
		 result=result*(a*c);
		 document.write(result+q);
		 
		}	
	}

}
