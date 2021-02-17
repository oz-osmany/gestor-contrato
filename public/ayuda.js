//Para las fechas
const pop_fecha=document.querySelector("#id_fecha");
const pop=document.getElementById("myPopup");
pop_fecha.addEventListener("click",()=>{
   //alert("Muchas cosas que pondre aqui");
    pop.classList.toggle("show");
});

//Para las excepciones de las habitaciones
const pop_except=document.querySelector("#id_exceps");
const excep=document.getElementById("exceps");
pop_except.addEventListener("click",()=>{
    //alert("Muchas cosas que pondre aqui");
    excep.classList.toggle("show");
});

//Para las habitaciones
const pop_stay=document.querySelector("#id_stay");
const stays=document.getElementById("stay");
pop_stay.addEventListener("click",()=>{
    //alert("Muchas cosas que pondre aqui");
    stays.classList.toggle("show");
});

//Para los suplementos
const pop_supl=document.querySelector("#id_supl");
const sup=document.getElementById("supl");
pop_supl.addEventListener("click",()=>{
    //alert("Muchas cosas que pondre aqui");
    sup.classList.toggle("show");
});

//Para los eventos
const pop_eventos=document.querySelector("#id_event");
const event=document.getElementById("event");
pop_eventos.addEventListener("click",()=>{
    //alert("Muchas cosas que pondre aqui");
    event.classList.toggle("show");
});

//Para las cenas
const pop_diner=document.querySelector("#id_diner");
const din=document.getElementById("diner");
pop_diner.addEventListener("click",()=>{
    //alert("Muchas cosas que pondre aqui");
    din.classList.toggle("show");
});

//Para las excepciones de reducciones
const pop_redex=document.querySelector("#id_red_except");
const redex=document.getElementById("red_except");
pop_redex.addEventListener("click",()=>{
    //alert("Muchas cosas que pondre aqui");
    redex.classList.toggle("show");
});

//Para las reducciones
const pop_red=document.querySelector("#id_red");
const red=document.getElementById("red");
pop_red.addEventListener("click",()=>{
    //alert("Muchas cosas que pondre aqui");
    red.classList.toggle("show");
});

//Para las ventas
const pop_venta=document.querySelector("#id_venta");
const venta=document.getElementById("venta");
pop_venta.addEventListener("click",()=>{
    //alert("Muchas cosas que pondre aqui");
    venta.classList.toggle("show");
});