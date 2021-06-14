let n = Number(prompt("Nhập vào số n: "))
let x = Number(prompt("Nhập vào số x: "))
num = n / 2
if(x < num){
    alert(`${x} is in lower half of ${n}`)
} else if (num > x && x <= n){
    alert(`${x} is in higher half of ${n}`)
} else {
    alert(`${x} is not in range of 1 to ${n} or wrong input`)
}