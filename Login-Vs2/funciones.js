function obtener(){
    email = document.querySelector('#correo').value;
    contraseña = document.querySelector('#contraseña').value;

    if (email=="cesarbg@gmail.com" && contraseña=="1234"){
        alert("Datos Correctos, Bienvenido");
    }else{
        alert("Datos Incorrectos, Intente de nuevo");
    }
}