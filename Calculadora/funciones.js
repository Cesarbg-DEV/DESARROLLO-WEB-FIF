function insertar(valor){
    document.querySelector('.pantalla').innerHTML+=valor;
}
function resultado(){
    p=document.querySelector('.pantalla'); //guardar en la variable p todo el elemento que se llama pantalla
    r= p.innerHTML; //variable r se guarda todo lo que hay dentro de p
    res= eval(r); // Variable res evalua lo que hay en r "2+2" = 4
    p.innerHTML = res;//acá está el div de la pantalla , va a escribir lo que hay en res
}
function borrar(){
    document.querySelector('.pantalla').innerHTML="";
}

function borraruno(){
    p=document.querySelector('.pantalla'); //variable p será todo lo que hay en pantalla
    valores = p.innerHTML; //Variable que guarda lo que hay dentro de p
    t=valores.length;//tamaño de valores y lo convierte en un arreglo

    borrar();

    for(i=0; i<t-1;i++){
        p.innerHTML+=valores[i];
    }
}