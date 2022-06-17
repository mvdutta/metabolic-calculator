// document.body.style.backgroundColor="blue"
function calculate() {
    const form = document.querySelector("form")
    const data = Object.fromEntries(new FormData(form).entries())
    let {activity, age, gender, height, injury, units, weight} = data;

    //checking all the input//

    if (gender==undefined){
        Swal.fire("Gender required for MSJ");
        return;
    }

    if (age < 1 || age > 120) {
        Swal.fire("Enter a valid age between 1 and 120");
        return;
    }

    if (height < 12 || height > 120) {
        Swal.fire("Enter a valid height between 12 and 120 inches");
        return;  
    }

    if (units === "lbs") {
        if (weight < 2  || weight > 1000) {
        Swal.fire("Enter a valid weight between 2 and 1000 lbs");
        return;  
        }
     }

     if (units === "kg") {
        if (weight < 1  || weight > 455) {
        Swal.fire("Enter a valid weight between 1 and 455 kgs");
        return;  
        }
     }
     /*check first whether the input is numeric.
     parseFloat converts the input into a decimal. 
     Non-numeric quantities will evaluate to NaN, which is checked by isNaN*/

     if (isNaN(parseFloat(activity)) || activity < 1.0 || activity > 1.9) {
        Swal.fire("Enter a valid activity factor between 1.0 and 1.9");
        return;  
    }

    if (isNaN(parseFloat(injury)) || injury < 1.0 || injury > 1.8) {
        Swal.fire("Enter a valid injury factor between 1.0 and 1.8");
        return;  
    }
    //Displaying entered values

    document.getElementById("genderSpan").innerHTML=gender;
    document.getElementById("ageSpan").innerHTML=`${age} years`;
    document.getElementById("weightSpan").innerHTML=`${weight} ${units}`;
    document.getElementById("heightSpan").innerHTML=`${height} in.`;
    document.getElementById("activitySpan").innerHTML=activity;
    document.getElementById("injurySpan").innerHTML=injury;

    //starting calculations
    height = height * .0254 //convering inches to meters

    if (units === "lbs") {
        weight = weight/2.2 //converting lbs to kg
    }
    const BMI = weight / (height * height)

    document.getElementById("BMI-result").innerHTML=BMI.toFixed(2);
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