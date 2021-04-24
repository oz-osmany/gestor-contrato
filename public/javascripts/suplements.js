let singles=(single,fech_c,ffcha,mups,service,total_resul_sup,rango,diner)=>{
    let supls_cs=new Array(20);
    let supl_mup=new Array(10);
    let supls=new Array(10);
    let valor=0;
    let no_suple=0;
    let corrige="";

    if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){

        //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
        if(fech_c===true){
            //Iterar en los servicios
            for (let e=0;e<single.length;e++){
                //Para saber si hay espacios vacios
                if(single[e]===""){
                    single.length=single.length-1;
                    break
                }
                single[e]=single[e].split(" ");
                //Saber cuantas divisiones hay segun "rango"
                for (let i=0;i<rango.length;i++){
                    //validar "rango"
                    if (rango[i]){
                        //Tomo el valor de service en la posicion de rango
                        corrige=single[e][rango[i]];
                        //Inserto dos veces ese valor en la posicion de rango
                        single[e].splice(rango[i],0,corrige,corrige);
                    }

                }
            }


        }
    }



    //Procesar error en los Suplementos
    if(service.length!=single.length+total_resul_sup){
        //resp.send("Error!!! Deben coincidir la cantidad de suplementos con las habitaciones. Verique si hay excepciones");
        return {no_suple};
    }else{
       /* for (let e=0;e<single.length;e++){
            single[e]=single[e].split(" ");
        }*/
        for (let ii = 0; ii < ffcha; ii++) {
            supls[ii]="";
            supl_mup[ii]="";
            supls_cs[ii]="";
            for (let i = 0; i < single.length; i++) {

                if(single[i].length===0){//Si hay algun espacio lo elimine
                    single.length=single.length-1;
                    break;
                }
                //Para Sell
                supl_mup[ii]+=Math.round(parseInt(single[i][ii])+(parseInt(single[i][ii])*mups))+" ";

                //Para Cost
                supls[ii]+=single[i][ii]+" ";
                //Para Cost-Sell
                supls_cs[ii]+=Math.round(parseInt(single[i][ii])* (1 + mups))+ " ";
            }

            let find=supls[ii].lastIndexOf(" ");
            supls[ii]=supls[ii].slice(0,find);
            supls[ii]=supls[ii].split(" ");

            find=supl_mup[ii].lastIndexOf(" ");
            supl_mup[ii]=supl_mup[ii].slice(0,find);
            supl_mup[ii]=supl_mup[ii].split(" ");

            find=supls_cs[ii].lastIndexOf(" ");
            supls_cs[ii]=supls_cs[ii].slice(0,find);
            supls_cs[ii]=supls_cs[ii].split(" ");
            //console.log(supl_mup[ii]);
            valor=1;
            no_suple=1;
        }
        //}
        return {supl_mup,supls_cs,supls,valor,no_suple}
    }

}
let suplements=(suplements,diner,resul_sup,service,mups,fech_c,
                ffcha,map_saber,sup_fb,total_resul_sup,rango,ish,iss,iva)=>{

    let corrige = "";
    let supls = new Array(40);//Para el calculo
    let supls_cs=new Array(10);
    let supl_mup=new Array(10);
    let suply=new Array(10);
    let valor=0;
    let cont=0;
    let no_suple=0;
    let saber=false;

                    //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
                    if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                        if (fech_c===true) {//Revisarrrrrrrr

                            //Iterar en los servicios
                            for (let e=0;e<suplements.length;e++){
                                //Para saber si hay espacios vacios
                                if(suplements[e]===""){
                                    suplements.length=suplements.length-1;
                                    break
                                }
                                suplements[e]=suplements[e].split(" ");
                                //Saber cuantas divisiones hay segun "rango"
                                for (let i=0;i<rango.length;i++){
                                    //validar "rango"
                                    if (rango[i]){
                                        //Tomo el valor de service en la posicion de rango
                                        corrige=suplements[e][rango[i]];
                                        //Inserto dos veces ese valor en la posicion de rango
                                        suplements[e].splice(rango[i],0,corrige,corrige);
                                    }

                                }
                            }

                        }
                    }

               // }

//Procesar error en los Suplementos
    if(service.length!=(suplements.length+total_resul_sup)){
        //resp.send("Error!!! Deben coincidir la cantidad de suplementos con las habitaciones. Verique si hay excepciones");
        return {no_suple};
    }else{
                let cero = 0;
                for (let ii = 0; ii < ffcha; ii++) {//Para recoger despues de cada servicio, por fecha
                    //Suplementos por porciento
                    cont = 0;
                    supls[ii] = "";
                    supl_mup[ii] = "";
                    supls_cs[ii]="";

                    for (let i = 0; i < suplements.length; i++) {

                        suply[i] = suplements[i][ii];

                    }
                    //Recoger los suplementos segun los servicios
                    for (let e = 0; e < service.length; e++) {
                        let ser = service[e][ii];
                        ser=parseFloat(ser);
                        let sup = parseInt(suply[e]);

                        if (resul_sup[e] === e) {
                            supls[ii] += 0 + " ";//Para los suplementos con excepciones
                            supl_mup[ii] += 0 + " ";

                            //suplements[e]+=supls[e];
                        } else {


                            if (suply[e].match("%")) {
                                //Se calculan los valores con %
                                //supls[ii] += Math.round((ser + (ser * sup / 100))) + " ";
                                //Seguir con esto para poner los precios por cenas segun la fecha
                                if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                                    if (map_saber===1 || sup_fb===1){
                                        //Si hay MAP no se suma la cena a la habitacion
                                        supl_mup[ii] += Math.round((ser + (ser * sup / 100)) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                        //Para Cost
                                        let temp=(ser + (ser * sup / 100))*(ish*iva)+parseInt(iss);
                                        temp=temp.toFixed(2);
                                        supls[ii] += temp+" ";
                                        supls_cs[ii]+=Math.round((temp* (1 + mups))*(ish*iva)+parseInt(iss))+ " ";
                                        saber=false;
                                    }else{
                                        //No hay MAP por lo que se suma la cena
                                        //Cena para el 24-12
                                        if (ii === rango[cont]+1) {
                                            supl_mup[ii] += Math.round(((ser + (ser * sup / 100)) + parseInt(diner[cont+4])) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                            //supls[ii] += sup + ser + parseInt(diner24_ad) +" ";
                                            //Para Cost
                                            let temp=(ser + (ser * sup / 100)+ parseInt(diner[cont+4]))*(ish*iva)+parseInt(iss);
                                            temp=temp.toFixed(2);
                                            supls[ii] += temp+" ";
                                            supls_cs[ii]+=Math.round(((temp* (1 + mups))+ parseInt(diner[cont+4]))*(ish*iva)+parseInt(iss))+ " ";
                                            saber=true;
                                        } else {
                                            //Cena para el 31-12
                                            /*if (ii === 4) {
                                                supl_mup[ii] += Math.round(((ser + (ser * sup / 100)) + parseInt(diner31_ad)) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                                //supls[ii] += sup + ser + parseInt(diner31_ad) +" ";
                                                //Para Cost
                                                let temp=ser +((ser * sup / 100)+ parseInt(diner31_ad)*(ish*iva)+parseInt(iss));
                                                temp=temp.toFixed(2);
                                                supls[ii] += temp+" ";
                                                supls_cs[ii]+=Math.round((temp* (1 + mups)+ parseInt(diner31_ad))*(ish*iva)+parseInt(iss))+ " ";
                                            }
                                            else {*/
                                                //Para Sell de los manuales
                                                supl_mup[ii] += Math.round((ser + (ser * sup / 100)) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                                //Para Cost
                                                let temp=ser + (ser * sup / 100);
                                                temp=parseFloat(temp.toFixed(2));
                                                supls[ii] += temp+" ";
                                                supls_cs[ii]+=Math.round((temp* (1 + mups))*(ish*iva)+parseInt(iss))+ " ";
                                            saber=false;
                                           // }
                                        }
                                    }

                                }else{
                                    //Para Sell de los manuales

                                    supl_mup[ii] += Math.round((ser + (ser * sup / 100)) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                    //Para Cost
                                    let temp=ser + (ser * sup / 100);
                                    temp=parseFloat(temp.toFixed(2));
                                    supls[ii] += temp+" ";

                                    supls_cs[ii]+=Math.round(temp* (1 + mups)*(ish*iva)+parseInt(iss))+ " ";
                                    saber=false;
                                }

                            }
                            else {
                                //NO tiene % por tanto se suman los valores
                                //para poner los precios por cenas segun la fecha
                                if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                                    if (map_saber===1 || sup_fb===1){
                                        //Si hay MAP no se suma la cena a la habitacion
                                        supl_mup[ii] += Math.round((sup + ser) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                        //Para Cost
                                        let temp=(sup + ser)*(ish*iva)+parseInt(iss);
                                        temp=temp.toFixed(2);
                                        supls[ii] += temp+" ";
                                        supls_cs[ii]+=Math.round((temp* (1 + mups))*(ish*iva)+parseInt(iss))+ " ";
                                        saber=false;
                                    }else{
                                        if (ii === rango[cont]+1) {
                                            supl_mup[ii] += Math.round(((sup + ser) + parseInt(diner[cont+4])) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                            //Para Cost
                                            let temp=(sup + ser+ parseInt(diner[cont+4])*(ish*iva)+parseInt(iss));
                                            temp=parseFloat(temp.toFixed(2));
                                            supls[ii] += temp+" ";
                                            supls_cs[ii]+=Math.round(((temp* (1 + mups))+ parseInt(diner[cont+4]))*(ish*iva)+parseInt(iss))+ " ";
                                            saber=true;
                                        } else {
                                           /* if (ii === 4) {
                                                supl_mup[ii] += Math.round(((sup + ser) + parseInt(diner31_ad)) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                                //Para Cost
                                                let temp=(sup + ser+ parseInt(diner31_ad)*(ish*iva)+parseInt(iss));
                                                temp=parseFloat(temp.toFixed(2));
                                                supls[ii] += temp+" ";
                                                supls_cs[ii]+=Math.round(((temp* (1 + mups))+ parseInt(diner24_ad))*(ish*iva)+parseInt(iss))+ " ";
                                            } else {*/
                                                supl_mup[ii] += Math.round((sup + ser) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";
                                                //Para Cost
                                                let temp=sup + ser;
                                                temp=parseFloat(temp.toFixed(2));
                                                supls[ii] += temp+" ";
                                                supls_cs[ii]+=Math.round(temp* (1 + mups)*(ish*iva)+parseInt(iss))+ " ";
                                            saber=false;
                                            }
                                       // }
                                    }

                                }else{

                                    supl_mup[ii] += Math.round((sup + ser) * (1 + mups)*(ish*iva)+parseInt(iss)) + " ";

                                    //Para Cost
                                    let temp=sup + ser;
                                    temp=parseFloat(temp.toFixed(2));
                                    supls[ii] += temp+" ";
                                    supls_cs[ii]+=Math.round(temp* (1 + mups)*(ish*iva)+parseInt(iss))+ " ";
                                    saber=false;
                                }

                                //supl_mup[ii]+=Math.round((sup+ ser) + ((sup+ ser) *mups) )+" ";
                                //}


                            }
                            cont++;
                        }
                    }
                    if(saber===true){
                        cont++;
                    }
                    position = supls[ii].lastIndexOf(" ");
                    supls[ii] = supls[ii].slice(0, position);
                    supls[ii] = supls[ii].split(" ");

                    position = supl_mup[ii].lastIndexOf(" ");
                    supl_mup[ii] = supl_mup[ii].slice(0, position);
                    supl_mup[ii] = supl_mup[ii].split(" ");

                    position = supls_cs[ii].lastIndexOf(" ");
                    supls_cs[ii] = supls_cs[ii].slice(0, position);
                    supls_cs[ii] = supls_cs[ii].split(" ");

                    valor= 1;
                    no_suple=1;

                }
           // }
            return {supl_mup,supls,valor,supls_cs,no_suple}
        }





}
module.exports={ singles, suplements }