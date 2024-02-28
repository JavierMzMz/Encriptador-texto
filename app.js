function encriptar() {
    let texto_usuario = document.querySelector('.input-texto').value;
    let texto_encriptado = '';
    if (texto_usuario === "" || texto_usuario.length === 0) {
        swal("Error","El mensaje esta vacio.","error");
    }else{
        if(verificar(texto_usuario) === false){
            for (var i=0; i < texto_usuario.length; i++)
                {
                    if(texto_usuario[i] == 'a'){
                        texto_encriptado += 'ai'
                    }
                    else if(texto_usuario[i] == 'e'){ 
                        texto_encriptado += 'enter'
                    }
                    else if(texto_usuario[i] == 'i'){
                        texto_encriptado += 'imes'
                    }
                    else if(texto_usuario[i] == 'o'){
                        texto_encriptado += 'ober'
                    }
                    else if(texto_usuario[i] == 'u'){
                        texto_encriptado += 'ufat'
                    }
                    else{
                        texto_encriptado += texto_usuario[i];
                    }
                }
        habilitar();
        document.querySelector('.texto-encriptado').value = texto_encriptado;
        }else{
            swal("Atención","Revise su mensaje, no debe incluir mayúsculas, acentos ni caracteres especiales.","warning");
        }
    }
}

function desencriptar() {
    let texto_usuario = document.querySelector('.input-texto').value;
    if (texto_usuario === "" || texto_usuario.length === 0) {
        swal("Error","El mensaje esta vacio.","error");
    }else{
        if (verificar(texto_usuario) === false) {
            if(texto_usuario.includes('ai')){
                texto_usuario = texto_usuario.replace(/ai/g,'a'); 
             }
             if(texto_usuario.includes('enter')){
                texto_usuario = texto_usuario.replace(/enter/g,'e'); 
             }
             if(texto_usuario.includes('imes')){
                texto_usuario = texto_usuario.replace(/imes/g,'i'); 
             }
             if(texto_usuario.includes('ober')){
                texto_usuario = texto_usuario.replace(/ober/g,'o'); 
             }
             if(texto_usuario.includes('ufat')){
                texto_usuario = texto_usuario.replace(/ufat/g,'u'); 
             }
             document.querySelector('.texto-encriptado').value = texto_usuario;
             habilitar();  
        } else {
            swal("Atención","Revise su mensaje, no debe incluir mayúsculas, acentos ni caracteres especiales.","warning");
        } 
    }  
}

function copiar() {
    var texto_copy = document.querySelector('.texto-encriptado');
    console.log(texto_copy);

    texto_copy.select();
    document.execCommand('copy');

    swal({
        icon: "success",
        title: "Copiado",
        text: "El texto se copio correctamente!",
        timer: 1500,
        buttons: false,
    })
    deshabilitar();
}

function habilitar() {
    var mostrar = document.querySelector('.box-encriptado');
    var ocultar = document.querySelector('.texto-imagen');
    var verificar = window.getComputedStyle(ocultar).display;
    
    if( verificar === 'block'){
        mostrar.style.display = 'block';
        ocultar.style.display = 'none';
    }
}

function deshabilitar(){
    var ocultar = document.querySelector('.box-encriptado');
    var mostrar = document.querySelector('.texto-imagen');
    var verificar = window.getComputedStyle(ocultar).display;
    
    document.querySelector('.input-texto').value = '';
    document.querySelector('.texto-encriptado').value = '';

    if( verificar === 'block'){
        mostrar.style.display = 'block';
        ocultar.style.display = 'none';
    }
}

function verificar(mensaje) {
    var mayus = /[A-Z0-9á-úÁ-Ú?`~@#$%^&*:;"'<>()=+]+()/.test(mensaje);
    console.log(mayus);
    return(mayus);
}