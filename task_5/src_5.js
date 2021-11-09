const output = document.querySelector("#output");

function date() {
    var d = new Date();
 
let day = new Array("воскресенье","понедельник","вторник",
"среда","четверг","пятница","суббота");
 
let month = new Array("января","февраля","марта","апреля","мая","июня",
"июля","августа","сентября","октября","ноября","декабря");
 
let fullDate = ("в" + " " + day[d.getDay()]+" " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " года " + "в "+ d.getHours() + ":"+ d.getMinutes() + ":"+ d.getSeconds())
    localStorage.setItem('date', JSON.stringify(fullDate));
    return fullDate;
    }
function greeting() {
    let abc = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
     localStorage.setItem('name',JSON.stringify(abc));
    
   }
document.addEventListener("DOMContentLoaded", date);

document.addEventListener("DOMContentLoaded", () => {
    let nameName = JSON.parse(localStorage.getItem('name'));
    let actualDate = JSON.parse(localStorage.getItem('date'));
    if (nameName && actualDate) {
        // Если данные в localStorage есть - просто выводим их
        let greet = (`Добрый день, ${nameName}! Давно не виделись. В последний раз вы были у нас ${actualDate}`);
        alert(greet);
        localStorage.setItem('date', JSON.stringify(fullDate));
    } else {
        greeting();
    }
})