const cria = document.getElementById("leao");
const btn = document.getElementById("carne");

const estados = {
    normal:  "leao.png",
    bravo: "leao_bravo.png",
    morto: "leao_morto.png",
    comendo: "leao_comendo.png",
    alimentado: "leao_feliz.png",
}

const fundoDia = "savana.png";
const fundoNoite = "savana_noite.png";

let horas = 0;
let intervaloFundo = null;
let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
      

    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 15){
                cria.src = estados.bravo;
            }

            if(contador == 30){
                cria.src = estados.morto;
            }

            
        }, 1000);
    }       

function atualizarFundo() {

    if (intervaloFundo) clearInterval(intervaloFundo);

    intervaloFundo = setInterval(() => {
        horas++;

        console.log("horas:", horas);

        if (horas >= 12) {
            document.body.style.backgroundImage = `url('${fundoNoite}')`;
        } else {
            document.body.style.backgroundImage = `url('${fundoDia}')`;
        }

        if (horas >= 24) {
            horas = 0;
        }

    }, 1000); 
}

controlador();
atualizarFundo();

function alimentar() {

if (contador >= 30) {
    console.log("O leão morreu ");
    return;
}
    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

  if (time_out) clearTimeout(time_out);

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);

}

const toggle = document.getElementById("toggleModo");

toggle.addEventListener("change", () => {

    const estrelas = document.querySelector(".estrelas");

    if (intervaloFundo) clearInterval(intervaloFundo);

    if (toggle.checked) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
        estrelas.style.display = "block";
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
        estrelas.style.display = "none";
    }
});

function mostrarFerlini() {
    const img = document.getElementById("imgFerlini");

    if (img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

function mostrarDacio() {
    const img = document.getElementById("imgDacio");
    const texto = document.getElementById("textoMoreno");

    if (img.style.display === "none") {
        img.style.display = "block";
        texto.style.display = "block";
    } else {
        img.style.display = "none";
         texto.style.display = "none";
    }
}