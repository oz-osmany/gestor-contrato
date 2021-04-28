let habitacion=(service,ffcha,mups,diner,fech_c,rango,ish,iss,iva)=>{

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
    }else{
        for (let i = 0; i < service.length; i++)
            service[i]=service[i].split(" ");
    }
    //Para recoger las habitaciones de forma vertical H*
    let st_mup=new Array(10);
    //Para usar Sell en Cost
    let st_mup_cost=new Array(10);
    let st=new Array(10);
    let supls_cs=new Array(20);
    let supl_mup=new Array(10);
    let supls=new Array(10);
    let adult = new Array(40);
    let child= new Array(40);
    let adult_cost = new Array(40);
    let adult_cs = new Array(40);
    let reducc = new Array(40);//
    let reduc = new Array(40);
    let reducc_s = new Array(40);

    for (let ii = 0; ii < ffcha; ii++) {
        st[ii]="";
        st_mup[ii]="";
        st_mup_cost[ii]="";
        supls_cs[ii]="";
        supl_mup[ii]="";
        supls[ii]="";
        supls[ii]="";
        adult[ii]="";
        adult_cost[ii]="";
        adult_cs[ii]="";
        reducc[ii]="";
        reduc[ii]="";
        reducc_s[ii]="";
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
                    //Si hay MAP no se suma la cena a la habitacion
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
                //Se toman los valores para los Singles
                //Para los manuales de Sell
                st_mup[ii]+=Math.round((parseInt(service[i][ii])*(1+mups)/2)*(ish*iva)+parseInt(iss))+" ";
                //Para Cost-Sell
                st_mup_cost[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*((ish*iva)+parseInt(iss))/2.0)*2 +" ";

                //Se multiplica por 2 para Cost
                st[ii]+=(service[i][ii]) *(ish*iva)+parseInt(iss)+" ";

                //Se toman los valores para los dobles
                //Para Sell
                supl_mup[ii]+=Math.round((parseInt(service[i][ii])*(1+mups))*(ish*iva)+parseInt(iss))+" ";
                //Para Cost
                supls[ii]+=service[i][ii]*(ish*iva)+parseInt(iss)+" ";
                //Para Cost-Sell
                supls_cs[ii]+=Math.round((parseInt(service[i][ii])* (1 + mups))*(ish*iva)+parseInt(iss))+ " ";

                //Se toman los valores de los triples
                //Para Sell x pax
                reducc[ii]+=Math.round((parseInt(service[i][ii])*(1+mups)/ 3)*(ish*iva)+parseInt(iss))+" ";
                //Para Cost x pax
                // temp=(ser * 3) - ((reduct[i] * ser) / 100);
                reduc[ii]+=parseInt(service[i][ii])*(ish*iva)+parseInt(iss)+" ";
                //Para Cost-Sell
                //temp=parseFloat(temp.toFixed(2));
                reducc_s[ii]+=Math.round((parseInt(service[i][ii])*(1+mups)*(ish*iva)+parseInt(iss))/3.0)*3+" ";
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

       find=supls[ii].lastIndexOf(" ");
        supls[ii]=supls[ii].slice(0,find);
        supls[ii]=supls[ii].split(" ");

        find=supl_mup[ii].lastIndexOf(" ");
        supl_mup[ii]=supl_mup[ii].slice(0,find);
        supl_mup[ii]=supl_mup[ii].split(" ");

        find=supls_cs[ii].lastIndexOf(" ");
        supls_cs[ii]=supls_cs[ii].slice(0,find);
        supls_cs[ii]=supls_cs[ii].split(" ");

        position=adult_cs[ii].lastIndexOf(" ");
        adult_cs[ii]=adult_cs[ii].slice(0,position);
        adult_cs[ii]=adult_cs[ii].split(" ");

        position=adult_cost[ii].lastIndexOf(" ");
        adult_cost[ii]=adult_cost[ii].slice(0,position);
        adult_cost[ii]=adult_cost[ii].split(" ");

        position=adult[ii].lastIndexOf(" ");
        adult[ii]=adult[ii].slice(0,position);
        adult[ii]=adult[ii].split(" ");
    }
    let no_suple=false;
    return {st,st_mup,st_mup_cost,adult,adult_cost,adult_cs,supl_mup,supls_cs,supls,no_suple}



}
module.exports={habitacion};