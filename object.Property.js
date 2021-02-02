const students = [
    {id: 22, name:'shakib khan'},
    {id: 23, name: 'opubisas'},
    {id: 25, name: 'moyori'},
    {id: 55, name: 'dipjol'},
];
const name = students.map(s=>s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>30);
const bigger1 = students.find(s => s.id>30);
console.log(name);
console.log(ids);
console.log(bigger);
console.log(bigger1);