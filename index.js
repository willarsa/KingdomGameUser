function loadPage(tab){
    var pages = document.getElementsByClassName('page');

    for(let i = 0; i < pages.length; i++){
        if(pages[i].id == tab.name){
            pages[i].classList.remove('hidden');
        }
        else{
            pages[i].classList.add('hidden');
        }
    }
}

let countdown;
let startStop = false;
function startTimer() {
    startStop = !startStop;
    clearInterval(countdown); // reset if already running

    let timeLeft = 60;
    document.getElementById("timer").textContent = timeLeft;

    if(startStop){
        countdown = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").textContent = "Time's up!";
        }
        }, 1000); 
    }
    
}