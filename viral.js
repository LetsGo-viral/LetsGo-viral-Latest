
function checkAnswer(){
    const question1 = document.querySelector('input[ name="choice1" ]:checked')?.value

    const question2 = document.querySelector('input[ name="choice2" ]:checked')?.value

    const question3 = document.querySelector('input[ name="choice3" ]:checked')?.value

    const question4 = document.querySelector('input[ name="choice4" ]:checked')?.value

    const question5 = document.querySelector('input[ name="choice5" ]:checked')?.value

    console.log(question1,question2,question3,question4,question5)

}
