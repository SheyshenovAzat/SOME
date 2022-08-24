const header = document.createElement('header')
const logo_block = document.createElement('div')
logo_block.classList.add('logo_block')
const img = document.createElement('img')
img.src = './img/logo_block.png'
const logo_h1 = document.createElement('h1')
logo_h1.textContent = 'SLOGAN SLOGAN SLOGAN'



const navbar = document.createElement('nav')
navbar.classList.add('navbar')
const nav_ul = document.createElement('ul')
nav_ul.classList.add('ull')
const menu_item = ["Главная", "О приложении", "О проекте", "Скачать", "Контакты"]
for (let i = 0; i < menu_item.length; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.classList.add('menu_item')
    a.textContent = menu_item[i]
    li.append(a)
    nav_ul.append(li)
}

const section1 = document.createElement('div')
section1.classList.add('section1')
for (let i = 0; i < 3; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    img.src = './img/tgg.png'
    const p = document.createElement('p')
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'
    card.append(img, p)
    section1.append(card)
}

const main = document.createElement('main')
const h2 = document.createElement('h2')
h2.textContent = 'О приложении'

const main_div1 = document.createElement('div')
main_div1.classList.add('container_rod')
const img2_1 = document.createElement('img')
img2_1.classList.add('video')
img2_1.src = './img/rawpixel-559744-unsplash.png'
const img2_2 = document.createElement('img')
img2_2.classList.add('play')
img2_2.src = './img/play-button.png'


const question_block = document.createElement('section')
question_block.classList.add('question_block')
for (let i = 0; i < 5; i++) {
    const block_imgs = document.createElement('div')
    block_imgs.classList.add('block_img')
    const img = document.createElement('img')
    img.classList.add('block.img')
    img.src = './img/question.png'
    block_imgs.append(img)
    question_block.append(block_imgs)
}

const sect1 = document.createElement('section')
const container_info = document.createElement('div')
container_info.classList.add('container_info')

const h2_2 = document.createElement('h2')
h2_2.textContent = 'О проекте'
const p = document.createElement('p')
p.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'

const sect2 = document.createElement('section')
sect2.classList.add('download_section')
const container_download = document.createElement('div')
container_download.classList.add('container_download')
const h2_3 = document.createElement('h2')
h2_3.textContent = 'Скачать'
const down = document.createElement('div')
down.classList.add('down')
const img2_3 = document.createElement('img')
img2_3.src = './img/android.png'
const img2_4 = document.createElement('img')
img2_4.src = './img/icon.png'





const footer = document.createElement('footer')
const h6 = document.createElement('h6')
h6.textContent = 'SOME'
const footer_div = document.createElement('div')
footer_div.classList.add('footer')
const img2_5 = document.createElement('img')
img2_5.src = './img/vk.png'
const img2_6 = document.createElement('img')
img2_6.src = './img/instagram (1).png'
const img2_7 = document.createElement('img')
img2_7.src = './img/facebook.png'


const contact = document.createElement('div')
contact.classList.add('contact')
const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.textContent = 'Контакты'
const li2 = document.createElement('li')
li2.textContent = 'Адреса'
const li3 = document.createElement('li')
li3.textContent = 'Помощь'


const dannye = document.createElement('div')
dannye.classList.add('dannye')
const ul1 = document.createElement('ul')

const one_size1 = document.createElement('div')
one_size1.classList.add('one_size')
const li1_1 = document.createElement('li')
li1_1.textContent = 'Tel.: +996 (312) 915000 + Еxt. Fax: +996 (312) 915 028'

const one_size2 = document.createElement('div')
one_size2.classList.add('one_size')
const li1_2 = document.createElement('li')
li1_2.textContent = 'American University of Central Asia 7/6 Aaly Tokombaev Street Bishkek, Kyrgyz Republic 720060'

const one_size3 = document.createElement('div')
one_size3.classList.add('one_size')
const p_1 = document.createElement('p')
p_1.classList.add('p0')
p_1.textContent = 'Помощь'
const p_2 = document.createElement('p')
p_2.classList.add('p0')
p_2.textContent = 'Помощь'
const p_3 = document.createElement('p')
p_3.classList.add('p0')
p_3.textContent = 'Помощь'


const body = document.body



one_size1.append(li1_1)
one_size2.append(li1_2)
one_size3.append(p_1, p_2, p_3)
ul1.append(one_size1, one_size2, one_size3)
dannye.append(ul1)

ul.append(li1, li2, li3)
contact.append(ul)
footer_div.append(img2_5, img2_6, img2_7)
footer.append(h6, footer_div, contact, dannye)

down.append(img2_3, img2_4)
sect2.append(container_download, h2_3, down)

container_info.append(h2_2, p)
sect1.append(container_info)

main_div1.append(img2_1, img2_2)
main.append(h2, main_div1, question_block, sect1, sect2)

navbar.append(nav_ul, section1)
logo_block.append(img, logo_h1)
header.append(logo_block, navbar)
body.append(header, main, footer)
