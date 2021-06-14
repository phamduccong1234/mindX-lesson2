let mass = Number(prompt("Cân nặng của bạn: "))
let heightCm = Number(prompt("Chiều cao của bạn: "))
let heightM = heightCm / 100
let calBMI = Number(mass / (heightM * heightM)) 
let bmi = calBMI.toFixed(1)
alert(`Your BMI is ${bmi}`)
if(bmi < 16){
    alert("You are Severely underweight")
} else if (16 <= bmi && bmi <= 18.5){
    alert("You are Underweight")
} else if (18.5 <= bmi && bmi <= 25){
    alert("You are Normal")
} else if (25 <= bmi && bmi <= 30){
    alert("You are Overweight")
} else {
    alert("You are Obese")
}