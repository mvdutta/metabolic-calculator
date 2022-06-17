// document.body.style.backgroundColor="blue"
function calculate() {
    const form = document.querySelector("form")
    const data = Object.fromEntries(new FormData(form).entries())
    const {activity, age, gender, height, injury, units, weight}=data
    document.getElementById("genderSpan").innerHTML=gender;
    document.getElementById("ageSpan").innerHTML=`${age} years`;
    document.getElementById("weightSpan").innerHTML=`${weight} ${units}`;
    document.getElementById("heightSpan").innerHTML=`${height} in.`;
    document.getElementById("activitySpan").innerHTML=activity;
    document.getElementById("injurySpan").innerHTML=injury;
   
}

function reset() {
    let inputs= document.getElementsByClassName("to-reset")
    for (let input of inputs) {
        input.value= "" 
    }
    document.getElementById("gender1").checked = false;
    document.getElementById("gender2").checked = false;
}

document.getElementById("submitButton1").addEventListener("click",calculate);
document.getElementById("resetButton").addEventListener("click",reset);