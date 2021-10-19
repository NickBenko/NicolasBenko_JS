

//document.getElementById("inputNombre").addEventListener("input", validarInput);
//let valuer = document.getElementById("inputNombre").value;
function validarInput() {
    let value = document.getElementById("inputNombre").value;
    if(value.length > 2 ){
        document.getElementById("inputNombre").style.border ="5px solid green";
    }
    else{
        document.getElementById("inputNombre").style.border ="5px solid red";
    }
}



//<button id="btnProd">CLICK</button>

document.getElementById('btnEnviar').addEventListener('click',resp_btnProd);


function resp_btnProd() {
    alert("Gracias, en breve nos pondremos en contacto!");

};