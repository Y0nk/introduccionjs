function Ejemplo1(){
	
	var a = 5;
	var b = 10;

if (a === 5) {
  let a = 4;
  var b = 1;

  document.write("let a en if: " + a); 
  document.write(" || var b en if: " + b); 
}

document.write(" || var a fuera if: " + a);
document.write(" || var b fuera if: " + b);
}

function Ejemplo2(){
	
if (x) {
  let foo;
  //let foo;	 porque estan dentro del mismo sitio
}

}

function Ejemplo31(){
	
  var x = 31;
  if (true) {
    var x = 71;
    document.write("x como var dentro de if " + x);
  }
document.write(" || x como var fuera del if" + x);

}

function Ejemplo32(){
	
	let x = 31;
	  if (true) 
	  	{
	    let x = 71;
	    document.write("x como let dentro de if " + x); 
	  	}
	document.write(" || x como let fuera del if" + x); 
}


function Ejemplo4(){

var x = 'global';
let y = 'global';
document.write(this.x); //mira al que esta mas encima(aqui da error porque x es global a nivel de funcion)
document.write(this.y);

}

