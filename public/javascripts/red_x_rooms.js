let redRooms=(red_3,service,red_4, red_5,red_6,
             resul_sup,ffcha,diner,st,supls,st_mup,supl_mup,child,child_cost,
              adult,adult_cost,mups,supls_cs,adult_cs,st_cs,child_cs,map,rango)=>{


    let gr=new Array(10);
    let cont=0;
    let cont1=0;
    let divide=3;

    if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
        let i=service.length-1;
       // for (let i = 0; i < service.length; i++){
            if(resul_sup[i]=== i) {
            }
                for (let e=0;e<ffcha;e++){


                    gr[i]=service[i][e];
                    if (map===0){
                        //NO tiene MAP se suman las cenas
                        if (red_6!=""){
                            divide=6;

                            if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){

                                if(e===rango[cont]+1){
                                    //Para los manuales de Sell
                                   /* child[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))+((parseInt(diner24_ad))*6))*(1+mups))/divide);
                                    //child_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))+((parseInt(diner24_ad))*6)))/divide);
                                    //Para Cost
                                    let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6))+((parseInt(diner24_ad))*6);
                                    temp=temp.toFixed(2);
                                    child_cost[e][i]=""+temp;
                                    //Para Cost-Sell
                                    child_cs[e][i]=""+Math.round(temp*(1+mups)/6.0)*6;*/


                                    //Para Cost
                                    let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6))+((parseInt(diner[cont1+4]))*6);
                                    temp=temp.toFixed(2);
                                    child_cost[e][i]=""+temp;

                                    //Para Cost-Sell
                                    let temp1=Math.round(temp*(1+mups)/6.0)*6
                                    child_cs[e][i]=""+Math.round(temp*(1+mups)/6.0)*6;
                                    //Para los manuales Sell
                                    child[e][i]=""+temp1/6;
                                }else{
                                    /*if (e===4){
                                        //Para los manuales de Sell
                                        child[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))+((parseInt(diner31_ad))*6))*(1+mups))/divide);
                                        //child_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))+((parseInt(diner31_ad))*6)))/divide);
                                        //Para Cost
                                        let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6))+((parseInt(diner31_ad))*6);
                                        temp=temp.toFixed(2);
                                        child_cost[e][i]=""+temp;
                                        //Para Cost-Sell
                                        child_cs[e][i]=""+Math.round(temp*(1+mups)/6.0)*6;


                                        //Para Cost
                                        let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6))+((parseInt(diner31_ad))*6);
                                        temp=temp.toFixed(2);
                                        child_cost[e][i]=""+temp;

                                        //Para Cost-Sell
                                        let temp1=Math.round(temp*(1+mups)/6.0)*6
                                        child_cs[e][i]=""+Math.round(temp*(1+mups)/6.0)*6;
                                        //Para los manuales Sell
                                        child[e][i]=""+temp1/6;
                                    }
                                    else{*/

                                        //Para Cost
                                        let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6));
                                        temp=temp.toFixed(2);
                                        child_cost[e][i]=""+temp;

                                        //Para Cost-Sell
                                        let temp1=Math.round(temp*(1+mups)/6.0)*6
                                        child_cs[e][i]=""+Math.round(temp*(1+mups)/6.0)*6;
                                        //Para los manuales Sell
                                        child[e][i]=""+temp1/6;

                                    //}

                                }
                            }else{
                                //Para los manuales Sell
                                // child[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))*(1+mups))/divide);
                                //Para Cost
                                let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6));
                                temp=temp.toFixed(2);
                                child_cost[e][i]=""+temp;
                                //Para Cost-Sell
                                //child_cs[e][i]=""+Math.round(temp*(1+mups)/6.0)*6;

                                //Para Cost-Sell
                                let temp1=Math.round(temp*(1+mups)/6.0)*6
                                child_cs[e][i]=""+Math.round(temp*(1+mups)/6.0)*6;
                                //Para los manuales Sell
                                //adult[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5)))*(1+mups))/divide);
                                child[e][i]=""+temp1/6;

                            }


                        }
                        if(red_5!=""){
                            divide=5;
                            if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                                if(e===rango[cont]+1){
                                    //Para los manuales de Sell
                                    adult[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))+((parseInt(diner24_ad))*5))*(1+mups))/divide);
                                    //adult_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))+((parseInt(diner24_ad))*5)))/divide);
                                    //Para Cost
                                    let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+((parseInt(diner[cont1+4]))*5);
                                    temp=temp.toFixed(2);
                                    adult_cost[e][i]=""+temp;
                                    //Para Cost-Sell
                                    adult_cs[e][i]=""+Math.round(temp*(1+mups)/5.0)*5;
                                }else{
                                   /* if (e===4){
                                        //Para los manuales de Sell
                                        adult[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))+((parseInt(diner31_ad))*5))*(1+mups))/divide);
                                       // adult_cost[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))+(gr[i]-(gr[i]*red_5)))+((parseInt(diner31_ad))*5)))/divide);
                                        //Para Cost
                                        let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+((parseInt(diner31_ad))*5);
                                        temp=temp.toFixed(2);
                                        adult_cost[e][i]=""+temp;
                                        //Para Cost-Sell
                                        adult_cs[e][i]=""+Math.round(temp*(1+mups)/5.0)*5;
                                    }
                                    else{*/

                                        //Para Cost
                                        let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5));
                                        temp=temp.toFixed(2);
                                        adult_cost[e][i]=""+temp;
                                        //Para Cost-Sell
                                        let temp1=Math.round(temp*(1+mups)/5.0)*5
                                        adult_cs[e][i]=""+Math.round(temp*(1+mups)/5.0)*5;
                                        //Para los manuales Sell
                                        //adult[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5)))*(1+mups))/divide);
                                        adult[e][i]=""+temp1/5;
                                   // }
                                }
                            }else{
                                //Para Cost
                                let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5));
                                temp=temp.toFixed(2);
                                adult_cost[e][i]=""+temp;
                                //Para Cost-Sell
                                let temp1=Math.round(temp*(1+mups)/5.0)*5
                                adult_cs[e][i]=""+Math.round(temp*(1+mups)/5.0)*5;
                                //Para los manuales Sell
                                //adult[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5)))*(1+mups))/divide);
                                adult[e][i]=""+temp1/5;

                            }

                        }
                        if(red_4!=""){
                            divide=4;
                            if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                                if(e===rango[cont]+1){
                                    //Para los manuales de Sell
                                    supl_mup[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))+((parseInt(diner[cont1+4]))*4))*(1+mups))/divide);
                                   // supls[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))+((parseInt(diner24_ad))*4)))/divide);
                                    //Para Cost
                                    let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+((parseInt(diner24_ad))*4);
                                    temp=temp.toFixed(2);
                                    supls[e][i]=""+temp;
                                    //Para Cost-Sell
                                    supls_cs[e][i]=""+Math.round(temp*(1+mups)/4.0)*4;
                                }else{
                                    /*if (e===4){
                                        supl_mup[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))+((parseInt(diner31_ad))*4))*(1+mups))/divide);
                                       // supls[e][i]=""+Math.round((((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))))+((parseInt(diner31_ad))*4)))/divide);
                                        //Para Cost
                                        let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(parseInt(diner31_ad))*4;
                                        temp=temp.toFixed(2);
                                        supls[e][i]=""+temp;
                                        //Para Cost-Sell
                                        supls_cs[e][i]=""+Math.round(temp*(1+mups)/4.0)*4;
                                    }
                                    else{*/
                                        //Para los manuales Sell
                                        supl_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))*(1+mups))/divide);
                                        //Para Cost
                                        let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4));
                                        temp=temp.toFixed(2);
                                        supls[e][i]=""+temp;
                                        //Para Cost-Sell
                                        supls_cs[e][i]=""+Math.round(temp*(1+mups)/4.0)*4;

                                    //}
                                }
                            }else{

                                //Para los manuales Sell
                                supl_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))*(1+mups))/divide);
                                //Para Cost
                                let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4));
                                temp=temp.toFixed(2);
                                supls[e][i]=""+temp;
                                //Para Cost-Sell
                                let temp1=temp*(1+mups);
                                temp1=temp1.toFixed(2);
                                supls_cs[e][i]=""+Math.round(temp1/4.0)*4;

                            }

                        }
                        if(red_3!=""){
                            divide=3;
                            if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                                if(e===rango[cont]+1){
                                    //Para Sell
                                    st_mup[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner[cont1+4]))*4))*(1+mups))/divide);
                                    //Para cost
                                    let temp=((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner[cont1+4]))*4);
                                    st[e][i]=""+(((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner[cont1+4]))*4))/divide;
                                    //Para Cost-Sell
                                    st_cs[e][i]=""+Math.round(temp*(1+mups)/3.0)*3;
                                }else{
                                   /* if (e===4){
                                        //Para Sell
                                        st_mup[e][i]=""+Math.round(((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner31_ad))*4))*(1+mups))/divide);

                                        //Para cost
                                        let temp=((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner31_ad))*4);
                                        st[e][i]=""+(((gr[i]*2)+(gr[i]-(gr[i]*red_3)))+((parseInt(diner31_ad))*4))/divide;
                                        //Para Cost-Sell

                                        st_cs[e][i]=""+Math.round(temp*(1+mups)/3.0)*3;
                                    }
                                    else{*/
                                        //Para los manuales Sell
                                        st_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))*(1+mups))/divide);
                                        //Para Cost
                                        let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3));
                                        temp=temp.toFixed(2);
                                        st[e][i]=""+temp;
                                        //Para Cost-Sell
                                        st_cs[e][i]=""+Math.round(temp*(1+mups)/3.0)*3;
                                        //}
                                }
                            }else{
                                //Para los manuales Sell
                                st_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))*(1+mups))/divide);
                                //Para Cost
                                let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3));
                                temp=temp.toFixed(2);
                                st[e][i]=""+temp;
                                //Para Cost-Sell
                                st_cs[e][i]=""+Math.round(temp*(1+mups)/3.0)*3;

                            }

                        }
                    }else{
                        //Hay MAP ,no se suma la cena
                        if (red_6!=""){
                            divide=6;
                            //Para los manuales Sell
                            child[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6)))*(1+mups))/divide);
                            //Para Cost
                            let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5))+(gr[i]-(gr[i]*red_6));
                            temp=temp.toFixed(2);
                            child_cost[e][i]=""+temp;
                            //Para Cost-Sell
                            child_cs[e][i]=""+Math.round(temp*(1+mups)/6.0)*6;
                        }
                        if(red_5!=""){
                            divide=5;
                            //Para los manuales Sell
                            adult[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5)))*(1+mups))/divide);
                            //Para Cost
                            let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4))+(gr[i]-(gr[i]*red_5));
                            temp=temp.toFixed(2);
                            adult_cost[e][i]=""+temp;
                            //Para Cost-Sell
                            adult_cs[e][i]=""+Math.round(temp*(1+mups)/5.0)*5;
                            }

                        }
                        if(red_4!=""){
                            divide=4;
                           // if(diner[0]!="" || diner[1]!="" || diner[2]!="" || diner[3]!=""){
                                //Para los manuales Sell
                                supl_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4)))*(1+mups))/divide);
                                //Para Cost
                                let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3))+(gr[i]-(gr[i]*red_4));
                                temp=temp.toFixed(2);
                                supls[e][i]=""+temp;
                                //Para Cost-Sell
                                supls_cs[e][i]=""+Math.round(temp*(1+mups)/4.0)*4;
                        }
                        if(red_3!=""){
                            divide=3;
                            //Para los manuales Sell
                            st_mup[e][i]=""+Math.round((((gr[i]*2)+(gr[i]-(gr[i]*red_3)))*(1+mups))/divide);
                            //Para Cost
                            let temp=(gr[i]*2)+(gr[i]-(gr[i]*red_3));
                            temp=temp.toFixed(2);
                            st[e][i]=""+temp;
                            //Para Cost-Sell
                            st_cs[e][i]=""+Math.round(temp*(1+mups)/3.0)*3;
                            }



                    //}


                }

            //}
        //}

        //}
    }
    return {st,st_mup,supl_mup,supls,child,child_cost,adult_cost,adult,st_cs,adult_cs,supls_cs,child_cs}
}
module.exports={
    redRooms
}