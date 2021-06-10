function fatorar(){
    var num = parseInt(document.getElementById("num").value);

    var numRes = document.getElementById ("numRes");

    var aux=1;

    for(n=num;n>0;n--){
        console.log(aux+"=" + "*"+n);
        aux=aux*n;


    }

    n=num;    

    while(n>0){
        

        console.log(aux+"="+aux+"*"+n);

        aux=aux*n;

        n--;
    }

    numRes.innerHTML=aux;
    
}

