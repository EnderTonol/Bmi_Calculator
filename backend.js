function Out(){



const AGE = document.getElementById("age").value
const HEIGHT = document.getElementById("height");
const WEIGHT = document.getElementById("weight");

const BMI = document.getElementById("bmi");
const OVR = document.getElementById("ovr");
//btns

const outputs = document.getElementById("output_btn");

//formula


const H_value = parseFloat(HEIGHT.value);
const W_value = parseFloat(WEIGHT.value);

let AGE_i = parseInt(AGE);

var GC = "";

if(!isNaN(H_value) && !isNaN(W_value) && (H_value || W_value) > 0){
    
document.getElementById("outp").style.display = "block";
document.getElementById("graph1").style.display = "block";

var BMI_F = W_value / (H_value * 0.3048)**2;
if (AGE_i < 20){

        if (BMI_F > 0 && BMI_F < 14){
            OVR.innerText = "Underweight";
            GC = "red";
        } 
        else if (BMI_F >= 14 && BMI_F < 18){
            OVR.innerText = "Normal";
            GC = "green";
        } 
        else if (BMI_F >= 18 && BMI_F < 21){
            OVR.innerText = "Overweight";
            GC = "red";
        } 
        else if (BMI_F >= 21 && BMI_F <= 40){
            OVR.innerText = "Obese";
            GC = "red";
        } 
        else{
            OVR.innerText = "Invalid Inputs";
        }
} 
else{
        if (BMI_F > 0 && BMI_F < 18.5){
            OVR.innerText = "Underweight";
            GC = "red";
        } 
        else if (BMI_F >= 18.5 && BMI_F < 25){
            OVR.innerText = "Normal";
            GC = "green";
        } 
        else if (BMI_F >= 25 && BMI_F < 29){
            OVR.innerText = "Overweight";
            GC = "red";
        } 
        else if (BMI_F >= 29 && BMI_F <= 40){
            OVR.innerText = "Obesity";
            GC = "red";
        } 
        else{
            OVR.innerText = "Invalid Inputs";
        }
}
    
BMI.innerText = BMI_F.toString().slice(0,5);

}

//GRAPH

const Graph = document.getElementById("grph");
const X = BMI_F;

const Y = ["BMI"];
    


new Chart(Graph,{
    type: "bar",
    data: {
        labels: Y,
        datasets: [{
            data: [`${X}`],
            backgroundColor: GC
        }]
    },options: {}
});

}


