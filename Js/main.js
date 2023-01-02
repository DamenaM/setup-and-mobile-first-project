
//------------------------ Adding Menu list-------------------------


let ul =document.querySelector('.menu-nav ul');

let Portofolio=document.createElement('a')
let li=document.createElement('a');

ul.append(Portofolio);
ul.append(li);

Portofolio.innerText=('Portofolio'); 
li.innerText=('contact'); 

Portofolio.classList.add('menu-content-list');
li.classList.add('menu-content-list');



//---------------------------- mange menu----------------------------------
let clickhum = document.getElementById('logoburger');
let clickclose = document.getElementById('menubackpop');
let firstcardBack = document.getElementById('firstcardBackid');

clickhum.addEventListener("click", function() {
   firstcardBack.className = "newmenuback";  
   clickclose.className="menuback"
});

// clickclose.addEventListener("click", function() {
//    if (clickclose.className === "menu-back") {
//       firstcardBack.className = "firstcardBack";
//       clickclose.className = "hide";
//        }
// }); 
// --------------------------------------------------------
clickclose.addEventListener("click", function() {
   if (clickclose.className === "menuback") {
      firstcardBack.className = "firstcardBack";
      clickclose.className = "menu-back";
       }else {
         clickclose.className = "hide";
       }
}); 