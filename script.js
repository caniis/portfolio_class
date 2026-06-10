// ======================
// 滾動淡入
// ======================

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show"); // 讓它可以再次觸發
    }

  });
}, {
  threshold: 0.2
});

fades.forEach(el => {
  observer.observe(el);
});

// ======================
// Modal
// ======================

const cards =
document.querySelectorAll(".card");

const modal =
document.querySelector(".modal");

const title =
document.getElementById("modal-title");

const desc =
document.getElementById("modal-desc");

cards.forEach(card=>{

card.addEventListener("click",()=>{

title.textContent =
card.dataset.title;

desc.textContent =
card.dataset.desc;

modal.style.display="flex";

});

});

document
.querySelector(".close")
.addEventListener("click",()=>{

modal.style.display="none";

});

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}

});

// ======================
// 自訂游標
// ======================

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});

// ======================
// 粒子背景
// ======================

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const particles = [];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2+1,

dx:(Math.random()-0.5)*0.5,

dy:(Math.random()-0.5)*0.5

});

}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

p.x += p.dx;
p.y += p.dy;

if(
p.x<0 ||
p.x>canvas.width
) p.dx *= -1;

if(
p.y<0 ||
p.y>canvas.height
) p.dy *= -1;

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.r,
0,
Math.PI*2
);

ctx.fillStyle =
"rgba(140,123,117,.4)";

ctx.fill();

});

requestAnimationFrame(
animate
);

}

animate();

window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}
);