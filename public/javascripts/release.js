let release=(rel,ffcha,diner31_ad,diner24_ad)=>{
    //Para extraer release
    let piezas = rel.split(" ");
    let valor=0;
    let releases=new Array(10);
    if (rel != ""){
        let corrige = new Array(2);
        let corrige1 = new Array(2);
        let corrige2 = new Array(2);
        for (let a = 0; a < piezas.length; a++) {
            releases[a] = piezas[a];
            //console.log(release[a]);
            corrige[cont] = "";
            corrige1[cont] = "";
            corrige2[cont] = "";
            //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
            if(diner24_ad!="" || diner31_ad!=""){
                if (fech_c===true) {//Revisarrrrrrrr
                    //Se corta despues del 22/12
                    for (let e = 2; e < ffcha+1; e++) {
                        corrige2[cont] += releases[i][e] + " ";
                    }
                    //Se recoge del 11/12 al 22/12
                    for (let e = 0; e < 2; e++) {
                        corrige[cont] += releases[i][e] + " ";
                    }
                    releases[cont] = "";
                    releases[cont].length = 0;
                    for (let s = 0; s < 4; s++) {
                        corrige1[cont] += releases[cont][1] + " ";
                    }
                    releases[i] = corrige[cont] + corrige1[cont] + corrige2[cont];

                    pto = releases[i].lastIndexOf(" ");
                    releases[i] = releases[i].slice(0, pto);
                    releases[i] = releases[i].split(" ");
                    cont++;
                }
            }
        }
       valor=1;
    }
    return {releases,valor};
}
let cupos=(cupo,cont_fecha,ffcha,diner31_ad,diner24_ad)=>{
    //Para extraer los cupos
    //let cupos=new Array(30);
    let valor=0;
    let cp=new Array(30);
    let corrige = new Array(2);
    let corrige1 = new Array(2);
    let corrige2 = new Array(2);
    if(cupo!=""){
        for (let h=0;h<cupo.length;h++){//Para tomar todo el arreglo despues del nombre
            if (cupo[h].match("/")){
              let position=cupo[h].indexOf("/");
                cupo[h]=cupo[h].slice(position+2);

            }
            corrige[cont] = "";
            corrige1[cont] = "";
            corrige2[cont] = "";
            //Se dividen en tres parte la cadena para insertar los valores segun las nuevas fechas
            if(diner24_ad!="" || diner31_ad!=""){
                if (fech_c===true) {//Revisarrrrrrrr
                    //Se corta despues del 22/12
                    for (let e = 2; e < ffcha+1; e++) {
                        corrige2[cont] += suplements[i][e] + " ";
                    }
                    //Se recoge del 11/12 al 22/12
                    for (let e = 0; e < 2; e++) {
                        corrige[cont] += suplements[i][e] + " ";
                    }
                    suplements[cont] = "";
                    suplements[cont].length = 0;
                    for (let s = 0; s < 4; s++) {
                        corrige1[cont] += suplementos[cont][1] + " ";
                    }
                    suplements[i] = corrige[cont] + corrige1[cont] + corrige2[cont];

                    pto = suplements[i].lastIndexOf(" ");
                    suplements[i] = suplements[i].slice(0, pto);
                    suplements[i] = suplements[i].split(" ");
                    cont++;
                }
            }
        }
        for (let ii=0;ii<cont_fecha+1;ii++){
            cp[ii]="";
            for(let i=0;i<cupo.length;i++){

                cupos[ii]=cupo[i].split(" ");

                if(cupos[ii][i]==="OR"){
                    cupos[ii][i]="'OR'";
                }
                cp[ii]+=cupos[ii][i]+",";
            }
            let find=cp[ii].lastIndexOf(",");
            cp[ii]=cp[ii].slice(0,find);
            //console.log(cp[ii]);
        }
        valor=1;
    }
    return {cp,valor}
}
module.exports={
    release,
    cupos
}