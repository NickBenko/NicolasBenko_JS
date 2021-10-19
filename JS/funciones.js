// ----- Boton de Login  -----

function btnLogin(){
    acumulador=``;
    acumulador2=``;
    if (localStorage.getItem(`Login`) == null){
        acumulador=
        `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Login</button>`
        $(`#btnLogin`).html(acumulador);
        
        acumulador2= 
        `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Usuario:</label>
                            <input type="text" class="form-control" id="inputUsuario">
                        </div>
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Password:</label>
                            <input type="password" class="form-control" id="inputPassword">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onclick="registroNuevo(event)" type="button" class="btn btn-success">Registrarse</button>
                    <a onclick="login(event)" role="button"  class="btn btn-primary">Login</a>
                </div>
            </div>
        </div>
    </div>`

    $(`body`).append(acumulador2);

    }
    else{
        acumulador=
        `<button onclick="cerrarSesion(event)" type="button" class="btn btn-primary">Cerrar Sesion</button>`
        $(`#btnLogin`).html(acumulador);
    }
}

// ----- Login de Usuario  -----

function login (usuario,contraseña){
    usuario = $("#inputUsuario").value
    contraseña = $("#inputPassword").value
    localStorage.setItem(`Login`,`${usuario}`);
    location.reload();
}

// ----- Cerrar Sesion  -----

function cerrarSesion(){
    localStorage.removeItem(`Login`);
    location.reload();
}

// ----- Verificacion si queda stock del Producto  -----

function validarstock(stockProd,stockPedid){
    stockPedid = $("#cantPedido").val();
    console.log(stockPedid);
    if(stockProd< parseInt(stockPedid))
    {
      $("#infoStock").html("Te pasaste flaco... compra menos")
    }
    else{
        $("#infoStock").html("Excelente! en breve vamos a procesar tu compra");
    }
    }


// ----- Registrarse como Usuario  -----

function registroNuevo(usuario,contraseña){
    usuario = document.getElementById("inputUsuario").value
    contraseña = document.getElementById("inputPassword").value

    fetch("registrosJSON.json")
    .then(response => response.json())
    .then(data => {

    const txtRegistro = JSON.stringify(data);
    console.log(typeof txtRegistro);
    const baseDeRegistros = JSON.parse(txtRegistro);
    console.log(typeof baseDeRegistros);
    console.log( baseDeRegistros);
    
    const usuarioBuscado = baseDeRegistros.find(algo => algo.usuario === usuario); 
// Verifica si ese usuario ya existe consultando los datos del JSON
    if(usuarioBuscado != undefined){
        document.getElementById("exampleModalLabel").innerText = "Login - Ese usuario ya exite, ingrese otro"
    }
    else{
        document.getElementById("exampleModalLabel").innerText = "Login";
        const nuevoUsuario = new Registros(usuario,contraseña);
        baseDeRegistros.push(nuevoUsuario);
        login ();
        location.reload();
    }
})
}
/*
// ----- Filtrar Productos -----
function filtro (){
let filtro = $(".filtro").val();
console.log(filtro);
console.log("entre");
const arraySoloHombres = baseDeDatos.filter(zapato => zapato.genero =  filtro);
console.log(arraySoloHombres);
}*/