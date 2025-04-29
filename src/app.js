import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {

  const reload = document.getElementById('reload');
  const topCard = document.getElementById('cartaTop');
  const CenterCard = document.getElementById('cartaCentro');
  const BottomCard = document.getElementById('cartaBottom');

  reload.addEventListener('click', () => {window.location.reload()});

  //write your code here
  const numeros = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const simbolos = [
    { simbolo: "♥", color: "red" },
    { simbolo: "♦", color: "red" },
    { simbolo: "♣", color: "black" },
    { simbolo: "♠", color: "black" }
  ];

  const numero = numeros[Math.floor(Math.random() * numeros.length)];
  const simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];

  document.getElementById('cartaTop').innerText = simbolo.simbolo;
  document.getElementById('cartaCentro').innerText = numero;
  document.getElementById('cartaBottom').innerText = simbolo.simbolo;


  const carta = document.getElementById('carta');
  carta.style.display = "flex";
  carta.style.flexDirection = "column";
  carta.style.justifyContent = "space-between";
  carta.style.color = simbolo.color;
  carta.style.fontFamily = "Noto Sans JP";
  carta.style.fontSize = "5rem";
};


//"cartaTop"
//id="cartaCentro"
//id="cartaBottom"

//imagenExcusa.style.width = "500px";
