function pageLoaded() {
    const input_page = document.querySelector("#input_page");
    const input_limit = document.querySelector("#input_limit");
    const btn = document.querySelector("#button");
    const output = document.querySelector("#output");

    function sendRequest() {
        if (validate()) {
            fetch(`https://picsum.photos/v2/list?page=${input_page.value}&limit=${input_limit.value}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    writeOutput(formatOutput(data));
                })
        }
    }

    function formatOutput(data) {
        
        let output = '';

        data.forEach(item => {
            const cardBlock = `
        <div class="card">
        <p>id = ${item.id}</p>
        <p>Автор - ${item.author}</p>
        <p>Ширина: ${item.width}</p>
        <p>Высота: ${item.height}</p>
        <p>Ссылка : ${item.url}</p>
        <p>Ссылка для скачивания: ${item.download_url}</p>
        <img src = '${item.download_url}'>
        </div>`;
            output = output + cardBlock;
            localStorage.setItem('storageData',JSON.stringify(output));

        })
        return output;
    }

    function writeOutput(message) {
        output.innerHTML = message;
    }

    function validate() {
        let validated = true;
        if ((input_page.value < 1 || input_page.value > 10 || isNaN(+input_page.value)) && (input_limit.value < 1 || input_limit.value > 10 || isNaN(+input_limit.value))) {
            validated = false;
            writeOutput('Номер страницы и лимит вне диапазона от 1 до 10');
        } else if (input_limit.value < 1 || input_limit.value > 10 || isNaN(+input_limit.value)) {
            validated = false;
            writeOutput('Лимит вне диапазона от 1 до 10');
        } else if (input_page.value < 1 || input_page.value > 10 || isNaN(+input_page.value)) {
            validated = false;
            writeOutput('Номер страницы  вне диапазона от 1 до 10');
        }
        return validated;
    }

    btn.addEventListener("click", sendRequest);
}
document.addEventListener("DOMContentLoaded", pageLoaded);


document.addEventListener("DOMContentLoaded", () => {
    let info = JSON.parse(localStorage.getItem('storageData'));
    if (info) {
        // Если данные в localStorage есть - просто выводим их
        output.innerHTML = info;
    } else {
        pageLoaded();
            localStorage.setItem('myJSON', JSON.stringify(output));
        }
})