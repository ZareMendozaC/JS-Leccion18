
// ejercicio 1
//Hallar la suma de la serie de números hasta n
function forLoop(limit) {
    var total=0;
    for(var i=0; i<=limit; i++)
    {
        total+=i;
    }
    return total;
}

// ejercicio 2
// Hallar la suma de los n números pares//
function sumaPares(n) {
    var suma= 0;
    for(var i=0; i<=n ;i+=2)
    {
        suma+=i;
    }
    return suma;
}

// ejercicio 3
// Hallar el factorial de un número n
function factorial(n) {
    var total=1;
    if(n<0)
        return null;
    if(n==0)
        return null;
    else
        for(var i=1;i<=n;i++)
           {
               total=total*i;
           } 
    return total;
}
//ejercicio 4
//Gnerar la tabla de multiplicar de un número n
function stringMultiplicar(n) {
    var resultado="";
    var mul;
    for(var i=1; i<=10;i++)
        {
            mul=i*n;
            resultado=resultado+n+'x'+i+'='+mul;
            if(i<10)
                {
                    resultado=resultado+'/';
                }
        }
   
    return resultado;
}
//ejercicio 5
//casipalindrome forma 1
function casiPalindrome(palabra) {
var tam= palabra.length;
var div=0;
var palindrome;
var count=0;
  
        for(var i=0,j=(tam-1); i<(tam/2),j>(tam/2);i++,j--)
                {
                    if(palabra[i]!=palabra[j])
                        {
                            count=count+1;
                        }
                }
            if(count<=2)
                {
                    palindrome=true;
                }
            else
            	{
            		palindrome=false;
            	}
          
          return palindrome;
}

//ejercicio 5
//casipalindrome forma 2

function casiPalindrome(palabra) {
var tam= palabra.length;
var div=0;
var palindrome;
var count=0;
  
        for(var i=0,j=(tam-1); i<(tam/2),j>(tam/2);i++,j--)
            {
                 if(palabra[i]==palabra[j])
                    {
                        palindrome=true;
                    }
                    else
                        {
                            count=count+1;
                             palindrome=false;
                        }
                }
            if(count<=2)
                {
                    palindrome=true
                }
          
          return palindrome;
}

