

function checkAnswer(){
    let currentScores = 0;
    let scores =1;
    const myscores = document.getElementById("myscores")
    const question1 = document.querySelector('input[ name="choice1" ]:checked')?.value

    const question2 = document.querySelector('input[ name="choice2" ]:checked')?.value

    const question3 = document.querySelector('input[ name="choice3" ]:checked')?.value

    const question4 = document.querySelector('input[ name="choice4" ]:checked')?.value

    const question5 = document.querySelector('input[ name="choice5" ]:checked')?.value

    const back = document.querySelector(".scoresSummary")
    back.style.display ="flex"


    if(question1 === "A"){
        currentScores+=scores
        myscores.textContent="Scores"+currentScores;



    }

    if(question2 === "D"){
        currentScores+=scores
        myscores.textContent="Scores"+currentScores;



    }
    if(question3 === "D"){
        currentScores+=scores
        myscores.textContent="Scores"+currentScores;



    }

    if(question4 === "C"){
        currentScores+=scores
        myscores.textContent="Scores"+currentScores;



    }

    if(question5 === "D"){
        currentScores+=scores
        myscores.textContent="Scores"+currentScores;
    }

    if(currentScores>=5){
        const scores5video = document.getElementById("scores5video")
        scores5video.style.display="flex"
    scores5video.play();
    const scores4video = document.getElementById("scores4video")
     scores4video.style.display="none"

     const scores3video = document.getElementById("scores3video")
        scores3video.style.display="none"

    }

    else if(currentScores>=3){
        const scores4video = document.getElementById("scores4video")
        scores4video.style.display="flex"
        scores4video.play();
        const scores5video = document.getElementById("scores5video")
        scores5video.style.display="none"

        const scores3video = document.getElementById("scores3video")
        scores3video.style.display="none"

    }


    else{
        const scores3video = document.getElementById("scores3video")
        scores3video.style.display="flex"
    scores3video.play();
     const scores5video = document.getElementById("scores5video")
     scores5video.style.display="none"
     const scores4video = document.getElementById("scores4video")
     scores4video.style.display="none"

    }
}

function backbutton(){
    const back = document.querySelector(".scoresSummary")
    back.style.display ="none"
}
