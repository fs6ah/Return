let theme_is = localStorage.getItem("mode_is")
if(typeof theme_is !== "undefined")
    { 
      if (theme_is != "dark") {
          Changeit()
        }
    }
function Hi() {
    let nubr = document.querySelector("#in1").value
    if (nubr !== "") {
         fetch("media/data.json")
  .then(response => response.json())
  .then(json => opnelink(json[nubr]))
    } else {
     alert("يبدو أنك لم تدخل أي رقم، أليس كذلك؟");
    }
   
};
function opnelink(link) {
    if(typeof link !== "undefined")
    { 
        window.open(link);  
    } else {
        alert("هذا الرابط غير موجود");
    }
   
}
function Changeit() {
let bodyis = document.querySelector("body");
let btnsw = document.querySelectorAll(".btn-outline-light");
btnsw[0].classList.toggle("btn-outline-dark");
btnsw[1].classList.toggle("btn-outline-dark");
bodyis.classList.toggle("bodylg");
if (document.querySelector("body").className.includes("bodylg") == false){
    localStorage.setItem("mode_is","dark");
}else{
    localStorage.setItem("mode_is","light");
}
}
document.getElementById("in1").onkeypress = function(e) {
    var key = e.charCode || e.keyCode || 0;     
    if (key == 13) { 
        Hi();
       return false;
       Hi();
    }
}