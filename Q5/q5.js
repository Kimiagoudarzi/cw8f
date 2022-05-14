let student = {
    name: "kimia",
    family: 'goudarzi'
}
function add(student){
    sessionStorage.setItem("stu", JSON.stringify(student))
}

console.log(sessionStorage.getItem("stu")); 
add(student);