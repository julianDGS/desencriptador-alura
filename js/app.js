'use strict';

let copiado;

const keyEncript = {
    a:'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat'
}

const keyDecript = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
}

function encriptar(){
    let texto = document.getElementById('texto').value;
    descifrar(encriptador(texto));
}

function desencriptar(){
    let texto = document.getElementById('texto').value;
    descifrar(desencriptador(texto));
}

function encriptador(texto){
    let words = String(texto).trim();
    if ((/^[a-z0-9 ]+$/).test(words)){
        return texto.replace(/[aeiou]/g, vocal => keyEncript[vocal]);
    } else {
        return "Texto no válido"
    }
}

function desencriptador(texto){
    let words = String(texto).trim();
    if ((/^[a-z0-9 ]+$/).test(words)){
        return texto.replace(/(ai|enter|imes|ober|ufat)/g, subcadena => keyDecript[subcadena]);
    } else {
        return "Texto no válido"
    }
}

function cargarResultado(resultado){
    document.getElementById('resultado').value = resultado;
    document.getElementById('resultado').hidden = false;
    document.getElementById('noData').hidden = true;
}

function onload(){
    document.getElementById('resultado').hidden = true;
}

function descifrar(funcion){
    if(funcion === 'Texto no válido'){    
        onload();
        document.getElementById('noData').hidden = false;
        document.getElementById('noData').innerHTML = `
        <div class="img py-2">
            <h7 class='invalidText'> El texto ingresado no es válido</h7><hr/>
            <img src="/css/search.png" alt="search">
            <p>El texto debe estar en minúscula y no debe contener ningún caracter especial o estar acentuado</p>
        </div>
        `;
    } else {
        cargarResultado(funcion);
    }
}

// function copiarTexto() {
//     let textoCopiado = document.querySelector("#resultado");
//     textoCopiado.select();
//     document.execCommand("copy");
//   }

  function copiarClipboard() {
    let textoCopiado = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
      copiado = true;
      aviso(copiado);
    }, () => {
      copiado = false;
      aviso(copiado);
    });
  }

  function aviso(copiado){
    const aviso = document.getElementById('aviso');
    if(copiado){
        aviso.style.visibility='visible';
        aviso.style.opacity='1';
        setTimeout(() => {
            aviso.style.visibility='hidden';
            aviso.style.opacity='0';
        }, 1700);
    } else {
        console.log('invalid data');
    }   
  }