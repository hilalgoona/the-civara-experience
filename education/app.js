const lessons=[
["01","What Is Pashmina?","The fibre, its origin and the beginning of the journey.","images/lesson01-fibre.jpg"],
["02","The Himalayan Goat","Where Pashmina begins — the Changthangi goat and its environment.","images/lesson02-goat.jpg"],
["03","Cleaning & Dehairing","Preparing raw fibre by removing coarse hair, dust and impurities.","images/lesson03-raw-fibre.jpg"],
["04","Carding & Spinning","Turning prepared fibre into yarn, by hand or machine.","images/lesson04-yarn.jpg"],
["05","Preparing the Loom","Understanding warp, weft and the transition from yarn to cloth.","images/lesson05-loom.jpg"],
["06","Sozni","The art of fine Kashmiri hand embroidery.","images/lesson06-sozni.jpg"],
["07","Kani","The art of patterned Kashmiri weaving.","images/lesson07-kani.jpg"],
["08","Finishing the Pashmina","Preparing woven and embroidered textiles for the finished piece.","images/lesson08-finished.jpg"],
["09","Understanding Genuine Pashmina","Looking beyond labels, informal tests and assumptions.","images/lesson09-gi.jpg"],
["10","Pashmina & Cashmere","Understanding two closely related names and their contexts.","images/lesson10-cashmere.jpg"],
["11","The Artisan","The human hands, knowledge and time behind the craft.","artisan.jpg"],
["12","The Future","Preserving a living tradition while allowing it to evolve.","images/lesson02-goat.jpg"]
];

const grid=document.getElementById("lesson-grid");
if(grid){
  grid.innerHTML=lessons.map(l=>`<article class="lesson reveal"><a href="lesson.html?id=${l[0]}">
    <div class="lesson-image"><img src="${l[3]}" alt="" loading="lazy"></div>
    <div class="lesson-copy"><span class="num">${l[0]}</span><h3>${l[1]}</h3><p>${l[2]}</p><span class="read">Open lesson →</span></div>
  </a></article>`).join("");
}

const basics=document.getElementById("basics-grid");
if(basics) basics.innerHTML=[lessons[0],lessons[2],lessons[8]].map(l=>`<article class="lesson reveal"><a href="lesson.html?id=${l[0]}">
    <div class="lesson-image"><img src="${l[3]}" alt="" loading="lazy"></div>
    <div class="lesson-copy"><span class="num">${l[0]}</span><h3>${l[1]}</h3><p>${l[2]}</p><span class="read">Open lesson →</span></div>
</a></article>`).join("");

const terms=[
["PASHMINA","A fine natural animal fibre associated with Himalayan cashmere-producing goats and the textile traditions of Kashmir."],
["CASHMERE","A broad international term for fine animal fibre from certain cashmere-producing goats; the term does not by itself describe where a finished textile was made."],
["CHANGTHANGI","A goat associated with traditional fine Pashmina production in the high-altitude Changthang region of Ladakh."],
["HAND-SPUN","Yarn produced by spinning prepared fibre manually rather than with an industrial spinning system."],
["MACHINE-SPUN","Yarn produced using mechanical spinning equipment; the spinning method alone does not determine whether the underlying fibre is Pashmina."],
["HANDWOVEN","A textile made on a hand-operated loom."],
["SOZNI","A traditional Kashmiri fine hand-embroidery tradition."],
["KANI","A traditional Kashmiri patterned weaving tradition using small wooden tools to build designs during weaving."],
["JAMAWAR","A celebrated Kashmiri textile tradition associated with elaborate patterned fabrics, including Kani traditions."],
["GI","Geographical Indication: a sign used for products whose qualities, reputation or other characteristics are linked to a geographical origin under the applicable legal framework."]
];

const termsEl=document.getElementById("terms"), detail=document.getElementById("term-detail");
function showTerm(i){
  if(!detail)return;
  detail.innerHTML=`<h3>${terms[i][0]}</h3><p>${terms[i][1]}</p>`;
  document.querySelectorAll(".term").forEach((x,n)=>x.classList.toggle("active",n===i));
}
if(termsEl){
  termsEl.innerHTML=terms.map((t,i)=>`<button class="term" data-i="${i}">${t[0]}</button>`).join("");
  termsEl.querySelectorAll("button").forEach(b=>b.onclick=()=>showTerm(+b.dataset.i));
  showTerm(0);
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".parallax img").forEach(img=>{
  img.addEventListener("load",()=>img.closest(".parallax")?.classList.add("loaded"));
});
