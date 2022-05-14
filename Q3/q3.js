let array = [];
function add(id, name, family, age, birthday, avg, grade) {
  let student = {
    id: id,
    name: name,
    family: family,
    age: age,
    birthday: birthday,
    avg: avg,
    grade: grade,
  };
  array.push(student);
  console.log(array);
  localStorage.setItem("student", JSON.stringify(array));
}

function findItem(name, family) {
  let find = array.find((item) => item.name === name && item.family === family);
  return find;
}

function removeItem(id) {
  let remove = array.findIndex((item) => item.id === id);
  array.splice(remove, 1);
  console.log(array);
  localStorage.setItem("student", JSON.stringify(array));
  return array;
}

add("1", "raha", "salari", "18", "2001", "16", "19");
add("2", "mona", "yaghoubi", "37", "1984", "17", "16");
add("3", "kimia", "goudarzi", "19", "2002", "19", "18");

console.log(localStorage.getItem("student"));

console.log(findItem("kimia", "goudarzi"));

console.log(removeItem("1"));
