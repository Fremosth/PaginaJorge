function go(){
    if(document.form.password.value == 'jorge' && document.form.login.value == 'jorge@gmail.com'){
        document.form.submit();
    }
    else{
        alert("Nombre de usuario y Contraseña incorrectos");
    }
}