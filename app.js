function encriptar() {
    let texto_usuario = document.querySelector('.input-texto').value;
    let texto_encriptado = '';
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
}

function desencriptar() {
    let texto_usuario = document.querySelector('.input-texto').value;
    

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
    
}

function habilitar() {
    var elemento = document.querySelector('.box-encriptado');
    var elemento2 = document.querySelector('.texto-imagen');

    var res = window.getComputedStyle(elemento2).display;

    if( res === 'block'){
        elemento.style.display = 'block';
        elemento2.style.display = 'none';
    }
}