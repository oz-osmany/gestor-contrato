//Recibir la info de la BD

//const user=sessionStorage.getItem('user');
//function cargartabla(){

    const rand=sessionStorage.getItem('user');

    fetch("/session",
        {method:"POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify({rand})
        })
        .then(resp => resp.json())
        .then(data=>{
            //Gestionar las casillas opcionales que se habilitaran
           let rel= data.casillas[0].casillas.releas;
            let cupo= data.casillas[0].casillas.cupos;
            let impuestos= data.casillas[0].casillas.impuestos;
            let event= data.casillas[0].casillas.sup_eventos;
            let cena= data.casillas[0].casillas.supl_cena;
            let grupos= data.casillas[0].casillas.grupos;
            let description= data.casillas[0].casillas.description;
            let calculo=data.casillas[0].casillas.id_calculo;
            let exp=data.casillas[0].casillas.id_export;
            const release=document.getElementById("cont_release");
            if (rel===0){
                release.style.display="none";
            }else{
                release.style.display="block";
            }
            //Para los cupos
            const cup=document.getElementById("cont_cupos");
            if (cupo===0){
                cup.style.display="none";
            }else{
                cup.style.display="block";
            }
            //Para los impuestos
            const imp=document.getElementById("cont_impuestos");
            if (impuestos===0){
                imp.style.display="none";
            }else{
                imp.style.display="block";
            }
            //Para los eventos
            const ev=document.getElementById("cont_event");
            if (event===0){
                ev.style.display="none";
            }else{
                ev.style.display="block";
            }
            //Para las cenas
            const dinner=document.getElementById("cont_cena");
            if (cena===0){
                dinner.style.display="none";
            }else{
                dinner.style.display="block";
            }
            //Para las descripciones
            const desc=document.getElementById("cont_description");
            if (description===0){
                desc.style.display="none";
            }else{
                desc.style.display="block";
            }
            //Para los grupos
            const fam=document.getElementById("cont_family");
            if (grupos===0){
                fam.style.display="none";
            }else{
                fam.style.display="block";
            }
            //Gestionar como se calcula segun la empresa
            //Se pone el tipo de calculo que se usara en la session
            sessionStorage.setItem('calculo', calculo);
            //Gestionar como se va a exportar la informacion
            //Se pone cual modo de export se usara
            sessionStorage.setItem('export', exp);
        })








