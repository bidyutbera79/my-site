function showDetails(name,info){
  const d=document.getElementById('details');
  d.style.display='block';
  d.innerHTML='<h2>'+name+'</h2><p>'+info+'</p>';
}

const rocket = document.getElementById("rocketLaunch");
const flame = document.getElementById("rocketFlame");
rocket.addEventListener("click",()=>{
  flame.style.display="block";
  rocket.style.animation="rocketTakeOff 4s linear forwards";
  setTimeout(()=>{ flame.style.display="none"; },3500);
});
