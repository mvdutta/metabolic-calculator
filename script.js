// document.body.style.backgroundColor="blue"
function calculate() {

    //getting all the input data
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

    //calculating and displaying BMI
    height = height * .0254 //convering inches to meters

    if (units === "lbs") {
        weight = weight/2.2 //converting lbs to kg
    }
    const BMI = weight / (height * height)
    document.getElementById("BMI-result").innerHTML=BMI.toFixed(2);

    //calulating and displaying RMR and TEE

    let RMR = 0;
    let TEE = 0;
    height = height * 100; //changing meters to cm
    if (gender === "male") {
        RMR = 10 * weight + 6.25 * height - 5 * age + 5;
        TEE = RMR * activity * injury;
    } else  {
        RMR = 10 * weight + 6.25 * height - 5 * age + 161;
        TEE = RMR * activity * injury;
    }
    document.getElementById("RMR-result").innerHTML=`${RMR.toFixed(2)} kcal/d`
    document.getElementById("TEE-result").innerHTML=`${TEE.toFixed(1)} kcal/d`
}


//Function for protein calculation
function calculateProtein () {
    //getting all the input data
    const form = document.querySelector("form")
    const data = Object.fromEntries(new FormData(form).entries())
    let {weight, units} = data;
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
    if (units === "lbs") {
        weight = weight/2.2 //converting lbs to kg
    }

    let lowPro = document.getElementById("lowProtein").value
    let hiPro = document.getElementById("highProtein").value

    if (isNaN(parseFloat(lowPro)) || lowPro < 1.0 || lowPro > 2.0) {
        Swal.fire("Enter a valid low protein factor between 1.0 and 2.0");
        return;  
    }

    if (isNaN(parseFloat(hiPro)) || hiPro < 1.0 || hiPro > 3.0) {
        Swal.fire("Enter a valid high protein factor between 1.0 and 3.0");
        return;  
    }
    if (hiPro <= lowPro) {
        Swal.fire("High protein factor should be greater than low protein factor");
        return
    }

    //calculate and display estimated protein needs
    let proteinNeedsLo = weight * lowPro;
    let proteinNeedsHi = weight * hiPro;
    let message = `${proteinNeedsLo.toFixed(0)}-${proteinNeedsHi.toFixed(0)} g/d`
    document.getElementById("protein-result").innerHTML = message;
}

//function for fluid calculation
function calculateFluid () {
      //getting all the input data
      const form = document.querySelector("form")
      const data = Object.fromEntries(new FormData(form).entries())
      let {weight, units} = data;
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
      if (units === "lbs") {
          weight = weight/2.2 //converting lbs to kg
      }

    let lowFluid = document.getElementById("lowFluid").value
    let hiFluid = document.getElementById("highFluid").value

    if (isNaN(parseFloat(lowFluid)) || lowFluid < 10 || lowFluid > 50) {
        Swal.fire("Enter a valid low fluid factor between 10 ml and 50 ml");
        return;  
    }

    if (isNaN(parseFloat(hiFluid)) || hiFluid < 20 || hiFluid > 60) {
        Swal.fire("Enter a valid high fluid factor between 15 ml and 60 ml");
        return;  
    }
    if (hiFluid <= lowFluid) {
        Swal.fire("High fluid factor should be greater than low fluid factor");
        return
    }

    //calculate and display estimated fluid needs
    let fluidNeedsLo = weight * lowFluid;
    let fluidNeedsHi = weight * hiFluid;
    let message = `${fluidNeedsLo.toFixed(0)}-${fluidNeedsHi.toFixed(0)} ml/d`
    document.getElementById("fluid-result").innerHTML = message;
}
      


   
   
    

function reset() {
    let inputs= document.getElementsByClassName("to-reset")
    for (let input of inputs) {
        input.value= "" 
    }
    let outputs= document.getElementsByClassName("comp-text")
    for (let output of outputs){
        output.innerHTML=""
    }
    document.getElementById("gender1").checked = false;
    document.getElementById("gender2").checked = false;

}

document.getElementById("submitButton1").addEventListener("click",calculate);
document.getElementById("resetButton").addEventListener("click",reset);
document.getElementById("submitButton2").addEventListener("click",calculateProtein);
document.getElementById("submitButton3").addEventListener("click",calculateFluid);