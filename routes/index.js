const fs=require("fs");
var express = require('express');
var router = express.Router();
const { isLoggedIn } = require('../lib/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gestor de contratos' });
});

router.post("/session",(req,resp)=>{
  let sess = req.body.rand;
  let file=fs.readFileSync("./session/"+sess+".json","utf-8");
  resp.setHeader("Content-type","text/json");
  resp.send(file);


});


router.post("/get-tabla-sell",(req,resp)=>{
  let j_rand = req.body.rand;
  let file=fs.readFileSync("./json/sell.json"+j_rand,"utf-8");
  resp.setHeader("Content-type","text/json");
  resp.send(file);


});
router.post("/get-tabla-cost",(req,resp)=>{
 let j_rand = req.body.rand;
  let files=fs.readFileSync("./json/cost.json"+j_rand,"utf-8");
  resp.setHeader("Content-type","text/json");
  resp.send(files);

});
router.post("/get-tabla-early",(req,resp)=>{
  let j_rand = req.body.rand;
  let files_eb=fs.readFileSync("./json/early.json"+j_rand,"utf-8");
  resp.setHeader("Content-type","text/json");
  //console.log("Que pasa aqui");
  resp.send(files_eb);

});
router.post("/get-tabla-early1",(req,resp)=>{
 let j_rand = req.body.rand;

  let files_eb1=fs.readFileSync("./json/early1.json"+j_rand,"utf-8");
  resp.setHeader("Content-type","text/json");
  resp.send(files_eb1);

});
router.post("/get-tabla-early2",(req,resp)=>{
  let j_rand = req.body.rand;
  let files_eb2=fs.readFileSync("./json/early2.json"+j_rand,"utf-8");
  resp.setHeader("Content-type","text/json");
  resp.send(files_eb2);

});
router.post("/exportacion",(req,resp)=>{
  let j_rand = req.body.rand;
  fs.unlinkSync("./json/sell.json"+j_rand);
  fs.unlinkSync("./json/cost.json"+j_rand);
  fs.unlinkSync("./json/early.json"+j_rand);
  fs.unlinkSync("./json/early1.json"+j_rand);
  fs.unlinkSync("./json/early2.json"+j_rand);
});
router.post("/new",(req,resp)=> {

  resp.setHeader("Content-type", "text/plain");
  let name = req.body.name;
  let fechas = req.body.fechas;
  let rel = req.body.releases;
  let service = req.body.service;
  let serv_name = req.body.serv_name;
  let suplements = req.body.suplements;
  let diner24 = req.body.diner24;
  let diner31 = req.body.diner31;
  let diner24_ad = req.body.diner24_ad;
  let diner31_ad = req.body.diner31_ad;
  let reduction = req.body.reduction;
  let venta = req.body.ventas;
  let ch_red=req.body.red_num;
  let ch_sup=req.body.supl_num;
  let red_sel_num=req.body.red_sel_num;
  let evento=req.body.eventos;
  let cupo=req.body.cupo;
  let mup=req.body.mups;
  let rates=req.body.rates;
  let single=req.body.singles;
  let red_3=req.body.red_3;
  let red_4=req.body.red_4;
  let red_5=req.body.red_5;
  let red_6=req.body.red_6;
  let half=req.body.map;//Para los valores de MAP
  let full=req.body.fb;//Para los valores de FB
  let plan=req.body.plan;
  let map_saber=req.body.sup_map;
  let sup_fb=req.body.sup_fb;
  let iva=req.body.iva;
  let ish=req.body.ish;
  let iss=req.body.iss;
  let description=req.body.description;


  red_3=red_3/100;
  red_4=red_4/100;
  red_5=red_5/100;
  red_6=red_6/100;
  let mups=mup/100;//Este es el monto a calcular para ventas


  let resul_sup=new  Array(5);
  let resul_red=new  Array(5);
  let resul_sel=new  Array(5);
  let total_resul_sup=0;
  //Se comprueban los checkboxes que se seleccionaron
  for(let i=0;i<20;i++){
    if(ch_sup[i]!=null){
      resul_sup[i]=ch_sup[i];
      //saber cuantas excepciones hay
      total_resul_sup++;
      //console.log(resul_sup[i]);
    }
    if(ch_red[i]!=null){
      resul_red[i]=ch_red[i];
      //console.log(resul_red);
    }

  }
  for(let i=0;i<15;i++){
    if(red_sel_num[i]!=null){
      resul_sel[i]=red_sel_num[i];
      //console.log(resul_sel[i]);
    }
  }

  //Procesar error en los Suplementos
  /* if(service.length!=(suplements.length+total_resul_sup)){
     resp.send("Error!!! Deben coincidir la cantidad de suplementos con las habitaciones. Verique si hay excepciones");
   }else{*/
  //No hay error en la puesta de datos.
  //Dividir el nombre por _
  let nombre_hotel=name;
  name=name.split(" ");
  let nombre="";
  for (let i=0;i<name.length;i++) {
    nombre+=name[i].concat("_");
  }
  let position=nombre.lastIndexOf("_");
  name=nombre.slice(0,position);

  let fs = require("fs");


  const mifecha=require("../public/javascripts/fechas") ;
  //Aqui se gestionan las fechas
  let mydate_ini= mifecha.fecha_ini(fechas,diner24_ad,map_saber,sup_fb);
  let mydate_end= mifecha.fecha_end(fechas,diner24_ad,mydate_ini.diaT,mydate_ini.meT,map_saber,sup_fb);
  let f=mydate_ini.f;
  let t=mydate_end.t;
  let fbd=mydate_ini.fbd;
  let tbd=mydate_end.tdb;
  let cont_fecha=mydate_ini.cont_fecha;
  let fech_c=mydate_ini.fech_c;
  let ffcha=mydate_ini.ffcha

  let valor=new Array(10);
  for (let i=0;i<10;i++){//Para saber cuales de los supl,cena,red,ventas estan
    valor[i]=0;
  }

  const mirelease=require("../public/javascripts/release") ;
  let my_release= mirelease.release(rel,ffcha,diner31_ad,diner24_ad);
  let my_cups=mirelease.cupos(cupo,mydate_ini.cont_fecha,ffcha,diner31_ad,diner24_ad);
  let release=my_release.releases;
  let cp=my_cups.cp;
  valor[0]=my_release.valor;
  valor[1]=my_cups.valor;

  //Si por error llega un valor nulo al final, lo elimina

    let pos=service.indexOf(null);
    if (pos>0){
      service=service.slice(0,pos);
    }


  //Recoger los impuestos y ponerles 1 sino estan puesto.
  if (iss===""){
    iss=0;
  }
  if (ish===""){
    ish=1;
  }else{
    ish=1+(ish/100);
  }
  if (iva===""){
    iva=1;
  }else{
    iva=1+(iva/100);
  }
  if(evento!=""){
    const mievent=require("../public/javascripts/events");
    let my_event=mievent.event(evento,mydate_ini.cont_fecha,service,resul_sup,ish,iss,iva,mups);
    service=my_event.service;

  }

  //Aqui se recogen los nombres de las Habitaciones
  const miserv_name=require("../public/javascripts/services") ;
  let my_ser_nam=miserv_name.nombres(serv_name);
  let name_habit=my_ser_nam.name_habit;
  //Aqui se recogen los nombres y valores de los servicios
  const miservice=require("../public/javascripts/services") ;
  let my_service= miservice.services(service,cont_fecha,diner24_ad,diner31_ad,mups,fech_c,ffcha,ish,iss,iva);
  //console.log(the_service.st);
  let st=my_service.st;
  let st_mup=my_service.st_mup;
  let st_mup_cost=my_service.st_mup_cost;
  //let plan=my_service.plan;
  //Para saber si hay FB en los planes
  let fb=2;
  if(sup_fb!=""){
    fb=3;
  }

  //Para suplementos de eventos

  let cenitas = new Array(40);
  //map=my_service.map;

  //Para tomar el valor de MAP ******verificar cuando se escribe el MAP si choca con este**********
  //half=my_service.half;

  //Para recoger los suplementos verticalmente S*
  pos=suplements.indexOf(null);
  if (pos>0){
    suplements=suplements.slice(0,pos);
  }
  const misuplements=require("../public/javascripts/suplements");
  const misingles=require("../public/javascripts/suplements");
  let my_suplements;
  let my_singles;
  let supls_cs;
  let supl_mup;
  let supls;
  let no_suple;
  if (suplements!=""){
    my_suplements=misuplements.suplements(suplements,cont_fecha,diner24_ad,diner31_ad,
        diner31,diner24,resul_sup,service,mups,fech_c,ffcha,map_saber,sup_fb,total_resul_sup,ish,iss,iva);
    supls=my_suplements.supls;
    supls_cs=my_suplements.supls_cs;
    supl_mup=my_suplements.supl_mup;
    valor[2]=my_suplements.valor;
    no_suple=my_suplements.no_suple;

  }
  if (single!=""){
    my_singles=misingles.singles(single,cont_fecha,mups,service,total_resul_sup);
    supls=my_singles.supls;
    supls_cs=my_singles.supls_cs;
    supl_mup=my_singles.supl_mup;
    valor[2]=my_singles.valor;
    no_suple=my_singles.no_suple;

  }

  if (no_suple===0){
    resp.send("Error!!! Deben coincidir la cantidad de suplementos con las habitaciones. Verique si hay excepciones");
  }
  else{



  cont = 0;
  //Para recoger las reducciones R*
  const mireduction=require("../public/javascripts/reductions");
  let my_reduction=mireduction.reduccion(reduction,mydate_ini.cont_fecha,mydate_ini.fech_c,
      ffcha,service,diner24_ad,diner31_ad,mups,diner31,diner24,map_saber,sup_fb,resul_red,resul_sel,ish,iss,iva);
  let reductions=my_reduction.reductions;
  let child_cost=my_reduction.child_cost;
  let child=my_reduction.child;
  let adult_cost=my_reduction.adult_cost;
  let adult=my_reduction.adult;
  let adult_cs=my_reduction.adult_cs;
  valor[5]=my_reduction.valor;
  //console.log(my_reduction.reduc);
  //Para habitaciones por grupos o familias
  let child_cs=child;
  let st_cs=st_mup_cost;


  if(red_3!=""){
    const miredrooms=require("../public/javascripts/red_x_rooms");
    let my_redrooms=miredrooms.redRooms(red_3,service,red_4, red_5,red_6,
        resul_sup,cont_fecha,diner31_ad,diner24_ad,diner31,diner24,st,
        supls,st_mup,supl_mup,child,child_cost,
        adult,adult_cost,mups,supls_cs,adult_cs,st_cs,child_cs,map_saber);
    child_cost=my_redrooms.child_cost;
    child=my_redrooms.child;
    adult_cost=my_redrooms.adult_cost;
    adult=my_redrooms.adult;
    supls=my_redrooms.supls;
    supl_mup=my_redrooms.supl_mup;
    st=my_redrooms.st;
    st_mup=my_redrooms.st_mup;
    st_mup_cost=my_redrooms.st_cs;
    supls_cs=my_redrooms.supls_cs;
    adult_cs=my_redrooms.adult_cs;
    child_cs=my_redrooms.child_cs;
  }


  //Para las ventas anticipadas1
//if (venta!=""){
  const miventa=require("../public/javascripts/early_bookings");
  let args=[mups,service,red_3,red_4,supls,supl_mup,supls_cs,venta,cont_fecha,
    st,st_mup_cost,st_cs,suplements,single,resul_sup,resul_red,resul_sel,
    adult_cost,adult,adult_cs,child,child_cost,child_cs,reduction,diner24_ad,diner31_ad,fech_c,ffcha];
  let my_ventas=miventa.ventas(...args);
  let ventas_sup=my_ventas.ventas_sup;
  let ventas_sup_cs=my_ventas.ventas_sup_cs;
  let ventas_red_ad=my_ventas.ventas_red_ad;
  let ventas_red_ch=my_ventas.ventas_red_ch;
  let ventas_red_ad_sell=my_ventas.ventas_red_ad_sell;
  let ventas_red_ch_sell=my_ventas.ventas_red_ch_sell;
  //let ventas_calc_event=my_ventas.ventas_calc_event;
  let ventas_st=my_ventas.ventas_st;
  let ventas_st_cs=my_ventas.ventas_st_cs;//Para los servicios
//}



  valor[6]=my_ventas.valor6;
  valor[7]=my_ventas.valor7;
  valor[8]=my_ventas.valor8;
  valor[9]=my_ventas.valor9;
  //console.log(my_ventas.ventas_calc);
  //Se recogen todos los nombres para los campos
  let fecha_ini_campo = "";
  let fecha_end_campo = "";
  let servicio_campo = new Array(10);
  let servicio_campo1 = new Array(10);
  let suplemento_campo = new Array(10);
  let suplemento_campo1 = new Array(10);
  let reduccion_campo = new Array(10);
  let reduccion_campo1 = new Array(10);

  let cena_campo = new Array(10);
  let cena_campo1 = new Array(10);
  let venta_campo = new Array(10);
  let venta_campo1 = new Array(10);
  let release_campo = new Array(10);
  let release_campo1 = "";
  let concact3 = new Array(40);

  let unir_campos = "";
  let dato = new Array(40);

  //Recoger todos los nombres de los campos por fecha

  fecha_ini_campo1 = "fecha_ini" + " date,";
  fecha_end_campo1 = "fecha_end" + " date,";
  fecha_ini_campo = "fecha_ini," ;
  fecha_end_campo = "fecha_end,";
  let campos=new Array(20);
  for (let i=0;i<6;i++){
    campos[i]=0;
  }
  if (rel != ""){
    release_campo = "releases,";
    release_campo1 = "releases" + " int(6),";
    campos[0]=1;
  }
  let cup_campo=new Array(10);
  let cup_campo1=new Array(10);
  let cup="";
  let cup1="";
  //Para los campos de cupos
  if(cupo !=""){
    for (let ii = 0; ii < cupo.length; ii++){
      cup_campo [ii] = "cupo" + ii+"," ;
      cup_campo1[ii] = "cupo" + ii + " varchar(6),";
      cup += cup_campo[ii];
      cup1 += cup_campo1[ii];
    }
    campos[1]=1;
  }
  //console.log(cup1);
  let serv = "";
  let serv1="";
  let sup = "";
  let sup1 = "";
  let event="";
  let event1="";

  //para los servicios
  for (let ii= 0; ii < service.length; ii++) {
    servicio_campo [ii] = "servicio" + ii+"," ;
    servicio_campo1[ii] = "servicio" + ii + " float(6),";
    serv += servicio_campo[ii];
    serv1 += servicio_campo1[ii];
  }

  //Para suplementos
  if (suplements != ""){
    for (let ii = 0; ii < service.length; ii++){
      suplemento_campo[ii] = "suplemento" + ii + ",";
      suplemento_campo1[ii] = "suplemento" + ii + " float(6),";
      sup += suplemento_campo[ii];
      sup1 += suplemento_campo1[ii];
      campos[2]=1;
    }
  }
  //para los eventos
 /* if (evento != ""){
    for (let ii = 0; ii < service.length; ii++){
      suplemento_campo[ii] = "evento" + ii + ",";
      suplemento_campo1[ii] = "evento" + ii + " float(6),";
      event += suplemento_campo[ii];
      event1 += suplemento_campo1[ii];
      campos[3]=1;
    }
  }*/

  let red = "";
  let red1 = "";
  //Para las reducciones
  if (reduction != ""){
    for (let ee = 0; ee < reduction.length; ee++) {
      for (let i=0;i<service.length;i++){
        reduccion_campo [ee] = "reduccion_"+ ee + "_"+i+",";
        reduccion_campo1[ee] = "reduccion_"+ ee +"_"+i+ " float(6),";
        red += reduccion_campo[ee];
        red1 += reduccion_campo1[ee];

      }

    }
    campos[5]=1;
  }

  let cen = "";
  let cen1 = "";
  let ven = "";
  let ven1 = "";
  //Para ventas anticipadas
  if (venta != ""){
    for (let ee = 0; ee < service.length; ee++) {
      venta_campo[ee] = "venta_hab" + ee + ",";
      venta_campo1[ee] = "venta_hab" + ee + " float(6),";
      ven += venta_campo[ee];
      ven1 += venta_campo1[ee];
    }
    if (suplements!=""){
      for (let ee = 0; ee < service.length; ee++) {
        venta_campo[ee] = "venta_sup" + ee + ",";
        venta_campo1[ee] = "venta_sup" + ee + " float(6),";
        ven += venta_campo[ee];
        ven1 += venta_campo1[ee];
      }
    }
    /*if (evento!=""){
      for (let ee = 0; ee < service.length; ee++) {
        venta_campo[ee] = "venta_event" + ee + ",";
        venta_campo1[ee] = "venta_event" + ee + " float(6),";
        ven += venta_campo[ee];
        ven1 += venta_campo1[ee];
      }
    }*/
    if (reduction!=""){
      for (let ee = 0; ee < service.length*reduction.length; ee++) {
        venta_campo[ee] = "venta_red" + ee + ",";
        venta_campo1[ee] = "venta_red" + ee + " float(6),";
        ven += venta_campo[ee];
        ven1 += venta_campo1[ee];

      }
    }

    campos[6]=1;
  }

  unir_campos="nombre_hotel,"+fecha_ini_campo+fecha_end_campo+serv;
  let create = fecha_ini_campo1 + fecha_end_campo1 + serv1 ;
  if(campos[0]===1){
    create+=release_campo1;
    unir_campos+=release_campo;
  }
  if (campos[1]===1){
    create+=cup1;
    unir_campos+=cup;

  }
  if (campos[2]===1){
    create+=sup1;
    unir_campos+=sup;
  }
  /*if (campos[3]===1){
    create+=event1;
    unir_campos+=event;
  }*/
  if (campos[4]===1){
    create+=cen1;
    unir_campos+=cen;
  }
  if (campos[5]===1){
    create+=red1;
    unir_campos+=red;
  }
  if (campos[6]===1){
    create+=ven1;
    unir_campos+=ven;
  }


  position = create.lastIndexOf(",");
  create = create.slice(0, position);
  position = unir_campos.lastIndexOf(",");
  unir_campos = unir_campos.slice(0, position);

  //Para unir todos los datos

  let une=new Array(50);
  let uni="";
  let cps=new Array(10);
  recoge="";


//Para componer todos los valores segun se hayan seleccionado
  for (let i = 0; i < cont_fecha; i++){

    uni="'" + name + "'," + "'" + fbd[i] + "'" + "," + "'" + tbd[i] + "'" + "," + st[i];
    if(valor[0]===1){
      uni+=","+release[i]+"";

    }
    if (valor[1]===1){
      uni+=","+cp[i]+"";
    }
    if (valor[2]===1){
      uni+=","+supls[i]+ "";
    }
    /*if (valor[3]===1){
      uni+=","+eventos_calc[i]+ "";
    }*/
    if (valor[4]===1){
      uni+=","+cenitas[i]+ "";
    }
    if (valor[5]===1){
      uni+=","+reductions[i]+ "";
    }
    if (valor[6]===1){
      uni+=","+ventas_st[i]+ "";
    }
    if (valor[7]===1){
      uni+=","+ventas_sup[i]+ "";
    }
    if (valor[8]===1){
      uni+=","+ventas_calc_event[i]+ "";
    }
    if (valor[9]===1){
      uni+=","+ventas_red_ad[i]+ "";
    }
    une[i]=uni;

  }
//



  const dbConnection= require("../public/javascripts/connect");
  const connection = dbConnection();
  /* let sql="CREATE TABLE "+name+" (id INT AUTO_INCREMENT PRIMARY KEY,nombre_hotel varchar(100),"+create+" )";
   connection.query(sql,function (err,result) {
     if (err) {
       throw err;
     } else {
       console.log("Tabla creada");
     }
   });
   for (let i=0;i<cont_fecha;i++){
     connection.query("INSERT into "+name+" ("+unir_campos+") values ("+une[i]+") ", (error, results)=> {
       if(error)
         throw error;
       console.log("Registos ingresados",results);
     });
   }*/
    let rando=Math.floor(Math.random()*100);
    resp.send(`Datos guardados con exitos${rando}`);
    //resp.send("Datos guardados con exitos");



    let datos={nombres:[], servicios:[],habitaciones: [],seasons: [],maps:[],cena:[],mups:[],ventas:[],description:[]};
    let datos_eb={nombres:[], servicios:[],habitaciones: [],mups:[],ventas:[]};
    let datos_eb1={nombres:[], servicios:[],habitaciones: [],mups:[],ventas:[]};
    let datos_eb2={nombres:[], servicios:[],habitaciones: [],mups:[],ventas:[]};
    
    fs.writeFileSync("./json/sell.json"+rando,JSON.stringify(datos),"utf-8");
    fs.writeFileSync("./json/cost.json"+rando,JSON.stringify(datos),"utf-8");
    fs.writeFileSync("./json/early.json"+rando,JSON.stringify(datos_eb),"utf-8");
    fs.writeFileSync("./json/early1.json"+rando,JSON.stringify(datos_eb1),"utf-8");
    fs.writeFileSync("./json/early2.json"+rando,JSON.stringify(datos_eb2),"utf-8");
    //abrir el archivo

    file=fs.readFileSync("./json/sell.json"+rando,"utf-8");
    files=fs.readFileSync("./json/cost.json"+rando,"utf-8");
    files_eb=fs.readFileSync("./json/early.json"+rando,"utf-8");
    files_eb1=fs.readFileSync("./json/early1.json"+rando,"utf-8");
    files_eb2=fs.readFileSync("./json/early2.json"+rando,"utf-8");
    //convertir el archivo en arreglo
    const json_sell=JSON.parse(file);
    const json_cost=JSON.parse(files);
    const json_early=JSON.parse(files_eb);
    const json_early1=JSON.parse(files_eb1);
    const json_early2=JSON.parse(files_eb2);
    //insertar un nuevo elemento
    json_sell.nombres.push({"nombre":nombre_hotel});
    json_cost.nombres.push({"nombre":nombre_hotel});
    json_early.nombres.push({"nombre":nombre_hotel});
    json_early1.nombres.push({"nombre":nombre_hotel});
    json_early2.nombres.push({"nombre":nombre_hotel});
    //Para las temporadas
    json_sell.seasons.push({"temporadas":rates});
    json_cost.seasons.push({"temporadas":rates});
    cont=0;
    //para los nombres de las habitaciones
    for (let i=0;i<service.length;i++){

        json_sell.habitaciones.push({"habit":name_habit[i]});
        json_cost.habitaciones.push({"habit":name_habit[i]});
        json_early.habitaciones.push({"habit":name_habit[i]});
        json_early1.habitaciones.push({"habit":name_habit[i]});
        json_early2.habitaciones.push({"habit":name_habit[i]});
     // }

    }


    cont=0;
      for (let i=0;i<cont_fecha;i++){
        json_sell.servicios.push({"fecha_ini":f[i],"fecha_end":t[i],"servi":st_mup[i],"suple":supl_mup[i],"red_adult":adult[i],"red_child":child[i],"plan":plan});
        json_cost.servicios.push({"fecha_ini":f[i],"fecha_end":t[i],"servi":st[i],"suple":supls[i],"red_adult":adult_cost[i],"red_child":child_cost[i],
          "servi_sell":st_mup_cost[i],"suple_sell":supls_cs[i],"red_adult_sell":adult_cs[i],"red_child_sell":child_cs[i]});

      }
    //}
    //Para MUP
    json_cost.mups.push({"mup":mup});
    //Para las ventas anticipadas1
    let c_s=cont_fecha;//Para saber cuantas habitaiones hay
    for (let i=0;i<cont_fecha;i++){
      json_early.servicios.push({"fecha_ini":f[i],"fecha_end":t[i],"servi":ventas_st[i],"suple":ventas_sup[i],"red_adult":ventas_red_ad[i],"red_child":ventas_red_ch[i],
        "servi_sell":ventas_st_cs[i],"suple_sell":ventas_sup_cs[i],"red_adult_sell":ventas_red_ad_sell[i],"red_child_sell":ventas_red_ch_sell[i]});

      json_early1.servicios.push({"fecha_ini":f[i],"fecha_end":t[i],"servi":ventas_st[c_s+i],"suple":ventas_sup[c_s+i],"red_adult":ventas_red_ad[c_s+i],"red_child":ventas_red_ch[c_s+i],
        "servi_sell":ventas_st_cs[c_s+i],"suple_sell":ventas_sup_cs[c_s+i],"red_adult_sell":ventas_red_ad_sell[c_s+i],"red_child_sell":ventas_red_ch_sell[c_s+i]});

      json_early2.servicios.push({"fecha_ini":f[i],"fecha_end":t[i],"servi":ventas_st[(2*c_s)+i],"suple":ventas_sup[(2*c_s)+i],"red_adult":ventas_red_ad[(2*c_s)+i],"red_child":ventas_red_ch[(2*c_s)+i],
        "servi_sell":ventas_st_cs[(2*c_s)+i],"suple_sell":ventas_sup_cs[(2*c_s)+i],"red_adult_sell":ventas_red_ad_sell[(2*c_s)+i],"red_child_sell":ventas_red_ch_sell[(2*c_s)+i]});
    }

    //Para el Halfboard
    json_sell.maps.push({"map_adult":Math.round(half),"map_child":Math.round(half/2)});
    json_cost.maps.push({"map_adult":Math.round(half),"map_child":Math.round(half/2)});

    //Para las descripciones
   for (let i=0;i<description.length;i++){
      json_sell.description.push({"description":description[i]});
    }


    //Para las cenas
    if(map_saber===1){
      json_sell.cena.push({"map_adult_cena":diner31_ad*(1+mups),"map_child_cena":diner31*(1+mups)});
      json_cost.cena.push({"map_adult_cena":diner31_ad,"map_child_cena":diner31});
    }

    //guardar pelicula
    file=fs.writeFileSync("./json/sell.json"+rando,JSON.stringify(json_sell));
    files=fs.writeFileSync("./json/cost.json"+rando,JSON.stringify(json_cost));
    files_eb=fs.writeFileSync("./json/early.json"+rando,JSON.stringify(json_early));
    files_eb1=fs.writeFileSync("./json/early1.json"+rando,JSON.stringify(json_early1));
    files_eb2=fs.writeFileSync("./json/early2.json"+rando,JSON.stringify(json_early2));
  }

  //}


});

module.exports = router;
