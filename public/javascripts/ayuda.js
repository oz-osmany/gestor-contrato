
const pop_fecha=document.querySelector("#id_fecha");
const pop=document.getElementById("myPopup");
let p_fecha=document.createTextNode("Las fechas deben ponerse con el formato indicado. En la primera fila solo Fecha de inicio y la segunda Fecha final. NO DEJAR FILAS EN BLANCO DESPUES DE LAS FECHAS.");
pop_fecha.onmouseover=function (){
    pop.appendChild(p_fecha);
    pop.classList.remove("hide");
    pop.classList.add("show");
}
pop_fecha.onmouseout=function (){
    //pop.appendChild(p_fecha);
    pop.classList.remove("show");
    pop.classList.add("hide");
}
/*pop_fecha.addEventListener("mouseover",()=>{
    //alert("Muchas cosas que pondre aqui");
    pop.appendChild(p_fecha);
    pop.classList.toggle("show");
#007bff
});*/

//Para las excepciones de las habitaciones
const pop_except=document.querySelector("#id_exceps");
const excep=document.getElementById("exceps");
let p_excep=document.createTextNode("Aquí se seleccionan los tipos de habitaciones que serán excepciones para los suplementos y reducciones, según el contrato.");

pop_except.onmouseover=function (){
    excep.appendChild(p_excep);
    excep.classList.remove("hide");
    excep.classList.add("show");
}
pop_except.onmouseout=function (){
    //pop.appendChild(p_fecha);
    excep.classList.remove("show");
    excep.classList.add("hide");
}
//Para el nombre de las habitaciones
const pop_stay_n=document.querySelector("#id_stay_n");
const stays_n=document.getElementById("stay_n");
let p_stays_n=document.createTextNode("Colocar aquí los nombres de las habitaciones.");
pop_stay_n.onmouseover=function (){
    stays_n.appendChild(p_stays_n);
    stays_n.classList.remove("hide");
    stays_n.classList.add("show");
}
pop_stay_n.onmouseout=function (){
    //pop.appendChild(p_fecha);
    stays_n.classList.remove("show");
    stays_n.classList.add("hide");
}
//Para los valores de las habitaciones
const pop_stay_v=document.querySelector("#id_stay_v");
const stays_v=document.getElementById("stay_n");
let p_stays_v=document.createTextNode("Copiar y pegar aquí los valores de las habitaciones. Pueden tener \"$\" con el numero. Colocar los valores en la primera celda cuando se tienen todos los numeros o por columnas o filas según el contrato.");
pop_stay_v.onmouseover=function (){
    stays_v.appendChild(p_stays_v);
    stays_v.classList.remove("hide");
    stays_v.classList.add("show");
}
pop_stay_v.onmouseout=function (){
    //pop.appendChild(p_fecha);
    stays_v.classList.remove("show");
    stays_v.classList.add("hide");
}
//Para las habitaciones single
const pop_single=document.querySelector("#id_single");
const single=document.getElementById("single");
let p_single=document.createTextNode("Aquí se ponen los valores de las habitaciones \"Single\" cuando nos dan Doble y Single en el documento. Tienen que colocarse como las habitaciones.");

pop_single.onmouseover=function (){
    single.appendChild(p_single);
    single.classList.remove("hide");
    single.classList.add("show");
}
pop_single.onmouseout=function (){
    //pop.appendChild(p_fecha);
    single.classList.remove("show");
    single.classList.add("hide");
}
//Para las familias o grupos con descuentos
const pop_grupo=document.querySelector("#id_grupo");
const grupo=document.getElementById("grupo");
let p_grupo=document.createTextNode("Se ponen las reducciones para los grupos o familias. Recuerde marcar cual habitación tiene esta característica. Se escribe \"gr\" al final del nombre.");
pop_grupo.onmouseover=function (){
    grupo.appendChild(p_grupo);
    grupo.classList.remove("hide");
    grupo.classList.add("show");
}
pop_grupo.onmouseout=function (){
    //pop.appendChild(p_fecha);
    grupo.classList.remove("show");
    grupo.classList.add("hide");
}
//Para los suplementos
const pop_supl=document.querySelector("#id_supl");
const sup=document.getElementById("supl_ayuda");
let p_sup=document.createTextNode("Poner los valores de los suplementos. Se pueden pegar todos en la primera celda o uno a uno por columa o fila.");

pop_supl.onmouseover=function (){
    sup.appendChild(p_sup);
    sup.classList.remove("hide");
    sup.classList.add("show");
}

pop_supl.onmouseout=function (){
    //pop.appendChild(p_fecha);
    sup.classList.remove("show");
    sup.classList.add("hide");
}
//Para los eventos
const pop_eventos=document.querySelector("#id_event");
const event=document.getElementById("event");
let p_event=document.createTextNode("Copiar y pegar solo los valores para los eventos. NO DEJAR LINEAS VACIAS DESPUES DE LOS NUMEROS.");

pop_eventos.onmouseover=function (){
    event.appendChild(p_event);
    event.classList.remove("hide");
    event.classList.add("show");
}
pop_eventos.onmouseout=function (){
    //pop.appendChild(p_fecha);
    event.classList.remove("show");
    event.classList.add("hide");
}
//Para las cenas
const pop_diner=document.querySelector("#id_diner");
const din=document.getElementById("diner");
let p_diner=document.createTextNode("Seleccionar las cenas obligatorias for fecha según el contrato.");

pop_diner.onmouseover=function (){
    din.appendChild(p_diner);
    din.classList.remove("hide");
    din.classList.add("show");
}
pop_diner.onmouseout=function (){
    //pop.appendChild(p_fecha);
    din.classList.remove("show");
    din.classList.add("hide");
}
//Para las excepciones de reducciones
const pop_redex=document.querySelector("#id_red_except");
const redex=document.getElementById("red_except");
let p_redex=document.createTextNode("Seleccionar la excepción que aplica en este caso según indica el contrato. Esto hará que no se calcule para este valor.");

pop_redex.onmouseover=function (){
    redex.appendChild(p_redex);
    redex.classList.remove("hide");
    redex.classList.add("show");
}
pop_redex.onmouseout=function (){
    //pop.appendChild(p_fecha);
    redex.classList.remove("show");
    redex.classList.add("hide");
}
//Para las reducciones
const pop_red=document.querySelector("#id_red_ayuda");
const redu=document.getElementById("red_ayuda");
let p_red=document.createTextNode("Poner los valores de las reducciones, solamente los valores. NO DEJAR LINEAS VACIAS DESPUES DE LOS VALORES.");

pop_red.onmouseover=function (){
    redu.appendChild(p_red);
    redu.classList.remove("hide");
    redu.classList.add("show");
}
pop_red.onmouseout=function (){
    //pop.appendChild(p_fecha);
    redu.classList.remove("show");
    redu.classList.add("hide");
}
//Para las ventas
const pop_venta=document.querySelector("#id_venta");
const venta=document.getElementById("venta");
let p_venta=document.createTextNode("Copiar y pegar solo los valores EB según el contrato. NO DEJAR LINEAS VACIAS DESPUES DE LOS VALORES.");

pop_venta.onmouseover=function (){
    venta.appendChild(p_venta);
    venta.classList.remove("hide");
    venta.classList.add("show");
}
pop_venta.onmouseout=function (){
    //pop.appendChild(p_fecha);
    venta.classList.remove("show");
    venta.classList.add("hide");
}

//Para las Descripciones
const pop_desc=document.querySelector("#id_description");
const desc=document.getElementById("description");
let p_desc=document.createTextNode("Escribir o pegar las notas de EB u otra información conveniente. NO DEJAR LINEAS VACIAS DESPUES DE LOS VALORES.");

pop_desc.onmouseover=function (){
    desc.appendChild(p_desc);
    desc.classList.remove("hide");
    desc.classList.add("show");
}
pop_desc.onmouseout=function (){
    //pop.appendChild(p_fecha);
    desc.classList.remove("show");
    desc.classList.add("hide");
}






//Habilitar y deshabilitar Mup
const check_mup=document.querySelector("#rad_mup");

check_mup.addEventListener("change", ()=>{

    let mup=document.querySelector("#mup");
    if (check_mup.checked==true){
        mup.disabled=false;
        
    }
    else {
        mup.disabled=true;

    }

});

//Habilitar y deshabilitar MAP
const check_map=document.querySelector("#rad_map");
check_map.addEventListener("change", ()=>{

    let map=document.querySelector("#map");
    if (check_map.checked==true){
        map.disabled=false;

    }
    else {
        map.disabled=true;

    }

});
//Habilitar y deshabilitar FB
const check_fb=document.querySelector("#rad_fb");
check_fb.addEventListener("change", ()=>{

    let fb=document.querySelector("#fb");
    if (check_fb.checked==true){
        fb.disabled=false;

    }
    else {
        fb.disabled=true;

    }

});
//Habilitar y deshabilitar EB
/*const check_eb=document.querySelector("#rad_eb");
check_eb.addEventListener("change", ()=>{

    let eb=document.querySelector("#eb");
    if (check_eb.checked==true){
        eb.disabled=false;

    }
    else {
        eb.disabled=true;

    }

});*/

//Habilitar y deshabilitar habitaciones sencillas
const check_single=document.querySelector("#rad_single");
check_single.addEventListener("change", ()=>{

    let single=document.querySelector("#hab_single");
    if (check_single.checked==true){
        single.disabled=false;
        single.setAttribute("rows" ,"10");
    }
    else {
        single.disabled=true;
        single.value="";
        single.setAttribute("rows" ,"1");

    }

});
//Habilitar y deshabilitar habitaciones por grupos
const check_grupos=document.querySelector("#rad_grupos");
check_grupos.addEventListener("change", ()=>{

    let grupos=document.getElementById("todo");
    if (check_grupos.checked==true){
        grupos.style.display="block";
    }
    else {
        grupos.style.display="none";

    }

});
//Habilitar y deshabilitar suplementos
const check_supl=document.querySelector("#rad_suplementos");
check_supl.addEventListener("change", ()=>{

    let suplements=document.querySelector("#tabla_supl");
    if (check_supl.checked==true){
        suplements.style.display="block";
        //suplements.setAttribute("rows" ,"15");
    }
    else {
        suplements.style.display="none";
        //suplements.value="";
        //suplements.setAttribute("rows" ,"1");
    }

});

//Habilitar y deshabilitar cenas children
const check_cena=document.querySelector("#rad_cenas");
check_cena.addEventListener("change", ()=>{

    let cenas_ch=document.getElementById("cen_ch");
    let cenas_adult=document.getElementById("cen_adult");
    let t_adult=document.getElementById("t-adult");
    let t_ch=document.getElementById("t-ch");
    if (check_cena.checked==true){
        cenas_ch.style.display="block";
        cenas_adult.style.display="block";
        t_adult.style.display="block";
        t_ch.style.display="block";
        //cenas.setAttribute("rows" ,"10");
    }
    else {
        cenas_ch.style.display="none";
        cenas_adult.style.display="none";
        t_adult.style.display="none";
        t_ch.style.display="none";
        /*cenas.value="";
        cenas.setAttribute("rows" ,"1");*/
    }

});


//Habilitar y deshabilitar reduccion
const check_red=document.querySelector("#rad_reduccion");
check_red.addEventListener("change", ()=>{

    let reducction=document.querySelector("#reduccion");
    if (check_red.checked==true){
        reducction.disabled=false;
        reducction.setAttribute("rows" ,"5");
        red_select.style.display="block";
    }
    else {
        reducction.disabled=true;
        reducction.value="";
        reducction.setAttribute("rows" ,"1");
        red_select.style.display="none";
    }

});

//Habilitar y deshabilitar ventas
const check_venta=document.querySelector("#rad_ventas");
check_venta.addEventListener("change", ()=>{

    let ventas=document.querySelector("#ventas");
    if (check_venta.checked==true){
        ventas.disabled=false;
        ventas.setAttribute("rows" ,"4");
    }
    else {
        ventas.disabled=true;
        ventas.value="";
        ventas.setAttribute("rows" ,"1");
    }

});



//Habilitar y deshabilitar cupos
const check_cupos=document.querySelector("#rad_cupos");
check_cupos.addEventListener("change", ()=>{

    let cupos=document.querySelector("#cupos");
    if (check_cupos.checked==true){
        cupos.disabled=false;
        //cupos.setAttribute("class" ,"abre");
        cupos.setAttribute("rows" ,"10");
    }
    else {
        cupos.disabled=true;
        cupos.value="";
        //cupos.setAttribute("class" ,"cierra");
        cupos.setAttribute("rows" ,"1");
    }

});

//Habilitar y deshabilitar release
const check_release=document.querySelector("#rad_release");
check_release.addEventListener("change", ()=>{

    let relea=document.querySelector("#release");
    if (check_release.checked==true){
        relea.disabled=false;

    }
    else {
        relea.disabled=true;

    }

});

//Habilitar y deshabilitar eventos
const check_eventos=document.querySelector("#rad_suplementos_eventos");
check_eventos.addEventListener("change", ()=>{

    let eventos=document.querySelector("#eventos");
    if (check_eventos.checked==true){
        eventos.disabled=false;
        eventos.setAttribute("rows" ,"5");
    }
    else {
        eventos.disabled=true;
        eventos.value="";
        eventos.setAttribute("rows" ,"1");
    }

});
//Habilitar y deshabilitar descripciones
const check_desc=document.querySelector("#rad_description");
check_desc.addEventListener("change", ()=>{

    let desc=document.querySelector("#descriptions");
    if (check_desc.checked==true){
        desc.disabled=false;
        desc.setAttribute("rows" ,"5");
    }
    else {
        desc.disabled=true;
        desc.value="";
        desc.setAttribute("rows" ,"1");
    }

});

const rad_nom=document.querySelector("#nom_hab");
rad_nom.addEventListener("change",()=>{
    if (rad_nom.checked===true){
        let tabla=document.getElementById("tabla_hab");
        let t_area=document.getElementById("servicios");
        let n=document.getElementById("titulo-start-n");
        let v=document.getElementById("titulo-start-v");
        let sup=document.getElementById("suplements");
        let red=document.getElementById("reductions");
        let sup_l=document.getElementById("red");
        let red_l=document.getElementById("supl");
        let ex=document.getElementById("id_exceps");
        let st_n=document.getElementById("id_stay_n");
        let st_v=document.getElementById("id_stay_v");
        tabla.style.display="none";
        n.style.display="block";
        t_area.style.display="block";
        v.style.display="none";
        sup.style.display="block";
        red.style.display="block";
        red_l.style.display="block";
        sup_l.style.display="block";
        ex.style.display="block";
        st_n.style.display="block";
        st_v.style.display="none";
    }
})
const rad_val=document.querySelector("#val_hab");
rad_val.addEventListener("change",()=>{
    if (rad_val.checked===true){
        let t_area=document.getElementById("servicios");
        let tabla=document.getElementById("tabla_hab");
        let v=document.getElementById("titulo-start-v");
        let n=document.getElementById("titulo-start-n");
        let sup=document.getElementById("suplements");
        let red=document.getElementById("reductions");
        let sup_l=document.getElementById("red");
        let red_l=document.getElementById("supl");
        let ex=document.getElementById("id_exceps");
        let st_n=document.getElementById("id_stay_n");
        let st_v=document.getElementById("id_stay_v");

        t_area.style.display="none";
        tabla.style.display="block"
        n.style.display="none";
        v.style.display="block";
        sup.style.display="none";
        red.style.display="none";
        red_l.style.display="none";
        sup_l.style.display="none";
        ex.style.display="none";
        st_n.style.display="none";
        st_v.style.display="block";
    }
})

//Habilitar y deshabilitar Impuestos IVA
const check_iva=document.querySelector("#rad_iva");
check_iva.addEventListener("change", ()=>{

    let iva=document.querySelector("#iva");
    if (check_iva.checked==true){
        iva.disabled=false;

    }
    else {
        iva.disabled=true;

    }

});
//Habilitar y deshabilitar Impuestos ISH
const check_ish=document.querySelector("#rad_ish");
check_ish.addEventListener("change", ()=>{

    let ish=document.querySelector("#ish");
    if (check_ish.checked==true){
        ish.disabled=false;

    }
    else {
        ish.disabled=true;

    }

});

const check_is=document.querySelector("#rad_is");
check_is.addEventListener("change", ()=>{

    let is=document.querySelector("#is");
    if (check_is.checked==true){
        is.disabled=false;

    }
    else {
        is.disabled=true;

    }

});