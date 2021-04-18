
const date=document.querySelector("#dates");
const date_suple=document.querySelector("#dates_supl");
for (let i=1;i<12;i++){
    let th_d=document.createElement("th");
    let th_d_suple=document.createElement("th");
    th_d.setAttribute("size",2);
    th_d_suple.setAttribute("size",2);
    let th_node=document.createTextNode("Date"+i);
    let th_node_supl=document.createTextNode("Date"+i);
    th_d.appendChild(th_node);
    th_d_suple.appendChild(th_node_supl);
    date.appendChild(th_d);
    date_suple.appendChild(th_d_suple);

}
// <td><input type="text" name="celda1" id="celda00" size="2" ></td>
/*
const td_c1=document.querySelector("#c1");
for (let i=1;i<11;i++){
let td_1=document.createElement("td");
let inp=document.createElement("input");
    inp.setAttribute("name","celda"+i);
    inp.setAttribute("size",2);
    inp.setAttribute("id","celda"+(i-1)+0);
    td_1.appendChild(inp);
    td_c1.appendChild(td_1);
}*/
const body=document.querySelector("#body");
const body_supl=document.querySelector("#body_supl");
let c=0;
let t=0;
for (let i=1;i<16;i++){

    const tr=document.createElement("tr");
    const tr_supl=document.createElement("tr");
    tr.setAttribute("id","c"+i);
    tr_supl.setAttribute("id","c_supl"+i);
    for (let e=0;e<11;e++){
        let td_1=document.createElement("td");
        let td_1_supl=document.createElement("td");
        let inp=document.createElement("div");
        let inp_supl=document.createElement("div");
        inp.setAttribute("class","celdas");
        inp.setAttribute("contenteditable","true");
        //inp.setAttribute("width","55px");
        inp.setAttribute("id","celda"+e+t);

        inp_supl.setAttribute("class","celdas");
        inp_supl.setAttribute("contenteditable","true");
        inp_supl.setAttribute("id","celda_supl"+e+t);
        td_1.appendChild(inp);
        tr.appendChild(td_1);
        td_1_supl.appendChild(inp_supl);
        tr_supl.appendChild(td_1_supl);

    }
    c+=10;
    t++;
    body.appendChild(tr);
    body_supl.appendChild(tr_supl);
}