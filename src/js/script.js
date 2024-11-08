// TODO
//Ex 1

var aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.style.color ="red";

//Ex2

enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");
enRougeSuiteAClick.addEventListener("click", (evt) =>{
    enRougeSuiteAClick.syle.color ="red";
})

//Ex3

collH2 = document.querySelectorAll("H2");
collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color ="red";
    });
});