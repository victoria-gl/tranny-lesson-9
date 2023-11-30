                                  // Урок 9.1



// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// for (let i = 3; i > 0; i-- ){
//     // console.log(i);
//     const delay = i * 1000;
//     console.log(delay);
//     setTimeout(() => console.log(i), delay);
// }



// Приклад використання setTimeout - можна передати що завгодно (масив, обʼєкти і тд )

// const timerId = setTimeout((obj) => { 
// console.log(obj.name, obj.user);
// }, 1000,{name: "Alice", user: "Vica"});

// console.log(typeof timerId);

// clearTimeout(timerId)



// Приклад використання setInterval 

// const id = setInterval((name) => {
// console.log(name);
// }, 1000, "Alice");

// clearInterval(id);



//Приклад використання setInterval & setTimeout 
// Створимо блок з рекламою яка зникне через 10 секунд


// const container = document.querySelector(".js-content");
// const text = document.querySelector(".js-text");
// let count = 10;

// text.textContent = `Залишилося ${count} секунд`;

// const id = setInterval(() => {
//     count -=1;
//     text.textContent = `Залишилося ${count} секунд`;
// }, 1000);

// setTimeout(() => {
//      clearInterval(id)
//      container.style.display = "none";
// }, 1000 * count);



//Синхронний та асинхронний JavaScript

// console.log("a");
// console.log("b");

// for(let i = 0; i < 100000000000; i++){

// }

// setTimeout(() => {
//        console.log("b");
// }, 1000);

// console.log("c");



              //Class DATE

// const currentDate = new Date();
// console.log(currentDate);

// console.log(Date.now());

// const targetDate = new Date(1701296269997);
// console.log(targetDate);

// const targetDate = new Date("2023/12/25");
// console.log(targetDate);

// console.log(targetDate - currentDate);




// Практика
// Потрібно створити два приклади годинника 
// (Електронний та механічний)

// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

// const selectors = {
//        day: document.querySelector(".date-day"),
//        date: document.querySelector(".date"),
//        month: document.querySelector(".date-month"),
//        year: document.querySelector(".date-year"),
//        clock: document.querySelector(".digital-clock"),
//        seconds: document.querySelector(".clock-seconds__arrow"),
//        minutes: document.querySelector(".clock-minutes__arrow"),
//        hours: document.querySelector(".clock-hours__arrow"),
// };

// setInterval(() => {
//     const currentDate = new Date()
//     // console.log(currentDate);

//     const day = currentDate.getDay();
//     // console.log(day);

//     const date = currentDate.getDate()
//     // console.log(date);

//     const month = currentDate.getMonth()
//     // console.log(month);

//     const year = currentDate.getFullYear();
//     // console.log(year);


//     const localeTime = currentDate.toLocaleTimeString("fr-FR");
//     // console.log(localeTime);

//     selectors.day.textContent = arrDay[day];
//     selectors.month.textContent = namesOfMonth[month];
//     selectors.date.textContent = date;
//     selectors.year.textContent = year;
//     selectors.clock.textContent = `Поточний час ${localeTime}`;

//     const hours = currentDate.getHours();
//     const minutes = currentDate.getMinutes();
//     const seconds = currentDate.getSeconds();

//     const secondsDeg = 360 / 60 * seconds;
//     const minutesDeg = 360 / 60 * minutes;
//     const hoursDeg = 360 / 12 * hours + (360 / 12 / 60) * minutes;

//     selectors.seconds.style.transform = `rotate(${secondsDeg}deg)`;
//     selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
//     selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;

// }, 1000);


                    // Урок 9.2


// const promise = new Promise((resolve, reject) => {
//      reject("Woops")
// })

// promise.then(value => console.log(value));


// const promise = new Promise((resolve, reject) => {
//     resolve("Woops")
// })

// promise.then(value => console.log(value));


// const promise = new Promise((resolve, reject) => {
//     reject("Woops")
// })

// promise.catch(err => console.log(err));


// const promise = new Promise((resolve) => {
//     resolve(10)
// })

// promise
//        .then(value => {
//              return new Promise (resolve => {
//                 resolve(value * 2)
//                })
//             })

//         .then(value => console.log(value));



//Приклад роботи синхронного та асинхронного JS


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0)

// Promise.resolve("C")
//        .then(data => console.log(data));

// console.log("D");


                                      //Promise

//Створення Promise

// const loading = document.querySelector(".loading")
// const content = document.querySelector(".content")

// const promise = new Promise((resolve, reject) => {
//     const random = Math.random() * 2000;
//     loading.textContent = "Loading..."

//     setTimeout(() => {
//         if(random > 1000){
//              resolve("Drink beer")
//         } else {
//             reject("Go home")
//         }
//     }, 2000)
// })

// console.log(promise);

// promise 
//       .then(data => {
//               loading.textContent = ""
//             //   content.textContent = data

//       })
//       .catch(error => {
//              loading.textContent = "";
//             //  content.textContent = error
//       })
//       .finally(() => {
//         loading.textContent = "";
//       })


//Обробка Propmise

// promise 
//       .then(data => {
//               loading.textContent = ""
//             //   content.textContent = data

//       })
//       .catch(error => {
//              loading.textContent = "";
//             //  content.textContent = error
//       })
//       .finally(() => {
//         loading.textContent = "";
//       })



// const result = new Promise((resolve, reject) => {
//     const random = Math.random();

//      setTimeout(() => {
//                 if(random > 1000){
//                      resolve("resolve")
//                 } else {
//                     reject("reject")
//                 }
//             }, 2000)

// })

// result
//      .then(res => console.log(res))
//      .catch(error => console.log(error))


//1)  const test = () => {
//     console.log("ok");
// }

// test();


//2)  const test = () => {
//     return "ok"
// }

// console.log(test());


//3)  const test = () => {
//     return new Promise(resolve => {
//         resolve("ok")
//     })
// }

// console.log(test());


//4)  const test = (time) => {
//     return new Promise(resolve => {
//         resolve(time)
//     })
// }

// console.log(test(1000));


//5)   const test = (time) => {
//     return new Promise(resolve => {
//         resolve(time)
//     })
// }

// test(1000)
//        .then(data => console.log(data))



// const test = time => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(time), time)
//     })
// }

// test (1000)
//         .then(result => console.log(result))


// test (3000)
//         .then(result => console.log(result))


// Promise.all([test(1000), test(3000)])
//          .then(data => console.log(data))


// Promise.all([test(3000), test(1000), test(2000)])
//          .then(data => console.log(data))
//          .catch(error => console.log(error))



// const result = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if(random > 0.5){
//             resolve("resolve")
//         } else {
//             reject("reject")
//         }
//     }, 2000)
// })

// Promise.all([result, result])
//         .then(data => console.log(data))
//         .catch(error => console.log(error))



// const test = function (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(time), time)
//     })
// }

// Promise.race([test(1000), test(3000)]) - повертає той, який виконується швидше. Навіть, якщо він повертається з помилкою
//     .then(data => console.log(data))
//     .catch(err => console.log("error", err))




// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML
// та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по
// черзі має з'являтись смайлик з затримкою в 1 секунду
// ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами
// в якому кожен з них буде відповідати за своє віконце,
// після чого оброби даний масив за допомогою методу
// Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт
// автоматично визначав чи гравець переміг, чи ні.
// Якщо в кожному віконці однаковий смайлик це означає що користувач
// переміг
// Виводить модальне вікно з повідомленням про статус гри
// ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game"
// поле має очищатись, а гра починатись з початку.


const startBtn = document.querySelector(".js-start");
const container = document.querySelector(".js-container");

startBtn.addEventListener("click", handleStart)

function handleStart() {
    const promise = [...container.children].map(() => createPromise())

    Promise.allSettled(promise)
              .then(items => {
                   console.log(items);
              })
            //   .catch()
}

function createPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random()

        if(random > 0.5){
            resolve("🤑")
        } else {
            reject("👿")
        }
     })
}


