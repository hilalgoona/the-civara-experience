const lessons=[
["01","What Is Pashmina?","The fibre, its origin and the beginning of the journey."],
["02","The Himalayan Goat","Where Pashmina begins — the Changthangi goat and its environment."],
["03","Cleaning & Dehairing","Preparing raw fibre by removing coarse hair, dust and impurities."],
["04","Carding & Spinning","Turning prepared fibre into yarn, by hand or machine."],
["05","Preparing the Loom","Understanding warp, weft and the transition from yarn to cloth."],
["06","Sozni","The art of fine Kashmiri hand embroidery."],
["07","Kani","The art of patterned Kashmiri weaving."],
["08","Finishing the Pashmina","Preparing woven and embroidered textiles for the finished piece."],
["09","Understanding Genuine Pashmina","Looking beyond labels, informal tests and assumptions."],
["10","Pashmina & Cashmere","Understanding two closely related names and their contexts."],
["11","The Artisan","The human hands, knowledge and time behind the craft."],
["12","The Future","Preserving a living tradition while allowing it to evolve."]
];
const grid=document.getElementById("lesson-grid");
if(grid) grid.innerHTML=lessons.map(l=>`<article class="lesson"><a href="lesson.html?id=${l[0]}"><span class="num">${l[0]}</span><h3>${l[1]}</h3><p>${l[2]}</p></a></article>`).join("");
const basics=document.getElementById("basics-grid");
if(basics) basics.innerHTML=[lessons[0],lessons[2],lessons[8]].map(l=>`<article class="lesson"><a href="lesson.html?id=${l[0]}"><span class="num">${l[0]}</span><h3>${l[1]}</h3><p>${l[2]}</p></a></article>`).join("");
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
function showTerm(i){detail.innerHTML=`<h3>${terms[i][0]}</h3><p>${terms[i][1]}</p>`;document.querySelectorAll(".term").forEach((x,n)=>x.classList.toggle("active",n===i))}
if(termsEl){termsEl.innerHTML=terms.map((t,i)=>`<button class="term" data-i="${i}">${t[0]}</button>`).join("");termsEl.querySelectorAll("button").forEach(b=>b.onclick=()=>showTerm(+b.dataset.i));showTerm(0)}
