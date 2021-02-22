/*let ocultar=document.getElementById("tblData");
ocultar.style.display="none";*/
let ocultar_cost=document.getElementById("tblData_cost");
ocultar_cost.style.display="none";

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

    let suplements=document.querySelector("#suplementos");
    if (check_supl.checked==true){
        suplements.disabled=false;
        suplements.setAttribute("rows" ,"20");
    }
    else {
        suplements.disabled=true;
        suplements.value="";
        suplements.setAttribute("rows" ,"1");
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
//Habilitar y deshabilitar cenas

/*const check_cena=document.querySelector("#rad_cenas");
check_cena.addEventListener("change", ()=>{

    let cenas=document.querySelector("#cenas");
    if (check_cena.checked==true){
        cenas.disabled=false;
        cenas.setAttribute("rows" ,"10");
    }
    else {
        cenas.disabled=true;
        cenas.value="";
        cenas.setAttribute("rows" ,"1");
    }

});*/

//Habilitar y deshabilitar reduccion
const check_red=document.querySelector("#rad_reduccion");
check_red.addEventListener("change", ()=>{

    let reducction=document.querySelector("#reduccion");
    if (check_red.checked==true){
        reducction.disabled=false;
        reducction.setAttribute("rows" ,"15");
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
        ventas.setAttribute("rows" ,"3");
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
        eventos.setAttribute("rows" ,"3");
    }
    else {
        eventos.disabled=true;
        eventos.value="";
        eventos.setAttribute("rows" ,"1");
    }

});


var supl=document.getElementById("suplements");
var red=document.getElementById("reductions");
var red_select=document.getElementById("red_select");
let todos=new Array(20);
let todas=new Array(20);
let toditos=new Array(20);
let supl_num=new Array(20);
let red_num=new Array(20);
let red_sel_num=new Array(15);
let cont=0;
//Se crean los checkbox para suplementos
for (let i=0;i<20;i++) {
    todos[i] = document.createElement("input");
    todos[i].setAttribute("type", "checkbox");
    todos[i].setAttribute("id","ch_s"+i);
    todos[i].setAttribute("class","ch_exception");
     supl.appendChild(todos[i]);
}
//Se crean los checkbox para las reducciones segun los servicios

for (let i=0;i<20;i++) {
    todas[i] = document.createElement("input");
    todas[i].setAttribute("type", "checkbox");
    todas[i].setAttribute("id","ch_r"+i);
    todas[i].setAttribute("class","ch_exception");
    red.appendChild(todas[i]);
}
//Se crean los checkboxes para la seleccion de reducciones
for (let i=0;i<15;i++) {
    toditos[i] = document.createElement("input");
    toditos[i].setAttribute("type", "checkbox");
    toditos[i].setAttribute("id","ch_rs"+i);
    toditos[i].setAttribute("class","ch_exception");
    red_select.style.display="none";
    red_select.appendChild(toditos[i]);
}

//Para la exportacion
/*const exporta= document.querySelector("#export_sell");
exporta.addEventListener("click",()=>{
    fetch("/exportacion",{
        method: "GET",
        headers: {"Content-type":"application/json"},

    })
        .then(resp =>resp.text())
        .then(data =>{
            alert(data);
            cargartabla();
        });
});*/
//Para el evento del boton
const submit= document.querySelector("#bSubmit");
    submit.addEventListener("click",()=>{

        let comprobar=0;
        validacion();
        function validacion(){
            let camp_nombre=document.getElementById("nombre");
            let camp_fecha=document.getElementById("fechas");
            let camp_servicio=document.getElementById("servicios");
            if(camp_nombre.value===""){
                comprobar=1;
                alert("Debe llenar el campo "+camp_nombre.id);
            }
            if(camp_fecha.value===""){
                comprobar=1;
                alert("Debe llenar el campo "+camp_fecha.id);
            }
            if(camp_servicio.value===""){
                comprobar=1;
                alert("Debe llenar el campo "+camp_servicio.id);
            }

        }

            if(comprobar===0){
                comprueba();
                function comprueba(){
                    //Para recoger los suplementos
                    for (let i=0;i<20;i++){
                        todos[i]=document.querySelector("#ch_s"+i);
                        if (todos[i].checked){
                            supl_num[i]=i;
                        }
                    }
                    //Para reconger las reducciones segun servicios
                    for (let i=0;i<20;i++){
                        todas[i]=document.querySelector("#ch_r"+i);
                        if (todas[i].checked){
                            red_num[i]=i;
                        }
                    }
                    //Para recoger las reducciones
                    for (let i=0;i<15;i++){
                        toditos[i]=document.querySelector("#ch_rs"+i);
                        if (toditos[i].checked){
                            red_sel_num[i]=i;
                        }
                    }

                }

                let name=document.querySelector("#nombre").value;
                let fechas=document.querySelector("#fechas").value;
                let releases=document.querySelector("#release").value;
                let service=document.querySelector("#servicios").value;
                let suplements=document.querySelector("#suplementos").value;
                let diner24=document.querySelector("#v24").value;
                let diner31=document.querySelector("#v31").value;
                let diner24_ad=document.querySelector("#av24").value;
                let diner31_ad=document.querySelector("#av31").value;
                let reduction=document.querySelector("#reduccion").value;
                let ventas=document.querySelector("#ventas").value;
                let eventos=document.querySelector("#eventos").value;
                let cupo=document.querySelector("#cupos").value;
                let mups=document.querySelector("#mup").value;
                let map=document.querySelector("#map").value;
                let rates=document.querySelector("#rates").value;
                let singles=document.querySelector("#hab_single").value;
                let red_3=document.querySelector("#red_3").value;
                let red_4=document.querySelector("#red_4").value;
                let red_5=document.querySelector("#red_5").value;
                let red_6=document.querySelector("#red_6").value;

                fechas=fechas.split("\n");
                service=service.split("\n");
                singles=singles.split("\n");
                suplements=suplements.split("\n");
                //diner=diner.split("\n");
                reduction=reduction.split("\n");
                ventas=ventas.split("\n");
                eventos=eventos.split("\n");
                cupo=cupo.split("\n");

                //mandar solicitud POST a new
                fetch("/new",{
                    method: "POST",
                    headers: {"Content-type":"application/json"},
                    body:JSON.stringify({name,fechas,releases,service
                        ,suplements,diner24,diner31,diner24_ad,diner31_ad,reduction,ventas,supl_num
                        ,red_num,red_sel_num,eventos,cupo,mups,rates,singles
                        ,red_3,red_4,red_5,red_6,map})
                })
                    .then(resp =>resp.text())
                    .then(data =>{
                        alert(data);
                      cargartabla();
                        cargartabla_cost();
                    });
            }

    });

function cargartabla(){
    fetch("./get-tabla-sell",
        {method:"GET"})
        .then(resp => resp.json())
        .then(data=>{

              let stay_hotel=document.querySelector("#stays");
            let rate_night=document.querySelector("#rate_p_night");
            let tipo_hab=document.querySelector("#tipo_habitacion");
            let datos=document.querySelector("#usd_1");
            //}
            let conteo=0;

            //const serv_hotel=document.querySelector("#serv_0_0");
            const nombre_hotel=document.querySelector("#name_hotel");
            const titulo_hotel=document.querySelector("#titulo_hotel");
            const rate_hotel=document.querySelector("#rate_hotel");
            const usd=document.querySelector("#usd_1");
            const half=document.querySelector("#half");

            let html="";
            let html1="";
            let fechita="";
            let cont=0;
            let cant_serv=data.servicios[0].servi.length;
            let rate="";
            //Para poner el nombre en el titulo
            data.nombres.forEach(nombre =>{
                 html=`<div>${nombre.nombre} </div>`;
                html1=`<div><font face="Trebuchet MS" size=5> ${nombre.nombre} </font></div>`;
             });
            titulo_hotel.innerHTML=html1;
            nombre_hotel.innerHTML=html;
            //Para poner la temporada
            data.seasons.forEach(season =>{

                rate=`<div><font face="Trebuchet MS" size=5> ${season.temporadas} </font></div>`;
            });
            rate_hotel.innerHTML=rate;
            //Para los nombres de las habitaciones
           data.habitaciones.forEach(habitacion =>{
               let td=document.createElement("td");
               td.setAttribute("id","stay_"+cont);
               td.setAttribute("colspan","4");
               td.setAttribute("rowspan","3");
               td.setAttribute("align","center");
                //Para los letreros de Rates
              let td_rate=document.createElement("td");
               td_rate.setAttribute("id","rate_"+cont);
               td_rate.setAttribute("colspan","4");
               td_rate.setAttribute("align","center");
                //Para doble,single,triple and child
               let td_dbl=document.createElement("td");
               td_dbl.setAttribute("id","dbl_"+cont);
               td_dbl.setAttribute("align","center");

               let td_sgl=document.createElement("td");
               td_sgl.setAttribute("id","sgl_"+cont);
               td_sgl.setAttribute("align","center");

               let td_trpl=document.createElement("td");
               td_trpl.setAttribute("id","trpl_"+cont);
               td_trpl.setAttribute("align","center");

               let td_child=document.createElement("td");
               td_child.setAttribute("id","child_"+cont);
               td_child.setAttribute("align","center");



               let node=document.createTextNode(habitacion.habit);
               let node_rate=document.createTextNode("Rates per night/person");
               let node_dbl=document.createTextNode("Dbl");
               let node_sgl=document.createTextNode("Sgl");
               let node_trpl=document.createTextNode("Trpl");
               let node_child=document.createTextNode("Child");
               let node_3=document.createTextNode("3pax");
               let node_4=document.createTextNode("4pax");
               let node_5=document.createTextNode("5pax");
               let node_6=document.createTextNode("6pax");
                if (habitacion.habit.match("gr")){
                    td.appendChild(node);
                    td_rate.appendChild(node_rate);
                    td_dbl.appendChild(node_3);
                    td_sgl.appendChild(node_4);
                    td_trpl.appendChild(node_5);
                    td_child.appendChild(node_6);
                }else {
                    td.appendChild(node);
                    td_rate.appendChild(node_rate);
                    td_dbl.appendChild(node_dbl);
                    td_sgl.appendChild(node_sgl);
                    td_trpl.appendChild(node_trpl);
                    td_child.appendChild(node_child);
                }



                stay_hotel.appendChild(td);
                rate_night.appendChild(td_rate);
                tipo_hab.appendChild(td_dbl);
               tipo_hab.appendChild(td_sgl);
               tipo_hab.appendChild(td_trpl);
               tipo_hab.appendChild(td_child);

               for (let i=0;i<4;i++){
                   let td_usd=document.createElement("td");
                   let b=document.createElement("b");

                   td_usd.setAttribute("align","center");

                   td_usd.appendChild(b);
                   let node_usd=document.createTextNode("USD");
                   b.appendChild(node_usd);
                   usd.appendChild(td_usd);

               }

                cont++;
            });
            cont=0;
            //Para los halfboards
            for (let i=0;i<cant_serv;i++){
                data.maps.forEach(map =>{
                    for (let ii=0;ii<3;ii++){
                        let td_map=document.createElement("td");
                        let node_map=document.createTextNode(map.map_adult);
                        td_map.appendChild(node_map);
                        half.appendChild(td_map);
                    }
                    let td_map=document.createElement("td");
                    let node_map=document.createTextNode(map.map_child);
                    td_map.appendChild(node_map);
                    half.appendChild(td_map);
                });
            }


           let crear=new Array(5);
            //Para las fechas habitaciones reducciones y suplementos
           cont=0;
           conteo=0;
           let check=0;
            let cuenta=0;
            //Para saber cuantas fechas hay
            data.servicios.forEach(servicio =>{
                cuenta++;
            });

           data.servicios.forEach(servicio =>{

               crear[cont]=document.createElement("tr");
               crear[cont].setAttribute("id","fila"+cont);
               let fech=document.createElement("td");
               fech.setAttribute("id","fecha_"+cont);
               let node_fi=document.createTextNode(servicio.fecha_ini+" - ");
               let node_fe=document.createTextNode(servicio.fecha_end);
               fech.appendChild(node_fi);
               fech.appendChild(node_fe);
               crear[cont].appendChild(fech);

               let plan=document.createElement("td");
               plan.setAttribute("align","center");
               let node_p=document.createTextNode(servicio.plan);
               plan.appendChild(node_p);
               crear[cont].appendChild(plan);
               for (let i=0;i<cant_serv;i++) {
                   let td_hab = document.createElement("td");
                   td_hab.setAttribute("id", "hab_"+[conteo+i]);
                   td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                   let node = document.createTextNode(servicio.servi[i]);
                   td_hab.appendChild(node);
                   crear[cont].appendChild(td_hab);
                   //Para los suplementos
                   let td_sup = document.createElement("td");

                   td_sup.setAttribute("id", "supl_" + [conteo+i]);
                   td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple[i]);
                        td_sup.appendChild(node1);
                        crear[cont].appendChild(td_sup);
                    }


                   let td_adult = document.createElement("td");
                   td_adult.setAttribute("id", "red_adult" +[conteo+i]);
                   td_adult.setAttribute("align", "center");
                    if(servicio.red_adult!=""){

                        let node2 = document.createTextNode(servicio.red_adult[i]);
                        td_adult.appendChild(node2);
                        crear[cont].appendChild(td_adult);
                    }

                   let td_child = document.createElement("td");
                   td_child.setAttribute("id", "red_child" +[conteo+i]);
                   td_child.setAttribute("align", "center");
                   //Para las reducciones de niños
                  // if(servicio.red_child!=""){

                       let node3 = document.createTextNode(servicio.red_child[i]);
                       td_child.appendChild(node3);
                       crear[cont].appendChild(td_child);
                  // }*!/



               }

               conteo+=cant_serv;
               if (cont>0){
                   crear[cont-1].after(crear[cont]);
               }else{
                   datos.after(crear[cont]);
               }

               if (servicio.fecha_ini.includes("01-05")){
                   let crea=document.createElement("tr");
                   crea.setAttribute("id","usd");
                   let temp=document.createElement("td");
                   let node_temp=document.createTextNode("Summer 2020/21");
                   let b=document.createElement("b");

                   let medio=document.createElement("td");

                   b.appendChild(node_temp);
                   temp.appendChild(b);
                   crea.appendChild(temp);
                   crea.appendChild(medio);
                   for (let i=0;i<cant_serv*4;i++){
                       let td_usd=document.createElement("td");
                       let b=document.createElement("b");

                       td_usd.setAttribute("align","center");
                       td_usd.appendChild(b);
                       let node_usd=document.createTextNode("USD");
                       b.appendChild(node_usd);
                       crea.appendChild(td_usd);


                   }
                   crear[cont-1].after(crea);
                   //crear[cont-1].after(crear[cont]);
                   check=0;
               }
               check++;
               cont++;
           });

            cont=0;



        });
}
function cargartabla_cost(){
    fetch("./get-tabla-cost",
        {method:"GET"})
        .then(resp => resp.json())
        .then(data=>{

            let stay_hotel=document.querySelector("#stays_c");
            let rate_night=document.querySelector("#rate_p_night_c");
            let tipo_hab=document.querySelector("#tipo_habitacion_c");
            let datos=document.querySelector("#usd_1_c");
            //}
            let conteo=0;

            //const serv_hotel=document.querySelector("#serv_0_0");
            const nombre_hotel=document.querySelector("#name_hotel_c");
            const titulo_hotel=document.querySelector("#titulo_hotel_c");
            const rate_hotel=document.querySelector("#rate_hotel_c");
            const usd=document.querySelector("#usd_1_c");
            const half=document.querySelector("#half_c");

            let html="";
            let html1="";
            let fechita="";
            let cont=0;
            let cant_serv=data.servicios[0].servi.length;
            let rate="";
            //Para poner el nombre en el titulo
            data.nombres.forEach(nombre =>{
                html=`<div>${nombre.nombre} </div>`;
                html1=`<div><font face="Trebuchet MS" size=5> ${nombre.nombre} </font></div>`;
            });
            titulo_hotel.innerHTML=html1;
            nombre_hotel.innerHTML=html;
            //Para poner la temporada
            data.seasons.forEach(season =>{

                rate=`<div><font face="Trebuchet MS" size=5> ${season.temporadas} </font></div>`;
            });
            rate_hotel.innerHTML=rate;
            //Para los nombres de las habitaciones
            data.habitaciones.forEach(habitacion =>{
                let td=document.createElement("td");
                td.setAttribute("id","stay_c"+cont);
                td.setAttribute("colspan","4");
                td.setAttribute("rowspan","3");
                td.setAttribute("align","center");
                //Para los letreros de Rates
                let td_rate=document.createElement("td");
                td_rate.setAttribute("id","rate_c"+cont);
                td_rate.setAttribute("colspan","4");
                td_rate.setAttribute("align","center");
                //Para doble,single,triple and child
                let td_dbl=document.createElement("td");
                td_dbl.setAttribute("id","dbl_c"+cont);
                td_dbl.setAttribute("align","center");

                let td_sgl=document.createElement("td");
                td_sgl.setAttribute("id","sgl_c"+cont);
                td_sgl.setAttribute("align","center");

                let td_trpl=document.createElement("td");
                td_trpl.setAttribute("id","trpl_c"+cont);
                td_trpl.setAttribute("align","center");

                let td_child=document.createElement("td");
                td_child.setAttribute("id","child_c"+cont);
                td_child.setAttribute("align","center");



                let node=document.createTextNode(habitacion.habit);
                let node_rate=document.createTextNode("Rates per night/person");
                let node_dbl=document.createTextNode("Dbl");
                let node_sgl=document.createTextNode("Sgl");
                let node_trpl=document.createTextNode("Trpl");
                let node_child=document.createTextNode("Child");
                let node_3=document.createTextNode("3pax");
                let node_4=document.createTextNode("4pax");
                let node_5=document.createTextNode("5pax");
                let node_6=document.createTextNode("6pax");
                if (habitacion.habit.match("gr")){
                    td.appendChild(node);
                    td_rate.appendChild(node_rate);
                    td_dbl.appendChild(node_3);
                    td_sgl.appendChild(node_4);
                    td_trpl.appendChild(node_5);
                    td_child.appendChild(node_6);
                }else {
                    td.appendChild(node);
                    td_rate.appendChild(node_rate);
                    td_dbl.appendChild(node_dbl);
                    td_sgl.appendChild(node_sgl);
                    td_trpl.appendChild(node_trpl);
                    td_child.appendChild(node_child);
                }



                stay_hotel.appendChild(td);
                rate_night.appendChild(td_rate);
                tipo_hab.appendChild(td_dbl);
                tipo_hab.appendChild(td_sgl);
                tipo_hab.appendChild(td_trpl);
                tipo_hab.appendChild(td_child);

                for (let i=0;i<4;i++){
                    let td_usd=document.createElement("td");
                    let b=document.createElement("b");

                    td_usd.setAttribute("align","center");

                    td_usd.appendChild(b);
                    let node_usd=document.createTextNode("USD");
                    b.appendChild(node_usd);
                    usd.appendChild(td_usd);

                }

                cont++;
            });
            cont=0;
            //Para los halfboards
            for (let i=0;i<cant_serv;i++){
                data.maps.forEach(map =>{
                    for (let ii=0;ii<3;ii++){
                        let td_map=document.createElement("td");
                        let node_map=document.createTextNode(map.map_adult);
                        td_map.appendChild(node_map);
                        half.appendChild(td_map);
                    }
                    let td_map=document.createElement("td");
                    let node_map=document.createTextNode(map.map_child);
                    td_map.appendChild(node_map);
                    half.appendChild(td_map);
                });
            }


            let crear=new Array(5);
            //Para las fechas habitaciones reducciones y suplementos
            cont=0;
            conteo=0;
            let check=0;
            let cuenta=0;
            //Para saber cuantas fechas hay
            data.servicios.forEach(servicio =>{
                cuenta++;
            });

            data.servicios.forEach(servicio =>{

                crear[cont]=document.createElement("tr");
                crear[cont].setAttribute("id","fila_c"+cont);
                let fech=document.createElement("td");
                fech.setAttribute("id","fecha_c"+cont);
                let node_fi=document.createTextNode(servicio.fecha_ini+" - ");
                let node_fe=document.createTextNode(servicio.fecha_end);
                fech.appendChild(node_fi);
                fech.appendChild(node_fe);
                crear[cont].appendChild(fech);

                let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);
                for (let i=0;i<cant_serv;i++) {
                    let td_hab = document.createElement("td");
                    td_hab.setAttribute("id", "hab_c"+[conteo+i]);
                    td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                    let node = document.createTextNode(servicio.servi[i]);
                    td_hab.appendChild(node);
                    crear[cont].appendChild(td_hab);
                    //Para los suplementos
                    let td_sup = document.createElement("td");

                    td_sup.setAttribute("id", "supl_c" + [conteo+i]);
                    td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple[i]);
                        td_sup.appendChild(node1);
                        crear[cont].appendChild(td_sup);
                    }


                    let td_adult = document.createElement("td");
                    td_adult.setAttribute("id", "red_adult_c" +[conteo+i]);
                    td_adult.setAttribute("align", "center");
                    //if(servicio.red_adult!=""){

                        let node2 = document.createTextNode(servicio.red_adult[i]);
                        td_adult.appendChild(node2);
                        crear[cont].appendChild(td_adult);
                    //}

                    let td_child = document.createElement("td");
                    td_child.setAttribute("id", "red_child_c" +[conteo+i]);
                    td_child.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node3 = document.createTextNode(servicio.red_child[i]);
                    td_child.appendChild(node3);
                    crear[cont].appendChild(td_child);
                    // }*!/



                }

                conteo+=cant_serv;
                if (cont>0){
                    crear[cont-1].after(crear[cont]);
                }else{
                    datos.after(crear[cont]);
                }

                if (servicio.fecha_ini.includes("01-05")){
                    let crea=document.createElement("tr");
                    crea.setAttribute("id","usd_c");
                    let temp=document.createElement("td");
                    let node_temp=document.createTextNode("Summer 2020/21");
                    let b=document.createElement("b");

                    let medio=document.createElement("td");

                    b.appendChild(node_temp);
                    temp.appendChild(b);
                    crea.appendChild(temp);
                    crea.appendChild(medio);
                    for (let i=0;i<cant_serv*4;i++){
                        let td_usd=document.createElement("td");
                        let b=document.createElement("b");

                        td_usd.setAttribute("align","center");
                        td_usd.appendChild(b);
                        let node_usd=document.createTextNode("USD");
                        b.appendChild(node_usd);
                        crea.appendChild(td_usd);


                    }
                    crear[cont-1].after(crea);
                    //crear[cont-1].after(crear[cont]);
                    check=0;
                }
                check++;
                cont++;
            });

            cont=0;



        });
}
cargartabla();
cargartabla_cost();