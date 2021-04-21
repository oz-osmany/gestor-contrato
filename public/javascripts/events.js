let event=(evento,cont_fecha,service,resul_sup,ish,iss,iva,mups)=>{
    let eventos=new Array(10);
    let name_evento=new Array(10);
    let st=new Array(10);
    let st_mup=new Array(10);
    let st_mup_cost=new Array(10);
    let eventos_valor=new Array(10);
    let rec=new Array(10);
    let valor=new Array(10);
    if (evento != "") {
        for (let i=0;i<evento.length;i++){
            /*if (evento[i].match("/")){
                let position=evento[i].indexOf("/");
                eventos[i]=evento[i].slice(position+2);
                name_evento[i]=evento[i].slice(0,position);
            }*/
            evento[i]=evento[i].split(" ");

        }
        for (let i=0;i<service.length;i++){

            service[i]=service[i].split(" ");
        }


        for (let ii = 0; ii < service.length ; ii++) {
            st[ii]="";
            st_mup[ii]="";
            st_mup_cost[ii]="";
            rec[ii]="";
            for (let i = 0; i < evento.length; i++) {
                if (evento[i] === "") {
                    evento.length = evento.length - 1;
                    break;
                }


                for (let e=0;e<cont_fecha;e++){
                    eventos_valor[ii] = evento[i][e];
                    if(resul_sup[e]=== e){
                        eventos_calc[ii]+=0+" ";//Para los suplementos con excepciones
                    }
                    else {
                       /* //Para Sell de los manuales
                       // st[ii] += parseInt(eventos_valor[i])+ parseInt(service[e][ii])+" ";
                        st_mup[ii]+=Math.round(((parseInt(eventos_valor[i])+ parseInt(service[e][ii]))*(1+mups))*((ish*iva)+parseInt(iss)))+" ";
                        //Para Cost
                        st[ii]+=(parseInt(eventos_valor[i])+parseInt(service[e][ii]))*2+" ";
                        //Para Cost-Sell
                        st_mup_cost[ii]+=Math.round((parseInt(eventos_valor[i])+parseInt(service[e][ii])*(1+mups))*2*((ish*iva)+parseInt(iss))/2.0)*2+" ";

*/
                        rec[ii]+=parseInt(service[ii][e])+parseInt(eventos_valor[ii])+" ";
                    }

                }
                service[ii]=rec[ii];
                position=service[ii].lastIndexOf(" ");
                service[ii]=service[ii].slice(0,position);
                //service[ii]=service[ii].split(" ");

            }

        }
        valor[3]=1;
    }
    return {service}
}
module.exports={
    event
}