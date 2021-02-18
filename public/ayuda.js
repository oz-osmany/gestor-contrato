//Para las fechas
const pop_fecha=document.querySelector("#id_fecha");
const pop=document.getElementById("myPopup");
let p_fecha=document.createTextNode("Las fechas deben ponerse con el formato indicado. En la primera fila solo Fecha de inicio y la segunda Fecha final. NO DEJAR FILAS EN BLANCO DESPUES DE LAS FECHAS.");

pop_fecha.addEventListener("mouseover",()=>{
   //alert("Muchas cosas que pondre aqui");
    pop.appendChild(p_fecha);
    pop.classList.toggle("show");
});

//Para las excepciones de las habitaciones
const pop_except=document.querySelector("#id_exceps");
const excep=document.getElementById("exceps");
let p_excep=document.createTextNode("Aquí se seleccionan los tipos de habitaciones que serán excepciones para los suplementos y reducciones, según el contrato.");

pop_except.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    excep.appendChild(p_excep);
    excep.classList.toggle("show");
});

//Para las habitaciones
const pop_stay=document.querySelector("#id_stay");
const stays=document.getElementById("stay");
let p_stays=document.createTextNode("Poner \"/\" después del nombre. Seleccionar nombre en un solo idioma. Dejar espacio entre \"/\" , el Plan y los números. NO DEJAR FILAS EN BLANCO DESPUES DE LOS NÚMEROS.");
pop_stay.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    stays.appendChild(p_stays);
    stays.classList.toggle("show");
});
//Para las habitaciones single
const pop_single=document.querySelector("#id_single");
const single=document.getElementById("single");
let p_single=document.createTextNode("Aquí se ponen los valores de las habitaciones \"Single\" cuando nos dan Doble y Single en el documento. Tienen que colocarse como las habitaciones.");

pop_single.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    single.appendChild(p_single);
    single.classList.toggle("show");
});
//Para las familias o grupos con descuentos
const pop_grupo=document.querySelector("#id_grupo");
const grupo=document.getElementById("grupo");
let p_grupo=document.createTextNode("Se ponen las reducciones para los grupos o familias. Recuerde marcar cual habitación tiene esta característica. Se escribe \"gr\" al final del nombre.");

pop_grupo.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    grupo.appendChild(p_grupo);
    grupo.classList.toggle("show");
});
//Para los suplementos
const pop_supl=document.querySelector("#id_supl");
const sup=document.getElementById("supl");
let p_sup=document.createTextNode("Poner los suplementos dejando espacio entre el nombre de habitacion y los valores. NO DEJAR LINEAS VACIAS DESPUES DE LOS VALORES.");

pop_supl.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    sup.appendChild(p_sup);
    sup.classList.toggle("show");
});

//Para los eventos
const pop_eventos=document.querySelector("#id_event");
const event=document.getElementById("event");
let p_event=document.createTextNode("Para las Ferias y otras poner los valores al igual que los suplementos. NO DEJAR LINEAS VACIAS DESPUES DE LOS VALORES.");

pop_eventos.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    event.appendChild(p_event);
    event.classList.toggle("show");
});

//Para las cenas
const pop_diner=document.querySelector("#id_diner");
const din=document.getElementById("diner");
let p_diner=document.createTextNode("Poner los valores de cenas obligatorias segun el contrato.");

pop_diner.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    din.appendChild(p_diner);
    din.classList.toggle("show");
});

//Para las excepciones de reducciones
const pop_redex=document.querySelector("#id_red_except");
const redex=document.getElementById("red_except");
let p_redex=document.createTextNode("Seleccionar la excepción según indica el contrato.");

pop_redex.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    redex.appendChild(p_redex);
    redex.classList.toggle("show");
});

//Para las reducciones
const pop_red=document.querySelector("#id_red");
const red=document.getElementById("red");
let p_red=document.createTextNode("Poner los valores de las reducciones, primero los enunciados y lugo los valores. NO DEJAR LINEAS VACIAS DESPUES DE LOS VALORES.");

pop_red.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    red.appendChild(p_red);
    red.classList.toggle("show");
});

//Para las ventas
const pop_venta=document.querySelector("#id_venta");
const venta=document.getElementById("venta");
let p_venta=document.createTextNode("Poner los valores y enunciados igual que las reducciones. NO DEJAR LINEAS VACIAS DESPUES DE LOS VALORES.");

pop_venta.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    venta.appendChild(p_venta);
    venta.classList.toggle("show");
});