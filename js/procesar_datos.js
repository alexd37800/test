function envio_datos(){

    var user= document.getElementById('username').value;
    var pass = document.getElementById('pass').value;

    if(user.length == 0 || user == "" ){
        alert("Username invalid, enter username");

    }else if (pass.length == 0 || pass==""){

    alert("Username: "+ user + ",\ Password" + pass);
    }else if (user!=="use01" && pass!=="123" ){
       
        alert("Username and Password INVALID");
        
    }else{

        alert("Welcom... \nUsername: "+ user + ", \n Pasword: "+pass);
        window.location.replace('https://siga.utng.edu.mx/')
    }

    //hacer modificaciones necesarias
    //comparar con conjunto de usuarios y contraseñas validas
    //Ejemplo:
    //Username: use01 pass: 123
    //Username: use02 pass: 345
    //Username: use03 pass: 678
    //Username: use04 pass: 890
    //Username: use05 pass: 987

    return false;
}