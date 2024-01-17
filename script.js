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

pNodeRef.addEventListener('mouseleave', function(event) {
    console.log(event.target.textContent);
    event.target.classList.toggle('t-red');
});

pNodeRef.addEventListener('mouseleave', (event) => {
    console.log(event.target.textContent);
    event.target.classList.toggle('t-red');
});

//Lösningsförslag Sinus MiniShop

// Code here!
/* 1 */
const refOne = document.querySelector('.art-1 h3');
refOne.textContent = 'Potato';

/* 2 */
const refTwo = document.querySelector('nav a');
refTwo.textContent = 'Start';

/* 3 */
const refThree = document.querySelector('nav a:nth-child(3)');
refThree.textContent = 'Mail us';

/*
let linkRefs = document.querySelectorAll('nav a');
for(let i = 0; i < linkRefs.length; i++) {
    if(i === linkRefs.length - 1) 
        linkRefs[i].textContent = 'Mail us';
}
*/

/* 4 */
const refFour = document.querySelector('.art-2 p');
refFour.textContent = 'En lagom tjock tröja i sina bästa år!';

/* 5 */
const refFive = document.querySelector('.art-3 button');
refFive.style.backgroundColor = 'red';
refFive.textContent = 'Hjälp';

/* 6 */
const refSix = document.querySelector('.art-2');
refSix.style.backgroundColor = 'pink';

/* 7 */
const refSeven = document.querySelector('section article:nth-child(2)');
const address = refSeven.querySelector('p');

address.innerHTML = 'Gamla Vägen 115 <br> 664 34 Grums';

/* 8 */
const refsEight = document.querySelectorAll('p');
refsEight.forEach(p => {
    p.style.color = 'red';
});

/* 9 */
const refsBtn = document.querySelectorAll('button');
for(let i = 0; i < refsBtn.length; i++) {
    refsBtn[i].textContent = 'Add to cart';
}

/* 10 */
refTwo.classList.add('active');

/* 11 */
const refEleven = document.querySelector('.logo');
//refEleven.classList.remove('logo');

/* 12 */
const navRef = document.querySelector('nav');
const imgRef1 = document.querySelector('nav img');
const linkRef = document.createElement('a');
linkRef.textContent = 'Checkout';
linkRef.href = '#';

navRef.insertBefore(linkRef, imgRef1);

/* 13 */
const articleRef = document.createElement('article');
const figureRef = document.createElement('figure');

const imgRef = document.createElement('img');
imgRef.src = 'img/hoodie-forrest.png';
imgRef.alt = 'hoodie';
figureRef.appendChild(imgRef);

const headerRef = document.createElement('h2');
headerRef.textContent = 'Sinus Hoodie'

const subheaderRef = document.createElement('h3');
subheaderRef.textContent = 'Forrest';

const pRef = document.createElement('p');
pRef.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.';

const btnRef = document.createElement('button');
btnRef.textContent = 'Add to cart';

articleRef.appendChild(figureRef);
articleRef.appendChild(headerRef);
articleRef.appendChild(subheaderRef);
articleRef.appendChild(pRef);
articleRef.appendChild(btnRef);

// let articleHTML = `
//     <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
//     <h2>Sinus Hoodie</h2>
//     <h3>Forrest</h3>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
//     <button>Add to cart</button>
// `;

// articleRef.innerHTML = articleHTML;

document.querySelector('main').appendChild(articleRef);


/*
<article class="art-1">
    <figure><img src="img/hoodie-ash.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Ash</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
    <button>buy</button>
</article>
*/

/* 14 */
const logoRef = document.querySelector('.logo');

logoRef.addEventListener('click', () => {
    console.log('found you!');
});

/* 15 */
const articleRefs = document.querySelectorAll('main article');

articleRefs.forEach(article => {
    article.addEventListener('click', () => {
        const textRef = article.querySelector('h3');
        console.log('Hi! Im article ' + textRef.textContent);
    });
});

