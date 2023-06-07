
do {
    var usuario = prompt("Ingrese el nombre de usuario");
    var contraseña = prompt("Ingrese la contraseña");
    validacionDeUsuario(usuario,contraseña);
} while (validacionDeUsuario(usuario,contraseña) === false);

let cadenaDeProductos = "",precio, precio_final = 0;

do {
    let zapatillas;
    let producto = prompt(`Ingrese que producto quiere comprar \n1 - Nike Dunk $50000 \n2 - Nike Dunk High $60000 \n3 - Jordan 1 Low $65000 \n4 - Jordan 4 $55000 \n5 - Jordan 1 Mid $90000`);
    switch (producto) {
        case "1":
            zapatillas = "Nike Dunk \n"
            precio = 50000;
            break;
        case "2":
            zapatillas = "Nike Dunk High \n"
            precio = 60000;
            break;
        case "3":
            zapatillas = "Jordan 1 Low \n"
            precio = 65000;
            break;
        case "4":
            zapatillas = "Jordan 4 \n"
            precio = 55000;
            break;
        case "5":
            zapatillas = "Jordan 1 Mid \n"
            precio = 90000;
            break;
        default:
            alert("Porfavor ingrese un dato correcto");
            break;
        }
    var menu = prompt("1-Seguir comprando \n2-Ir al carrito \n3-No comprar nada");
    cadenaDeProductos += zapatillas;
    precio_final += precio;  
} while (menu === "1");

if (menu === "3") {
    alert("Muchas gracias vuelva pronto");
} else {
    cuotas(precio_final);
}


// cuotas
function cuotas(precio_final) {
    
    let cuota_correcta = false;
    do {
        let cuotas = prompt(`Ingrese la cantidad de cuotas en las que desea realizar el pago del/los productos: \n${cadenaDeProductos} \nCon un precio de $ ${precio_final} \n3 \n6 \n9 \n12`);
        switch (cuotas) {
            case "3":
                cuota_correcta = true;
                return alert(`El precio por 3 cuotas sin interes es de: $ ${(precio_final / 3)}`);
            case "6":
                cuota_correcta = true;
                return alert(`El precio por 6 cuotas es de: $ ${((precio_final + (precio_final * 10 / 100))/6)}`);
            case "9":
                cuota_correcta = true;
                return alert(`El precio por 9 es de: $ ${((precio_final + (precio_final * 20 / 100))/9)}`);
            case "12":
                cuota_correcta = true;
                return alert(`El precio por 12 es de: $ ${((precio_final + (precio_final * 30 / 100))/12)}`);
            default:
                break;
        }  
    } while (cuota_correcta === false);
    
}

// validacion de usario
function validacionDeUsuario(usuario, contraseña) {
    if (usuario === "" || contraseña === "") {
        alert("Ingrese datos correctos");
        return false;
    } else {
        if (contraseña.length <= 7) {
            alert("La contraseña tiene menos de 8 digitos");
            return false;
        } else {
            alert(`Bienvenido ${usuario}`);
            return true;
        }   
    }
}