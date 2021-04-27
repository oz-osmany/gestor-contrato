let reduccion=(reduction,fech_c,mups,ffcha,service,diner,map_saber,sup_fb,resul_red,resul_sel,rango,ish,iss,iva)=>{
    let reductions = new Array(40);
    let reduc = new Array(40);//Para el calculo de cost
    let reducc = new Array(40);//Para el calculo de sell
    let reducc_s = new Array(40);//Para el calculo cost-sell
    let reduct = new Array(40);//Para el transpaso
    let name_red = new Array(40);
    let corrige=new Array(10);
    let saber=false;
    let child = new Array(40);
    let adult = new Array(40);
    let child_cost = new Array(40);
    let adult_cost = new Array(40);
    let adult_cs = new Array(40);

    let valor=0;
    let divide=3;
    let cont=0;
    let cont1=0;
   /* if(diner24 === ""){
        diner24=0;
    }
    if(diner31 === ""){
        diner31=0;
    }*/
    if (reduction != "") {
             //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
        if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
            if(fech_c===true){
                    //Iterar en los servicios
                for (let e=0;e<reduction.length;e++){
                        //Para saber si hay espacios vacios
                   if(reduction[e]===""){
                      reduction.length=reduction.length-1;
                       break
                        }
                        reduction[e]=reduction[e].split(" ");
                        //Saber cuantas divisiones hay segun "rango"
                        for (let i=0;i<rango.length;i++){
                            //validar "rango"
                            if (rango[i]){
                                //Tomo el valor de service en la posicion de rango
                                corrige=reduction[e][rango[i]];
                                //Inserto dos veces ese valor en la posicion de rango
                                reduction[e].splice(rango[i],0,corrige,corrige);
                            }

                        }
                    }

                }
            }


        //Se empieza a tomar los valores de reduccion por fechas y calcularlos con las habitaciones.
        for (let ii = 0; ii < ffcha; ii++) {
            reduc[ii]="";
            reducc[ii]="";
            reducc_s[ii]="";
            //console.log(reduccion[cont]);
            for (let i = 0; i < reduction.length; i++) {

                reduct[i]=reduction[i][ii];
                if(reduct[i].match("%")){
                    position=reduct[i].indexOf("%");
                    let g=reduct[i].slice(0,position);
                    reduct[i]=g;
                }
                //Si el contrato tiene free en vez de 100 lo convierte.
                if(reduct[i].match("FREE")||reduct[i].match("Free")){
                    reduct[i]="100";
                }


                for (let e = 0; e < service.length; e++) {
                    //Recorrer todos los servicios para cada reduccion
                    let ser=parseInt(service[e][ii]);

                    //Saber si es la reduccion con excepcion
                    if(resul_sel[i]===i){
                        //Para los que fueron seleccionados
                        if (resul_red[e]===e){
                            reduc[ii]+=0+" ";
                            reducc[ii]+=0+" ";
                            reducc_s[ii]+=0+" ";

                        }
                        else{
                            //Para los que no se seleccionaron y tienen que calcularse
                            if (map_saber===0 && sup_fb===0){
                                //Como no hay MAP se dividen las fechas y se suma la cena a su fecha correspondiente
                                if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                                    //Hay cena para el 24/12
                                    if (ii===rango[cont1]+1){
                                        //La primera vez que entra es para las cenas de los niños
                                        if (cont===0){

                                            if (reduct[i]==="100"||reduct[i]==="100.00"){
                                                //Si el niño es free no se calcula
                                                reduc[ii]+=0+" ";
                                                reducc[ii]+="Free ";
                                                reducc_s[ii]+=0+" ";
                                            }else{
                                                /* Si no hay reducciones disponibles para los niños,
                                                ***para costo se pone 0 y para venta se pone N/A*/
                                                if (reduct[i]==="N/A"){
                                                    reduc[ii] += 0+" ";
                                                    reducc[ii]+="N/A ";
                                                    reducc_s[ii]+=0+" ";
                                                }else{
                                                    //Para Cost
                                                    reduc[ii]+=((ser*reduct[i]/100)+(parseInt(diner[cont1])))*(ish*iva)+parseInt(iss)+" ";
                                                    //Para Sell
                                                    reducc[ii]+=Math.round(((ser*reduct[i]/100)+(parseInt(diner[cont1])))*(1+mups)*(ish*iva)+parseInt(iss))+" ";

                                                }

                                            }

                                        }else{
                                            //Para las cenas de los adultos
                                            if (reduct[i]==="N/A"){
                                                reduc[ii] += 0+" ";
                                                reducc[ii]+="N/A ";
                                                reducc_s[ii]+=0+" ";
                                            }else{

                                                //Para Cost x Pax
                                                //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner24_ad))+" ";
                                                //Para Sell
                                                reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner[cont+4])))*(1+mups)*(ish*iva)+parseInt(iss))+" ";

                                                //Para Cost x habitacion
                                                let temp=((ser * 3) - ((reduct[i] * ser) / 100))+(parseInt(diner[cont+4]));
                                                reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                                //Para Cost-Sell
                                                reducc_s[ii]+=Math.round(temp*(1+mups)*(ish*iva)+parseInt(iss)/3.0)*3+" ";
                                            }

                                        }
                                        saber=true;
                                    }else{
                                        //Para el dia 31/12

                                        switch (reduct[i]){
                                            case "100.00":
                                                reducc[ii]+="Free ";
                                                reduc[ii]+=0+" ";
                                                break;
                                            case "100":
                                                reducc[ii]+="Free ";
                                                reduc[ii]+=0+" ";
                                                break;
                                            case "50.00":
                                                //Para Sell x pax
                                                reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                                //Para Cost x Habitacion
                                                //Para niños
                                                if(cont===0){
                                                    reduc[ii]+= ((ser*reduct[i]/100)*(ish*iva)+parseInt(iss))+" ";
                                                }else{
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                                    //Para Cost-Sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round(temp*(1+mups)*(ish*iva)+parseInt(iss)/3.0)*3 +" ";
                                                }

                                                //Para Cost x Pax
                                                //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                break;
                                            case "50":
                                                //Para Sell x pax
                                                reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                                //Para Cost x Habitacion
                                                //Para niños
                                                if(cont===0){
                                                    reduc[ii]+= ((ser*reduct[i]/100)*(ish*iva)+parseInt(iss))+" ";
                                                }else{
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                                    //Para Cost-Sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round(temp*(1+mups)*(ish*iva)+parseInt(iss)/3.0)*3 +" ";
                                                }
                                                break;
                                            case "N/A":
                                                reducc[ii]+="N/A ";
                                                reduc[ii]+=0+" ";
                                                break;
                                            default:
                                                //Para los niños
                                                if(cont===0){
                                                    //Para Cost
                                                    let red=reduct[i];
                                                    reduc[ii]+= (ser*red/100)*(ish*iva)+parseInt(iss)+" ";
                                                    //reduc[ii]+=Math.round((ser * 3) - ((reduct[i] * ser) / 100))+" ";
                                                    //Para Sell x pax
                                                    reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                                }else{
                                                    //Para adultos
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                                    //Para Cost x pax
                                                    //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                    //Para Cost-sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round(temp*(1+mups)*(ish*iva)+parseInt(iss)/3.0)*3+" ";
                                                    //Para Sell x pax
                                                    reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)*(ish*iva)+parseInt(iss))+" ";

                                                }

                                        }
                                        saber=false;
                                        //}
                                    }

                                }
                                else{
                                    //No hay cena y NO es MAP
                                    if(reduct[i].match("N/A")){
                                        reduc[ii]+=0+" ";
                                        reducc[ii]+="N/A ";
                                        reducc_s[ii]+=0+" ";
                                    }else {
                                        //La primera vez que entra es para las cenas de los niños
                                        if (cont===0){
                                            if(reduct[i]==="100"){
                                                reduc[ii]+=0+" ";
                                                reducc[ii]+="Free ";
                                                reducc_s[ii]+="Free ";
                                            }else{
                                                //Para Cost x Pax
                                                reduc[ii]+=(ser*reduct[i]/100)*(ish*iva)+parseInt(iss)+" ";
                                                //Para Cost x Habitacion
                                                //reduc[ii]+=Math.round((ser * 3) - ((reduct[i] * ser) / 100))+" ";
                                                //Para Sell x pax
                                                reducc[ii]+=Math.round(((ser*reduct[i]/100))*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                            }


                                        }else {
                                            //Para las cenas de los adultos
                                            //Para Sell x pax
                                            reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)*(ish*iva)+parseInt(iss))+" ";
                                            //Para Cost x pax
                                            //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                            //Para Cost x habitacion
                                            let temp=(ser * 3) - ((reduct[i] * ser) / 100);
                                            reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                            //Para Cost-Sell
                                            temp=parseFloat(temp.toFixed(2));
                                            reducc_s[ii]+=Math.round(temp*(1+mups)*(ish*iva)+parseInt(iss)/3.0)*3+" ";
                                        }


                                    }
                                    saber=false;
                                }
                            }
                            else {
                                //EL programa es MAP por lo que no se suma la cena. El valor de la cena se pone aparte.
                                if(reduct[i].match("N/A")){
                                    reduc[ii]+=0+" ";
                                    reducc[ii]+="N/A ";
                                    reducc_s[ii]+=0+" ";
                                }else {

                                    //La primera vez que entra es para las cenas de los niños
                                    if (cont===0){

                                        if (reduct[i]==="100"){
                                            reduc[ii]+=0+" ";
                                            reducc[ii]+="Free ";
                                            reducc_s[ii]+="Free ";
                                        }else{
                                            //Para Cost
                                            reduc[ii]+=(ser*reduct[i]/100)*(ish*iva)+parseInt(iss)+" ";
                                            //Para Sell x pax
                                            reducc[ii]+=Math.round(((ser*reduct[i]/100))*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                        }


                                    }else {
                                        //Para las cenas de los adultos
                                        //Para Sell
                                        reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)*(ish*iva)+parseInt(iss))+" ";
                                        //Para Cost x habitacion
                                        let temp=(ser * 3) - ((reduct[i] * ser) / 100);
                                        reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                        //Para Cost-Sell
                                        temp=parseFloat(temp.toFixed(2));
                                        reducc_s[ii]+=Math.round(temp*(1+mups)*(ish*iva)+parseInt(iss)/3.0)*3+" ";
                                    }


                                }
                                saber=false;
                            }
                        }
                    }
                    //Aqui terminan las excepciones
                    else{
                        //Saber si hubo MAP para saber si se le suma la cena al valor de la habitacion
                        if (map_saber===0 && sup_fb===0){
                            //Como no hay MAP se dividen las fechas y se suma la cena a su fecha correspondiente
                            if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                                //Hay cena para el 24/12
                                if (ii===rango[cont1]+1){
                                    //La primera vez que entra es para las cenas de los niños
                                    if (cont===0){

                                        if (reduct[i]==="100"||reduct[i]==="100.00"){
                                            //Si el niño es free no se calcula
                                            reduc[ii]+=0+" ";
                                            reducc[ii]+="Free ";
                                            reducc_s[ii]+=0+" ";
                                        }else{
                                            /* Si no hay reducciones disponibles para los niños,
                                            ***para costo se pone 0 y para venta se pone N/A*/
                                            if (reduct[i]==="N/A"){
                                                reduc[ii] += 0+" ";
                                                reducc[ii]+="N/A ";
                                                reducc_s[ii]+=0+" ";
                                            }else{
                                                //Para Cost
                                                reduc[ii]+=((ser*reduct[i]/100)+(parseInt(diner[cont1])))*(ish*iva)+parseInt(iss)+" ";
                                                //Para Sell
                                                reducc[ii]+=Math.round(((ser*reduct[i]/100)+(parseInt(diner[cont1])))*(1+mups)*(ish*iva)+parseInt(iss))+" ";

                                            }

                                        }

                                    }else{
                                        //Para las cenas de los adultos
                                        if (reduct[i]==="N/A"){
                                            reduc[ii] += 0+" ";
                                            reducc[ii]+="N/A ";
                                            reducc_s[ii]+=0+" ";
                                        }else{

                                            //Para Cost x Pax
                                            //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner24_ad))+" ";
                                            //Para Sell
                                            reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner[cont+4])))*(1+mups)*(ish*iva)+parseInt(iss))+" ";

                                            //Para Cost x habitacion
                                            let temp=((ser * 3) - ((reduct[i] * ser) / 100))+(parseInt(diner[cont+4]));
                                            reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                            //Para Cost-Sell
                                            reducc_s[ii]+=Math.round((temp*(1+mups)*(ish*iva)+parseInt(iss))/3.0)*3+" ";
                                        }

                                    }
                                    saber=true;
                                }else{
                                    //Para el dia 31/12

                                        switch (reduct[i]){
                                            case "100.00":
                                                reducc[ii]+="Free ";
                                                reduc[ii]+=0+" ";
                                                break;
                                            case "100":
                                                reducc[ii]+="Free ";
                                                reduc[ii]+=0+" ";
                                                break;
                                            case "50.00":
                                                //Para Sell x pax
                                                reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                                //Para Cost x Habitacion
                                                //Para niños
                                                if(cont===0){
                                                    reduc[ii]+= ((ser*reduct[i]/100)*(ish*iva)+parseInt(iss))+" ";
                                                }else{
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                                    //Para Cost-Sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round((temp*(1+mups)*(ish*iva)+parseInt(iss))/3.0)*3 +" ";
                                                }

                                                //Para Cost x Pax
                                                //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                break;
                                            case "50":
                                                //Para Sell x pax
                                                reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                                //Para Cost x Habitacion
                                                //Para niños
                                                if(cont===0){
                                                    reduc[ii]+= ((ser*reduct[i]/100)*(ish*iva)+parseInt(iss))+" ";
                                                }else{
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                                    //Para Cost-Sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round((temp*(1+mups)*(ish*iva)+parseInt(iss))/3.0)*3 +" ";
                                                }
                                                break;
                                            case "N/A":
                                                reducc[ii]+="N/A ";
                                                reduc[ii]+=0+" ";
                                                break;
                                            default:
                                                //Para los niños
                                                if(cont===0){
                                                    //Para Cost
                                                    let red=reduct[i];
                                                    reduc[ii]+= (ser*red/100)*(ish*iva)+parseInt(iss)+" ";
                                                    //reduc[ii]+=Math.round((ser * 3) - ((reduct[i] * ser) / 100))+" ";
                                                    //Para Sell x pax
                                                    reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                                }else{
                                                    //Para adultos
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                                    //Para Cost x pax
                                                    //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                    //Para Cost-sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round((temp*(1+mups)*(ish*iva)+parseInt(iss))/3.0)*3+" ";
                                                    //Para Sell x pax
                                                    reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)*(ish*iva)+parseInt(iss))+" ";

                                                }

                                        }
                                    saber=false;
                                    //}
                                }

                            }
                            else{
                                //No hay cena y NO es MAP
                                if(reduct[i].match("N/A")){
                                    reduc[ii]+=0+" ";
                                    reducc[ii]+="N/A ";
                                    reducc_s[ii]+=0+" ";
                                }else {
                                    //La primera vez que entra es para las cenas de los niños
                                    if (cont===0){
                                        if(reduct[i]==="100"){
                                            reduc[ii]+=0+" ";
                                            reducc[ii]+="Free ";
                                            reducc_s[ii]+="Free ";
                                        }else{
                                            //Para Cost x Pax
                                            reduc[ii]+=(ser*reduct[i]/100)*(ish*iva)+parseInt(iss)+" ";
                                            //Para Cost x Habitacion
                                            //reduc[ii]+=Math.round((ser * 3) - ((reduct[i] * ser) / 100))+" ";
                                            //Para Sell x pax
                                            reducc[ii]+=Math.round(((ser*reduct[i]/100))*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                        }


                                    }else {
                                        //Para las cenas de los adultos
                                        //Para Sell x pax
                                        reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)*(ish*iva)+parseInt(iss))+" ";
                                        //Para Cost x pax
                                        //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                        //Para Cost x habitacion
                                        let temp=(ser * 3) - ((reduct[i] * ser) / 100);
                                        reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                        //Para Cost-Sell
                                        temp=parseFloat(temp.toFixed(2));
                                        reducc_s[ii]+=Math.round((temp*(1+mups)*(ish*iva)+parseInt(iss))/3.0)*3+" ";
                                    }


                                }
                                saber=false;
                            }
                        }
                        else {
                            //EL programa es MAP por lo que no se suma la cena. El valor de la cena se pone aparte.
                            if(reduct[i].match("N/A")){
                                reduc[ii]+=0+" ";
                                reducc[ii]+="N/A ";
                                reducc_s[ii]+=0+" ";
                            }else {

                                //La primera vez que entra es para las cenas de los niños
                                if (cont===0){

                                    if (reduct[i]==="100"){
                                        reduc[ii]+=0+" ";
                                        reducc[ii]+="Free ";
                                        reducc_s[ii]+="Free ";
                                    }else{
                                        //Para Cost
                                        reduc[ii]+=(ser*reduct[i]/100)*(ish*iva)+parseInt(iss)+" ";
                                        //Para Sell x pax
                                        reducc[ii]+=Math.round(((ser*reduct[i]/100))*(1+mups)*(ish*iva)+parseInt(iss))+" ";
                                    }


                                }else {
                                    //Para las cenas de los adultos
                                    //Para Sell
                                    reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)*(ish*iva)+parseInt(iss))+" ";
                                    //Para Cost x habitacion
                                    let temp=(ser * 3) - ((reduct[i] * ser) / 100);
                                    reduc[ii]+=temp*(ish*iva)+parseInt(iss)+" ";
                                    //Para Cost-Sell
                                    temp=parseFloat(temp.toFixed(2));
                                    reducc_s[ii]+=Math.round((temp*(1+mups)*(ish*iva)+parseInt(iss))/3.0)*3+" ";
                                }


                            }
                            saber=false;
                        }

                    }

                }
                if (cont===1 && saber===true){
                    cont1++;
                }
                if (cont===0){
                    child[ii]=reducc[ii];
                    child_cost[ii]=reduc[ii];

                }
                if (cont===1){                    adult[ii]=reducc[ii];
                    adult_cost[ii]=reduc[ii];
                    adult_cs[ii]=reducc_s[ii];

                }
                reducc[ii]="";
                reduc[ii]="";
                reducc_s[ii]="";
                cont++;

            }
            cont=0;

            position=adult_cs[ii].lastIndexOf(" ");
            adult_cs[ii]=adult_cs[ii].slice(0,position);
            adult_cs[ii]=adult_cs[ii].split(" ");

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
            reductions[ii]=adult_cost[ii].concat(child_cost[ii]);
            //console.log(adult[ii]);
            position=child[ii].lastIndexOf(" ");
            child[ii]=child[ii].slice(0,position);
            child[ii]=child[ii].split(" ");
        }
        valor=1;
    }
    return {child,adult,reductions,valor,child_cost,adult_cost,reduc,adult_cs}
}
module.exports={
    reduccion
}