score=0;
function updatescore() {
    score=score+1;
    document.getElementById("score").innerHTML="score: "+score;

}

function savescore() {
    localStorage.setItem("s1",score);

}

function nextpage() {
    window.location="the math quiz game 2.html"
}