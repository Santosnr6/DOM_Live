console.log('Hello World!');

const divRef = document.querySelector('#pageDiv');
const textRefs = document.querySelectorAll('.text-content');

// textRefs.forEach(textRef => {
//     textRef.textContent = 'Heja Arsenal';
// });

for(let i = 0; i < textRefs.length; i++) {
    textRefs[i].textContent = 'Heja Arsenal x ' + `${i + 1}`;
    if(i % 2 === 0) {
        //textRefs[i].setAttribute('style', 'color: red;');
        //textRefs[i].style = 'color: red;';
        //I nödfall
        //textRefs[i].style.color = 'red';
        //Annars använd denna
        textRefs[i].classList.add('t-red');
    }
    if(i === textRefs.length - 1) {
        //textRefs[i].setAttribute('id', 'hejaArsenal');
        textRefs[i].id = 'hejaArsenal';
    }
}

const pRef = document.querySelector('#hejaArsenal');
console.log(pRef.textContent);
pRef.classList.add('arsenal');
//pRef.classList.add('d-none');

const textRef = document.createElement('p');
textRef.textContent = 'Heja Arsenal x 6';
divRef.appendChild(textRef);

const pNodeRef = document.createElement('p');
const textNodeRef = document.createTextNode('Heja Arsenal x 4.5');

pNodeRef.appendChild(textNodeRef);
divRef.insertBefore(pNodeRef, pRef);

//Händelselyssnare
textRef.addEventListener('click', printTextContentToConsole);

function printTextContentToConsole(event) {
    console.log(event.target.textContent);
}

//Samma skit, olika sätt
pNodeRef.addEventListener('mouseleave', function(event) {
    console.log(event.target.textContent);
    event.target.classList.toggle('t-red');
});

pNodeRef.addEventListener('mouseleave', (event) => {
    console.log(event.target.textContent);
    event.target.classList.toggle('t-red');
});
