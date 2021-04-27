//Para extraer las fechas inicio
let fecha_ini=function (fechas,diner,fd,map_saber,sup_fb){
    let cont_fecha = 0;//Saber cuantas fechas hay
    let f = new Array(10);//Para las fechas iniciales
    let t=new Array(10);//Para las fechas end
    let fbd = new Array(10);//Para las fechas de la bd

//let extraer = fechas[0].slice(5);
    let piezas = fechas[0].split(" ");
    let piez= fechas[1].split(" ");
    let p="";
    let pi="";
    let an = "";
    let me = "";
    let dia = "";
    let fch=0;
    let fech_c=false;//Para saber si hay cenas
    let ffcha=0;
    let diaT = "";
    let meT="";
    let anT="";
    let f_ini="";
    let mc="";//Es para el mes de las cenas
    let dc="";//Para los dias de las cenas
    let ac="";//Para los años de las cenas
    let rango=new Array(4);//Para saber cual fecha se uso para cortar
    let cont=0;//Sirve de iteracion para el rango
    let cen=new Array(5);//Para comparar los meses.
    let dia_cen=new Array(5)//Para recoger el dia del mes que se repite
    //Saber si hay cenas
    for (let e=0;e<piezas.length;e++){
        if (piezas[e].match("/")){

            piezas[e]=piezas[e].replace("/","-");
            piezas[e]=piezas[e].replace("/","-");

            piez[e]=piez[e].replace("/","-");
            piez[e]=piez[e].replace("/","-");
        }
       /* if (piezas[e].match("-")){
            piezas[e] = piezas[e].split("-");

            piez[e] = piez[e].split("-");
        }*/
        if (piezas[e].match(".")){
            piezas[e]=piezas[e].replace(".","-");
            piezas[e]=piezas[e].replace(".","-");

            piez[e]=piez[e].replace(".","-");
            piez[e]=piez[e].replace(".","-");
        }
       /* if (piezas[e].match("-")){
            p = piezas[e].split("-");
            pi = piez[e].split("-");
        }*/
        if (piezas[e].match("-")){
            p = piezas[e].split("-");
            pi = piez[e].split("-");
             an = p[2];
             me = p[1];
             dia = p[0];

            anT = pi[2];
            meT = pi[1];
            diaT = pi[0];

            if(an.length===2){
                an="20"+an;
            }
            if(anT.length===2){
                anT="20"+anT;
            }
            piezas[e]=dia+"-"+me+"-"+an;
            piez[e]=diaT+"-"+meT+"-"+anT;
        }



    }
    if (diner[0]!="" || diner[1]!="" ||diner[2]!="" || diner[3]!=""){
        if (map_saber===0 && sup_fb===0){
            //NO hay Planes opcionales y se dividen las fechas
            for (let i=0;i<4;i++) {
                if (fd[i] != "") {
                    fch=0;
                    //Extraer mes
                    let position=fd[i].indexOf("/");
                    let position1=fd[i].lastIndexOf("/");
                    mc=fd[i].slice(position+1,position1);
                    dc=fd[i].slice(0,position);
                    ac=fd[i].slice(position1+1);
                    cen[i]=mc;
                    dia_cen[i]=dc;
                    //Buscar en cual rango cae
                    for (let e=0;e<piezas.length;e++){

                            if (piezas[e].match("-")){
                                p = piezas[e].split("-");
                                pi = piez[e].split("-");
                            }

                         an = p[2];
                         me = p[1];
                         dia = p[0];

                         anT = pi[2];
                         meT = pi[1];
                         diaT = pi[0];

                        if(an.length===2){
                            an="20"+an;
                        }
                        if(anT.length===2){
                            anT="20"+anT;
                        }
                        if(ac.length===2){
                            ac="20"+ac;
                        }
                        if(me.length>2){
                            switch (me){
                                case "Jan":
                                    me="01";
                                    break;
                                case "Feb":
                                    me="02";
                                    break;
                                case "Mar":
                                    me="03";
                                    break;
                                case "Apr":
                                    me="04";
                                    break;
                                case "May":
                                    me="05";
                                    break;
                                case "Jun":
                                    me="06";
                                    break;
                                case "Jul":
                                    me="07";
                                    break;
                                case "Aug":
                                    me="08";
                                    break;
                                case "Sep":
                                    me="09";
                                    break;
                                case "Oct":
                                    me="10";
                                    break;
                                case "Nov":
                                    me="11";
                                    break;
                                default :
                                    me="12";
                                    break;
                            }
                        }
                        //let me_end=pi[1];
                        if (ac<anT){
                            //Entra
                            if (cen[i]===cen[i-1]){
                                //Se desplaza
                                rango[cont]=e;
                                let desp=dc +"-"  + meT + "-" +an;
                                let desp1=parseInt(dc)+1 +"-"  + meT + "-" +an;

                                let desplaza1= parseInt(dc)-1+"-"  + meT + "-" +an;
                                let desplaza2=dc +"-"  + meT+ "-" +an;
                                // let desplaza3=parseInt(dia_cen[i-1])-1 +"-"  + me_end + "-" +an;
                                e=100;

                               /* f.splice(rango[0]+1,0,desp,desp1);
                                t.splice(rango[0],0,desplaza1,desplaza2);*/
                                piezas.splice(rango[cont]+1,0,desp,desp1);
                                piez.splice(rango[cont],0,desplaza1,desplaza2);
                                cont++;
                            }else {
                                //Se inserta
                                //f[fch]
                                let f1= dia + "-" + me + "-" + an;
                                let t1= parseInt(dc)-1+"-"+me+"-"+an;
                                //Se tiene el rango
                                rango[cont]=e;

                                //Se cortan las fechas
                                //Aqui esta la fecha que se recorta
                                let f2=dc +"-"  + me + "-" +an;
                                let t2= dc +"-"  + me + "-" +an;

                                let f3=parseInt(dc)+1 +"-"  + me + "-" +an;
                                let t3= diaT +"-"  + meT + "-" +anT;
                                fch+=3;
                                /* f.splice(rango[0],0,f1,f2,f3);
                                 t.splice(rango[0],0,t1,t2,t3);*/
                                piezas.splice(rango[cont],1,f1,f2,f3);
                                piez.splice(rango[cont],1,t1,t2,t3);
                                e=100;
                                cont++;
                            }
                        }else{
                            if (ac<=anT && mc<=meT && dc<diaT){
                                //entra
                                if (cen[i]===cen[i-1]){
                                    //Se desplaza
                                    let desp=dc +"-"  + me+ "-" +an;
                                    let desp1=parseInt(dc)+1 +"-"  + meT + "-" +an;

                                    let desplaza1= parseInt(dc)-1+"-"  + me+ "-" +an;
                                    let desplaza2=dc +"-"  + meT + "-" +an;
                                    // let desplaza3=parseInt(dia_cen[i-1])-1 +"-"  + me_end + "-" +an;
                                    e=100;

                                    f.splice(rango[0]+1,0,desp,desp1);
                                    t.splice(rango[0],0,desplaza1,desplaza2);
                                }else {
                                    //Se inserta
                                    //f[fch]
                                    let f1= dia + "-" + me + "-" + an;
                                    let t1= parseInt(dc)-1+"-"+meT+"-"+anT;
                                    //Se tiene el rango
                                    rango[cont]=e;

                                    //Se cortan las fechas
                                    //Aqui esta la fecha que se recorta
                                    let f2=dc +"-"  + meT + "-" +an;
                                    let t2= dc +"-"  + meT + "-" +anT;

                                    let f3=parseInt(dc)+1 +"-"  + meT + "-" +an;
                                    let t3= diaT +"-"  + meT + "-" +anT;
                                    fch+=3;
                                    /* f.splice(rango[0],0,f1,f2,f3);
                                     t.splice(rango[0],0,t1,t2,t3);*/
                                    piezas.splice(rango[cont],1,f1,f2,f3);
                                    piez.splice(rango[cont],1,t1,t2,t3);
                                    e=100;
                                    cont++;
                                }
                            }else{
                                //No entra en el rango
                                f[fch] = dia + "-" + me + "-" + an;
                                t[fch]= diaT+"-"+meT+"-"+anT;
                                fbd[fch] = an + "-" + me + "-" + dia;
                                fch++;

                            }
                        }

                        cont_fecha = fch;
                        ffcha=piezas.length;
                    }
                    /*piezas=f;
                    piez=t;*/
                }
            }
        }else{
            //Hay planes opcionales, no se dividen la fechas
            ffcha=piezas.length;
           /* for (let a = 0; a < piezas.length; a++) {
                if (piezas[a].match("/")){
                    p = piezas[a].split("/");
                    pi = piez[a].split("/");
                }
                //if (piezas[a].match("."))
                else{
                    if (piezas[a].match("-")){
                        p = piezas[a].split("-");
                        pi = piez[a].split("-");
                    }else {
                        p = piezas[a].split(".");
                        pi = piez[a].split(".");
                    }

                }
                //console.log(p);
                let an = p[2];
                let me = p[1];
                let dia = p[0];




                if(an.length===2){
                    an="20"+an;
                }
                if(me.length>2){
                    switch (me){
                        case "Jan":
                            me="01";
                            break;
                        case "Feb":
                            me="02";
                            break;
                        case "Mar":
                            me="03";
                            break;
                        case "Apr":
                            me="04";
                            break;
                        case "May":
                            me="05";
                            break;
                        case "Jun":
                            me="06";
                            break;
                        case "Jul":
                            me="07";
                            break;
                        case "Aug":
                            me="08";
                            break;
                        case "Sep":
                            me="09";
                            break;
                        case "Oct":
                            me="10";
                            break;
                        case "Nov":
                            me="11";
                            break;
                        default :
                            me="12";
                            break;
                    }
                }
                /!*let rango=new Array(4);//Para saber cual fecha se uso para cortar
                let cont=0;//Sirve de iteracion para el rango*!/
                f[fch] = dia + "-" + me + "-" + an;
                fbd[fch] = an + "-" + me + "-" + dia;
                fch++;
                cont_fecha = fch;
                ffcha=a;


                /!* let mc="";//Es para el mes de las cenas
                 let dc="";//Para los dias de las cenas*!/
                //Si no hay MAP entonces la base es CP y no se dividen las fechas
                /!* if (map_saber===0 && sup_fb===0){
                     if (diner[0]!="" || diner[1]!="" ||diner[2]!="" || diner[3]!=""){
                         //Saber cuales tienen fecha
                         for (let i=0;i<4;i++){
                             if (fd[i]!=""){
                                 //Extraer mes
                                 let position=fd[i].indexOf("/");
                                 mc=fd[i].slice(position+1);
                                 dc=fd[i].slice(0,position);

                                 //Buscar en cual rango cae
                                 for (let e=0;e<piezas.length;e++){
                                     if (piezas[a].match("/")){
                                         pi = piez[e].split("/");
                                     }
                                     if (piezas[a].match("-")){
                                         pi = piez[e].split("-");
                                     }
                                     if (piezas[a].match(".")){
                                         pi = piez[e].split(".");
                                     }

                                     let me_end=pi[1];
                                     if (mc<=me_end){
                                         //Se tiene el rango
                                         rango[cont]=e;
                                         cont++;
                                         //Se cortan las fechas
                                         f[fch+1]=dc +"-"  + me_end + "-" +an;
                                         f[fch+2]=parseInt(dc)+1 +"-"  + me + "-" +an;
                                     }
                                 }

                             }
                             else{
                                 //Sino esta en el rango de fechas con cenas
                                 fch++;
                                 cont_fecha = fch;
                                 ffcha=a;
                             }
                         }





                     }else{
                         fch++;
                         cont_fecha = fch;
                         ffcha=a;
                     }
                 }else{
                     fch++;
                     cont_fecha = fch;
                     ffcha=a;
                 }*!/
                /!*else{
                    f_ini+=f[fch];
                    fch++;
                }*!/


                //console.log(f[a]);
            }*/
       }
    fech_c=true;
    }/*else {
        for (let a = 0; a < piezas.length; a++) {
            if (piezas[a].match("/")){
                p = piezas[a].split("/");
                pi = piez[a].split("/");
            }
            //if (piezas[a].match("."))
            else{
                if (piezas[a].match("-")){
                    p = piezas[a].split("-");
                    pi = piez[a].split("-");
                }else {
                    p = piezas[a].split(".");
                    pi = piez[a].split(".");
                }

            }
            //console.log(p);
            let an = p[2];
            let me = p[1];
            let dia = p[0];




            if(an.length===2){
                an="20"+an;
            }
            if(me.length>2){
                switch (me){
                    case "Jan":
                        me="01";
                        break;
                    case "Feb":
                        me="02";
                        break;
                    case "Mar":
                        me="03";
                        break;
                    case "Apr":
                        me="04";
                        break;
                    case "May":
                        me="05";
                        break;
                    case "Jun":
                        me="06";
                        break;
                    case "Jul":
                        me="07";
                        break;
                    case "Aug":
                        me="08";
                        break;
                    case "Sep":
                        me="09";
                        break;
                    case "Oct":
                        me="10";
                        break;
                    case "Nov":
                        me="11";
                        break;
                    default :
                        me="12";
                        break;
                }
            }
            /!*let rango=new Array(4);//Para saber cual fecha se uso para cortar
            let cont=0;//Sirve de iteracion para el rango*!/
            f[fch] = dia + "-" + me + "-" + an;
            fbd[fch] = an + "-" + me + "-" + dia;
            fch++;
            cont_fecha = fch;
            ffcha=a;


            /!* let mc="";//Es para el mes de las cenas
             let dc="";//Para los dias de las cenas*!/
            //Si no hay MAP entonces la base es CP y no se dividen las fechas
           /!* if (map_saber===0 && sup_fb===0){
                if (diner[0]!="" || diner[1]!="" ||diner[2]!="" || diner[3]!=""){
                    //Saber cuales tienen fecha
                    for (let i=0;i<4;i++){
                        if (fd[i]!=""){
                            //Extraer mes
                            let position=fd[i].indexOf("/");
                            mc=fd[i].slice(position+1);
                            dc=fd[i].slice(0,position);

                            //Buscar en cual rango cae
                            for (let e=0;e<piezas.length;e++){
                                if (piezas[a].match("/")){
                                    pi = piez[e].split("/");
                                }
                                if (piezas[a].match("-")){
                                    pi = piez[e].split("-");
                                }
                                if (piezas[a].match(".")){
                                    pi = piez[e].split(".");
                                }

                                let me_end=pi[1];
                                if (mc<=me_end){
                                    //Se tiene el rango
                                    rango[cont]=e;
                                    cont++;
                                    //Se cortan las fechas
                                    f[fch+1]=dc +"-"  + me_end + "-" +an;
                                    f[fch+2]=parseInt(dc)+1 +"-"  + me + "-" +an;
                                }
                            }

                        }
                        else{
                            //Sino esta en el rango de fechas con cenas
                            fch++;
                            cont_fecha = fch;
                            ffcha=a;
                        }
                    }





                }else{
                    fch++;
                    cont_fecha = fch;
                    ffcha=a;
                }
            }else{
                fch++;
                cont_fecha = fch;
                ffcha=a;
            }*!/
            /!*else{
                f_ini+=f[fch];
                fch++;
            }*!/


            //console.log(f[a]);
        }
    }*/
    ffcha=piezas.length;
            f=piezas;
            t=piez;

    return {f,t,cont_fecha,fech_c,ffcha,diaT,meT,fbd,rango};
}
/*let fecha_end=function (fechas,diner,fd,diaT,meT,map_saber,sup_fb){

    //Para extraer las fechas final
    let t = new Array(10);//Para las fechas
    let tdb = new Array(10);//Para las fechas de la bd
    let fch=0;
    piezas = fechas[1].split(" ");
    for (let a = 0; a < piezas.length; a++) {
        if (piezas[a].match("/")){
            p = piezas[a].split("/");
        }
        else{
            if (piezas[a].match("-")){
                p = piezas[a].split("-");
            }else{
                p = piezas[a].split(".");
            }

        }
        let an = p[2];
        let me = p[1];
        let dia = p[0];
        if(an.length===2){
            an="20"+an;
        }
        if(me.length>2){
            switch (me){
                case "Jan":
                    me="01";
                    break;
                case "Feb":
                    me="02";
                    break;
                case "Mar":
                    me="03";
                    break;
                case "Apr":
                    me="04";
                    break;
                case "May":
                    me="05";
                    break;
                case "Jun":
                    me="06";
                    break;
                case "Jul":
                    me="07";
                    break;
                case "Aug":
                    me="08";
                    break;
                case "Sep":
                    me="09";
                    break;
                case "Oct":
                    me="10";
                    break;
                case "Nov":
                    me="11";
                    break;
                default :
                    me="12";
                    break;
            }
        }
        if (map_saber===0 && sup_fb===0){
            if (diner24_ad!=""){
                if (dia===diaT && me===meT){
                    t[fch]="23-12-2021";
                    t[fch+1]="24-12-2021";
                    t[fch+2]="30-12-2021";
                    t[fch+3]="31-12-2021";
                    t[fch+4]=diaT+"-"+meT+"-2022";
                    tdb[fch]="2021-12-23";
                    tdb[fch+1]="2021-12-24";
                    tdb[fch+2]="2021-12-30";
                    tdb[fch+3]="2021-12-31";
                    tdb[fch+4]="2022-"+meT+"-"+diaT;
                    fch+=5;
                }
                else{
                    t[fch] = dia + "-" + me + "-" +an ;
                    tdb[fch] =an + "-" + me + "-" +dia ;
                    fch++;
                }
            }else{
                t[fch] =dia + "-" + me + "-" + an;
                tdb[fch] =an + "-" + me + "-" +dia ;
                fch++;
                //console.log("confirmado");
            }
        }
        else{
            t[fch] =dia + "-" + me + "-" + an;
            tdb[fch] =an + "-" + me + "-" +dia ;
            fch++;
        }

    }

    return {t,tdb};
}*/


module.exports={
    fecha_ini

}