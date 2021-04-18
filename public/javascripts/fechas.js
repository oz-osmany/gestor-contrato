//Para extraer las fechas inicio
let fecha_ini=function (fechas,diner24_ad,map_saber,sup_fb){
    let cont_fecha = 0;//Saber cuantas fechas hay
    let f = new Array(10);//Para las fechas
    let fbd = new Array(10);//Para las fechas de la bd

//let extraer = fechas[0].slice(5);
    let piezas = fechas[0].split(" ");
    let piez= fechas[1].split(" ");
    let p="";
    let pi="";
    let fch=0;
    let fech_c=false;//Para saber si hay cenas
    let ffcha=0;
    let diaT = "";
    let meT="";
    let f_ini="";
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

        f[fch] = dia + "-" + me + "-" + an;
        fbd[fch] = an + "-" + me + "-" + dia;
        //Si no hay MAP entonces la base es CP y no se dividen las fechas
        if (map_saber===0 && sup_fb===0){
            if (diner24_ad!=""){
                if (dia==="22"){
                    diaT = pi[0];
                    meT=pi[1];
                    f[fch+1]="24-" + me + "-" +an;
                    f[fch+2]="25-" + me + "-" +an;
                    f[fch+3]="31-" + me + "-" +an;
                    f[fch+4]="01-01-2022";
                    fbd[fch+1]=an+"-"+me+"-24";
                    fbd[fch+2]=an+"-"+me+"-25";
                    fbd[fch+3]=an+"-"+me+"-31";
                    fbd[fch+4]="2021-01-01";
                    fch+=5;
                    fech_c=true;
                    //f_ini+=f[fch];
                    //piezas.length+=4;
                }
                else{
                    fch++;
                    cont_fecha = fch;
                    ffcha=a;
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
        }
        /*else{
            f_ini+=f[fch];
            fch++;
        }*/


        //console.log(f[a]);
    }

    return {f,cont_fecha,fech_c,ffcha,diaT,meT,fbd};
}
let fecha_end=function (fechas,diner24_ad,diaT,meT,map_saber,sup_fb){

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
}


module.exports={
    fecha_ini,
    fecha_end
}