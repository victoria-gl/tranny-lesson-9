// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

for (let i = 3; i > 0; i-- ){
    // console.log(i);
    const delay = i * 1000;
    console.log(delay);
    // setTimeout(() => console.log(i), delay);
}

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд