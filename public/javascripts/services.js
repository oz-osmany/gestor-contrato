let services=(service,cont_fecha,diner,mups,fech_c,ffcha,rango,ish,iss,iva)=>{
    let cont = 0;

    let pto = 0;//Para recoger los valores
    let st = new Array(40);
    let corrige ="";
    let map=0;//Para saber si hay MAP en las habitaciones
    let saber=false;

        if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){

            //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
            if(fech_c===true){
                //Iterar en los servicios
                for (let e=0;e<service.length;e++){
                    //Para saber si hay espacios vacios
                    if(service[e]===""){
                        service.length=service.length-1;
                        break
                    }
                    service[e]=service[e].split(" ");
                    //Saber cuantas divisiones hay segun "rango"
                    for (let i=0;i<rango.length;i++){
                        //validar "rango"
                        if (rango[i]){
                            //Tomo el valor de service en la posicion de rango
                            corrige=service[e][rango[i]];
                            //Inserto dos veces ese valor en la posicion de rango
                            service[e].splice(rango[i],0,corrige,corrige);
                        }

                    }
                }


            }
        }

    //Para recoger las habitaciones de forma vertical H*
    let st_mup=new Array(10);
    //Para usar Sell en Cost
    let st_mup_cost=new Array(10);
    cont=0;
    //ver cont_fecha
    for (let ii = 0; ii < ffcha; ii++) {
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
                if (pos===0){
                    service[i][ii]=service[i][ii].slice(1);
                }else {
                    //El $ eata al final
                    service[i][ii]=service[i][ii].slice(0,pos);
                }

            }
            if (service[i][ii].match(",")){
                service[i][ii]=service[i][ii].replace(",","");
            }
            if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                if (map===1){
                    //Si ha MAP no se suma la cena a la habitacion
                    //Para los Sell de los manuales
                    st_mup[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                    //Para Cost-Sell
                    st_mup_cost[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";
                    //Se multiplica por 2 para Cost
                    st[ii]+=((service[i][ii])*2)*(ish*iva)+parseInt(iss) +" ";
                    saber=false;
                }else{
                    //Como no hay MAP se suma el valor de la cena a la habitacion
                    if (ii===rango[cont]+1){

                        st_mup[ii]+=Math.round(((parseInt(service[i][ii])+parseInt(diner[cont+4]))*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                        st_mup_cost[ii]+=Math.round(((parseInt(service[i][ii])+parseInt(diner[cont+4]))*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";
                        st[ii]+=(parseInt(service[i][ii])+parseInt(diner[cont+4]))*2*(ish*iva)+parseInt(iss) +" ";//Se multiplica por 2 para Cost
                        saber=true;//cont++;
                    }else{
                       /* if (ii===4){
                            //Para la cena del 31-12
                            st_mup[ii]+=Math.round(((parseInt(service[i][ii])+parseInt(diner31_ad))*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                            st_mup_cost[ii]+=Math.round((((parseInt(service[i][ii])+parseInt(diner31_ad))*(1+mups)))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";
                            st[ii]+=(parseInt(service[i][ii])+parseInt(diner31_ad))*2*((ish*iva)+iss) +" ";//Se multiplica por 2 para Cost
                        }else{*/
                            //Para Sell de los manuales
                            st_mup[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*((ish*iva)+parseInt(iss)))+" ";
                            //Para Cost-Sell
                            st_mup_cost[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";
                            //Para Cost
                            st[ii]+=(service[i][ii])*2+" ";//Se multiplica por 2 para Cost
                            saber=false;
                        //}
                    }
                }

            }else{
                //Para los manuales de Sell
                st_mup[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                //Para Cost-Sell
                st_mup_cost[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2 +" ";

                //Se multiplica por 2 para Cost
                st[ii]+=(service[i][ii])*2 *(ish*iva)+parseInt(iss)+" ";
                saber=false;
            }

        }
        if(saber===true){
            cont++;
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