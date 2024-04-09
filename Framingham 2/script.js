// Gender of the patient 
var gender = "empty";
var maleButton = document.getElementById("man");
var femaleButton = document.getElementById("woman");

maleButton.onclick = function() {
  if(maleButton.classList.contains("disabled")) {
    gender = "man";
    maleButton.classList.remove("disabled");
    femaleButton.classList.add("disabled");
  } else {
    gender = "empty";
    maleButton.classList.add("disabled");
  }
}

femaleButton.onclick = function() {
  if(femaleButton.classList.contains("disabled")) {
    gender = "woman";
    femaleButton.classList.remove("disabled");
    maleButton.classList.add("disabled");
  } else {
    gender = "empty";
    femaleButton.classList.add("disabled");
  }
}

// assessing the age of the patient
var ageInput = document.getElementById("inputAge");
var age = "empty";
ageInput.oninput = function() {
  age = parseFloat(ageInput.value);
  if(isNaN(age)) {
    age = "empty";
  }
}


function ReportScoreAge(){
  if (gender == "man") {
    if (age < 35) {return 0;} 
    else if (age < 40) {return 2;}
    else if (age < 45) {return 5;} 
    else if (age < 50) {return 7;}
    else if (age < 55) {return 8;} 
    else if (age < 60) {return 10;} 
    else if (age < 65) {return 11;} 
    else if (age < 70) {return 12;}
    else if (age < 75) {return 14;} 
    else if (age >= 75) {return 15;}
  } else {                // WOMEN
    if (age < 35) {return 0;} 
    else if (age < 40) {return 2;} 
    else if (age < 45) {return 4;} 
    else if (age < 50) {return 5;} 
    else if (age < 55) {return 7;} 
    else if (age < 60) {return 8;} 
    else if (age < 65) {return 9;}
    else if (age < 70) {return 10;} 
    else if (age < 75) {return 11;} 
    else if (age >= 75) {return 12;}
  }
}


// assessing the HDL level of the patient
var HDLInput = document.getElementById("inputHDL");
var HDL = "empty";
HDLInput.oninput = function() {
  HDL = parseFloat(HDLInput.value);
  if(isNaN(HDL)) {
    HDL = "empty";
  }
}


function ReportScoreHDL(){
  if (HDL < 0.9) {return 2;}
  else if (HDL < 1.2) {return 1;}
  else if (HDL < 1.3) {return 0;}
  else if (HDL < 1.6) {return -1;}
  else if (HDL >= 1.6) {return -2;}
}

// assessing the total cholesterol level of the patient
var TotalChInput = document.getElementById("inputCholesterol");
var TotalCh = "empty";
TotalChInput.oninput = function() {
  TotalCh = parseFloat(TotalChInput.value);
  if(isNaN(TotalCh)) {
    TotalCh = "empty";
  }
}


function ReportScoreTotalCh(){
  if (gender == "man"){
    if (TotalCh < 4.1) {return 0;}
    else if (TotalCh < 5.2) {return 1;}
    else if (TotalCh < 6.2) {return 2;}
    else if (TotalCh <= 7.2) {return 3;}
    else if (TotalCh > 7.2) {return 4;}
  } else {         //WOMAN
    if(TotalCh < 4.1) {return 0;}
    else if (TotalCh < 5.2) {return 1;}
    else if (TotalCh < 6.2) {return 3;}
    else if (TotalCh <= 7.2) {return 4;}
    else if (TotalCh > 7.2) {return 5;}
  } 
}
        
// assessing the Systolic Blood Pressure level of the patient
var treatmentBP = "empty";
var yesTreatedButton = document.getElementById("yesTreated");
var noTreatedButton = document.getElementById("noTreated");

yesTreatedButton.onclick = function() {
  if(yesTreatedButton.classList.contains("disabled")) {
    treatmentBP = "yes";
    yesTreatedButton.classList.remove("disabled");
    noTreatedButton.classList.add("disabled");
  } else {
    treatmentBP = "empty";
    yesTreatedButton.classList.add("disabled");
  }
}

noTreatedButton.onclick = function() {
  if(noTreatedButton.classList.contains("disabled")) {
    treatmentBP = "no";
    noTreatedButton.classList.remove("disabled");
    yesTreatedButton.classList.add("disabled");
  } else {
    treatmentBP = "empty";
    noTreatedButton.classList.add("disabled");
  }
}

var SBPInput = document.getElementById("bloodPressureInput");
var SBP = "empty";
SBPInput.oninput = function() {
  SBP = parseFloat(SBPInput.value);
  if(isNaN(SBP)) {
    SBP = "empty";
  }
}


function ReportScoreSBP(){
  if (gender == "man"){
    if (treatmentBP == "yes"){
      if (SBP < 120) {return 0;}
      else if (SBP < 130) {return 2;}
      else if (SBP < 140) {return 3;}
      else if (SBP < 150) {return 4;}
      else if (SBP < 160) {return 4;}
      else if (SBP >= 160) {return 5;}
    } else {
      if (SBP < 120) {return -2;}
      else if (SBP < 130) {return 0;}
      else if (SBP < 140) {return 1;}
      else if (SBP < 150) {return 2;}
      else if (SBP < 160) {return 2;}
      else if (SBP >= 160) {return 3;} 
    }
  } else {    // WOMEN
    if (treatmentBP == "yes"){
      if (SBP < 120){return -1;}
      else if (SBP < 130){return 2;}
      else if (SBP < 140){return 3;}
      else if (SBP < 150){return 5;}
      else if (SBP < 160){return 6;}
      else if (SBP >= 160){return 7;}
    } else {
      if (SBP < 120){return -3;}
      else if (SBP < 130){return 0;}
      else if (SBP < 140){return 1;}
      else if (SBP < 150){return 2;}
      else if (SBP < 160){return 4;}
      else if (SBP >= 160){return 5;}
    }
  }
}

// assessing Smoking cigarette of the patient
var smoking = "empty";
var yesSmokingButton = document.getElementById("yesSmoking");
var noSmokingButton = document.getElementById("noSmoking");

yesSmokingButton.onclick = function() {
  if(yesSmokingButton.classList.contains("disabled")) {
    smoking = "yes";
    yesSmokingButton.classList.remove("disabled");
    noSmokingButton.classList.add("disabled");
  } else {
    smoking = "empty";
    yesSmokingButton.classList.add("disabled");
  }
}

noSmokingButton.onclick = function() {
  if(noSmoking.classList.contains("disabled")) {
    smoking = "no";
    noSmokingButton.classList.remove("disabled");
    yesSmokingButton.classList.add("disabled");
  } else {
    smoking = "empty";
    noSmokingButton.classList.add("disabled");
  }
}


function ReportScoreSmoking(){
  if (gender == "man") {
    if (smoking == "yes") {return 4;} 
    else if (smoking == "no") {return 0;}
  } else { 
    if (smoking == "yes") {return 3;}
    else if (smoking == "no") {return 0;}
  }
}

// Total score helps to estimate two conditions, 10 years risk %, heart's age in years
  // calculating TotalPoints
var TotalPoints = 0;
var checklist = [];
document.getElementById("totalPointsButton").onclick = function() {
  checklist = [];
 // cheching empty options
   if(gender == "empty") {checklist.push("gender");}
  if(age == "empty") {checklist.push("Edad");}
  if(HDL == "empty") {checklist.push("Colesterol HDL");}
  if(TotalCh == "empty") {checklist.push("Colesterol Total");}
  if(SBP == "empty") {checklist.push("Presión Arterial");}
  if(treatmentBP == "empty") {checklist.push("Test de Sangre");}
  if(smoking == "empty") {checklist.push("Fumas");}
  
  // Error message
  if(checklist.length > 0) {
    var errorMessage = "Porfavor llena los espacios faltantes en ";
    var i = 0;
    while(i < checklist.length) {
      if(i < checklist.length - 2) {
        errorMessage = errorMessage + checklist[i] + ", ";
      } else if(i == checklist.length - 2) {
        errorMessage = errorMessage + checklist[i] + " y ";
      } else {
        errorMessage = errorMessage + checklist[i] + ".";
      }
      i = i + 1;
    }
    document.getElementById("totalPointsSpan").innerHTML = errorMessage;
  } else {
  var riskSentence = "Tu Riesgo Cardiovascular en 10 años es: ";
   TotalPoints = ReportScoreAge() + ReportScoreHDL() + ReportScoreTotalCh() + ReportScoreSBP() + ReportScoreSmoking();
    score = ReportTotalPoints();
    riskSentence = riskSentence + score + "%.";
    document.getElementById("totalPointsSpan").innerHTML = riskSentence;
}
  
}

// assessing 10 years risk %
function ReportTotalPoints(){
  if (gender == "man"){
    if (TotalPoints <= -3) {return "menos del 1";}
    else if (TotalPoints <= -2) {return 1.1;}
    else if (TotalPoints <= -1) {return 1.4;}
    else if (TotalPoints <= 0) {return 1.6;}
    else if (TotalPoints <= 1) {return 1.9;}
    else if (TotalPoints <= 2) {return 2.3;}
    else if (TotalPoints <= 3) {return 2.8;}
    else if (TotalPoints <= 4) {return 3.3;}
    else if (TotalPoints <= 5) {return 3.9;}
    else if (TotalPoints <= 6) {return 4.7;}
    else if (TotalPoints <= 7) {return 5.6;}
    else if (TotalPoints <= 8) {return 6.7;}
    else if (TotalPoints <= 9) {return 7.9;}
    else if (TotalPoints <= 10) {return 9.4;}
    else if (TotalPoints <= 11) {return 11.2;}
    else if (TotalPoints <= 12) {return 13.3;}
    else if (TotalPoints <= 13) {return 15.6;}
    else if (TotalPoints <= 14) {return 18.4;}
    else if (TotalPoints <= 15) {return 21.6;}
    else if (TotalPoints <= 16) {return 25.3;}
    else if (TotalPoints <= 17) {return 29.4;}
    else if (TotalPoints > 17) {return "más del 30";}
  } else {         //WOMAN
    if (TotalPoints <= -2) {return "menos del 1";}
    else if (TotalPoints <= -1) {return 1;}
    else if (TotalPoints <= 0) {return 1.2;}
    else if (TotalPoints <= 1) {return 1.5;}
    else if (TotalPoints <= 2) {return 1.7;}
    else if (TotalPoints <= 3) {return 2;}
    else if (TotalPoints <= 4) {return 2.4;}
    else if (TotalPoints <= 5) {return 2.8;}
    else if (TotalPoints <= 6) {return 3.3;}
    else if (TotalPoints <= 7) {return 3.9;}
    else if (TotalPoints <= 8) {return 4.9;}
    else if (TotalPoints <= 9) {return 5.3;}
    else if (TotalPoints <= 10) {return 6.3;}
    else if (TotalPoints <= 11) {return 7.3;}
    else if (TotalPoints <= 12) {return 8.6;}
    else if (TotalPoints <= 13) {return 10;}
    else if (TotalPoints <= 14) {return 11.7;}
    else if (TotalPoints <= 15) {return 13.7;}
    else if (TotalPoints <= 16) {return 15.9;}
    else if (TotalPoints <= 17) {return 18.51;}
    else if (TotalPoints <= 18) {return 21.5;}
    else if (TotalPoints <= 19) {return 24.8;}
    else if (TotalPoints <= 20) {return 27.5;}
    else if (TotalPoints > 20) {return "más del 30";}
  } 
}