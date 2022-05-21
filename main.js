const back = document.querySelector("body");
const sbtn = document.getElementById("sbtn");
const rbtn = document.getElementById("rbtn");
const text = document.getElementById("text");
const color = ["black", "red", "yellow", "blue", "orange", "purple", "white"]
var sayi = 0;

sbtn.addEventListener("click", schange);
rbtn.addEventListener("click", rchange);



function rchange() {

    let dizi = Math.floor(Math.random() * 10);
    if (dizi >= 8) {
        dizi = dizi - 4;
    }

    back.style.backgroundColor = color[dizi]

    switch (dizi) {
        case 0:
            text.style.color = "white"
            text.innerText = "Siyah";
            break;

        case 1:
            text.style.color = "white"
            text.innerText = "Kırmızı";
            break;

        case 2:
            text.style.color = "black"
            text.innerText = "Sarı";
            break;

        case 3:
            text.style.color = "white"
            text.innerText = "Mavi";
            break;

        case 4:
            text.style.color = "white"
            text.innerText = "Turuncu";
            break;

        case 5:
            text.style.color = "white"
            text.innerText = "Mor";
            break;

        case 6:
            text.style.color = "black"
            text.innerText = "Beyaz";
            break;

    }


};


function schange() {
    if (sayi >= 7) {
        sayi = 0;
    }
    sayi = sayi + 1;
    console.log(sayi)
    back.style.backgroundColor = color[sayi]
    switch (sayi) {
        case 0:
            text.style.color = "white"
            text.innerText = "Siyah";
            break;

        case 1:
            text.style.color = "white"
            text.innerText = "Kırmızı";
            break;

        case 2:
            text.style.color = "black"
            text.innerText = "Sarı";
            break;

        case 3:
            text.style.color = "white"
            text.innerText = "Mavi";
            break;

        case 4:
            text.style.color = "white"
            text.innerText = "Turuncu";
            break;

        case 5:
            text.style.color = "white"
            text.innerText = "Mor";
            break;

        case 6:
            text.style.color = "black"
            text.innerText = "Beyaz";
            break;

    }
};