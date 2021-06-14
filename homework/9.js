let num = 6
let l = num / 2
let h = num - l
for(let i = 0; i < l; i++){
    console.log(`L`)
}
for(let j = 0; j < h; j++){
    console.log(`H`)
}

let x = Number(prompt("Nhập vào 1 số: "))
for(let i = 0; i < x; i++){
    if(i < x / 2){
        console.log(`L`)
    } else {
        console.log(`H`)
    }
}

for(let i = 0; i <= 8; i++){
    if(i % 2 == 0){
        console.log('0')
    } else {
        console.log('1')
    }
}

let num1 = Number(prompt("Nhập vào 1 số: "))
for(let i = 0; i < num1; i++){
    if(i % 2 == 0){
        console.log(`0`)
    } else {
        console.log(`1`)
    }
}




