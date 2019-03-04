
function displayScreen0 () {

  let displayNode = document.getElementById("displayArea");

  while (displayNode.firstChild) {
    displayNode.removeChild(displayNode.firstChild);
  }

  let para = document.createElement("P");
  let pTxt = document.createTextNode("Je me réveille à cinq heures et je fais mon lit. Je ramasse un livre, Est d'Eden de John Steinbeck, et je lis pour une demi-heure. Après j’ai fini de lire, je me brosse les dents et je me lave. Je m’habille pour le jour.");
  para.appendChild(pTxt);

  let pChoice = document.createElement("P");
  let pCTxt = document.createTextNode("Quelle dois-je porter?");
  pChoice.appendChild(pCTxt);

  let dImg = document.createElement("img");
  dImg.src = "wakeup.jpg";
  dImg.style.width = 200;
  dImg.style.height = 100;

  let btn1 = document.createElement("BUTTON");
  let bTxt = document.createTextNode("Une chemise avec des pantalons");
  btn1.appendChild(bTxt);
  btn1.onclick = displayScreen1;
  btn1.style.align = "center";

  let btn2 = document.createElement("BUTTON");
  let bTxt2 = document.createTextNode("Un chandail avec des pantalons");
  btn2.appendChild(bTxt2);
  btn2.onclick = displayScreen1;
  btn2.style.align = "center";

  displayNode.appendChild(dImg);
  displayNode.appendChild(para);
  displayNode.appendChild(pChoice);
  displayNode.appendChild(btn1);
  displayNode.appendChild(btn2);

}

function displayScreen1 () {

  let displayNode = document.getElementById("displayArea");

  while (displayNode.firstChild) {
    displayNode.removeChild(displayNode.firstChild);
  }

  let para = document.createElement("P");
  let pTxt = document.createTextNode("J’entre dans la cuisine et je cuisine le petit-déjeuner. Un petit-déjeuner typique composé des pain grillé et une tasse du lait. Après j’ai fini manger mon petit-déjeuner, je me déplace à l’école. Je me dépêche parce que c’est l’hiver et je vais devoir marcher. Je fais de vélo dans l’été.");
  para.appendChild(pTxt);

  let para2 = document.createElement("P");
  let p2Txt = document.createTextNode("À l’école, je vais mon cours. J’ai d’anglais en première période, puis, j’ai des mathématiques en seconde période, un pause, d’histoire Canadien et le Français. J’ai des beaucoup des activités extrascolaire, aussi.");
  para2.appendChild(p2Txt);

  let dImg = document.createElement("img");
  dImg.src = "breakfast.jpg";
  dImg.style.width = 200;
  dImg.style.height = 100;

  let pChoice = document.createElement("P");
  let pCTxt = document.createTextNode("Quelle jour est aujourd hui?");
  pChoice.appendChild(pCTxt);

  let btn1 = document.createElement("BUTTON");
  let bTxt = document.createTextNode("Lundi - Robotiques");
  btn1.appendChild(bTxt);
  btn1.onclick = displayScreen2;
  btn1.style.align = "center";

  let btn2 = document.createElement("BUTTON");
  let bTxt2 = document.createTextNode("Mardi - Orchestre");
  btn2.appendChild(bTxt2);
  btn2.onclick = displayScreen2;
  btn2.style.align = "center";

  let btn3 = document.createElement("BUTTON");
  let bTxt3 = document.createTextNode("Vendredi - Reach");
  btn3.appendChild(bTxt3);
  btn3.onclick = displayScreen2;
  btn3.style.align = "center";

  displayNode.appendChild(para);
  displayNode.appendChild(dImg);
  displayNode.appendChild(para2);
  displayNode.appendChild(pChoice);
  displayNode.appendChild(btn1);
  displayNode.appendChild(btn2);
  displayNode.appendChild(btn3);

}

function displayScreen2 () {

  let displayNode = document.getElementById("displayArea");

  while (displayNode.firstChild) {
    displayNode.removeChild(displayNode.firstChild);
  }

  let para = document.createElement("P");
  let pTxt = document.createTextNode("Je me retourne à ma maison après un jour exténuant. Je fais des devoirs pour quelques temps puis je joue des joue de vidéos. Je fais la lessive et je repasse mon pantalons.");
  para.appendChild(pTxt);

  let para2 = document.createElement("P");
  let p2Txt = document.createTextNode("À six heures, je mange mon souper et je fais la vaisselle. La lave-vaisselle est cassé. À neuf heures, je me couche.");
  para2.appendChild(p2Txt);

  let para3 = document.createElement("H2");
  let p3Txt = document.createTextNode("La Fin!");
  para3.appendChild(p3Txt);

  let dImg = document.createElement("img");
  dImg.src = "iron.jpg";
  dImg.style.width = 200;
  dImg.style.height = 100;

  para3.style.textAlign = "center";

  displayNode.appendChild(para);
  displayNode.appendChild(dImg);
  displayNode.appendChild(para2);
  displayNode.appendChild(para3);

}
