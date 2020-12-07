/*
let ecran = document.getElementById('ecran');
let buttons = document.getElementsByTagName('button');

for(let button of buttons) {
    button.addEventListener('click', function (){
        switch(button.innerHTML) {
            case '=':
                ecran.innerHTML = eval(ecran.innerHTML);
                break;
            case 'c':
                ecran.innerHTML = '';
                break;
            default:
                ecran.innerHTML += button.innerHTML;
        }
    });
}
*/

let ecran = document.getElementById("ecran");

let un = document.getElementById("un")
un.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 1;
});
let deux = document.getElementById("deux")
deux.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 2;
});
let trois = document.getElementById("trois")
trois.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 3;
});
let quatre = document.getElementById("quatre")
quatre.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 4;
});
let cinq = document.getElementById("cinq")
cinq.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 5;
});
let six = document.getElementById("six")
six.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 6;
});
let sept = document.getElementById("sept")
sept.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 7;
});
let huit = document.getElementById("huit")
huit.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 8;
});
let neuf = document.getElementById("neuf")
neuf.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 9;
});
let zero = document.getElementById("zero")
zero.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + 0;
});
let point = document.getElementById("point")
point.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + ".";
});
let virgule = document.getElementById("virgule")
virgule.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + ".";
});
let multi = document.getElementById("multi")
multi.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + "*";
});
let diviser = document.getElementById("diviser")
diviser.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + "/";
});
let modulo = document.getElementById("modulo")
modulo.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + "%";
});
let moins = document.getElementById("moins")
moins.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + "-";
});
let plus = document.getElementById("plus")
plus.addEventListener("click", function (){
    ecran.innerText = ecran.innerHTML + "+";
});
let egal = document.getElementById("egal")
egal.addEventListener("click", function (){
    ecran.innerHTML = eval(ecran.innerHTML);
});
let efface = document.getElementById("efface")
efface.addEventListener("click", function (){
    ecran.innerText = " ";
});
