let num = Number(prompt("Nhập vào số từ 0-9: ")) 
if(0 < num & num < 5){
    alert("Lower half of 9")
} else if (num > 5 & num < 9) {
    alert("Higher half of 9")
} else if (num == 9){
    alert("Highest of 0-9")
} else {
    alert("Middle of 9 or Not in range 0-9")
}