function usePromise() {
    // Создаем promise
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = (Math.floor(Math.random() * 100) + 1);
            if (randomNumber % 2 == 0) {
                resolve(console.log(`Завершено успешно. Сгенерированное число — ${randomNumber}`));
            } else {
                reject(console.log(`Завершено с ошибкой. Сгенерированное число — ${randomNumber}`));
            }

        }, 3000);
    });
};
usePromise();