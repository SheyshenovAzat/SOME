// Document - это обьект нашей html разметки


//============= создвние элементов ==============

// const h1 = document.createElement('h1')
// h1.textContent = 'JavaScript - Dom'

// const p = document.createElement('p')
// p.textContent = 'JS i\'m not love you'

// const span = document.createElement('span')
// span.textContent = 'string tag - span'


// const div = document.createElement('div')
// div.innerHTML = 'random text in div'
// div.innerHTML = '<h2>It is h2 in divs</h2>'
// div.innerHTML = `
// <h2>H1</h2>
// <ul>
// <li>item1</li>
// <li>item2</li>
// <li>item3</li>
// <li>item4</li>
// <li>item5</li>
// </ul>
// `


//=============== стилизация внутри js ==============

// const box = document.createElement('div')

// // для написания стилей по отдельности

// // box.style.width = '600px'
// // box.style.height = '250px'
// // box.style.background = 'black'
// // box.style.boxShadow = '0px 0px 20px 5px #000'


// // для написания нескольких стилей одновременно 

// box.style.cssText = `
// width: 500px;
// height: 200px;
// background: black;
// box-shadow: 0px 0px 20px 10px aquamarine;
// border-radius: 2% 
// `


//================= получение элемента(ов) иz html =============
//получение по id

// const input1 = document.getElementById('inp1')
// input1.style.width = '500px'

// const input2 = document.getElementById('inp2')
// input2.style.background = 'red'

//получение по тегам 

// const spans = document.getElementsByTagName('span')  // возвращает псевдо массив элементов
// console.log(spans[0], spans[1], spans[2]);
// for (let i = 0; i < spans.length; i++) {
//     if (i == 0) {
//         spans[i].style.background = 'red'
//     } else if (i == 1) {
//         spans[i].style.background = 'blue'
//     } else {
//         spans[i].style.background = 'yellow'
//     }
// }

// console.log(spans);

//====================== получение по классам =========================


// const spans = document.getElementsByClassName('span')
// console.log(spans);

// ==================== получение по селектору ========================

// обращение по селектору тега 
// const h1 = document.querySelector('h1')

// обращение по селектору через id
// const input1 = document.querySelector('#inp1')
// console.log(input1);


// обращение по селектору через класс
// const spans = document.querySelectorAll('.span')
// console.log(spans);


// ====================== работа с атрибутами ====================

// const image = document.createElement('img')
// // image.setAttribute('src', './img/ml.jpeg')
// image.src = './img/ml.jpeg'
// image.style.width = "800px"
// image.style.height = "400px"


// ======================= работа с классами ====================

// const h1 = document.querySelector('h1')
// const p = document.querySelector('p')
// const inputs = document.querySelectorAll('input')

// h1.className = 'title'   //первый способ задать класс
// h1.classList.add('titl')  //это второй способ задать класс
// p.classList.add('text')

// p.classList.remove('text') //удаление классов

// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].classList.add('text')
// }







// ================= добавление элемента в html ===========
// append - добавляет созданный элемент в конец

// const body = document.body

// body.append(h1)
// body.append(p)
// body.append(span)
// body.append(h1, p, span)
// body.append(box)
// body.append(image)


// preprnd - добавление в начало

// body.prepend(h1)









//====================================================
// const body = document.body 
// const header = document.createElement("header") 
// const logo_block = document.createElement("div") 
// logo_block.classList.add("logo_block") 
// const img = document.createElement("img") 
// img.src = "./img/logo.png" 
// const logo_blockH1 = document.createElement("h1") 
// logo_blockH1.textContent = "SLOGAN SLOGAN SLOGAN" 
 
 
 
 
// const navbar = document.createElement("nav") 
// navbar.classList.add("navbar") 
// const nav_ul = document.createElement("ul") 
// nav_ul.classList.add("ull") 
// const menu_item = ["Главная", "О приложении", "О проекте", "Скачать", "Контакты"] 
// for (let i = 0; i < menu_item.length; i++) { 
//     const li = document.createElement("li") 
//     const a = document.createElement("a") 
//     a.classList.add("menu_item") 
//     a.textContent = menu_item[i] 
//     li.append(a) 
//     nav_ul.append(li) 
// } 
 
 
 
 
// const section1 = document.createElement("div") 
// section1.classList.add("section1") 
// for (let i = 0; i < 3; i++) { 
//     const card = document.createElement("div") 
//     card.classList.add("card") 
//     const img = document.createElement("img") 
//     img.src = "./img/foto.png" 
//     const p = document.createElement("p") 
//     p.textContent = "Часто ли Вы опаздываете на работу (учёбу)?" 
//     card.append(img, p) 
//     section1.append(card) 
// } 
 
// const main = document.createElement("main") 
// const h2 = document.createElement("h2") 
// h2.textContent = "О приложении" 
// const container_rod = document.createElement("div") 
// container_rod.classList.add("container_rod") 
// const img_video = document.createElement("img") 
// img_video.classList.add("video") 
// img_video.src = "./img/fott.png" 
// const img_play = document.createElement("img") 
// img_play.classList.add("play") 
// img_play.src = "./img/play-button.png" 
 
 
// const question_block = document.createElement("section") 
// question_block.classList.add("question_block") 
// for (let i = 0; i < 3; i++) { 
//     const card = document.createElement("div") 
//     card.classList.add("card") 
//     const img = document.createElement("img") 
//     img.src = "./img/foto.png" 
//     const p = document.createElement("p") 
//     p.textContent = "Часто ли Вы опаздываете на работу (учёбу)?" 
//     card.append(img, p) 
//     section1.append(card) 
// } 
 
 
 
 
 
 
 
 
 
 
 
 
 
// container_rod.append(img_video, img_play) 
// main.append(h2, container_rod) 
 
// navbar.append(nav_ul) 
 
// logo_block.append(img, logo_blockH1) 
// header.append(logo_block, navbar, section1) 
// body.append(header, main)