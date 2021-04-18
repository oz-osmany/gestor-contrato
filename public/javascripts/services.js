let services=(service,cont_fecha,diner24_ad,diner31_ad,mups,fech_c,ffcha,ish,iss,iva)=>{
    let cont = 0;

    let pto = 0;//Para recoger los valores
    let st = new Array(40);

    let services = new Array(20);
    let corrige = new Array(2);
    let corrige1 = new Array(2);
    let corrige2 = new Array(2);

    let map=0;//Para saber si hay MAP en las habitaciones

    for (let i=0;i<service.length;i++){
        if(service[i]===""){//Para saber si hay espacios vacios
            service.length=service.length-1;
            break
        }


            service[i]=service[i].split(" ");



        services[cont]=service[i];
        corrige[cont]="";
        corrige1[cont]="";
        corrige2[cont]="";


        if(diner24_ad!="" || diner31_ad!=""){

            //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
            if(fech_c===true){

                for (let e=2;e<ffcha+1;e++){
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


        cont++;
        //console.log(service[i]);
    }
    cont=0;

    //Para recoger las habitaciones de forma vertical H*
    let st_mup=new Array(10);
    //Para usar Sell en Cost
    let st_mup_cost=new Array(10);
    cont=0;
    //ver cont_fecha
    for (let ii = 0; ii < cont_fecha; ii++) {
        st[ii]="";
        st_mup[ii]="";
        st_mup_cost[ii]="";

        for (let i = 0; i < service.length; i++) {
            //Si hay algun espacio lo elimine
            if(service[i].length===0){
                service.length=service.length-1;
                break;
            }
            //Si los valores vienen con $delante que se lo quite
            let pos=service[i][ii].indexOf("$");
            if (pos>=0){
                service[i][ii]=service[i][ii].slice(1);
            }
            if (service[i][ii].match(",")){
                service[i][ii]=service[i][ii].replace(",","");
            }
            if(diner24_ad!="" || diner31_ad!=""){
                if (map===1){
                    //Si ha MAP no se suma la cena a la habitacion
                    //Para los Sell de los manuales
                    st_mup[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                    //Para Cost-Sell
                    st_mup_cost[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";
                    //Se multiplica por 2 para Cost
                    st[ii]+=((service[i][ii])*2)*(ish*iva)+parseInt(iss) +" ";
                }else{
                    //Como no hay MAP se suma el valor de la cena a la habitacion
                    if (ii===2){
                        //Para la cena del 24-12
                        st_mup[ii]+=Math.round(((parseInt(service[i][ii])+parseInt(diner24_ad))*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                        st_mup_cost[ii]+=Math.round(((parseInt(service[i][ii])+parseInt(diner24_ad))*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";
                        st[ii]+=(parseInt(service[i][ii])+parseInt(diner24_ad))*2*(ish*iva)+parseInt(iss) +" ";//Se multiplica por 2 para Cost
                    }else{
                        if (ii===4){
                            //Para la cena del 31-12
                            st_mup[ii]+=Math.round(((parseInt(service[i][ii])+parseInt(diner31_ad))*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                            st_mup_cost[ii]+=Math.round((((parseInt(service[i][ii])+parseInt(diner31_ad))*(1+mups)))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";
                            st[ii]+=(parseInt(service[i][ii])+parseInt(diner31_ad))*2*((ish*iva)+iss) +" ";//Se multiplica por 2 para Cost
                        }else{
                            //Para Sell de los manuales
                            st_mup[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*((ish*iva)+parseInt(iss)))+" ";
                            //Para Cost-Sell
                            st_mup_cost[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";
                            //Para Cost
                            st[ii]+=(service[i][ii])*2+" ";//Se multiplica por 2 para Cost
                        }
                    }
                }

            }else{
                //Para los manuales de Sell
                st_mup[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                //Para Cost-Sell
                st_mup_cost[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2 +" ";

                //Se multiplica por 2 para Cost
                st[ii]+=(service[i][ii])*2 *(ish*iva)+parseInt(iss)+" ";
            }

        }

        let find=st[ii].lastIndexOf(" ");
        st[ii]=st[ii].slice(0,find);
        st[ii]=st[ii].split(" ");

        find=st_mup[ii].lastIndexOf(" ");
        st_mup[ii]=st_mup[ii].slice(0,find);
        st_mup[ii]=st_mup[ii].split(" ");

        find=st_mup_cost[ii].lastIndexOf(" ");
        st_mup_cost[ii]=st_mup_cost[ii].slice(0,find);
        st_mup_cost[ii]=st_mup_cost[ii].split(" ");
        // console.log(st_mup[ii]);
    }
    return {st,st_mup,st_mup_cost}
}
let nombres=(serv_name)=>{
    let name_habit=new Array(20);
    for (let i=0;i<serv_name.length;i++){
        let position=serv_name[i].indexOf("/");
        if(position>0){
            name_habit[i]=serv_name[i].slice(0,position);
        }else {
            name_habit[i]=serv_name[i].slice(0);
        }

    }

    return {name_habit}
}
/*let planes=(service)=>{
    let map=0;
    for (let i=0;i<service.length;i++){

        if (service[i].match("MAP/HB")){
            map=1;
        }

        //console.log(name_habit[i]);
    }
    return {map};
}*/
module.exports={
    services,
    nombres
}