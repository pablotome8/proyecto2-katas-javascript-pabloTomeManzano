// 2.1 Inserta dinámicamente en un html un div vacío con javascript.
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);


// 2.2 Inserta dinámicamente en un html un div que contenga una p con javascript.
const divWithP = document.createElement('div');
const paragraph = document.createElement('p');
divWithP.appendChild(paragraph);
document.body.appendChild(divWithP);


// 2.3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divWith6P = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  divWith6P.appendChild(p);
}
document.body.appendChild(divWith6P);


// 2.4 Inserta dinámicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';


// 2.6 Basándote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => element.remove());


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const allDivs = document.querySelectorAll('div');
const middleP = document.createElement('p');
middleP.textContent = 'Voy en medio!';

// .insertAdjacentElement o .insertBefore nos permite colocarlo antes del segundo div
allDivs[1].insertAdjacentElement('beforebegin', middleP);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertHereDivs = document.querySelectorAll('div.fn-insert-here');

insertHereDivs.forEach(div => {
  const innerP = document.createElement('p');
  innerP.textContent = 'Voy dentro!';
  div.appendChild(innerP);
});