
let userAnswer = prompt("Введите угол наклона? (От 0 до 5)") 
console.log(userAnswer)

if (userAnswer == 3){
    let answer = alert("Поздравляем, вы попали!")
    console.log(answer)
}
if (userAnswer > 3){
    let answer = alert("Промах, возьмите чутка ниже.")
    console.log(answer)
}
if (userAnswer < 3){
    let answer = alert("Промах, возьмите чутка выше")
    console.log(answer)
}