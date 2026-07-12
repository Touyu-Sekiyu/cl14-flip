document.querySelectorAll('.butterfly').forEach(function(el){
 el.addEventListener('mouseover',function () {
  el.style.left = (Math.random() * 800) + "px";
  el.style.top = (Math.random() * 400)+"px";
 });
});


document.querySelectorAll('.foo').forEach(function(el){
 el.addEventListener('mouseover',function () {
  
  const minX=355;
  const maxX=800;
  const minY=200;
  const maxY=280;

  const randomX=Math.floor(Math.floor(Math.random()*(maxX-minX))) + minX;
  const randomY=Math.floor(Math.floor(Math.random()*(maxY-minY))) + minY;

  el.style.left = randomX + "px";
  el.style.top = randomY +"px";
 });
});