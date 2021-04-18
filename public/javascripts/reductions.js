let reduccion=(reduction,cont_fecha,fech_c,ffcha,service,diner24_ad,diner31_ad,mups,diner31,diner24,map_saber,sup_fb,resul_red,resul_sel,ish,iss,iva)=>{
    let reductions = new Array(40);
    let reduc = new Array(40);//Para el calculo de cost
    let reducc = new Array(40);//Para el calculo de sell
    let reducc_s = new Array(40);//Para el calculo cost-sell
    let reduct = new Array(40);//Para el transpaso
    let name_red = new Array(40);
    let corrige=new Array(10);
    let corrige1=new Array(10);
    let corrige2=new Array(10);
    //let resul_red=new Array(10);
   // let resul_sel=new Array(10);
    let child = new Array(40);
    let adult = new Array(40);
    let child_cost = new Array(40);
    let adult_cost = new Array(40);
    let adult_cs = new Array(40);

    let valor=0;
    let divide=3;
    let cont=0;
    if(diner24 === ""){
        diner24=0;
    }
    if(diner31 === ""){
        diner31=0;
    }
    if (reduction != "") {
        for (let i=0;i<reduction.length;i++){
            if(reduction[i]===""){//Para saber si hay espacios vacios
                reduction.length=reduction.length-1;
                break
            }

            reduct[i]="";
            //Saber si la reduccion es N/A
            if(reduction[i].match("N/A")){
                pos=reduction[i].indexOf("N/A");
                name_red[i]=reduction[i].slice(0,pos);
                reduct[i]=reduction[i].slice(pos);
            }else{
                //Si hay valores se pregunra por el % para tomar los valores
                let pos=reduction[i].indexOf("%");
                reduct[i] = reduction[i].slice(pos-6);
                //Saber si el valor es un numero
                let regx=/(\d+)/g;
                position=reduct[i].indexOf(parseInt(reduct[i].match(regx)));
                reduct[i]=reduct[i].slice(position);

                name_red[i] = reduction[i].slice(0, pos-6);
                //Se tiene en nombre pero se toma la parte antes del / que es el enunciado real
                if (name_red[i].match("/")){
                    position=name_red[i].indexOf("/");
                    name_red[i] = reduction[i].slice(0, position);
                }
            }



            reduct[i]=reduct[i].split(" ");
            reduction[i]=reduct[i];
            //console.log(reduction[i]);
            corrige[cont]="";
            corrige1[cont]="";
            corrige2[cont]="";
            //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
            if(fech_c===true){

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
        //Se empieza a tomar los valores de reduccion por fechas y calcularlos con las habitaciones.
        for (let ii = 0; ii < cont_fecha; ii++) {
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
                                if(diner24_ad!="" || diner31_ad!=""){
                                    //Hay cena para el 24/12
                                    if (ii===2){
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
                                                    reduc[ii]+=(((ser*reduct[i]/100)+(parseInt(diner24))))+" ";
                                                    //Para Sell
                                                    reducc[ii]+=Math.round(((ser*reduct[i]/100)+(parseInt(diner24)))*(1+mups))+" ";

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
                                                reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner24_ad)))*(1+mups))+" ";

                                                //Para Cost x habitacion
                                                let temp=((ser * 3) - ((reduct[i] * ser) / 100))+(parseInt(diner24_ad));
                                                reduc[ii]+=temp+" ";
                                                //Para Cost-Sell
                                                reducc_s[ii]+=Math.round((temp*(1+mups)+parseInt(diner24_ad))/3.0)*3 +" ";
                                            }

                                        }

                                    }else{
                                        //Para el dia 31/12
                                        if (ii===4){
                                            if (cont===0){
                                                //Para las cenas de los niños
                                                if (reduct[i]==="100"||reduct[i]==="100.00"){
                                                    //Si el niño es free no se calcula
                                                    reduc[ii]+=0+" ";
                                                    reducc[ii] +="Free ";
                                                    reducc_s[ii]+=0+" ";
                                                }else{
                                                    //Cuando no esta disponible la reduccion
                                                    if (reduct[i]==="N/A"){
                                                        reduc[ii] += 0+" ";
                                                        reducc[ii]+="N/A ";
                                                        reducc_s[ii]+=0+" ";
                                                    }else{
                                                        //Para Cost
                                                        reduc[ii]+=((ser*reduct[i]/100)+(parseInt(diner31)))+" ";
                                                        //Para Sell
                                                        reducc[ii]+=Math.round(((ser*reduct[i]/100)+(parseInt(diner31)))*(1+mups))+" ";

                                                    }


                                                }
                                            }else{
                                                //Para las cenas de los adultos
                                                //Cuando no esta disponible la reduccion
                                                if (reduct[i]==="N/A"){
                                                    reduc[ii] += 0+" ";
                                                    reducc[ii] +="N/A ";
                                                }else{

                                                    //Para Cost x Pax
                                                    //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner31_ad))+" ";
                                                    //Para Sell
                                                    reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner31_ad)))*(1+mups))+" ";
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100))+(parseInt(diner31_ad));
                                                    reduc[ii]+=temp+" ";
                                                    //Para Cost-Sell
                                                    reducc_s[ii]+=Math.round((temp*(1+mups)+parseInt(diner31_ad))/3.0)*3 +" ";
                                                }
                                            }

                                        }else{
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
                                                    reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups))+" ";
                                                    //Para Cost x Habitacion
                                                    //Para niños
                                                    if(cont===0){
                                                        reduc[ii]+= ((ser*reduct[i]/100))+" ";
                                                    }else{
                                                        //Para Cost x habitacion
                                                        let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                        reduc[ii]+=temp+" ";
                                                        //Para Cost-Sell
                                                        reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3 +" ";
                                                    }

                                                    //Para Cost x Pax
                                                    //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                    break;
                                                case "50":
                                                    //Para Sell x Habitacion
                                                    reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups))+" ";
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp+" ";
                                                    //Para Cost x Pax
                                                    //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                    //Para Cost-Sell
                                                    reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3 +" ";
                                                    break;
                                                case "N/A":
                                                    reducc[ii]+="N/A ";
                                                    reduc[ii]+=0+" ";
                                                    break;
                                                default:
                                                    //Para los niños
                                                    if(cont===0){
                                                        //Para Cost
                                                        reduc[ii]+= ((ser*parseInt(reduct[i])/100))+" ";
                                                        //reduc[ii]+=Math.round((ser * 3) - ((reduct[i] * ser) / 100))+" ";
                                                        //Para Sell x pax
                                                        reducc[ii]+=Math.round((ser*parseInt(reduct[i])/100)*(1+mups))+" ";
                                                    }else{
                                                        //Para adultos
                                                        //Para Cost x habitacion
                                                        let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                        reduc[ii]+=temp+" ";
                                                        //Para Cost x pax
                                                        //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                        //Para Cost-Sell
                                                        reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3+" ";
                                                        //Para Sell x pax
                                                        reducc[ii]+=Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)+" ";

                                                    }

                                            }

                                        }
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
                                                reduc[ii]+=(ser*reduct[i]/100)+" ";
                                                //Para Cost x Habitacion
                                                //reduc[ii]+=Math.round((ser * 3) - ((reduct[i] * ser) / 100))+" ";
                                                //Para Sell x pax
                                                reducc[ii]+=Math.round(((ser*reduct[i]/100))*(1+mups))+" ";
                                            }


                                        }else {
                                            //Para las cenas de los adultos
                                            //Para Sell x pax
                                            reducc[ii]+=Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)+" ";
                                            //Para Cost x pax
                                            //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                            //Para Cost x habitacion
                                            let temp=(ser * 3) - ((reduct[i] * ser) / 100);
                                            reduc[ii]+=temp+" ";
                                            //Para Cost-Sell
                                            reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3+" ";
                                        }


                                    }

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
                                        if(reduct[i]==="100"){
                                            reduc[ii]+=0+" ";
                                            reducc[ii]+="Free ";
                                            reducc_s[ii]+="Free ";
                                        }else{
                                            //Para Cost
                                            reduc[ii]+=(ser*reduct[i]/100)+" ";
                                            //Para Sell x pax
                                            reducc[ii]+=Math.round(((ser*reduct[i]/100))*(1+mups))+" ";
                                        }


                                    }else {
                                        //Para las cenas de los adultos
                                        //Para Sell
                                        reducc[ii]+=Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)+" ";
                                        //Para Cost x habitacion
                                        let temp=(ser * 3) - ((reduct[i] * ser) / 100);
                                        reduc[ii]+=temp+" ";
                                        //Para Cost-Sell
                                        reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3+" ";
                                    }


                                }

                            }
                        }
                    }
                    //Aqui terminan las excepciones
                    else{
                        //Saber si hubo MAP para saber si se le suma la cena al valor de la habitacion
                        if (map_saber===0 && sup_fb===0){
                            //Como no hay MAP se dividen las fechas y se suma la cena a su fecha correspondiente
                            if(diner24_ad!="" || diner31_ad!=""){
                                //Hay cena para el 24/12
                                if (ii===2){
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
                                                reduc[ii]+=(((ser*reduct[i]/100)+(parseInt(diner24))))+" ";
                                                //Para Sell
                                                reducc[ii]+=Math.round(((ser*reduct[i]/100)+(parseInt(diner24)))*(1+mups))+" ";

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
                                            reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner24_ad)))*(1+mups))+" ";

                                            //Para Cost x habitacion
                                            let temp=((ser * 3) - ((reduct[i] * ser) / 100))+(parseInt(diner24_ad));
                                            reduc[ii]+=temp+" ";
                                            //Para Cost-Sell
                                            reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3+" ";
                                        }

                                    }

                                }else{
                                    //Para el dia 31/12
                                    if (ii===4){
                                        if (cont===0){
                                            //Para las cenas de los niños
                                            if (reduct[i]==="100"||reduct[i]==="100.00"){
                                                //Si el niño es free no se calcula
                                                reduc[ii]+=0+" ";
                                                reducc[ii] +="Free ";
                                                reducc_s[ii]+=0+" ";
                                            }else{
                                                //Cuando no esta disponible la reduccion
                                                if (reduct[i]==="N/A"){
                                                    reduc[ii] += 0+" ";
                                                    reducc[ii]+="N/A ";
                                                    reducc_s[ii]+=0+" ";
                                                }else{
                                                    //Para Cost
                                                    reduc[ii]+=((ser*reduct[i]/100)+(parseInt(diner31)))+" ";
                                                    //Para Sell
                                                    reducc[ii]+=Math.round(((ser*reduct[i]/100)+(parseInt(diner31)))*(1+mups))+" ";

                                                }


                                            }
                                        }else{
                                            //Para las cenas de los adultos
                                            //Cuando no esta disponible la reduccion
                                            if (reduct[i]==="N/A"){
                                                reduc[ii] += 0+" ";
                                                reducc[ii] +="N/A ";
                                            }else{

                                                //Para Cost x Pax
                                                //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner31_ad))+" ";
                                                //Para Sell
                                                reducc[ii]+=Math.round(((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(parseInt(diner31_ad)))*(1+mups))+" ";
                                                //Para Cost x habitacion
                                                let temp=((ser * 3) - ((reduct[i] * ser) / 100))+(parseInt(diner31_ad));
                                                reduc[ii]+=temp+" ";
                                                temp=parseFloat(temp.toFixed(2));
                                                //Para Cost-Sell
                                                reducc_s[ii]+=Math.round((temp*(1+mups)+parseInt(diner31_ad))/3.0)*3 +" ";
                                            }
                                        }

                                    }else{
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
                                                reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups))+" ";
                                                //Para Cost x Habitacion
                                                //Para niños
                                                if(cont===0){
                                                    reduc[ii]+= ((ser*reduct[i]/100))+" ";
                                                }else{
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp+" ";
                                                    //Para Cost-Sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3 +" ";
                                                }

                                                //Para Cost x Pax
                                                //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                break;
                                            case "50":
                                                //Para Sell x pax
                                                reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups))+" ";
                                                //Para Cost x Habitacion
                                                //Para niños
                                                if(cont===0){
                                                    reduc[ii]+= ((ser*reduct[i]/100))+" ";
                                                }else{
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp+" ";
                                                    //Para Cost-Sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3 +" ";
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
                                                    reduc[ii]+= (ser*red/100)+" ";
                                                    //reduc[ii]+=Math.round((ser * 3) - ((reduct[i] * ser) / 100))+" ";
                                                    //Para Sell x pax
                                                    reducc[ii]+=Math.round((ser*reduct[i]/100)*(1+mups))+" ";
                                                }else{
                                                    //Para adultos
                                                    //Para Cost x habitacion
                                                    let temp=((ser * 3) - ((reduct[i] * ser) / 100));
                                                    reduc[ii]+=temp+" ";
                                                    //Para Cost x pax
                                                    //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                                    //Para Cost-sell
                                                    temp=parseFloat(temp.toFixed(2));
                                                    reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3+" ";
                                                    //Para Sell x pax
                                                    reducc[ii]+=Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)+" ";

                                                }

                                        }

                                    }
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
                                            reduc[ii]+=ser*reduct[i]/100+" ";
                                            //Para Cost x Habitacion
                                            //reduc[ii]+=Math.round((ser * 3) - ((reduct[i] * ser) / 100))+" ";
                                            //Para Sell x pax
                                            reducc[ii]+=Math.round(((ser*reduct[i]/100))*(1+mups))+" ";
                                        }


                                    }else {
                                        //Para las cenas de los adultos
                                        //Para Sell x pax
                                        reducc[ii]+=Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)+" ";
                                        //Para Cost x pax
                                        //reduc[ii] += Math.round(((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+" ";
                                        //Para Cost x habitacion
                                        let temp=(ser * 3) - ((reduct[i] * ser) / 100);
                                        reduc[ii]+=temp+" ";
                                        //Para Cost-Sell
                                        temp=parseFloat(temp.toFixed(2));
                                        reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3+" ";
                                    }


                                }

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
                                        reduc[ii]+=(ser*reduct[i]/100)+" ";
                                        //Para Sell x pax
                                        reducc[ii]+=Math.round(((ser*reduct[i]/100))*(1+mups))+" ";
                                    }


                                }else {
                                    //Para las cenas de los adultos
                                    //Para Sell
                                    reducc[ii]+=Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) *(1+mups))/ 3)+" ";
                                    //Para Cost x habitacion
                                    let temp=(ser * 3) - ((reduct[i] * ser) / 100);
                                    reduc[ii]+=temp+" ";
                                    //Para Cost-Sell
                                    temp=parseFloat(temp.toFixed(2));
                                    reducc_s[ii]+=Math.round(temp*(1+mups)/3.0)*3+" ";
                                }


                            }

                        }



                        //reducc[ii] += Math.round((((ser * 2) + (ser - (reduct[i] * ser) / 100)) / 3)+(reemp*mups))+" ";

                    }

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