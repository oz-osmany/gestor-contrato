const express=require("express");
const bodyParser=require("body-parser");
const compression=require("compression");
const path=require("path");
const fs=require("fs");
const pdfparse=require("pdf-parse");
//@import url(leer_archivos/node_modules/normalize.css);
const app=express();
app.use(compression());
//app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));

//router
//app.use(require("./public/index.js"));
app.use(express.static("./public"));

app.get("/",(req,resp)=>{
    resp.setHeader("Content-type","text/html");
    resp.sendFile(__dirname+"./public/index.html");
    //resp.send("Estamos en eso");
});
app.get("/get-tabla-sell",(req,resp)=>{
    let file=fs.readFileSync("sell.json","utf-8");
    resp.setHeader("Content-type","text/json");
    resp.send(file);


});
app.get("/get-tabla-cost",(req,resp)=>{
    let files=fs.readFileSync("cost.json","utf-8");
    resp.setHeader("Content-type","text/json");
    resp.send(files);

});
app.get("/exportacion",(req,resp)=>{
    fs.unlinkSync("./sell.json");
   // fs.unlinkSync("./cost.json");
});
app.post("/new",(req,resp)=> {

    resp.setHeader("Content-type", "text/plain");
    let name = req.body.name;
    let fechas = req.body.fechas;
    let rel = req.body.releases;
    let service = req.body.service;
    let suplements = req.body.suplements;
   let diner24 = req.body.diner24;
    let diner31 = req.body.diner31;
    let reduction = req.body.reduction;
    let venta = req.body.ventas;
    let ch_red=req.body.red_num;
    let ch_sup=req.body.supl_num;
    let red_sel_num=req.body.red_sel_num;
    let evento=req.body.eventos;
    let cupo=req.body.cupo;
    let mups=req.body.mups;
    let rates=req.body.rates;
    let single=req.body.singles;
    let red_3=req.body.red_3;
    let red_4=req.body.red_4;
    let red_5=req.body.red_5;
    let red_6=req.body.red_6;
    let half=req.body.map;




    red_3=red_3/100;
    red_4=red_4/100;
    red_5=red_5/100;
    red_6=red_6/100;
    mups=mups/100;//Este es el monto a calcular para ventas


    let resul_sup=new  Array(5);
    let resul_red=new  Array(5);
    let resul_sel=new  Array(5);
    //Se comprueban los checkboxes que se seleccionaron
    for(let i=0;i<20;i++){
        if(ch_sup[i]!=null){
            resul_sup[i]=ch_sup[i];
           //console.log(resul_sup[i]);
        }
        if(ch_red[i]!=null){
            resul_red[i]=ch_red[i];

        }

    }
    for(let i=0;i<15;i++){
        if(red_sel_num[i]!=null){
            resul_sel[i]=red_sel_num[i];
            //console.log(resul_sel[i]);
        }
    }


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
    let cont_fecha = 0;//Saber cuantas fechas hay
    let f = new Array(10);//Para las fechas
    //let extraer = fechas[0].slice(5);
    let piezas = fechas[0].split(" ");
    let piez= fechas[1].split(" ");
    let p="";
    let pi="";
    let fch=0;
    let ffcha=0;
    let diaT = "";
    let meT="";
    //Para extraer las fechas inicio
    for (let a = 0; a < piezas.length; a++) {
        if (piezas[a].match("/")){
          p = piezas[a].split("/");
            pi = piez[a].split("/");
        }
        if (piezas[a].match(".")){
            p = piezas[a].split(".");
            pi = piez[a].split(".");
        }
        //console.log(p);
        let an = p[2];
        let me = p[1];
        let dia = p[0];


        if(an.length===2){
            an="20"+an;
        }
        f[fch] = dia + "-" + me + "-" + an;
        if (diner24!=""){
            if (dia==="22"){
                diaT = pi[0];
                meT=pi[1];
                f[fch+1]="24-" + me + "-" +an;
                f[fch+2]="25-" + me + "-" +an;
                f[fch+3]="31-" + me + "-" +an;
                f[fch+4]="01-01-2021";
                fch+=5;
                //piezas.length+=4;
            }
            else{
                fch++;
            }
        }else{
            fch++;
        }

            cont_fecha = a;
            ffcha=a;

       ///console.log(f[a]);
    }
        if(diner24!=""){
            cont_fecha+=5;
        }else{
            cont_fecha=fch;
        }

    fch=0;
    //Para extraer las fechas final
    let t = new Array(10);//Para las fechas

    piezas = fechas[1].split(" ");
    for (let a = 0; a < piezas.length; a++) {

        if (piezas[a].match("/")){
            p = piezas[a].split("/");
        }
        if (piezas[a].match(".")){
            p = piezas[a].split(".");
        }
        //console.log(p);
        let an = p[2];
        let me = p[1];
        let dia = p[0];
        if(an.length===2){
            an="20"+an;
        }
        if (diner24!=""){
            if (dia===diaT && me===meT){
                t[fch]="23-12-2020";
                t[fch+1]="24-12-2020";
                t[fch+2]="30-12-2020";
                t[fch+3]="31-12-2020";
                t[fch+4]=diaT+"-"+meT+"-2021";
                fch+=5;
                //piezas.length+=4;
            }
            else{
                t[fch] = dia + "-" + me + "-" +an ;
                fch++;
            }
        }else{
            t[fch] = an + "-" + me + "-" + dia;
            fch++;
        }

        //console.log(t[a]);
    }

    let release = new Array(8);
    piezas = rel.split(" ");
    let valor=new Array(10);
    for (let i=0;i<10;i++){//Para saber cuales de los supl,cena,red,ventas estan
        valor[i]=0;
    }
    //Para extraer release
    if (rel != ""){
        for (let a = 0; a < piezas.length; a++) {
            release[a] = piezas[a];
            //console.log(release[a]);
        }
        valor[0]=1;
    }
    let cupos=new Array(30);
    let cp=new Array(30);

    //Para extraer los cupos
    if(cupo!=""){
        for (let h=0;h<cupo.length;h++){//Para tomar todo el arreglo despues del nombre
            if (cupo[h].match("/")){
                position=cupo[h].indexOf("/");
                cupo[h]=cupo[h].slice(position+2);

            }
        }
        for (let ii=0;ii<cont_fecha+1;ii++){
            cp[ii]="";
            for(let i=0;i<cupo.length;i++){

                cupos[ii]=cupo[i].split(" ");

                if(cupos[ii][i]==="OR"){
                    cupos[ii][i]="'OR'";
                }
                cp[ii]+=cupos[ii][i]+",";
            }
            let find=cp[ii].lastIndexOf(",");
            cp[ii]=cp[ii].slice(0,find);
            //console.log(cp[ii]);
        }
        valor[1]=1;
    }


    let cont = 0;
    let conteo = 0;
    let pto = 0;//Para recoger los valores
    let st = new Array(40);
    let name_habit=new Array(20);
    let services = new Array(20);
    let corrige = new Array(2);
    let corrige1 = new Array(2);
    let corrige2 = new Array(2);
    let plan=new Array(20);
    let plani="";

    //Para recoger los nombres de las habitaciones y el plan
    for (let i=0;i<service.length;i++){
        if (service[i].match("/")){
            position=service[i].indexOf("/");
            name_habit[i]=service[i].slice(0,position);
            service[i]=service[i].slice(position+2);

        }
        //console.log(name_habit[i]);
    }
    //Para  recoger el plan
    //Para recoger el valor de MAP
    cont=0;
    for (let i=0;i<service.length;i++){
        pto=service[i].indexOf(" ");

        plani=service[i].slice(0,pto);
        plan[i]=plani;
        service[i]=service[i].slice(pto+1);

        if (service[i].substring(0, 1) === " "){
            service[i]=service[i].slice(1);
        }
        service[i]=service[i].split(" ");

        services[cont]=service[i];
        corrige[cont]="";
        corrige1[cont]="";
        corrige2[cont]="";
        if(diner24!="" || diner31!=""){
            //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
            if(fch>0){

                for (let e=2;e<service.length;e++){
                    corrige2[cont]+=service[i][e]+" ";
                }
                for (let e=0;e<2;e++){
                    corrige[cont]+=service[i][e]+" ";
                }
                service[cont]="";
                service[cont].length=0;
                for (let s=0;s<4;s++){
                    corrige1[cont]+=services[cont][1]+" ";
                }
                service[i]=corrige[cont]+corrige1[cont]+corrige2[cont];

                pto=service[i].lastIndexOf(" ");
                service[i]=service[i].slice(0,pto);
                service[i]=service[i].split(" ");

            }
        }




        if (plan[i].match("MAP")){
            half=service[i][0]-service[i-1][0];
        }

        cont++;
       //console.log(service[i]);
    }


    //Para recoger las habitaciones de forma vertical H*
    let st_mup=new Array(10);
    cont=0;
    for (let ii = 0; ii < cont_fecha; ii++) {
        st[ii]="";
        st_mup[ii]="";
        plan[ii]=plani;
        for (let i = 0; i < service.length; i++) {


            if(service[i].length===0){//Si hay algun espacio lo elimine
                service.length=service.length-1;
                break;
            }

            st[ii]+=service[i][ii]+" ";
            if(diner24!="" ||diner31!=""){
                if (ii===2){
                    st_mup[ii]+=Math.round((parseInt(service[i][ii])+parseInt(diner24))*(1+mups))+" ";

                }else{
                    if (ii===4){
                        st_mup[ii]+=Math.round((parseInt(service[i][ii])+parseInt(diner31))*(1+mups))+" ";
                    }else{
                        st_mup[ii]+=Math.round(parseInt(service[i][ii])+(service[i][ii]*mups))+" ";
                    }
                }
            }else{
                st_mup[ii]+=Math.round(parseInt(service[i][ii])+(service[i][ii]*mups))+" ";
            }




        }

        let find=st[ii].lastIndexOf(" ");
        st[ii]=st[ii].slice(0,find);
        st[ii]=st[ii].split(" ");

         find=st_mup[ii].lastIndexOf(" ");
        st_mup[ii]=st_mup[ii].slice(0,find);
        st_mup[ii]=st_mup[ii].split(" ");
       // console.log(st_mup[ii]);
    }

    let supls = new Array(40);//Para el calculo
    let suply=new Array(40);
    let suplementos = new Array(40);
    let name_sup=new Array(20);
    let sg=new Array(20);
    let sgs=new Array(20);
    let sg_mup=new Array(20);
    let supl_mup=new Array(10);
    //Para recoger las habitaciones sencillas
    if(single!=""){
        for (let e=0;e<single.length;e++){
            single[e]=single[e].split(" ");
        }
        for (let ii = 0; ii < cont_fecha; ii++) {
            sg[ii]="";
            supl_mup[ii]="";
            for (let i = 0; i < single.length; i++) {

                if(single[i].length===0){//Si hay algun espacio lo elimine
                    single.length=single.length-1;
                    break;
                }
                //sg[ii]=sg[ii].split(" ");
                sg[ii]+=single[i][ii]+" ";
                supl_mup[ii]+=Math.round(parseInt(single[i][ii])+(single[i][ii]*mups))+" ";
            }

            let find=sg[ii].lastIndexOf(" ");
            sg[ii]=sg[ii].slice(0,find);
            sg[ii]=sg[ii].split(" ");

            find=st_mup[ii].lastIndexOf(" ");
            supl_mup[ii]=supl_mup[ii].slice(0,find);
            supl_mup[ii]=supl_mup[ii].split(" ");
             //console.log(supl_mup[ii]);
        }
    }

    let gr=new Array(20);


    let child = new Array(40);
    let adult = new Array(40);
    let child_cost = new Array(40);
    let adult_cost = new Array(40);
    let divide=3;

    //Para recoger los suplementos verticalmente S*

    if (suplements != "") {
        for (let i = 0; i < suplements.length; i++) {
            if (suplements[i].match("/")) {
                position = suplements[i].indexOf("/");
                suplementos[i] = suplements[i].slice(position + 2);
                name_sup[i] = suplements[i].slice(0, position);
            }
            suplements[i] = suplementos[i].split(" ");
            suplementos[cont] = suplements[i];
            // console.log(suplements[i]);
            corrige[cont] = "";
            corrige1[cont] = "";
            corrige2[cont] = "";
            //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
            if(diner24!="" || diner31!=""){
                if (fch > 0) {

                    for (let e = 2; e < service.length; e++) {
                        corrige2[cont] += suplements[i][e] + " ";
                    }
                    for (let e = 0; e < 2; e++) {
                        corrige[cont] += suplements[i][e] + " ";
                    }
                    suplements[cont] = "";
                    suplements[cont].length = 0;
                    for (let s = 0; s < 4; s++) {
                        corrige1[cont] += suplementos[cont][1] + " ";
                    }
                    suplements[i] = corrige[cont] + corrige1[cont] + corrige2[cont];

                    pto = suplements[i].lastIndexOf(" ");
                    suplements[i] = suplements[i].slice(0, pto);
                    suplements[i] = suplements[i].split(" ");
                    cont++;
                }
            }

        }
        cont = 0;
        let cero = 0;
        for (let ii = 0; ii < cont_fecha; ii++) {//Para recoger despues de cada servicio, por fecha
            //Suplementos por porciento

            supls[ii] = "";
            supl_mup[ii] = "";
            for (let i = 0; i < suplements.length; i++) {
                if (suplements[i] === "") {
                    suplements.length = suplements.length - 1;
                    break;
                }
                suply[i] = suplements[i][ii];

            }
            //Recoger los suplementos segun los servicios
            for (let e = 0; e < service.length; e++) {
                let ser = parseInt(service[e][ii]);
                let sup = parseInt(suply[e])
                if (resul_sup[e] === e) {
                    supls[ii] += 0 + " ";//Para los suplementos con excepciones
                    supl_mup[ii] += 0 + " ";
                    //suplements[e]+=supls[e];
                } else {


                    if (suply[e].match("%")) {
                        supls[ii] += Math.round((ser + (ser * sup / 100))) + " ";
                        //Seguir con esto para poner los precios por cenas segun la fecha
                        if (diner24!="" || diner31!=""){
                            if (ii === 2) {
                                supl_mup[ii] += Math.round(((ser + (ser * sup / 100)) + parseInt(diner24)) * (1 + mups)) + " ";

                            } else {
                                if (ii === 4) {
                                    supl_mup[ii] += Math.round(((ser + (ser * sup / 100)) + parseInt(diner31)) * (1 + mups)) + " ";
                                } else {
                                    supl_mup[ii] += Math.round((ser + (ser * sup / 100)) * (1 + mups)) + " ";
                                }
                            }
                        }else{
                            supl_mup[ii] += Math.round((ser + (ser * sup / 100)) * (1 + mups)) + " ";
                        }

                        //supl_mup[ii]+=Math.round((ser+(ser*sup/100) ))+ ((ser+(ser*sup/100))*mups )+" ";
                    }//+ ((ser+(ser*sup/100))*mups )
                    else {
                        supls[ii] += sup + ser + " ";
                        if (suply[e].match("%")) {
                            supls[ii] += Math.round((ser + (ser * sup / 100))) + " ";
                            //para poner los precios por cenas segun la fecha
                            if(diner24!="" ||diner31!=""){
                                if (ii === 2) {
                                    supl_mup[ii] += Math.round(((sup + ser) + parseInt(diner24)) * (1 + mups)) + " ";

                                } else {
                                    if (ii === 4) {
                                        supl_mup[ii] += Math.round(((sup + ser) + parseInt(diner31)) * (1 + mups)) + " ";
                                    } else {
                                        supl_mup[ii] += Math.round((sup + ser) * (1 + mups)) + " ";
                                    }
                                }
                            }else{
                                supl_mup[ii] += Math.round((sup + ser) * (1 + mups)) + " ";
                            }

                            //supl_mup[ii]+=Math.round((sup+ ser) + ((sup+ ser) *mups) )+" ";
                        }


                    }

                }
            }
                position = supls[ii].lastIndexOf(" ");
                supls[ii] = supls[ii].slice(0, position);
                supls[ii] = supls[ii].split(" ");

                position = supl_mup[ii].lastIndexOf(" ");
                supl_mup[ii] = supl_mup[ii].slice(0, position);
                supl_mup[ii] = supl_mup[ii].split(" ");


            valor[2] = 1;

        }
    }
    //console.log(suplements[8]);
    let conteo1 = 0;
    let conteo2 = 0;
    let eventos=new Array(20);
    let eventos_calc=new Array(20);
    let eventos_valor=new Array(20);
    let name_evento=new Array(10);

    //Para suplementos de eventos
    if (evento != "") {
        for (let i=0;i<evento.length;i++){
            if (evento[i].match("/")){
                position=evento[i].indexOf("/");
                eventos[i]=evento[i].slice(position+2);
                name_evento[i]=evento[i].slice(0,position);
            }
            evento[i]=eventos[i].split(" ");

        }

        for (let ii = 0; ii < cont_fecha + 1; ii++) {
            eventos_calc[ii]="";
            for (let i = 0; i < evento.length; i++) {
                if (evento[i] === "") {
                    evento.length = evento.length - 1;
                    break;
                }
                eventos_valor[i] = evento[i][ii];

                for (let e=0;e<service.length;e++){
                    if(resul_sup[e]=== e){
                        eventos_calc[ii]+=0+" ";//Para los suplementos con excepciones
                    }
                    else {
                        eventos_calc[ii] += parseInt(eventos_valor[i])+ parseInt(service[e][ii])+" ";
                    }

                }
                position=eventos_calc[ii].lastIndexOf(" ");
                eventos_calc[ii]=eventos_calc[ii].slice(0,position);
                eventos_calc[ii]=eventos_calc[ii].split(" ");

            }

        }
        valor[3]=1;
    }

    let name_diner = new Array(10);
    let cenitas = new Array(40);
    //Para las cenas tomandose verticalmente *********
   /* if (diner != "") {
        for (let i=0;i<diner.length;i++){
            if (diner[i].match("/")){
                position=diner[i].indexOf("/");
                diner[i]=diner[i].slice(position+2);
                name_diner[i]=diner[i].slice(0,pto);
                diner[i]=diner[i].split(" ");
            }

        }
        for (let ii = 0; ii < cont_fecha + 1; ii++) {
            cenitas[ii]="";
            for (let i = 0; i < diner.length; i++) {


                if(diner[i].length===0){//Si hay algun espacio lo elimine
                    diner.length=diner.length-1;
                    break;
                }

                cenitas[ii]+=diner[i][ii]+" ";

            }

            let find=cenitas[ii].lastIndexOf(" ");
            cenitas[ii]=cenitas[ii].slice(0,find);
            cenitas[ii]=cenitas[ii].split(" ");
            //console.log(cenitas[ii]);
        }
        valor[4]=1;
    }*/
    //console.log(cenitas[0]);

    let reductions = new Array(40);
    let reduc = new Array(40);//Para el calculo
    let reducc = new Array(40);//Para el calculo
    let reduct = new Array(40);//Para el transpaso
    let name_red = new Array(40);


    cont = 0;

    //Para recoger las reducciones R*
    if (reduction != "") {
        for (let i=0;i<reduction.length;i++){
            if (reduction[i].match("/")){
                position=reduction[i].indexOf("/");
                name_red[i]=reduction[i].slice(0,position);
                reduct[i]=reduction[i].slice(position+2);

            }
            reduct[i]=reduct[i].split(" ");
            reduction[i]=reduct[i];
            //console.log(reduction[i]);
            corrige[cont]="";
            corrige1[cont]="";
            corrige2[cont]="";
            //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
            if(fch>0){

                for (let e=2;e<ffcha+1;e++){
                    corrige2[cont]+=reduction[i][e]+" ";
                }
                for (let e=0;e<2;e++){
                    corrige[cont]+=reduction[i][e]+" ";
                }
                reduction[cont]="";
                reduction[cont].length=0;
                for (let s=0;s<4;s++){
                    corrige1[cont]+=reduct[cont][1]+" ";
                }
                reduction[i]=corrige[cont]+corrige1[cont]+corrige2[cont];

                pto=reduction[i].lastIndexOf(" ");
                reduction[i]=reduction[i].slice(0,pto);
                reduction[i]=reduction[i].split(" ");
                cont++;
            }
        }
        cont=0;
        for (let ii = 0; ii < cont_fecha; ii++) {
            reduc[ii]="";
            reducc[ii]="";
            //console.log(reduccion[cont]);
            for (let i = 0; i < reduction.length; i++) {
                if(reduction[i]===""){
                    reduction.length=reduction.length-1;
                    break
                }
                reduct[i]=reduction[i][ii];
                if(reduct[i].match("%")){
                    position=reduct[i].indexOf("%");
                    let g=reduct[i].slice(0,position);
                    reduct[i]=g;
                }
                if(reduct[i].match("FREE")||reduct[i].match("Free")){
                    reduct[i]=100;
                }
                for (let e = 0; e < service.length; e++) {
                    let ser=parseInt(service[e][ii]);

                    // reduct[conteo1 + i] = parseInt(reduct[conteo1 + i], 10);
                    //console.log(reduct[ii]);
                    if(resul_sel[i]===i){//Saber si es la reduccion con excepcion
                        if (resul_red[e]===e){//Para los que fueron seleccionados
                            reduc[ii]+=0+" ";
                        }
                        else{//Para los que no se seleccionaron y tienen que calcularse
                            reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                        }
                    }
                    else{
                        reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                        let reemp=((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3;
                        //Para recoger los valores para cenas segun la fecha
                        if(diner24!="" ||diner31!=""){
                            if (ii===2){
                                reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner24)))*(1+mups))+" ";

                            }else{
                                if (ii===4){
                                    reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner31)))*(1+mups))+" ";
                                }else{
                                    if(reduct[i]==="100"){
                                        reducc[ii]+="Free ";
                                    }
                                    if (reduct[i]==="N/A"){
                                        reducc[ii]+="N/A ";
                                    }
                                    //else {
                                        if(reduct[i]==="50"){
                                            reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups))+" ";
                                        }else{
                                            reducc[ii]+=Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)+" ";

                                        }

                                    //}
                                }
                            }
                        }else {
                            reducc[ii]+=Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)+" ";

                        }

                        //reducc[ii] += Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(reemp*mups))+" ";

                    }

                }
                if (cont===0){
                    child[ii]=reducc[ii];
                    child_cost[ii]=reduc[ii];

                }
                if (cont===1){
                    adult[ii]=reducc[ii];
                    adult_cost[ii]=reduc[ii];

                }
                reducc[ii]="";
                reduc[ii]="";
                cont++;

            }
            cont=0;

            position=reduc[ii].lastIndexOf(" ");
            reduc[ii]=reduc[ii].slice(0,position);
            reduc[ii]=reduc[ii].split(" ");

            position=adult_cost[ii].lastIndexOf(" ");
            adult_cost[ii]=adult_cost[ii].slice(0,position);
            adult_cost[ii]=adult_cost[ii].split(" ");

            position=child_cost[ii].lastIndexOf(" ");
            child_cost[ii]=child_cost[ii].slice(0,position);
            child_cost[ii]=child_cost[ii].split(" ");

           // if(adult[ii]>0){
                position=adult[ii].lastIndexOf(" ");
                adult[ii]=adult[ii].slice(0,position);
                adult[ii]=adult[ii].split(" ");
            //}

            //console.log(adult[ii]);
            position=child[ii].lastIndexOf(" ");
            child[ii]=child[ii].slice(0,position);
            child[ii]=child[ii].split(" ");
        }
        valor[5]=1;
    }

    //Para habitaciones por grupos o familias
    if(red_3!=""){

           for (let i = 0; i < service.length; i++){
                if(resul_sup[i]=== i){

                    for (let e=0;e<cont_fecha;e++){

                        gr[i]=service[i][e];

                        if (red_6!=""){
                            divide=6;
                            if(diner24!="" || diner31!=""){
                                if(e===2){
                                    child[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))+((parseInt(diner24))*6))*(1+mups))/divide);
                                    child_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))+((parseInt(diner24))*6)))/divide);
                                }else{
                                    if (e===4){
                                        child[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))+((parseInt(diner31))*6))*(1+mups))/divide);
                                        child_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))+((parseInt(diner31))*6)))/divide);
                                    }
                                    else{
                                        child[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))*(1+mups))/divide);
                                        child_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))))/divide);
                                    }

                                }
                            }else{
                                child[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))*(1+mups))/divide);
                                child_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))))/divide);
                            }


                        }
                        if(red_5!=""){
                            divide=5;
                            if(diner24!="" || diner31!=""){
                                if(e===2){
                                  adult[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))+((parseInt(diner24))*5))*(1+mups))/divide);
                                  adult_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))+((parseInt(diner24))*5)))/divide);
                                }else{
                                    if (e===4){
                                        adult[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))+((parseInt(diner31))*5))*(1+mups))/divide);
                                        adult_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))+((parseInt(diner31))*5)))/divide);
                                    }
                                    else{
                                        adult[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))*(1+mups))/divide);
                                        adult_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))))/divide);
                                    }
                                }
                            }else{
                                adult[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))*(1+mups))/divide);
                                adult_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))))/divide);
                            }

                        }
                        if(red_4!=""){
                            divide=4;
                            if(diner24!="" || diner31!=""){
                                if(e===2){
                                    supl_mup[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))+((parseInt(diner24))*4))*(1+mups))/divide);
                                    supls[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))+((parseInt(diner24))*4)))/divide);
                                }else{
                                    if (e===4){
                                        supl_mup[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))+((parseInt(diner31))*4))*(1+mups))/divide);
                                        supls[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))+((parseInt(diner31))*4)))/divide);
                                    }
                                    else{
                                        supl_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))*(1+mups))/divide);
                                        supls[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))/divide);
                                    }
                                }
                            }else{
                                supl_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))*(1+mups))/divide);
                                supls[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))/divide);
                            }

                        }
                        if(red_3!=""){
                            divide=3;
                            if(diner24!="" || diner31!=""){
                                if(e===2){
                                    st_mup[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner24))*4))*(1+mups))/divide);
                                    st[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner24))*4)))/divide);
                                }else{
                                    if (e===4){
                                        st_mup[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner31))*4))*(1+mups))/divide);
                                        st[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner31))*4)))/divide);
                                    }
                                    else{
                                        st_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))*(1+mups))/divide);
                                        st[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))))/divide);
                                    }
                                }
                            }else{
                                st_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))*(1+mups))/divide);
                                st[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))))/divide);
                            }

                            //if(diner24!="" || diner31!=""){

                            //}


                        }

                    }
                   // find=st_mup[i].lastIndexOf(" ");
                   // st_mup[i]=st_mup[i].slice(0,find);
                   // st_mup[e][i]=st_mup[e][i].split(" ");

                   /* find=supl_mup[i].lastIndexOf(" ");
                    supl_mup[i]=supl_mup[i].slice(0,find);
                    supl_mup[i]=supl_mup[i].split(" ");

                    find=adult[i].lastIndexOf(" ");
                    adult[i]=adult[i].slice(0,find);
                    adult[i]=adult[i].split(" ");

                    find=child[i].lastIndexOf(" ");
                    child[i]=child[i].slice(0,find);
                    child[i]=child[i].split(" ");*/
                }
            }

        //}
    }
    let ventas = new Array(50);
    let ventas_valor = new Array(50);
    let ventas_calc = new Array(50);
    let ventas_calc_sup = new Array(50);
    let ventas_calc_red = new Array(50);
    let ventas_calc_event = new Array(50);
    let name_ventas=new Array(20);

    //Para las ventas anticipadas

    if (venta != "") {
        //Tomo los enunciados
        for (let i=0;i<venta.length;i++){
            if (venta[i].match("/")){
                position=venta[i].indexOf("/");
                ventas[i]=venta[i].slice(position+2);
                name_ventas[i]=venta[i].slice(0,position);
            }
            venta[i]=ventas[i].split(" ");
           //console.log(ventas[i]);
        }

        for (let ii = 0; ii < cont_fecha + 1; ii++) {
            ventas_calc[ii]="";
            ventas_calc_sup[ii]="";
            ventas_calc_red[ii]="";
            ventas_calc_event[ii]="";
            for (let v = 0; v < venta.length; v++) {
                if(venta[v]===""){
                    venta.length=venta.length-1;
                    break
                }//Para saber si hay algun espacio al final
                ventas_valor[v] = venta[v][ii];
                if(ventas_valor[v].match("%")){
                    position=ventas_valor[v].indexOf("%");
                    let g=ventas_valor[v].slice(0,position);
                    ventas_valor[v]=g;
                }
                //para los sirvicios
                for (let e = 0; e < service.length; e++) {
                    if(resul_sup[e]=== e){
                        ventas_calc[ii]+=0+" ";//Para los suplementos con excepciones
                    }
                    else {
                        ventas_calc[ii] += ((parseInt(service[e][ii]) * 2) + (parseInt(service[e][ii]) - (ventas_valor[v] * parseInt(service[e][ii])) / 100)) / 3+" ";

                        //ventas_calc[ii] += parseInt(ventas_valor[i])+ parseInt(service[e][ii])+",";
                    }


                    valor[6]=1;
                }
                position=ventas_calc[ii].lastIndexOf(" ");
                ventas_calc[ii]=ventas_calc[ii].slice(0,position);
                ventas_calc[ii]=ventas_calc[ii].split(" ");
               //console.log(ventas_calc[ii]);
                //Recoger los suplementos segun los servicios
                if(suplements!=""){
                    for (let i = 0; i < service.length; i++) {
                        if(suplements[i]===""){
                            suplements.length=suplements.length-1;
                            break;
                        }
                        //suply[i]=suplements[i][ii];
                        if(resul_sup[i]=== i){
                            //supls[ii]=0;//Para los suplementos con excepciones
                            ventas_calc_sup[ii] +=0+" ";
                        }
                        else {
                            // supls[ii] = parseInt(suply[i])+ parseInt(service[i][ii]);
                            ventas_calc_sup[ii] += ((supls[ii][i] * 2) + (supls[ii][i] - (parseInt(ventas_valor[v]) * supls[ii][i]) / 100)) / 3+" ";

                        }
                        valor[7]=1;
                    }
                    position=ventas_calc_sup[ii].lastIndexOf(" ");
                    ventas_calc_sup[ii]=ventas_calc_sup[ii].slice(0,position);
                    ventas_calc_sup[ii]=ventas_calc_sup[ii].split(" ");

                }


                    //Recoge los eventos
                if (evento!=""){
                    for (let i = 0; i < service.length; i++) {
                        if(evento[i]===""){
                            evento.length=evento.length-1;
                            break;
                        }
                        //suply[i]=suplements[i][ii];
                        if(resul_sup[i]=== i){
                            //supls[ii]=0;//Para los suplementos con excepciones
                            ventas_calc_event[ii] +=0+" ";
                        }
                        else {
                            // supls[ii] = parseInt(suply[i])+ parseInt(service[i][ii]);
                            ventas_calc_event[ii] += ((eventos_calc[ii][i] * 2) + (eventos_calc[ii][i] - (parseInt(ventas_valor[v]) * eventos_calc[ii][i]) / 100)) / 3+" ";

                        }
                        valor[8]=1;
                    }
                    position=ventas_calc_event[ii].lastIndexOf(" ");
                    ventas_calc_event[ii]=ventas_calc_event[ii].slice(0,position);
                    ventas_calc_event[ii]=ventas_calc_event[ii].split(" ");

                }

               //console.log(ventas_calc_event[ii]);

                //Para las reducciones
                if(reduction!=""){
                    for (let i = 0; i < service.length*reduction.length; i++) {
                        if(reduction[i]===""){
                            reduction.length=reduction.length-1;
                            break;
                        }
                        //suply[i]=suplements[i][ii];
                        if(resul_red[i]=== i){
                            reduct[ii]=0;//Para los suplementos con excepciones
                            ventas_calc_red[ii] +=0+" ";
                        }
                        else {
                            // supls[ii] = parseInt(suply[i])+ parseInt(service[i][ii]);
                            ventas_calc_red[ii] += ((reduc[ii][i] * 2) + (reduc[ii][i] - (parseInt(ventas_valor[v]) * reduc[ii][i]) / 100)) / 3+" ";

                        }
                        valor[9]=1;
                    }

                    position=ventas_calc_red[ii].lastIndexOf(" ");
                    ventas_calc_red[ii]=ventas_calc_red[ii].slice(0,position);
                    ventas_calc_red[ii]=ventas_calc_red[ii].split(" ");

                }



            }

        }

    }


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
    for (let ii = 0; ii < service.length; ii++) {
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
    if (evento != ""){
        for (let ii = 0; ii < service.length; ii++){
            suplemento_campo[ii] = "evento" + ii + ",";
            suplemento_campo1[ii] = "evento" + ii + " float(6),";
            event += suplemento_campo[ii];
            event1 += suplemento_campo1[ii];
            campos[3]=1;
        }
    }

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
    //Para las cenas
   /* if (diner != ""){
        for (let ee = 0; ee < diner.length; ee++) {
            cena_campo[ee] = "cena" + ee + ",";
            cena_campo1[ee] = "cena" + ee + " float(6),";
            cen += cena_campo[ee];
            cen1 += cena_campo1[ee];

        }
        campos[4]=1;
    }*/

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
        if (evento!=""){
            for (let ee = 0; ee < service.length; ee++) {
                venta_campo[ee] = "venta_event" + ee + ",";
                venta_campo1[ee] = "venta_event" + ee + " float(6),";
                ven += venta_campo[ee];
                ven1 += venta_campo1[ee];
            }
        }
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
    if (campos[3]===1){
        create+=event1;
        unir_campos+=event;
    }
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
    for (let i = 0; i < cont_fecha+1; i++){

        uni="'" + name + "'," + "'" + f[i] + "'" + "," + "'" + t[i] + "'" + "," + st[i];
        if(valor[0]===1){
            uni+=","+release[i]+"";

        }
        if (valor[1]===1){
            uni+=","+cp[i]+"";
        }
        if (valor[2]===1){
            uni+=","+supls[i]+ "";
        }
        if (valor[3]===1){
            uni+=","+eventos_calc[i]+ "";
        }
        if (valor[4]===1){
            uni+=","+cenitas[i]+ "";
        }
        if (valor[5]===1){
            uni+=","+reduc[i]+ "";
        }
        if (valor[6]===1){
            uni+=","+ventas_calc[i]+ "";
        }
        if (valor[7]===1){
            uni+=","+ventas_calc_sup[i]+ "";
        }
        if (valor[8]===1){
            uni+=","+ventas_calc_event[i]+ "";
        }
        if (valor[9]===1){
            uni+=","+ventas_calc_red[i]+ "";
        }
        une[i]=uni;

    }
//



    const dbConnection= require("./connect");
    const connection = dbConnection();
/*let sql="CREATE TABLE "+name+" (id INT AUTO_INCREMENT PRIMARY KEY,nombre_hotel varchar(100),"+create+" )";
        connection.query(sql,function (err,result) {
            if (err) {
                throw err;
            } else {
                console.log("Tabla creada");
            }
        });
     for (let i=0;i<cont_fecha+1;i++){
      connection.query("INSERT into "+name+" ("+unir_campos+") values ("+une[i]+") ", (error, results)=> {
                if(error)
                    throw error;
                console.log("Registos ingresados",results);
            });
       }*/
    resp.send("Datos guardados con exitos");


   let datos={nombres:[], servicios:[],habitaciones: [],seasons: [],maps:[]};


    fs.writeFileSync("sell.json",JSON.stringify(datos),"utf-8");
    fs.writeFileSync("cost.json",JSON.stringify(datos),"utf-8");
    //abrir el archivo

    file=fs.readFileSync("sell.json","utf-8");
    files=fs.readFileSync("cost.json","utf-8");
    //convertir el archivo en arreglo
    const json_sell=JSON.parse(file);
    const json_cost=JSON.parse(file);
    //insertar un nuevo elemento
    json_sell.nombres.push({"nombre":nombre_hotel});
    json_cost.nombres.push({"nombre":nombre_hotel});
    //Para las temporadas
    json_sell.seasons.push({"temporadas":rates});
    json_cost.seasons.push({"temporadas":rates});

    //para los nombres de las habitaciones
    for (let i=0;i<service.length;i++){
        json_sell.habitaciones.push({"habit":name_habit[i]});
       json_cost.habitaciones.push({"habit":name_habit[i]});
    }
    //Para las habitaciones
    for (let i=0;i<cont_fecha+1;i++){
        json_sell.servicios.push({"fecha_ini":f[i],"fecha_end":t[i],"servi":st_mup[i],"suple":supl_mup[i],"red_adult":adult[i],"red_child":child[i],"plan":plan[i]});
        json_cost.servicios.push({"fecha_ini":f[i],"fecha_end":t[i],"servi":st[i],"suple":supls[i],"red_adult":adult_cost[i],"red_child":child_cost[i],"plan":plan[i]});

    }
    //Para el Halfboard
    json_sell.maps.push({"map_adult":half,"map_child":Math.round(half/2)});
   json_cost.maps.push({"map_adult":half,"map_child":Math.round(half/2)});

    //guardar pelicula
    file=fs.writeFileSync("./sell.json",JSON.stringify(json_sell));
    files=fs.writeFileSync("./cost.json",JSON.stringify(json_cost));
});



app.listen(3001,()=>{
    console.log("Ejecutando el servidor");
})
//module.exports=app;