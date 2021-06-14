let n = Number(prompt("Nhập n: "))
let a = 1;
for(let i = 1; i <= n; i++){
    a *= i
}
alert(`The factorial of ${n} is ${a}`)