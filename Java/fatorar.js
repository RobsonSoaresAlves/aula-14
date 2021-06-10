function fatorar(){
    var num = parseInt(document.getElementById("num").value);

    var numRes = document.getElementById("numRes");

    var aux=1;


    for(n=num;n>0;n--){
        aux=aux*n;
        
        console.log(aux+"="+aux+"*"+n);
        aux=aux*n;

        numRes.innerHTML=aux;

    }
}