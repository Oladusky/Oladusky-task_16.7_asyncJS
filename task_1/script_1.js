const parser = new DOMParser();
var stringContainingXMLSource = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;
const doc = parser.parseFromString(stringContainingXMLSource, "text/xml");
const student = doc.querySelectorAll('student');
const result = {
  list: [

  ]
};
student.forEach(element => {
  const firstName = element.querySelector('name first').textContent;
  const secondName = element.querySelector('name second').textContent;
  const ageDate = element.querySelector('age');
  const profDate = element.querySelector('prof');
  const langDate = element.querySelector('name').getAttribute('lang');
  result.list.push({
    name: firstName + ' ' + secondName,
    age: ageDate,
    prof: profDate,
    lang: langDate
  });
  return result;

});
console.log(result);