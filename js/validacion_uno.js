function enviarFormulario(){
    //dialogo con texto simple 
    alert('se hace click, al boton de submit');
    //declaracion con variable e iniciación
    var nombre = document.getElementById('name').value;
    var correo = document.getElementById('mail').value;

    if(nombre.length == 0){
        alert('No hay correo escrito');
        
    }else if(correo.length == 0){
        alert('No hay correo escrito');

    }else{
        alert('Datos Correctos');
    }
    //alert (Datos correctos);
    return false;

}