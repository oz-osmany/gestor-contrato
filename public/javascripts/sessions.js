
/*
var sessionStorage=require("sessionstorage");
const user_session={};
   user_session.regoger =(user)=>{
    sessionStorage.setItem('user', user);
   // console.log(ses);
}
module.exports=user_session;
*/

const login= document.querySelector("#login");
login.addEventListener("click",()=>{
    var user=document.getElementById("username").value;
     sessionStorage.setItem("user",user);
});
