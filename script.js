// document.body.style.backgroundColor="blue"
function calculate() {
    const form = document.querySelector("form")
    const data = Object.fromEntries(new FormData(form).entries())
    const {activity, age, gender, height, injury, units, weight}=data
    document.getElementById("genderSpan").innerHTML=gender;
    document.getElementById("ageSpan").innerHTML=age;
    document.getElementById("weightSpan").innerHTML=weight;
    document.getElementById("heightSpan").innerHTML=height;
   
}

document.getElementById("submitButton1").addEventListener("click",calculate);