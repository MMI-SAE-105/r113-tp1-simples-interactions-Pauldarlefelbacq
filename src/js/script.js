// TODO
//Ex 1

const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.style.color ="red";

//Ex2

const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");
enRougeSuiteAClick.addEventListener("click", (evt) =>{
    enRougeSuiteAClick.syle.color ="red";
})

//Ex3

const collH2 = document.querySelectorAll("H2");
collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color ="red";
    });
});