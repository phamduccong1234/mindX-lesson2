// // 1. Tính số % học sinh nam và nữ của một lớp, số học sinh được nhập vào bởi ng dùng
// let maleStudent = prompt("Nhập vào số học sinh nam: ")
// let femaleStudent = prompt("Nhập vào số học sinh nữ: ")
// let totalStudent = Number(maleStudent) + Number(femaleStudent)
// let male = (maleStudent / totalStudent) * 100
// let female = (femaleStudent / totalStudent) * 100
// alert(`Số nam: ${male} và Số nữ: ${female}`)

// // 2. Yêu cầu ng dùng nhập vào tên và số điện thoại (ít nhất 3 người) => log ra màn
// let namePerson1 = prompt("Nhập vào tên người 1: ")
// let phonePerson1 = prompt("Nhập vào số điện thoại 1")
// let namePerson2 = prompt("Nhập vào tên người 2: ")
// let phonePerson2 = prompt("Nhập vào số điện thoại 2")
// let namePerson3 = prompt("Nhập vào tên người 3: ")
// let phonePerson3 = prompt("Nhập vào số điện thoại 3")
// alert(`Danh bạ :
//     ${namePerson1} - ${phonePerson1} =
//     ${namePerson2} - ${phonePerson2} =
//     ${namePerson3} - ${phonePerson3} =
// `)

// for (let i = 0; i < 3; i++) {
//   let namePerson = prompt("Nhập vào tên người: ");
//   let phonePerson = prompt("Nhập vào số điện thoại: ");
//   console.log(i + 1 + `. ${namePerson} - ${phonePerson}`)
// }

// for (let i = 10; i < 100; i++) {
//     console.log(i)
// }

// for(let i = 8; i >= 0; i-= 2){
//     console.log(i)
// }

// let n = prompt("Nhập n: ")
// let m = prompt("Nhập m: ")
// for(let i = m; i <= n; i++){
//     console.log(i)
// }

// for (let i = 0; i < 3; i++) {
//     let x = 10;
//     var y = 20;
// }

// // console.log(x)
// console.log(y)

// while (true) {
//   let name = prompt("Enter your name");
//   let phone = prompt("Enter your phone ");
//   console.log(`${name} - ${phone}`);
//   let ans = prompt("Do you want to continue? (y/n)");
//   if (ans == "n") {
//     break;
//   } else if (ans == "y") {
//     continue;
//   } else {
//     alert("Your comment is not supported");
//     break;
//   }
// }

let age = prompt("Nhập tuổi: ")
if(age >= 18){
    alert("Lấy vợ thôi")
} else{
    alert("Còn non lắm")
}

let sum = 0;
for(let i = 10; i < 100; i++){
    sum += i
    console.log(sum)
}

let sum1 = 0;
let n = prompt("Nhập vào 1 số n: ")
for(let i = 0; i <= n; i ++){
    sum1 *= i
    console.log(`${n}! = ` + sum1)
}

let num = prompt("Nhập vào 1 số: ")
if(num % 5 == 0){
    alert("Số này chia hết cho 5")
} else {
    alert("False")
}

let num1 = Number(prompt("Nhập vào số thứ nhất: "))
let num2 = Number(prompt("Nhập vào số thứ hai: "))
let num3 = Number(prompt("Nhập vào số thứ ba: "))

if(num1 == 0) {
         
    if(num2 == 0) {
        if (num3 == 0) {
            alert('Phuong trinh vo so nghiem')
             
        } else {
            alert('Phuong trinh vo nghiem')
        }
    } else {
        alert('Phuong trinh co nghiem duy nhat: '+(-c/b))
    }
} else {
    var delta = b*b - 4*a*c;
    if(delta > 0) {
        var x1 = (-b+Math.sqrt(delta))/(2*a);
        var x2 = (-b-Math.sqrt(delta))/(2*a);
        alert('Nghiem thu nhat x1 = '+x1+'\n Nghiem thu hai x2 = '+x2)
    } else if ( delta == 0) {
        var sum = -b/2*a
        alert('Phuong trinh co nghiem kep: x1 = x2 = '+sum)
    } else {
        alert('Phuong trinh vo nghiem')
    }
}




