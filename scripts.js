
//variables
let btn = document.getElementById("btnGenerar");
let proceso = document.getElementById("Proceso");
let resultado = document.getElementById("Resultado");

//funcion generar tabla
const generarTabla = () => {
    //obtencion del valor del imput
    let numero = document.getElementById("GNumero").value;
    //limpienza de la tabla en caso de entrar un nuevo numero
    proceso.innerHTML = "";
    resultado.innerHTML = "";
   
    //generador de resultados
    for (let i = 1; i < 11; i++) {
        //validacion de si es cero
        if(numero==0){
            break;
        }
        proceso.innerHTML += `<td><h4>${numero}x${i} = </h4></td>`;
        resultado.innerHTML += `<td><h4> ${numero * i}</h4></td>`;
    }

}

//evento boton
btn.addEventListener('click', generarTabla);









