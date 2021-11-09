function pageLoaded() {
    const select = document.querySelector("#select");
    const btn = document.querySelector("#btn");
    const output = document.querySelector("#output");
    let graf = document.getElementById("graf");
    console.log(select.value);

    function sendRequest() {
        if (select.value !== '') {
            fetch(`https://my.api.mockaroo.com/revenue_2017-2019.json?year=${select.value}&key=fd36b440`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    writeOutput(formatOutput(data));
                })
        }
    }



    function formatOutput(data) {
        let output = `
            <table>
            <tr>
             <th>Кв.1</th>
             <th>Кв.2</th>
             <th>Кв.3</th>
             <th>Кв.4</th>
            </tr>
            <tr>
            <td>${data[1].sales.q1}</td>
             <td>${data[1].sales.q2}</td>
             <td>${data[1].sales.q3}</td>
             <td>${data[1].sales.q4}</td>
           </tr>
          </table>`
        graf = (`https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${select.value} год',data:[${data[1].sales.q1},${data[1].sales.q2},${data[1].sales.q3},${data[1].sales.q4}]}]}}`)
        graf.setAttribute("href", url);
        return output;
    }

    function writeOutput(message) {
        output.innerHTML = message;
    }

    btn.addEventListener("click", sendRequest);

}
document.addEventListener("DOMContentLoaded", pageLoaded);