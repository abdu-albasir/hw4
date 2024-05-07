
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];




users.forEach(obj => {
    obj.admin = false;
});

console.log(users);





let userstwo = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];



userstwo.forEach(obj => {
    obj.admin = obj.name === 'Маша' ? true : false;
});

console.log(userstwo);