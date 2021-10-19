
//-------------------------Generar el HTML---------------------------------

function pagProducto (ID){
    
    let acumulador=``;

    const prodID = baseDeDatos.find(zapato => zapato.ID === ID) //Verifica si este prodcuto existe
    if(prodID != undefined){
        if(prodID.stock > 1){
        acumulador=`
        <div class="product-page-main">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <div class="md-prod-page">
                        <div class="md-prod-page-in">
                            <div class="page-preview">
                                <div class="preview">
                                    <div>
                                        <div><img src="${prodID.img}" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="description-box">
                            <div class="spe-a">
                                <h4>Especificaciones</h4>
                                <ul>
                                    <li>
                                        <div class="col-md-4" >
                                            <h5>ID</h5>
                                        </div>
                                        <div class="col-md-8">
                                            <p style="margin-top:0px;">${prodID.ID}</p>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="col-md-4">
                                            <h5>Color</h5>
                                        </div>
                                        <div class="col-md-8">
                                            <p style="margin-top:0px;">${prodID.color}</p>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="col-md-4">
                                            <h5>Taco</h5>
                                        </div>
                                        <div class="col-md-8">
                                            <p style="margin-top:0px;">${prodID.taco}</p>
                                        </div>
                                    </li>
                                    <li class="clearfix">
                                        <div class="col-md-4">
                                            <h5>Talla</h5>
                                        </div>
                                        <div class="col-md-8">
                                            <p style="margin-top:0px;">${prodID.talla}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
       
                </div>
                <div class="col-3">
                    <div class="price-box-right">
                        <h4>Precio</h4>
                        <h3>$ ${prodID.precio}</h3>
                         <label class="form-label" >Cantidad </label>
                         <input id="cantPedido" class="form-control" type="text" placeholder="" >
                        <button style="margin-top:10px;" onclick="validarstock(${prodID.stock}, )" type="button" class="btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar a Carrito</button>
                        <h5><i aria-hidden="true"></i>Stock disponible ${prodID.stock} unidades</h5>
                        <h6 id="infoStock"></h6>
                    </div>
                </div>
            </div>
        </div>
       </div>`
      
    
       $(`#pagProd`).html(acumulador);

        }

}

}


