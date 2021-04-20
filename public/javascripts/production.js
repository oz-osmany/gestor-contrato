let ocultar=document.getElementById("tabla_sell");
ocultar.style.display="none";
let ocultar_cost=document.getElementById("tabla_cost");
ocultar_cost.style.display="none";
let ocultar_eb1=document.getElementById("tabla_eb1");
ocultar_eb1.style.display="none";
let ocultar_eb2=document.getElementById("tabla_eb2");
ocultar_eb2.style.display="none";
let ocultar_eb3=document.getElementById("tabla_eb3");
ocultar_eb3.style.display="none";
//Para las fechas



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
for (let i=0;i<15;i++) {
    todos[i] = document.createElement("input");
    todos[i].setAttribute("type", "checkbox");
    todos[i].setAttribute("id","ch_s"+i);
    todos[i].setAttribute("class","ch_exception");
    supl.appendChild(todos[i]);
}
//Se crean los checkbox para las reducciones segun los servicios

for (let i=0;i<15;i++) {
    todas[i] = document.createElement("input");
    todas[i].setAttribute("type", "checkbox");
    todas[i].setAttribute("id","ch_r"+i);
    todas[i].setAttribute("class","ch_exception");
    red.appendChild(todas[i]);
}
//Se crean los checkboxes para la seleccion de reducciones
for (let i=0;i<5;i++) {
    toditos[i] = document.createElement("input");
    toditos[i].setAttribute("type", "checkbox");
    toditos[i].setAttribute("id","ch_rs"+i);
    toditos[i].setAttribute("class","ch_exception");
    red_select.style.display="none";
    red_select.appendChild(toditos[i]);
}

//Para la exportacion
const exporta= document.querySelector("#export_cost");
exporta.addEventListener("click",()=>{
    const rand=sessionStorage.getItem('key');
    fetch("/exportacion",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({rand})
    })
        .then(resp =>resp.text())
        .then(data =>{
            alert(data);
            // cargartabla();
        });
});
//Para el evento del boton
const submit= document.querySelector("#bSubmit");
submit.addEventListener("click",()=>{

    let comprobar=0;
    let service=new Array(5);
    let suplements=new Array(5);
    validacion();
    miFuncion(service);
    miFuncion_supl(suplements);
    function validacion(){
        let camp_nombre=document.getElementById("nombre");
        let camp_fecha=document.getElementById("fechas");
        let camp_servicio=document.getElementById("servicios");
        let ti_ch=document.getElementById("rad_ti");
        let cp_ch=document.getElementById("rad_cp");
        let fb_ch=document.getElementById("rad_fb");
        let mup=document.getElementById("mup");
        if(mup.value===""){
            alert("Debe llenar el campo "+mup.id);
        }
        if (ti_ch.checked===false && cp_ch.checked===false && fb_ch.checked===false){
            alert("Debe seleccionar uno de los planes basicos");
        }
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
    //Se toman los valores de las habitaciones

    function miFuncion(service){

        let fila=0;
        let colum=0;

        //Saber cuantas columnas hay
        for (let i=0;i<11;i++){
            if(document.getElementById("celda"+i+0).innerHTML===""){
                colum=i;
                i=11;

            }
        }

        //Para saber cuantas filas hay
        for (let i=0;i<15;i++){
            if(document.getElementById("celda"+0+i).innerHTML===""){
                fila=i;
                i=15;

            }
        }

        let c=0;

        for (let i=0;i<fila;i++){
            service[i]="";
            for (let e=0;e<colum;e++){
                service[i]+=document.getElementById("celda"+e+c).innerHTML+" ";

            }

            c++;
            let pos=service[i].lastIndexOf(" ");
            service[i]=service[i].slice(0,pos);

            pos=service[i].indexOf("\n");
            if (pos>0){
                service[i]=service[i].slice(0,pos);
            }


        }

        return service;
    }

    //Se toman los valores de los suplementos
    function miFuncion_supl(suplements){

        let fila=0;
        let colum=0;

        //Saber cuantas columnas hay
        for (let i=0;i<11;i++){
            if(document.getElementById("celda_supl"+i+0).innerHTML===""){
                colum=i;
                i=11;

            }
        }

        //Para saber cuantas filas hay
        for (let i=0;i<15;i++){
            if(document.getElementById("celda_supl"+0+i).innerHTML===""){
                fila=i;
                i=15;

            }
        }

        let c=0;

        for (let i=0;i<fila;i++){
            suplements[i]="";
            for (let e=0;e<colum;e++){
                suplements[i]+=document.getElementById("celda_supl"+e+c).innerHTML+" ";

            }

            c++;
            let pos=suplements[i].lastIndexOf(" ");
            suplements[i]=suplements[i].slice(0,pos);

            pos=suplements[i].indexOf("\n");
            if (pos>0){
                suplements[i]=suplements[i].slice(0,pos);
            }


        }

        return suplements;
    }

    let plan=" ";
    let sup_map=0;
    let sup_fb=0;

    if(comprobar===0){
        comprueba();
        function comprueba(){
            //Para recoger los suplementos
            for (let i=0;i<13;i++){
                todos[i]=document.querySelector("#ch_s"+i);
                if (todos[i].checked){
                    supl_num[i]=i;
                }
            }
            //Para reconger las reducciones segun servicios
            for (let i=0;i<13;i++){
                todas[i]=document.querySelector("#ch_r"+i);
                if (todas[i].checked){
                    red_num[i]=i;
                }
            }
            //Para recoger las reducciones
            for (let i=0;i<5;i++){
                toditos[i]=document.querySelector("#ch_rs"+i);
                if (toditos[i].checked){
                    red_sel_num[i]=i;
                }
            }

            //Saber cual plan base se selecciono
            let ti=document.getElementById("rad_ti");
            if(ti.checked===true){
                plan="TI";
            }
            let cp=document.getElementById("rad_cp");
            if(cp.checked===true){
                plan="CP";
            }
            let eb=document.getElementById("rad_eb");
            if(eb.checked===true){
                plan="EB";
            }

            //Para los planes de suplemento
            //Al seleccionarlo puede ser solo para los contratos que lo ponen y no se toman los valores o si
            let map=document.getElementById("rad_map");
            if(map.checked===true){
                sup_map=1;
            }
            let fb=document.getElementById("rad_fb");
            if(fb.checked===true){
                sup_fb=1;
            }


        }

        let name=document.querySelector("#nombre").value;
        let fechas=document.querySelector("#fechas").value;
        let releases=document.querySelector("#release").value;
        let serv_name=document.querySelector("#servicios").value;
        //let suplements=document.querySelector("#suplementos").value;
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
        let fb=document.querySelector("#fb").value;
        let rates=document.querySelector("#rates").value;
        let singles=document.querySelector("#hab_single").value;
        let red_3=document.querySelector("#red_3").value;
        let red_4=document.querySelector("#red_4").value;
        let red_5=document.querySelector("#red_5").value;
        let red_6=document.querySelector("#red_6").value;
        let iva=document.querySelector("#iva").value;
        let ish=document.querySelector("#ish").value;
        let iss=document.querySelector("#is").value;
        let description=document.querySelector("#descriptions").value;


        fechas=fechas.split("\n");
        serv_name=serv_name.split("\n");
        singles=singles.split("\n");
        //suplements=suplements.split("\n");
        //diner=diner.split("\n");
        reduction=reduction.split("\n");
        ventas=ventas.split("\n");
        /*ventas2=ventas2.split("\n");
        ventas3=ventas3.split("\n");*/
        eventos=eventos.split("\n");
        cupo=cupo.split("\n");
        description=description.split("\n")

        const calculo=sessionStorage.getItem('calculo');
        //mandar solicitud POST a new
        fetch("/new",{
            method: "POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify({name,fechas,releases,service,serv_name
                ,suplements,diner24,diner31,diner24_ad,diner31_ad,reduction,ventas,supl_num
                ,red_num,red_sel_num,eventos,cupo,mups,rates,singles
                ,red_3,red_4,red_5,red_6,map,fb,sup_map,sup_fb,plan,iva,ish,iss,description,calculo})
        })
            .then(resp =>resp.text())
            .then(data =>{
                let pos=data.indexOf("exitos");
                let dato=data.slice(0,pos+6);
                alert(dato)
               let rand=data.slice(pos+6);

               sessionStorage.setItem('key', rand);
                //alert(data);
                cargartabla();
                cargartabla_cost();
                cargartabla_earlyB();
                cargartabla_earlyB1();
                cargartabla_earlyB2();
            });
    }

});

function cargartabla(){
    const rand=sessionStorage.getItem('key');
    fetch("/get-tabla-sell",
        {method:"POST",
            headers: {"Content-type":"application/json"},
           body:JSON.stringify({rand})
        })
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
            const notes=document.querySelector("#notes");
            const descrip=document.querySelector("#descripcion");



            let et_notes="";
            let eb_notes="";

            data.cena.forEach(map_cenas=>{
                if (map_cenas.map_adult_cena){
                    et_notes=`<div>Special dinner supplement: 31st December ${map_cenas.map_adult_cena } USD per adult and ${map_cenas.map_child_cena } USD per child (in addition to halfboard supplement)</div>`;

                }
            })


            data.description.forEach(descriptions=>{

                if (descriptions.description){

                    let eb_fila=document.createElement("tr");
                    let eb1=document.createElement("td");
                    let eb_note1=document.createTextNode(descriptions.description);
                    eb1.appendChild(eb_note1);
                    eb_fila.appendChild(eb1);
                    //eb_notes=`<div>  ${descriptions.description }</div>`;
                    // descrip.innerHTML=eb1;
                    descrip.appendChild(eb_fila);
                }
                //${description.description[cont] }
            })



            notes.innerHTML=et_notes;
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

            cont=0;
            conteo=0;
            let check=0;
            let cuenta=0;
            //Para saber cuantas fechas hay
            data.servicios.forEach(servicio =>{
                cuenta++;
            });
            cont=0;


            //Para las habitaciones reducciones y suplementos
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
                    let node_temp=document.createTextNode("Summer 2021/22");
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

            //cont=0;



        });
}
function cargartabla_cost(){
    const rand=sessionStorage.getItem('key');
    fetch("/get-tabla-cost",

        {method:"POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify({rand})
        })
        .then(resp => resp.json())
        .then(data=>{

            let stay_hotel=document.querySelector("#stays_c");
            let rate_night=document.querySelector("#rate_p_night_c");
            let tipo_hab=document.querySelector("#tipo_habitacion_c");
            //let tipo_hab_v=document.querySelector("#tipo_habitacion_c");
            let datos=document.querySelector("#usd_1_c");
            //}
            let conteo=0;

            //const serv_hotel=document.querySelector("#serv_0_0");
            const nombre_hotel=document.querySelector("#name_hotel_c");
            const titulo_hotel=document.querySelector("#titulo_hotel_c");
            const rate_hotel=document.querySelector("#rate_hotel_c");
            const usd=document.querySelector("#usd_1_c");
            const half=document.querySelector("#half_c");
            const early=document.querySelector("#eb");
            const tipo_hab_eb=document.querySelector("#tipo_h_eb");


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
            //Para poner el Mup
            data.mups.forEach(mup =>{

                rate=`<div><font face="Trebuchet MS" size=5> Mup: ${mup.mup} </font></div>`;
            });
            rate_hotel.innerHTML=rate;
            //Para los nombres de las habitaciones
            data.habitaciones.forEach(habitacion =>{
                let td=document.createElement("td");
                td.setAttribute("id","stay_c"+cont);
                td.setAttribute("colspan","5");
                td.setAttribute("rowspan","3");
                td.setAttribute("align","center");
                //Para los letreros de Rates
                let td_rate=document.createElement("td");
                td_rate.setAttribute("id","rate_c"+cont);
                td_rate.setAttribute("colspan","5");
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

                let td_2dchild=document.createElement("td");
                td_2dchild.setAttribute("id","2dchild_c"+cont);
                td_2dchild.setAttribute("align","center");



                let node=document.createTextNode(habitacion.habit);
                let node_rate=document.createTextNode("Rates per night/person");
                let node_dbl=document.createTextNode("Dbl");
                let node_sgl=document.createTextNode("Sgl");
                let node_trpl=document.createTextNode("Trpl");
                let node_child=document.createTextNode("Child");
                let node_2dchild=document.createTextNode("2dChild");
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
                    td_2dchild.appendChild(node_2dchild);
                }



                stay_hotel.appendChild(td);
                rate_night.appendChild(td_rate);
                tipo_hab.appendChild(td_dbl);
                tipo_hab.appendChild(td_sgl);
                tipo_hab.appendChild(td_trpl);
                tipo_hab.appendChild(td_child);
                tipo_hab.appendChild(td_2dchild);

                /* for (let i=0;i<4;i++){
                     let td_usd=document.createElement("td");
                     let b=document.createElement("b");

                     td_usd.setAttribute("align","center");

                     td_usd.appendChild(b);
                     let node_usd=document.createTextNode("USD");
                     b.appendChild(node_usd);
                     usd.appendChild(td_usd);

                 }*/

                cont++;
            });
            cont=0;
            //Para los halfboards
            /*  for (let i=0;i<cant_serv;i++){
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
              }*/


            let crear=new Array(5);
            let crear_sell=new Array(5);
            //Para las fechas habitaciones reducciones y suplementos
            cont=0;
            conteo=0;
            let check=0;
            let cuenta=0;
            //Para saber cuantas fechas hay
            data.servicios.forEach(servicio =>{
                cuenta++;
            });
            //Aqui ser ponen los valores de los servicios
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

                /*let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);*/
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

                    let td_2dchild = document.createElement("td");
                    td_2dchild.setAttribute("id", "red_child_c" +[conteo+i]);
                    td_2dchild.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node4 = document.createTextNode(servicio.red_child[i]);
                    td_2dchild.appendChild(node4);
                    crear[cont].appendChild(td_2dchild);
                    // }*!/
                }

                conteo+=cant_serv;
                if (cont>0){
                    crear_sell[cont-1].after(crear[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }else{
                    datos.after(crear[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }



                //Para los valores de Sell
                crear_sell[cont]=document.createElement("tr");
                crear_sell[cont].setAttribute("id","fila_c_sell"+cont);
                let fech_sell=document.createElement("td");
                fech_sell.setAttribute("id","fecha_c_sell"+cont);
                let node_fi_sell=document.createTextNode("Sell");
                //let node_fe_sell=document.createTextNode(servicio.fecha_end);
                fech_sell.appendChild(node_fi_sell);
                //fech_sell.appendChild(node_fe_sell);
                crear_sell[cont].appendChild(fech_sell);

                /*let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);*/
                for (let i=0;i<cant_serv;i++) {
                    let td_hab = document.createElement("td");
                    td_hab.setAttribute("id", "hab_c_sell"+[conteo+i]);
                    td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                    let node = document.createTextNode(servicio.servi_sell[i]);
                    td_hab.appendChild(node);
                    crear_sell[cont].appendChild(td_hab);
                    //Para los suplementos
                    let td_sup = document.createElement("td");

                    td_sup.setAttribute("id", "supl_c_sell" + [conteo+i]);
                    td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple_sell[i]);
                        td_sup.appendChild(node1);
                        crear_sell[cont].appendChild(td_sup);
                    }


                    let td_adult = document.createElement("td");
                    td_adult.setAttribute("id", "red_adult_c_sell" +[conteo+i]);
                    td_adult.setAttribute("align", "center");
                    //if(servicio.red_adult!=""){

                    let node2 = document.createTextNode(servicio.red_adult_sell[i]);
                    td_adult.appendChild(node2);
                    crear_sell[cont].appendChild(td_adult);
                    //}

                    let td_child = document.createElement("td");
                    td_child.setAttribute("id", "red_child_c_sell" +[conteo+i]);
                    td_child.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node3 = document.createTextNode(servicio.red_child_sell[i]);
                    td_child.appendChild(node3);
                    crear_sell[cont].appendChild(td_child);

                    let td_2dchild = document.createElement("td");
                    td_2dchild.setAttribute("id", "red_child_c_sell" +[conteo+i]);
                    td_2dchild.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node4 = document.createTextNode(servicio.red_child_sell[i]);
                    td_2dchild.appendChild(node4);
                    crear_sell[cont].appendChild(td_2dchild);
                    // }*!/
                }
                /*conteo+=cant_serv;
                if (cont>0){
                    crear_sell[cont-1].after(crear_sell[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }else{
                    datos.after(crear_sell[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }*/


                crear[cont].after(crear_sell[cont]);
                conteo+=cant_serv;
                //Poner los las temporadas separadas Winter y Summer
                /*if (servicio.fecha_ini.includes("01-05")){
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
                }*/
                check++;
                cont++;
            });

            cont=0;



        });


}
function cargartabla_earlyB(){
    const rand=sessionStorage.getItem('key');
    fetch("/get-tabla-early",
        {method:"POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify({rand})
        })
        .then(resp => resp.json())
        .then(data=>{

            let stay_hotel=document.querySelector("#stays_eb");
            let rate_night=document.querySelector("#rate_p_night_eb");
            let tipo_hab=document.querySelector("#tipo_habitacion_eb");
            //let tipo_hab_v=document.querySelector("#tipo_habitacion_c");
            let datos=document.querySelector("#usd_1_eb");
            //}
            let conteo=0;

            //const serv_hotel=document.querySelector("#serv_0_0");
            const nombre_hotel=document.querySelector("#name_hotel_eb");
            const titulo_hotel=document.querySelector("#titulo_hotel_eb");
            const rate_hotel=document.querySelector("#rate_hotel_eb");
            const usd=document.querySelector("#usd_1_eb");
            const half=document.querySelector("#half_eb");
            const early=document.querySelector("#eb");
            const tipo_hab_eb=document.querySelector("#tipo_h_eb");


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
            //Para poner el Mup
            data.mups.forEach(mup =>{

                rate=`<div><font face="Trebuchet MS" size=5> Mup: ${mup.mup} </font></div>`;
            });
            rate_hotel.innerHTML=rate;
            //Para los nombres de las habitaciones
            data.habitaciones.forEach(habitacion =>{
                let td=document.createElement("td");
                td.setAttribute("id","stay_c"+cont);
                td.setAttribute("colspan","5");
                td.setAttribute("rowspan","3");
                td.setAttribute("align","center");
                //Para los letreros de Rates
                let td_rate=document.createElement("td");
                td_rate.setAttribute("id","rate_eb"+cont);
                td_rate.setAttribute("colspan","5");
                td_rate.setAttribute("align","center");
                //Para doble,single,triple and child
                let td_dbl=document.createElement("td");
                td_dbl.setAttribute("id","dbl_eb"+cont);
                td_dbl.setAttribute("align","center");

                let td_sgl=document.createElement("td");
                td_sgl.setAttribute("id","sgl_eb"+cont);
                td_sgl.setAttribute("align","center");

                let td_trpl=document.createElement("td");
                td_trpl.setAttribute("id","trpl_eb"+cont);
                td_trpl.setAttribute("align","center");

                let td_child=document.createElement("td");
                td_child.setAttribute("id","child_eb"+cont);
                td_child.setAttribute("align","center");

                let td_2dchild=document.createElement("td");
                td_2dchild.setAttribute("id","2dchild_eb"+cont);
                td_2dchild.setAttribute("align","center");



                let node=document.createTextNode(habitacion.habit);
                let node_rate=document.createTextNode("Rates per night/person");
                let node_dbl=document.createTextNode("Dbl");
                let node_sgl=document.createTextNode("Sgl");
                let node_trpl=document.createTextNode("Trpl");
                let node_child=document.createTextNode("Child");
                let node_2dchild=document.createTextNode("2dChild");
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
                    td_2dchild.appendChild(node_2dchild);
                }



                stay_hotel.appendChild(td);
                rate_night.appendChild(td_rate);
                tipo_hab.appendChild(td_dbl);
                tipo_hab.appendChild(td_sgl);
                tipo_hab.appendChild(td_trpl);
                tipo_hab.appendChild(td_child);
                tipo_hab.appendChild(td_2dchild);

                /* for (let i=0;i<4;i++){
                     let td_usd=document.createElement("td");
                     let b=document.createElement("b");

                     td_usd.setAttribute("align","center");

                     td_usd.appendChild(b);
                     let node_usd=document.createTextNode("USD");
                     b.appendChild(node_usd);
                     usd.appendChild(td_usd);

                 }*/

                cont++;
            });
            cont=0;
            //Para los halfboards
            /*  for (let i=0;i<cant_serv;i++){
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
              }*/


            let crear=new Array(5);
            let crear_sell=new Array(5);
            //Para las fechas habitaciones reducciones y suplementos
            cont=0;
            conteo=0;
            let check=0;
            let cuenta=0;
            //Para saber cuantas fechas hay
            data.servicios.forEach(servicio =>{
                cuenta++;
            });
            //Aqui ser ponen los valores de los servicios
            data.servicios.forEach(servicio =>{

                crear[cont]=document.createElement("tr");
                crear[cont].setAttribute("id","fila_eb"+cont);
                let fech=document.createElement("td");
                fech.setAttribute("id","fecha_eb"+cont);
                let node_fi=document.createTextNode(servicio.fecha_ini+" - ");
                let node_fe=document.createTextNode(servicio.fecha_end);
                fech.appendChild(node_fi);
                fech.appendChild(node_fe);
                crear[cont].appendChild(fech);

                /*let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);*/
                for (let i=0;i<cant_serv;i++) {
                    let td_hab = document.createElement("td");
                    td_hab.setAttribute("id", "hab_eb"+[conteo+i]);
                    td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                    let node = document.createTextNode(servicio.servi[i]);
                    td_hab.appendChild(node);
                    crear[cont].appendChild(td_hab);
                    //Para los suplementos
                    let td_sup = document.createElement("td");

                    td_sup.setAttribute("id", "supl_eb" + [conteo+i]);
                    td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple[i]);
                        td_sup.appendChild(node1);
                        crear[cont].appendChild(td_sup);
                    }


                    let td_adult = document.createElement("td");
                    td_adult.setAttribute("id", "red_adult_eb" +[conteo+i]);
                    td_adult.setAttribute("align", "center");
                    //if(servicio.red_adult!=""){

                    let node2 = document.createTextNode(servicio.red_adult[i]);
                    td_adult.appendChild(node2);
                    crear[cont].appendChild(td_adult);
                    //}

                    let td_child = document.createElement("td");
                    td_child.setAttribute("id", "red_child_eb" +[conteo+i]);
                    td_child.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node3 = document.createTextNode(servicio.red_child[i]);
                    td_child.appendChild(node3);
                    crear[cont].appendChild(td_child);

                    let td_2dchild = document.createElement("td");
                    td_2dchild.setAttribute("id", "red_child_eb" +[conteo+i]);
                    td_2dchild.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node4 = document.createTextNode(servicio.red_child[i]);
                    td_2dchild.appendChild(node4);
                    crear[cont].appendChild(td_2dchild);
                    // }*!/
                }

                conteo+=cant_serv;
                if (cont>0){
                    crear_sell[cont-1].after(crear[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }else{
                    datos.after(crear[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }



                //Para los valores de Sell
                crear_sell[cont]=document.createElement("tr");
                crear_sell[cont].setAttribute("id","fila_c_sell_eb"+cont);
                let fech_sell=document.createElement("td");
                fech_sell.setAttribute("id","fecha_c_sell_eb"+cont);
                let node_fi_sell=document.createTextNode("Sell");
                //let node_fe_sell=document.createTextNode(servicio.fecha_end);
                fech_sell.appendChild(node_fi_sell);
                //fech_sell.appendChild(node_fe_sell);
                crear_sell[cont].appendChild(fech_sell);

                /*let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);*/
                for (let i=0;i<cant_serv;i++) {
                    let td_hab = document.createElement("td");
                    td_hab.setAttribute("id", "hab_c_sell_eb"+[conteo+i]);
                    td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                    let node = document.createTextNode(servicio.servi_sell[i]);
                    td_hab.appendChild(node);
                    crear_sell[cont].appendChild(td_hab);
                    //Para los suplementos
                    let td_sup = document.createElement("td");

                    td_sup.setAttribute("id", "supl_c_sell_eb" + [conteo+i]);
                    td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple_sell[i]);
                        td_sup.appendChild(node1);
                        crear_sell[cont].appendChild(td_sup);
                    }


                    let td_adult = document.createElement("td");
                    td_adult.setAttribute("id", "red_adult_c_sell_eb" +[conteo+i]);
                    td_adult.setAttribute("align", "center");
                    //if(servicio.red_adult!=""){

                    let node2 = document.createTextNode(servicio.red_adult_sell[i]);
                    td_adult.appendChild(node2);
                    crear_sell[cont].appendChild(td_adult);
                    //}

                    let td_child = document.createElement("td");
                    td_child.setAttribute("id", "red_child_c_sell_eb" +[conteo+i]);
                    td_child.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node3 = document.createTextNode(servicio.red_child_sell[i]);
                    td_child.appendChild(node3);
                    crear_sell[cont].appendChild(td_child);

                    let td_2dchild = document.createElement("td");
                    td_2dchild.setAttribute("id", "red_child_c_sell_eb" +[conteo+i]);
                    td_2dchild.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node4 = document.createTextNode(servicio.red_child_sell[i]);
                    td_2dchild.appendChild(node4);
                    crear_sell[cont].appendChild(td_2dchild);
                    // }*!/
                }
                /*conteo+=cant_serv;
                if (cont>0){
                    crear_sell[cont-1].after(crear_sell[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }else{
                    datos.after(crear_sell[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }*/


                crear[cont].after(crear_sell[cont]);
                conteo+=cant_serv;
                //Poner los las temporadas separadas Winter y Summer
                /*if (servicio.fecha_ini.includes("01-05")){
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
                }*/
                check++;
                cont++;
            });

            cont=0;



        });


}
function cargartabla_earlyB2(){
    const rand=sessionStorage.getItem('key');
    fetch("/get-tabla-early2",
        {method:"POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify({rand})
        })
        .then(resp => resp.json())
        .then(data=>{

            let stay_hotel=document.querySelector("#stays_eb2");
            let rate_night=document.querySelector("#rate_p_night_eb2");
            let tipo_hab=document.querySelector("#tipo_habitacion_eb2");
            //let tipo_hab_v=document.querySelector("#tipo_habitacion_c");
            let datos=document.querySelector("#usd_1_eb2");
            //}
            let conteo=0;

            //const serv_hotel=document.querySelector("#serv_0_0");
            const nombre_hotel=document.querySelector("#name_hotel_eb2");
            const titulo_hotel=document.querySelector("#titulo_hotel_eb2");
            const rate_hotel=document.querySelector("#rate_hotel_eb2");
            const usd=document.querySelector("#usd_1_eb2");
            const half=document.querySelector("#half_eb2");
            const early=document.querySelector("#eb2");
            const tipo_hab_eb=document.querySelector("#tipo_h_eb2");


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
            //Para poner el Mup
            data.mups.forEach(mup =>{

                rate=`<div><font face="Trebuchet MS" size=5> Mup: ${mup.mup} </font></div>`;
            });
            rate_hotel.innerHTML=rate;
            //Para los nombres de las habitaciones
            data.habitaciones.forEach(habitacion =>{
                let td=document.createElement("td");
                td.setAttribute("id","stay_c"+cont);
                td.setAttribute("colspan","5");
                td.setAttribute("rowspan","3");
                td.setAttribute("align","center");
                //Para los letreros de Rates
                let td_rate=document.createElement("td");
                td_rate.setAttribute("id","rate_eb"+cont);
                td_rate.setAttribute("colspan","5");
                td_rate.setAttribute("align","center");
                //Para doble,single,triple and child
                let td_dbl=document.createElement("td");
                td_dbl.setAttribute("id","dbl_eb"+cont);
                td_dbl.setAttribute("align","center");

                let td_sgl=document.createElement("td");
                td_sgl.setAttribute("id","sgl_eb"+cont);
                td_sgl.setAttribute("align","center");

                let td_trpl=document.createElement("td");
                td_trpl.setAttribute("id","trpl_eb"+cont);
                td_trpl.setAttribute("align","center");

                let td_child=document.createElement("td");
                td_child.setAttribute("id","child_eb"+cont);
                td_child.setAttribute("align","center");

                let td_2dchild=document.createElement("td");
                td_2dchild.setAttribute("id","2dchild_eb"+cont);
                td_2dchild.setAttribute("align","center");



                let node=document.createTextNode(habitacion.habit);
                let node_rate=document.createTextNode("Rates per night/person");
                let node_dbl=document.createTextNode("Dbl");
                let node_sgl=document.createTextNode("Sgl");
                let node_trpl=document.createTextNode("Trpl");
                let node_child=document.createTextNode("Child");
                let node_2dchild=document.createTextNode("2dChild");
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
                    td_2dchild.appendChild(node_2dchild);
                }



                stay_hotel.appendChild(td);
                rate_night.appendChild(td_rate);
                tipo_hab.appendChild(td_dbl);
                tipo_hab.appendChild(td_sgl);
                tipo_hab.appendChild(td_trpl);
                tipo_hab.appendChild(td_child);
                tipo_hab.appendChild(td_2dchild);

                /* for (let i=0;i<4;i++){
                     let td_usd=document.createElement("td");
                     let b=document.createElement("b");

                     td_usd.setAttribute("align","center");

                     td_usd.appendChild(b);
                     let node_usd=document.createTextNode("USD");
                     b.appendChild(node_usd);
                     usd.appendChild(td_usd);

                 }*/

                cont++;
            });
            cont=0;
            //Para los halfboards
            /*  for (let i=0;i<cant_serv;i++){
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
              }*/


            let crear=new Array(5);
            let crear_sell=new Array(5);
            //Para las fechas habitaciones reducciones y suplementos
            cont=0;
            conteo=0;
            let check=0;
            let cuenta=0;
            //Para saber cuantas fechas hay
            data.servicios.forEach(servicio =>{
                cuenta++;
            });
            //Aqui ser ponen los valores de los servicios
            data.servicios.forEach(servicio =>{

                crear[cont]=document.createElement("tr");
                crear[cont].setAttribute("id","fila_eb"+cont);
                let fech=document.createElement("td");
                fech.setAttribute("id","fecha_eb"+cont);
                let node_fi=document.createTextNode(servicio.fecha_ini+" - ");
                let node_fe=document.createTextNode(servicio.fecha_end);
                fech.appendChild(node_fi);
                fech.appendChild(node_fe);
                crear[cont].appendChild(fech);

                /*let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);*/
                for (let i=0;i<cant_serv;i++) {
                    let td_hab = document.createElement("td");
                    td_hab.setAttribute("id", "hab_eb"+[conteo+i]);
                    td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                    let node = document.createTextNode(servicio.servi[i]);
                    td_hab.appendChild(node);
                    crear[cont].appendChild(td_hab);
                    //Para los suplementos
                    let td_sup = document.createElement("td");

                    td_sup.setAttribute("id", "supl_eb" + [conteo+i]);
                    td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple[i]);
                        td_sup.appendChild(node1);
                        crear[cont].appendChild(td_sup);
                    }


                    let td_adult = document.createElement("td");
                    td_adult.setAttribute("id", "red_adult_eb" +[conteo+i]);
                    td_adult.setAttribute("align", "center");
                    //if(servicio.red_adult!=""){

                    let node2 = document.createTextNode(servicio.red_adult[i]);
                    td_adult.appendChild(node2);
                    crear[cont].appendChild(td_adult);
                    //}

                    let td_child = document.createElement("td");
                    td_child.setAttribute("id", "red_child_eb" +[conteo+i]);
                    td_child.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node3 = document.createTextNode(servicio.red_child[i]);
                    td_child.appendChild(node3);
                    crear[cont].appendChild(td_child);

                    let td_2dchild = document.createElement("td");
                    td_2dchild.setAttribute("id", "red_child_eb" +[conteo+i]);
                    td_2dchild.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node4 = document.createTextNode(servicio.red_child[i]);
                    td_2dchild.appendChild(node4);
                    crear[cont].appendChild(td_2dchild);
                    // }*!/
                }

                conteo+=cant_serv;
                if (cont>0){
                    crear_sell[cont-1].after(crear[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }else{
                    datos.after(crear[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }



                //Para los valores de Sell
                crear_sell[cont]=document.createElement("tr");
                crear_sell[cont].setAttribute("id","fila_c_sell_eb"+cont);
                let fech_sell=document.createElement("td");
                fech_sell.setAttribute("id","fecha_c_sell_eb"+cont);
                let node_fi_sell=document.createTextNode("Sell");
                //let node_fe_sell=document.createTextNode(servicio.fecha_end);
                fech_sell.appendChild(node_fi_sell);
                //fech_sell.appendChild(node_fe_sell);
                crear_sell[cont].appendChild(fech_sell);

                /*let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);*/
                for (let i=0;i<cant_serv;i++) {
                    let td_hab = document.createElement("td");
                    td_hab.setAttribute("id", "hab_c_sell_eb"+[conteo+i]);
                    td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                    let node = document.createTextNode(servicio.servi_sell[i]);
                    td_hab.appendChild(node);
                    crear_sell[cont].appendChild(td_hab);
                    //Para los suplementos
                    let td_sup = document.createElement("td");

                    td_sup.setAttribute("id", "supl_c_sell_eb" + [conteo+i]);
                    td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple_sell[i]);
                        td_sup.appendChild(node1);
                        crear_sell[cont].appendChild(td_sup);
                    }


                    let td_adult = document.createElement("td");
                    td_adult.setAttribute("id", "red_adult_c_sell_eb" +[conteo+i]);
                    td_adult.setAttribute("align", "center");
                    //if(servicio.red_adult!=""){

                    let node2 = document.createTextNode(servicio.red_adult_sell[i]);
                    td_adult.appendChild(node2);
                    crear_sell[cont].appendChild(td_adult);
                    //}

                    let td_child = document.createElement("td");
                    td_child.setAttribute("id", "red_child_c_sell_eb" +[conteo+i]);
                    td_child.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node3 = document.createTextNode(servicio.red_child_sell[i]);
                    td_child.appendChild(node3);
                    crear_sell[cont].appendChild(td_child);

                    let td_2dchild = document.createElement("td");
                    td_2dchild.setAttribute("id", "red_child_c_sell_eb" +[conteo+i]);
                    td_2dchild.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node4 = document.createTextNode(servicio.red_child_sell[i]);
                    td_2dchild.appendChild(node4);
                    crear_sell[cont].appendChild(td_2dchild);
                    // }*!/
                }
                /*conteo+=cant_serv;
                if (cont>0){
                    crear_sell[cont-1].after(crear_sell[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }else{
                    datos.after(crear_sell[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }*/


                crear[cont].after(crear_sell[cont]);
                conteo+=cant_serv;
                //Poner los las temporadas separadas Winter y Summer
                /*if (servicio.fecha_ini.includes("01-05")){
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
                }*/
                check++;
                cont++;
            });

            cont=0;



        });


}
function cargartabla_earlyB1(){
    const rand=sessionStorage.getItem('key');
    fetch("/get-tabla-early1",
        {method:"POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify({rand})
        })
        .then(resp => resp.json())
        .then(data=>{

            let stay_hotel=document.querySelector("#stays_eb1");
            let rate_night=document.querySelector("#rate_p_night_eb1");
            let tipo_hab=document.querySelector("#tipo_habitacion_eb1");
            //let tipo_hab_v=document.querySelector("#tipo_habitacion_c");
            let datos=document.querySelector("#usd_1_eb1");
            //}
            let conteo=0;

            //const serv_hotel=document.querySelector("#serv_0_0");
            const nombre_hotel=document.querySelector("#name_hotel_eb1");
            const titulo_hotel=document.querySelector("#titulo_hotel_eb1");
            const rate_hotel=document.querySelector("#rate_hotel_eb1");


            let html="";
            let html1="";
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
            //Para poner el Mup
            data.mups.forEach(mup =>{

                rate=`<div><font face="Trebuchet MS" size=5> Mup: ${mup.mup} </font></div>`;
            });
            rate_hotel.innerHTML=rate;
            //Para los nombres de las habitaciones
            data.habitaciones.forEach(habitacion =>{
                let td=document.createElement("td");
                td.setAttribute("id","stay_eb1"+cont);
                td.setAttribute("colspan","5");
                td.setAttribute("rowspan","3");
                td.setAttribute("align","center");
                //Para los letreros de Rates
                let td_rate=document.createElement("td");
                td_rate.setAttribute("id","rate_eb1"+cont);
                td_rate.setAttribute("colspan","5");
                td_rate.setAttribute("align","center");
                //Para doble,single,triple and child
                let td_dbl=document.createElement("td");
                td_dbl.setAttribute("id","dbl_eb1"+cont);
                td_dbl.setAttribute("align","center");

                let td_sgl=document.createElement("td");
                td_sgl.setAttribute("id","sgl_eb1"+cont);
                td_sgl.setAttribute("align","center");

                let td_trpl=document.createElement("td");
                td_trpl.setAttribute("id","trpl_eb1"+cont);
                td_trpl.setAttribute("align","center");

                let td_child=document.createElement("td");
                td_child.setAttribute("id","child_eb1"+cont);
                td_child.setAttribute("align","center");

                let td_2dchild=document.createElement("td");
                td_2dchild.setAttribute("id","2dchild_eb1"+cont);
                td_2dchild.setAttribute("align","center");



                let node=document.createTextNode(habitacion.habit);
                let node_rate=document.createTextNode("Rates per night/person");
                let node_dbl=document.createTextNode("Dbl");
                let node_sgl=document.createTextNode("Sgl");
                let node_trpl=document.createTextNode("Trpl");
                let node_child=document.createTextNode("Child");
                let node_2dchild=document.createTextNode("2dChild");
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
                    td_2dchild.appendChild(node_2dchild);
                }



                stay_hotel.appendChild(td);
                rate_night.appendChild(td_rate);
                tipo_hab.appendChild(td_dbl);
                tipo_hab.appendChild(td_sgl);
                tipo_hab.appendChild(td_trpl);
                tipo_hab.appendChild(td_child);
                tipo_hab.appendChild(td_2dchild);

                /* for (let i=0;i<4;i++){
                     let td_usd=document.createElement("td");
                     let b=document.createElement("b");

                     td_usd.setAttribute("align","center");

                     td_usd.appendChild(b);
                     let node_usd=document.createTextNode("USD");
                     b.appendChild(node_usd);
                     usd.appendChild(td_usd);

                 }*/

                cont++;
            });
            cont=0;
            //Para los halfboards
            /*  for (let i=0;i<cant_serv;i++){
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
              }*/


            let crear=new Array(5);
            let crear_sell=new Array(5);
            //Para las fechas habitaciones reducciones y suplementos
            cont=0;
            conteo=0;
            let check=0;
            let cuenta=0;
            //Para saber cuantas fechas hay
            data.servicios.forEach(servicio =>{
                cuenta++;
            });
            //Aqui ser ponen los valores de los servicios
            data.servicios.forEach(servicio =>{

                crear[cont]=document.createElement("tr");
                crear[cont].setAttribute("id","fila_eb1"+cont);
                let fech=document.createElement("td");
                fech.setAttribute("id","fecha_eb1"+cont);
                let node_fi=document.createTextNode(servicio.fecha_ini+" - ");
                let node_fe=document.createTextNode(servicio.fecha_end);
                fech.appendChild(node_fi);
                fech.appendChild(node_fe);
                crear[cont].appendChild(fech);

                /*let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);*/
                for (let i=0;i<cant_serv;i++) {
                    let td_hab = document.createElement("td");
                    td_hab.setAttribute("id", "hab_eb1"+[conteo+i]);
                    td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                    let node = document.createTextNode(servicio.servi[i]);
                    td_hab.appendChild(node);
                    crear[cont].appendChild(td_hab);
                    //Para los suplementos
                    let td_sup = document.createElement("td");

                    td_sup.setAttribute("id", "supl_eb1" + [conteo+i]);
                    td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple[i]);
                        td_sup.appendChild(node1);
                        crear[cont].appendChild(td_sup);
                    }


                    let td_adult = document.createElement("td");
                    td_adult.setAttribute("id", "red_adult_eb1" +[conteo+i]);
                    td_adult.setAttribute("align", "center");
                    //if(servicio.red_adult!=""){

                    let node2 = document.createTextNode(servicio.red_adult[i]);
                    td_adult.appendChild(node2);
                    crear[cont].appendChild(td_adult);
                    //}

                    let td_child = document.createElement("td");
                    td_child.setAttribute("id", "red_child_eb1" +[conteo+i]);
                    td_child.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node3 = document.createTextNode(servicio.red_child[i]);
                    td_child.appendChild(node3);
                    crear[cont].appendChild(td_child);

                    let td_2dchild = document.createElement("td");
                    td_2dchild.setAttribute("id", "red_child_eb1" +[conteo+i]);
                    td_2dchild.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node4 = document.createTextNode(servicio.red_child[i]);
                    td_2dchild.appendChild(node4);
                    crear[cont].appendChild(td_2dchild);
                    // }*!/
                }

                conteo+=cant_serv;
                if (cont>0){
                    crear_sell[cont-1].after(crear[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }else{
                    datos.after(crear[cont]);
                    //crear_sell[cont].after(crear[cont]);
                }



                //Para los valores de Sell
                crear_sell[cont]=document.createElement("tr");
                crear_sell[cont].setAttribute("id","fila_c_sell_eb1"+cont);
                let fech_sell=document.createElement("td");
                fech_sell.setAttribute("id","fecha_c_sell_eb1"+cont);
                let node_fi_sell=document.createTextNode("Sell");
                //let node_fe_sell=document.createTextNode(servicio.fecha_end);
                fech_sell.appendChild(node_fi_sell);
                //fech_sell.appendChild(node_fe_sell);
                crear_sell[cont].appendChild(fech_sell);

                /*let plan=document.createElement("td");
                plan.setAttribute("align","center");
                let node_p=document.createTextNode(servicio.plan);
                plan.appendChild(node_p);
                crear[cont].appendChild(plan);*/
                for (let i=0;i<cant_serv;i++) {
                    let td_hab = document.createElement("td");
                    td_hab.setAttribute("id", "hab_c_sell_eb1"+[conteo+i]);
                    td_hab.setAttribute("align", "center");
                    if(!servicio.suple){
                        td_hab.setAttribute("colspan","3");
                    }
                    let node = document.createTextNode(servicio.servi_sell[i]);
                    td_hab.appendChild(node);
                    crear_sell[cont].appendChild(td_hab);
                    //Para los suplementos
                    let td_sup = document.createElement("td");

                    td_sup.setAttribute("id", "supl_c_sell_eb1" + [conteo+i]);
                    td_sup.setAttribute("align", "center");
                    if(servicio.suple){

                        let node1 = document.createTextNode(servicio.suple_sell[i]);
                        td_sup.appendChild(node1);
                        crear_sell[cont].appendChild(td_sup);
                    }


                    let td_adult = document.createElement("td");
                    td_adult.setAttribute("id", "red_adult_c_sell_eb1" +[conteo+i]);
                    td_adult.setAttribute("align", "center");
                    //if(servicio.red_adult!=""){

                    let node2 = document.createTextNode(servicio.red_adult_sell[i]);
                    td_adult.appendChild(node2);
                    crear_sell[cont].appendChild(td_adult);
                    //}

                    let td_child = document.createElement("td");
                    td_child.setAttribute("id", "red_child_c_sell_eb1" +[conteo+i]);
                    td_child.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node3 = document.createTextNode(servicio.red_child_sell[i]);
                    td_child.appendChild(node3);
                    crear_sell[cont].appendChild(td_child);

                    let td_2dchild = document.createElement("td");
                    td_2dchild.setAttribute("id", "red_child_c_sell_eb1" +[conteo+i]);
                    td_2dchild.setAttribute("align", "center");
                    //Para las reducciones de niños
                    // if(servicio.red_child!=""){

                    let node4 = document.createTextNode(servicio.red_child_sell[i]);
                    td_2dchild.appendChild(node4);
                    crear_sell[cont].appendChild(td_2dchild);
                    // }*!/
                }



                crear[cont].after(crear_sell[cont]);
                conteo+=cant_serv;

                check++;
                cont++;
            });

            cont=0;



        });


}
cargartabla();
cargartabla_cost();
cargartabla_earlyB();
cargartabla_earlyB1();
cargartabla_earlyB2();