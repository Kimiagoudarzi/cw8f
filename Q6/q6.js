// at First please get all property of document.cookie and split them and log them
// add your name and family and your age to document.cookie
// create function that get name and value then add them to cookie
// now we want to add expire date to this cookie . please create function that get a number(n) and then Set the expiration day n days after today

// q6

let str = "kimia goudarzi 19"
function setCookie(str){
   let arr = str.split(" ")
   console.log(arr);
    document.cookie = `name=${arr[0]}; expires=Thu, 01 Jan 2030 00:00:00 UTC`;
    document.cookie = `family=${arr[1]}`;
    document.cookie = `age=${arr[2]}`;

}
console.log(setCookie(str));
console.log(document.cookie);