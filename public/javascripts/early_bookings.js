let ventas=(mups,service,red_3,red_4,supls,supl_mup,supls_cs,venta,cont_fecha,
            st,st_mup_cost,st_cs,suplements,single,resul_sup,resul_red,resul_sel,
            adult_cost,adult,adult_cs,child,child_cost,child_cs,reduction,
            diner24_ad,diner31_ad,fech_c,ffcha)=>{

    let ventas=new Array(20);
    let name_ventas=new Array(20);
    let ventas_st=new Array(20);
    let ventas_st_sell=new Array(20);
    let ventas_st_cs=new Array(20);
    let ventas_calc_event=new Array(20);
    let ventas_red_ad=new Array(20);//EB para las reducciones de adultos
    let ventas_red_ch=new Array(20);//EB para las reducciones de children
    let ventas_red_ad_sell=new Array(20);//EB para las reducciones de adultos
    let ventas_red_ad_cs=new Array(20);//EB para las reducciones de adultos
    let ventas_red_ch_sell=new Array(20);//EB para las reducciones de children
    let ventas_red_ch_cs=new Array(20);//EB para las reducciones de children
    let ventas_sup=new Array(20);
    let ventas_sup_sell=new Array(20);
    let ventas_sup_cs=new Array(20);
    let ventas_valor=new Array(20);
    let corrige = new Array(2);
    let corrige1 = new Array(2);
    let corrige2 = new Array(2);
    let valor6=0;
    let valor7=0;
    let valor8=0;
    let valor9=0;
    let cont=0;

    if (venta != "") {


        //Tomo los enunciados
        for (let i=0;i<venta.length;i++){
            if(venta[i]===""){//Para saber si hay espacios vacios
                venta.length=venta.length-1;
                break
            }
            if (venta[i].match("/")){
                let position=venta[i].indexOf("/");
                ventas[i]=venta[i].slice(position+2);
                name_ventas[i]=venta[i].slice(0,position);
            }
            venta[i]=ventas[i].split(" ");
            ventas[i]=venta[i];
            //console.log(ventas[i]);
            corrige[cont] = "";
            corrige1[cont] = "";
            corrige2[cont] = "";
            /*Se dividen en tres partes la cadena para insertar los valores segun las nuevas fechas
            cuando haya cena*/
            if(diner24_ad!="" || diner31_ad!=""){
                if (fech_c===true) {
                    //Se corta despues del 22/12
                    for (let e = 2; e < ffcha+1; e++) {
                        corrige2[cont] += venta[i][e] + " ";
                    }
                    //Se recoge del 11/12 al 22/12
                    for (let e = 0; e < 2; e++) {
                        corrige[cont] += venta[i][e] + " ";
                    }
                    venta[cont] = "";
                    venta[cont].length = 0;
                    for (let s = 0; s < 4; s++) {
                        corrige1[cont] += ventas[cont][1] + " ";
                    }
                    venta[i] = corrige[cont] + corrige1[cont] + corrige2[cont];

                    let pto = venta[i].lastIndexOf(" ");
                    venta[i] = venta[i].slice(0, pto);
                    venta[i] = venta[i].split(" ");
                    cont++;
                }
            }
        }
            cont=0;
        for (let ii = 0; ii < cont_fecha; ii++) {

            let c_s=cont_fecha;//Para saber la cantidad de habitacines
            for (let v = 0; v < venta.length; v++) {





                ventas_st[cont+ii]="";
                ventas_st_sell[cont+ii]="";
                ventas_st_cs[cont+ii]="";
                ventas_sup[cont+ii]="";
                ventas_sup_sell[cont+ii]="";
                ventas_sup_cs[cont+ii]="";
                ventas_red_ad[cont+ii]="";
                ventas_red_ch[cont+ii]="";
                ventas_red_ad_sell[cont+ii]="";
                ventas_red_ch_sell[cont+ii]="";
                ventas_calc_event[cont+ii]="";
                //Para saber si hay algun espacio al final
                if(venta[v]===""){
                    venta.length=venta.length-1;
                    break
                }
                //Se toma el valor de la nueva reduccion
                ventas_valor[v] = venta[v][ii];
                if(ventas_valor[v].match("%")){
                    position=ventas_valor[v].indexOf("%");
                    let g=ventas_valor[v].slice(0,position);
                    ventas_valor[v]=g;
                }
                //para los sirvicios
                for (let e = 0; e < service.length; e++) {

                    //Para las habitaciones de Cost
                    let temp=(st[ii][e] - ((ventas_valor[v] * st[ii][e]) / 100)) ;
                    temp=parseFloat(temp.toFixed(2));
                    ventas_st[cont+ii] +=temp+" ";
                    //Para las habitaciones de Cost-Sell
                    //st divide por 2 para lograr el precio neto de la habitacion
                    let temp1=Math.round((temp+(temp*mups))/2.0)*2;
                    //temp= Math.round((((st[ii][e]/2) - (ventas_valor[v] * (st[ii][e]/2)/ 100) )*(1+mups)*2)/2.0)*2;
                    ventas_st_cs[cont+ii] += temp1+" ";



                    valor6=1;
                }
                position=ventas_st[cont+ii].lastIndexOf(" ");
                ventas_st[cont+ii]=ventas_st[cont+ii].slice(0,position);
                ventas_st[cont+ii]=ventas_st[cont+ii].split(" ");

                position=ventas_st_cs[cont+ii].lastIndexOf(" ");
                ventas_st_cs[cont+ii]=ventas_st_cs[cont+ii].slice(0,position);
                ventas_st_cs[cont+ii]=ventas_st_cs[cont+ii].split(" ");
                //console.log(ventas_calc[ii]);

                //Recoger los suplementos segun los servicios
                for (let i = 0; i < service.length; i++) {
                    if (suplements!=""){
                        if(suplements[i]===""){
                            suplements.length=suplements.length-1;
                            break;
                        }
                    }
                    if (single!=""){
                        if(single[i]===""){
                            single.length=single.length-1;
                            break;
                        }
                    }

                    /*if (red_3!="" || red_4!=""){
                        //Hay reducciones para las familias
                        let temp=(supls[ii][i] - (parseInt(ventas_valor[v]) * supls[ii][i]) / 100);
                        temp=temp.toFixed(2);
                        ventas_sup[cont+ii] += temp+" ";
                        //Para Cost-Sell
                        ventas_sup_cs[cont+ii]+=Math.round(temp* (1 + mups)/4.0)*4+ " ";
                    }else{*/
                        //No hay reducciones para las familias
                        //suply[i]=suplements[i][ii];
                        if(resul_sup[i]=== i){
                            //supls[ii]=0;//Para los suplementos con excepciones
                            ventas_sup[cont+ii] +=0+" ";
                            ventas_sup_sell[cont+ii] +=0+" ";
                        }
                        else {
                            // supls[ii] = parseInt(suply[i])+ parseInt(service[i][ii]);
                            //Para Cost
                            let temp=(supls[ii][i] - (parseInt(ventas_valor[v]) * supls[ii][i]) / 100);
                            temp=temp.toFixed(2);
                            ventas_sup[cont+ii] += temp+" ";
                            //Para Sell
                            //ventas_sup_sell[ii] +=Math.round(supl_mup[ii][i] - (parseInt(ventas_valor[v]) * supl_mup[ii][i]) / 100) +" ";
                            //Para Cost-Sell
                            ventas_sup_cs[cont+ii]+=Math.round(temp* (1 + mups))+ " ";
                        }
                    //}

                    valor7=1;
                }
                position=ventas_sup[cont+ii].lastIndexOf(" ");
                ventas_sup[cont+ii]=ventas_sup[cont+ii].slice(0,position);
                ventas_sup[cont+ii]=ventas_sup[cont+ii].split(" ");

                /*position=ventas_sup_sell[ii].lastIndexOf(" ");
                ventas_sup_sell[ii]=ventas_sup_sell[ii].slice(0,position);
                ventas_sup_sell[ii]=ventas_sup_sell[ii].split(" ");*/

                position=ventas_sup_cs[cont+ii].lastIndexOf(" ");
                ventas_sup_cs[cont+ii]=ventas_sup_cs[cont+ii].slice(0,position);
                ventas_sup_cs[cont+ii]=ventas_sup_cs[cont+ii].split(" ");


                //Para las reducciones
                if(reduction!=""){
                    for (let i = 0; i < service.length; i++) {

                        if(reduction[i]===""){
                            reduction.length=reduction.length-1;
                            break;
                        }

                        //Para Cost children
                        let temp=(child_cost[ii][i]) - (child_cost[ii][i] * ventas_valor[v] / 100);
                        temp=parseFloat(temp.toFixed(2));
                        ventas_red_ch[cont+ii] += temp+" ";
                        //Para Cost adultos
                        temp=(adult_cost[ii][i]) - (adult_cost[ii][i] * ventas_valor[v] / 100);
                        temp=parseFloat(temp.toFixed(2));
                        ventas_red_ad[cont+ii] +=temp+" ";
                        //Para Cost-Sell adultos

                        temp=Math.round((temp + (temp * mups))/3.0)*3;
                        ventas_red_ad_sell[cont+ii] +=temp+" ";
                        //Para Cost-Sell children
                        if(child[ii][i]==="Free"){
                            ventas_red_ch_sell[cont+ii] +="Free ";
                        }else{
                            if(child[ii][i]==="N/A"){
                                ventas_red_ch_sell[cont+ii] +="N/A "
                            }else{
                                ventas_red_ch_sell[cont+ii] += Math.round(child[ii][i]- (child[ii][i] * ventas_valor[v] / 100))+" ";
                            }

                        }




                        valor9=1;
                    }
                    position=ventas_red_ch[cont+ii].lastIndexOf(" ");
                    ventas_red_ch[cont+ii]=ventas_red_ch[cont+ii].slice(0,position);
                    ventas_red_ch[cont+ii]=ventas_red_ch[cont+ii].split(" ");

                    position=ventas_red_ad[cont+ii].lastIndexOf(" ");
                    ventas_red_ad[cont+ii]=ventas_red_ad[cont+ii].slice(0,position);
                    ventas_red_ad[cont+ii]=ventas_red_ad[cont+ii].split(" ");

                    position=ventas_red_ad_sell[cont+ii].lastIndexOf(" ");
                    ventas_red_ad_sell[cont+ii]=ventas_red_ad_sell[cont+ii].slice(0,position);
                    ventas_red_ad_sell[cont+ii]=ventas_red_ad_sell[cont+ii].split(" ");

                    position=ventas_red_ch_sell[cont+ii].lastIndexOf(" ");
                    ventas_red_ch_sell[cont+ii]=ventas_red_ch_sell[cont+ii].slice(0,position);
                    ventas_red_ch_sell[cont+ii]=ventas_red_ch_sell[cont+ii].split(" ");

                }
                else{
                    ventas_red_ch[cont+ii]+=0+" ";
                    position=ventas_red_ch[cont+ii].lastIndexOf(" ");
                    ventas_red_ch[cont+ii]=ventas_red_ch[cont+ii].slice(0,position);
                    ventas_red_ch[cont+ii]=ventas_red_ch[cont+ii].split(" ");
                }

                cont+=c_s;

            }
            //Hacer todos los movimientos de poner comas y separar los numeros.
            //Para las habitaciones


            //Para los suplementos


            //Para las reducciones

            cont=0;
        }

    }
    return {ventas_sup,ventas_sup_cs,ventas_red_ch,ventas_red_ad,ventas_red_ch_sell,
        ventas_red_ad_sell,ventas_st,ventas_st_cs,valor6,valor7,valor8,valor9}
}


module.exports={
    ventas
}