const input_id = document.querySelector("#input_id");
const btn = document.querySelector("#button");
const output = document.querySelector("#output");

function sendRequest() {
    fetch(`https://jsonplaceholder.typicode.com/users/${input_id.value}/todos`)
        .then(response => {
            const result = response.json();
            return result;
        }).then((data) => {
            if (data.length === 0) {
                alert('Пользователь с указанным id не найден');
                output.innerHTML = '';
            } else {
                writeOutput(formatOutput(data));
            }
        })
}
btn.addEventListener("click", sendRequest);



function formatOutput(data) {
    let task;
    if (`${data[3].completed}`) {
        task = `${data[2].title}`
    } else {
        task = `<s>${data[2].title}</s>`
    }

    let output = '';
    data.forEach(item => {
        let cardBlock = `
        <ul>
        <li>ID пользователя - ${item.userId}</li>
        <li>Номер задачи - ${item.id}</li>
        <li>Задача: ${task}</li>
        <li>Статус выполнения: ${item.completed}</li>
        </ul>`
        output += cardBlock;
    })
    return output;
}


function writeOutput(message) {
    output.innerHTML = message;
}