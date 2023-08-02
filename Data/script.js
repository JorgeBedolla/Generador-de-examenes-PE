var alumno;
var boleta;
var temas = [0,0,0,0,0];
var preguntasUtilizadas = [0,0,0,0,0,0,0,0,0,0];
var posicionLista = -1;//Indica la posicion de la lista

const TOTALTEMAS = 3;
var contadorTemas = 0; //cuenta la posicion del arreglo temas 0 1 2 3 4
const lista_opciones = document.querySelector(".opciones");
const CajaCalificacion = document.querySelector(".calificacion");
const BotonSiguiente = document.querySelector(".sig");

var contador = 1;//cuenta el total de preguntas contestadas
const maxPreguntas = 10;//Maximo de preguntas que tendra el cuestionario
var selPregunta = 0;//selecciona la pregunta

var puntaje = 0;//calificacion del usuario
var pContestada = false;



function GenerarExamen(){
    var myFormGenerador = document.forms["generador"];
    let CajaPregunta = document.querySelector(".question");


    if(myFormGenerador["nombre"].value === "" || myFormGenerador["nombre"].value === null){
        alert("Por favor ingrese su nombre");
        return false;
    }
    else{
        alumno = myFormGenerador["nombre"].value;
    }

    
    if(myFormGenerador["boleta"].value === "" || myFormGenerador["boleta"].value === null){
        alert("Por favor ingrese su boleta(10 Digitos)");
        return false;
    }
    else{
        boleta = myFormGenerador["boleta"].value;
    }


    if(myFormGenerador["uni1"].checked === false && myFormGenerador["uni2"].checked === false && myFormGenerador["uni3"].checked === false && myFormGenerador["uni4"].checked === false &&myFormGenerador["uni5"].checked === false){
        alert("Por favor seleccione una unidad");
        return false;
    }else{
        for(let i = 1; i < 6; i++){
            if(myFormGenerador["uni"+i].checked === true){
                temas[i-1] = 1;
            }
        }

        InicializarSelector();
        generarListaPreguntas();
        //alert(preguntasUtilizadas);
        //generar examen funcion
    }
    
    CajaPregunta.classList.add("ON");
    document.getElementById("main").style.display = 'none';
    selNumeroPregunta();
    GenerarPregunta();
    return false;
}


let next_btn = document.querySelector(".sig");

next_btn.onclick = ()=>{

    if(contador < maxPreguntas){
        contador++;
        pContestada = false;
        selNumeroPregunta();
        BotonSiguiente.classList.remove("ON");
        GenerarPregunta();

    }else{
        desplegarCalificacion();

    }
    
    
}



function GenerarPregunta(){
    const preguntaTexto = document.querySelector(".texto");
    
    let que_Tag = '<span>'+contador+'. </span><span>'+ questions[selPregunta].unidad + ": " + questions[selPregunta].question +'</span>'
    let option_tag = '<div class="option"><span>'+ questions[selPregunta].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[selPregunta].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[selPregunta].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[selPregunta].options[3] +'</span></div>';
    
    preguntaTexto.innerHTML = que_Tag;
    lista_opciones.innerHTML = option_tag;

    const SelOpcion = lista_opciones.querySelectorAll(".option");


    SelOpcion[0].setAttribute("onclick","opcion_seleccionada(this)");
    SelOpcion[1].setAttribute("onclick","opcion_seleccionada(this)");
    SelOpcion[2].setAttribute("onclick","opcion_seleccionada(this)");
    SelOpcion[3].setAttribute("onclick","opcion_seleccionada(this)");


}

function opcion_seleccionada(ans){
    
    let userAns = ans.textContent;
    let correctAns = questions[selPregunta].answer;
    
    BotonSiguiente.classList.add("ON");
    
    if(userAns == correctAns){
        if(pContestada == false){
            puntaje++;
            ans.classList.add("correct");
            ans.insertAdjacentHTML('beforeend', "<img class='checkIcon' src='Data/Imagenes/tick.png' alt='check'>");
            pContestada = true;
        }else{
            alert("Ya contesto esta pregunta");
        }
        
        
    }
    else{
        ans.classList.add("incorrect");
        ans.insertAdjacentHTML('beforeend', "<img class='checkIcon' src='Data/Imagenes/cross.png' alt='check'>");
        
    }

 
    
    for(var i=0; i<5; i++){
            lista_opciones.children[i].classList.add("disabled");   
    }

    
    

}

function InicializarSelector(){

    if(temas[0]==1){
        temas[0] = 1;//desde donde empieza la unidad 1
    }

    if(temas[1] == 1){
        temas[1] = 28;//desde donde empieza unidad 2
    }

    if(temas[2] == 1){
        temas[2] = 59;//desde donde empieza unidad 3
    }

    if(temas[3] == 1){
        temas[3] = 46;//desde donde empieza la unidad 4
    }
  
    
    if(temas[4] == 1){
        temas[4] = 69;//desde donde empieza la unidad 5
    }
    
 
}


function selNumeroPregunta(){
    posicionLista++;
    selPregunta = preguntasUtilizadas[posicionLista];
}

function desplegarCalificacion(){
    let calificacion = (puntaje*10)/maxPreguntas;
    let CajaPregunta = document.querySelector(".question");
    CajaPregunta.classList.remove("ON");
    CajaCalificacion.classList.add("ON");
    let face = generateFace(calificacion);

    let textoCalificacion =  '<br><img src='+face+' alt="caraCalificacion" class="face"><br><br><p><span class="negrita">Alumno: </span>'+alumno+'<br><br><span class="negrita">Boleta: </span>'+boleta+'<br><span class="negrita" >Total de respuestas correctas: </span>'+puntaje+'<br><br><span class="calFinal">Calificación: '+calificacion+'</span><br><br></p><button onclick = "location.reload()" class="retry">Intentar de nuevo</button>';

    CajaCalificacion.innerHTML = textoCalificacion;

    
}


function generateFace(calificacion){
    let emojiCara;
    if(calificacion >= 9){
        emojiCara = "Data/Imagenes/faces/10.jpg";
        return emojiCara;
    }

    if(calificacion >= 8){
        emojiCara = "Data/Imagenes/faces/8.jpg";
        return emojiCara;
    }

    if(calificacion >= 7){
        emojiCara = "Data/Imagenes/faces/7.jpg";
        return emojiCara;
    }

    if(calificacion >= 5){
        emojiCara = "Data/Imagenes/faces/5.jpg";
        return emojiCara;
    }

    if(calificacion < 5){
        emojiCara = "Data/Imagenes/faces/4.jpg";
        return emojiCara;
    }

}

function GenerarNumeroRango(min, max, i) {
    var numeroGenerado = Math.round(Math.random() * (max - min) + min);

    
    while(1){

        if(preguntasUtilizadas.includes(numeroGenerado)){
            numeroGenerado = Math.round( Math.random() * (max - min) + min);
        }else{
            preguntasUtilizadas[i] = numeroGenerado;
            break;
        }
    }
    
    


  }

function generarListaPreguntas(){
    for(var i = 0 ; i< 10 ; i++){

         while(1){
            contadorTemas++;
            if (contadorTemas == 5){
                contadorTemas = 0;
            }
    
            if(temas[contadorTemas] != 0){
                break;
            } 
        }

        switch(temas[contadorTemas]){
            case 1://unidad 1
                GenerarNumeroRango(1,28,i);
                break;
            case 28://unidad 2
                GenerarNumeroRango(29,46,i);
                break;
            case 59://unidad 3
                GenerarNumeroRango(60,69,i);
                break;
            case 46://unidad 4
                GenerarNumeroRango(47,59,i);
                break;
            case 69://unidad 5
                GenerarNumeroRango(70,79,i);
                break;
            default:
                break;
        }

    }
   
   

}