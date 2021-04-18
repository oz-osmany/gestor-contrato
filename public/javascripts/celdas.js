

/*celda00.oninput = function() {
    celda10.innerHTML = celda00.value;
};*/
/*celda00.addEventListener("keydown", function (event) {

        if(event.keyCode===13){
            let valor=document.getElementById("celda00");
            funciona(valor.innerHTML);
        }
        function funciona(valor){
            let c=0;
            if (valor.match(".f")){
                let pos=valor.indexOf(".f");
                let sentido=valor.slice(pos);

                let position=valor.indexOf("x");
                let cant=valor.slice(position+1,pos);

                valor=valor.slice(0,position);

               for (let i=0;i<cant;i++){
                    document.getElementById("celda"+i+c).innerHTML=valor;
                }

            }
    }
    //cel1.innerHTML = event.key + " - " +event.keyCode;
},false);*/



celda00.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    let c=0;

    for (let i=0;i<cel.length;i++){

        //Pregunta si hay columnas
        if(cel.match("\n")){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);

            //Saber si es una fila
            if(c_base.match(" ")){
                c_base=c_base.split(" ");
                let lon=c_base.length;

                //Imprimo por filas
                for (let e=0;e<lon;e++){
                    //document.getElementById("celda"+e+c).value=c_base[e];
                    document.getElementById("celda"+e+c).innerHTML=c_base[e];
                }
                c++;
                cel=n_cel
            }else{
                //Es toda una columna
                //document.getElementById("celda"+c+i).value=c_base;
                //document.getElementById("celda"+c+(i+1)).value=n_cel;
                document.getElementById("celda"+c+i).innerHTML=c_base;
                document.getElementById("celda"+c+(i+1)).innerHTML=n_cel;
                cel=n_cel;

            }


        }else{
            //NO es una columna
            cel=cel.split(" ");


            for (let e=0;e<cel.length;e++){
                //document.getElementById("celda"+e+c).value=cel[e];
                document.getElementById("celda"+e+c).innerHTML=cel[e];

            }
            i=100;
        }

    }
    return false;
}
//Para las columnas de arriba
/*celda10.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=1;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;
}
celda20.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=2;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;
}
celda30.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=3;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;
}
celda40.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=4;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;
}
celda50.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=5;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;
}
celda60.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=6;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;
}
celda70.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=7;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;
}
celda80.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=8;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;
}
celda90.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=9;
    if(cel.match("\n")){

        for (let e=0;e<cel.length;e++){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);
            document.getElementById("celda"+c+e).innerHTML=c_base;
            document.getElementById("celda"+c+(e+1)).innerHTML=n_cel;
            cel=n_cel
        }

    }
    return false;

}
*/

//Para las filas de las habitaciones
/*celda01.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=1;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}*/
celda02.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=2;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda03.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=3;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda04.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=4;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda05.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=5;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda06.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=6;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda07.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=7;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda08.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=8;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda09.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=9;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda010.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=10;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda011.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=11;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda012.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=12;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda013.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=13;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda014.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=14;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}


//Para los suplementos
celda_supl00.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    let c=0;

    for (let i=0;i<cel.length;i++){

        //Pregunta si hay columnas
        if(cel.match("\n")){
            let pos=cel.indexOf("\n");
            let c_base=cel.slice(0,pos);
            let n_cel=cel.slice(pos+1);

            //Saber si es una fila
            if(c_base.match(" ")){
                c_base=c_base.split(" ");
                let lon=c_base.length;

                //Imprimo por filas
                for (let e=0;e<lon;e++){
                    //document.getElementById("celda"+e+c).value=c_base[e];
                    document.getElementById("celda_supl"+e+c).innerHTML=c_base[e];
                }
                c++;
                cel=n_cel
            }else{
                //Es toda una columna
                //document.getElementById("celda"+c+i).value=c_base;
                //document.getElementById("celda"+c+(i+1)).value=n_cel;
                document.getElementById("celda_supl"+c+i).innerHTML=c_base;
                document.getElementById("celda_supl"+c+(i+1)).innerHTML=n_cel;
                cel=n_cel;

            }


        }else{
            //NO es una columna
            cel=cel.split(" ");


            for (let e=0;e<cel.length;e++){
                //document.getElementById("celda"+e+c).value=cel[e];
                document.getElementById("celda_supl"+e+c).innerHTML=cel[e];

            }
            i=100;
        }

    }
    return false;
}
celda_supl01.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=1;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl02.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=2;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl03.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=3;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl04.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=4;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl05.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=5;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl06.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=6;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl07.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=7;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl08.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=8;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl09.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=9;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl010.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=10;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl011.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=11;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl012.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=12;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda_supl013.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=13;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
celda0_supl14.onpaste=(event)=>{
    let cel=event.clipboardData.getData('text/plain');
    //Pregunta si hay columnas
    let c=14;
    if(cel.match(" ")){
        cel=cel.split(" ");
        let lon=cel.length;

        //Imprimo por filas
        for (let e=0;e<lon;e++){
            //document.getElementById("celda"+e+c).value=c_base[e];
            document.getElementById("celda_supl"+e+c).innerHTML=cel[e];
        }
        c++;
        //cel=n_cel
    }
    return false;
}
