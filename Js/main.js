
let clickhum = document.getElementById('logoburger');
let clickclose = document.getElementById('menubackpop');
let firstcardBack = document.getElementById('firstcardBackid');
let mainheader=document.getElementById('mylogo-section');

clickhum.addEventListener("click", function() {
   if (firstcardBack.className = "newmenuback"){
      mainheader.className="hide"
      firstcardBack.className = "newmenuback";  
      clickclose.className = "menuback";
   }else {
      mainheader.className="header"
   }

});


clickclose.addEventListener("click", function() {
   if (clickclose.className === "menu-back") {
      clickclose.className = "hide";
      firstcardBack.className = "firstcardBack";
     
       }else {
         firstcardBack.className = "firstcardBack";
         clickclose.className = "hide";
         mainheader.className="header";
       }
}); 