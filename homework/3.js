for(let i = 0; i < 7; i++){
    console.log(i)
}

let n = Number(prompt("Nhập n: "));
for(let j = 0; j < n; j++){
    console.log(j)
}

let m = Number(prompt("Nhập m: (Start from 3)"))
for(let k = 3; k < m; k++){
    console.log(k)
}

let c = Number(prompt("Nhập c: (Start)"))
let l = Number(prompt("Nhập l: (End)"))
for(let a = c; a < l; a++){
    console.log(a)
}

let e = Number(prompt("Nhập e: (Start)"))
let f = Number(prompt("Nhập f: (End)"))
for(let b = e; b < f; b += 3){
    console.log(b)
}

let q = Number(prompt("Nhập q: (Start)"))
let p = Number(prompt("Nhập p: (End)"))
let s = Number(prompt("Nhập s: (Plus)"))
for(let t = q; t < p; t += s){
    console.log(t)
}