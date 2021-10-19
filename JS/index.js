
let
acumulador =``,
i=0,
n=0;

//---------------------Creo la base de datos---------------------------------


const carrito = [];

//TODO: Colocar filtro para producto

//-------------------------Generar las Cards---------------------------------


let cant= baseDeDatos.length;

baseDeDatos.forEach((zapato) => {
cant--
if( `${zapato.stock}`  >= 1 ){
    if(n == 0){
        acumulador +=`<div class="carousel-item active">
        <div class="row">
        <div class="u-align-center u-container-style u-list-item u-repeater-item col-md-3 mb-3">
        <div class="u-container-layout u-similar-container u-container-layout-1">
        <img src="${zapato.img}" alt="" class="u-expanded-width u-image u-image-default u-image-1">
            <button   class="u-btn u-button-style u-palette-3-light-2 u-btn-1" onclick="pagProducto(${zapato.ID})" >INFO</button>
            <h6 style="color: white;">$ ${zapato.precio}</h6>
            <p class="u-text u-text-grey-25 u-text-2">Zapato de color ${zapato.color} con taco ${zapato.taco}</p>
        </div>
        </div>`

        n=2;
        i++;
    }
    else if(n == 1){
        acumulador += `<div class="carousel-item">
        <div class="row">
        <div class="u-align-center u-container-style u-list-item u-repeater-item col-md-3 mb-3">
        <div class="u-container-layout u-similar-container u-container-layout-1">
        <img src="${zapato.img}" alt="" class="u-expanded-width u-image u-image-default u-image-1">
        <button  class="u-btn u-button-style u-palette-3-light-2 u-btn-1"  onclick="pagProducto(${zapato.ID}) ">INFO</button>
            <h6 style="color: white;">$ ${zapato.precio}</h6>
            <p class="u-text u-text-grey-25 u-text-2">Zapato de color ${zapato.color} con taco ${zapato.taco}</p>
        </div>
        </div>`
    
      

    }else if (i<=3 && cant!=0){
        acumulador += `                                               
        <div class="u-align-center u-container-style u-list-item u-repeater-item col-md-3 mb-3">
        <div class="u-container-layout u-similar-container u-container-layout-1">
        <img src="${zapato.img}" alt="" class="u-expanded-width u-image u-image-default u-image-1">
        <button  class="u-btn u-button-style u-palette-3-light-2 u-btn-1"  onclick="pagProducto(${zapato.ID}) ">INFO</button>
            <h6 style="color: white;">$ ${zapato.precio}</h6>
            <p class="u-text u-text-grey-25 u-text-2">Zapato de color ${zapato.color} con taco ${zapato.taco}</p>
        </div>
        </div>
        `
        i++

    }else if(i>3){
        if(cant == 0){
            acumulador +=`</div>
            </div>`
        }
        else{
            acumulador +=`</div>
            </div>
            <div class="carousel-item">
            <div class="row">
            <div class="u-align-center u-container-style u-list-item u-repeater-item col-md-3 mb-3">
            <div class="u-container-layout u-similar-container u-container-layout-1">
            <img src="${zapato.img}" alt="" class="u-expanded-width u-image u-image-default u-image-1">
        <button  class="u-btn u-button-style u-palette-3-light-2 u-btn-1"  onclick="pagProducto(${zapato.ID})">INFO</button>
                <h6 style="color: white;">$ ${zapato.precio}</h6>
                <p class="u-text u-text-grey-25 u-text-2">Zapato de color ${zapato.color} con taco ${zapato.taco}</p>
            </div>
            </div>`
        }
        n=2;
        i=0;
    }
    else if(cant == 0){
        acumulador +=`
        <div class="u-align-center u-container-style u-list-item u-repeater-item col-md-3 mb-3">
        <div class="u-container-layout u-similar-container u-container-layout-1">
        <img src="${zapato.img}" alt="" class="u-expanded-width u-image u-image-default u-image-1">
        <button  class="u-btn u-button-style u-palette-3-light-2 u-btn-1"  onclick="pagProducto(${zapato.ID}) ">INFO</button>
            <h6 style="color: white;">$ ${zapato.precio}</h6>
            <p class="u-text u-text-grey-25 u-text-2">Zapato de color ${zapato.color} con taco ${zapato.taco}</p>
        </div>
            </div>
        </div>
        </div>`
    }
}
});

//----------------------Selecciono donde coloco las cards----------------------------------------

$(`#productos`).html(acumulador);




