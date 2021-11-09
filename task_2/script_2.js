const jsonString = `
{
"worker": {
"name":"Anton",
"age":36,
"skills":["Javascript","HTML","CSS"],
"salary":80000
}
}`;


const data = JSON.parse(jsonString);
// console.log('data', data);
const worker = data.worker;
// console.log('worker', worker);


/* Этап 3. Запись данных в результирующий объект */
const result = {
  name: worker.name,
  age: worker.age,
    skills: worker.skills,
  salary: worker.salary,
  };
console.log('result', result);