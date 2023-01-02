// let clickxvalue = () =>{
//     let xvalue = document.querySelector('#menuback');
//     xvalue.classList.add('newmenuback','filterblur');

//     let firstcardBack = document.querySelector('#firstcardBackid');
//     firstcardBack.classList.add('filterblur')
// };

// //------------- close Menuback------------
// let clickxvaluehum = () =>{
//     let xvalue = document.querySelector('#menuback');
//     xvalue.classList.add('menu-back');
// };
//------------------------ Adding Menu list-------------------------

const ul =document.querySelector('.menu-nav ul');
const li=document.createElement('a');
const Profile =document.createElement('a');

ul.append(li);
Profile.innerText=('Profile'); 
Profile.classList.add('menu-content-list');
li.innerText=('contact'); 
li.classList.add('menu-content-list');



//---------------------------- mange menu----------------------------------
let clickhum = document.getElementById('logoburger');
let clickclose = document.getElementById('menubackpop');
let firstcardBack = document.getElementById('firstcardBackid');

clickhum.addEventListener("click", function() {
            firstcardBack.className = "newmenuback";  
    
});

clickclose.addEventListener("click", function() {
   if (clickclose.className === "menu-back") {
      clickclose.className = "hide";
      firstcardBack.className = "firstcardBack";
       }
}); 
// --------------------------------------------------------
