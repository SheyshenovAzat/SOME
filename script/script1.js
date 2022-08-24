// const word = prompt('слово')
// word == word.split('').reverse().join('') ? console.log(true) : console.log(false);
// console.log(word.split('').reverse().join(''));

// let word = prompt('word')
// let word = 'rececar'


// let arr = [...word]
// let word1 = [...arr]
// let rev = [...arr.reverse()]

// for (let i = 0; i < arr.length; i++) {
//     word[i] === rev[i] ? console.log(true) : console.log(false);
// }


//============Array Methods=========

//push()
//shift()
//unshift()
//pop()

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const element = arr.pop()
// const second_el = arr.shift()

// console.log(element);
// console.log(second_el);
// console.log(arr);


//=====================================================================

//Slice  -  он возвращает новый массив в который копирует элементы 
//начиная с индекса start и до end (не включая end) оба индекса start
// и end могут быть отрицательными в таком случае отсчет будет 
//осуществяться с конца массива


// const array = [1, 2, 3, 'a', 'b', 'c']

// const copy_el = array.slice(0, 3)

// console.log(array);
// console.log(copy_el);


//=====================================================================

//Splice

// const array = [1, 2, 3, 'a', 'b', 'c']

// delete array[0] //не полное удаление 

// const del_el = array.splice(1, 3)
// console.log(del_el);
// console.log(array);


// =====================================================================

// Concat 

// let arr1 = [1, 2, 3, 4]
// let arr2 = ['a', 'b', 'c']

// let arr3 = [...arr1,...arr2]
// console.log(arr3);

// let arr3
// arr3 = arr3.concat(arr1, arr2, [444, 555], ['aaa', 'bbb'])
// console.log(arr3);


//=====================================================================

// indexOf, lastIndexOf, includes

// const arr = [1, 2, 3, 'a', 'b', 'c', 1, 5,]
// //indexOf - возвращает индекс элемента
// //если индекса нет в массиве - '-1'


// console.log(arr.indexOf(1, 3));


// console.log(arr.lastIndexOf(1, 4));


//includes проверяет на наличие элемента в массиве.
//Возвращает boolean(true || false)

// console.log(arr.includes(5));


//=====================================================================

//Split & join

// let arr = [1, 2, 3, 'a', 'b', 'c', 1, 5,]
// let str = 'hello,Jhon,Alex'
// str = str.split(',')
// // console.log(str);
// arr = arr.join()
// console.log(arr.split(','));


//======================================================================

//            Reverse, Sort

// let arr1 = [5, 6, 2, 4, 7, 2, 99, 0, 4, 9, 8, 56,]
// let arr2 = ['b', 'c', 't', 'aa', 'a', 'ab', 'r', 1, 23, 3, 5, 6,]

// console.log(arr1.reverse());
// console.log(arr1.sort());

// console.log(arr1.sort((a, b) => a - b)); //сортировка по порядку

// console.log(arr2.sort((a, b) => a - b));


//======================================================================

//            Переборы массивов


let developers = [
    {
        name: 'kira',
        age: 18,
        salary: 600,
    },
    {
        name: 'umar',
        age: 18,
        salary: 1000,
    },
    {
        name: 'erba',
        age: 17,
        salary: 700,
    },
    {
        name: 'ars',
        age: 19,
        salary: 900,
    },
    {
        name: 'aza',
        age: 17,
        salary: 600,
    },
    {
        name: 'baki',
        age: 21,
        salary: 700,
    },
    {
        name: 'tilek',
        age: 16,
        salary: 900,
    },
    {
        name: 'sanchik',
        age: 14,
        salary: 500,
    },
    {
        name: 'aziz',
        age: 15,
        salary: 800,
    }
]

//================= for ============

// for (let i = 0; i < developers.length; i++) {
//     console.log(`Имя: ${developers[i].name}, age: ${developers[i].age}`);
// }


//================ fof - of ========= для массивов

// for (let element of developers) {
//     console.log(`name: ${element.name} age: ${element.age}`);
// }


//=============== forEach ============

// developers.forEach((element, index, array) => { //можно element, index, array если не используется что то можно не писать
//     console.log(`name: ${element.name} inxex:${index}`);
// })

// const arr = ['a', 'b', 2, 3, 4, 5, 6,]
// arr.forEach(el => {
//     console.log(el);
// }
// )


//========================

// const teenagers = []
// const salarys = []

// for (let i = 0; i < developers.length; i++) {
//     if (developers[i].age < 18) {
//         teenagers.push(developers[i])
//     }
//     if (developers[i].salary < 900) {
//         salarys.push(salarys[i])
//     }
// }
// console.log(teenagers);
// console.log(salarys);


//================== Filter

// const adluts = developers.filter(el => {
//     if (el.age >= 18) {
//         return true
//     }
// })

// const adults = developers.filter(el => el.age >= 18)
// console.log(adults);

// Find, findIndex

// let umar = null
// for (let i = 0; i < developers.length; i++) {
//     if (developers[i].name == '') {
//         umar = developers[i]
//     }
// }
// console.log(umar);


// const umar = developers.find(el => el.name = 'umar')
// console.log(umar);


// const umarIndex = developers.findIndex(el => el.name = 'umar')
// console.log(umarIndex);


//======================================
//          map

// const arr = developers.map((element, index, array) => {
//     return element
// }
// )
// console.log(arr);


//======================================
//          Reduce

// let sum = 0
// for (let i = 0; i < developers.length; i++) {
//     sum += developers[i].salary
// }
// console.log(sum);

// const salary = developers.reduce((sum, el) => {
//     return sum + el.salary
// }, 0)
// console.log(salary);