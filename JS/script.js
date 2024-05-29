const output_year = document.querySelector("#outputYear");
const output_month = document.querySelector("#outputMonth");
const output_day = document.querySelector("#outputDay");
const submit_btn = document.querySelector("#submitBtn");
const input_year = document.querySelector("#inputYear");
const input_month = document.querySelector("#inputMonth");
const input_day = document.querySelector("#inputDay");
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

let isValid = false;
input_day.addEventListener('input' , (e)=>{
   if(+input_day.value > 31){
    error_day.textContent="enter valid date";
    isValid=false;
    return;
   }
   else{
    isValid=true;
    error_day.textContent=" "
   }
   if(+input_day.value === 0){
    isValid=false;
    error_day.textContent="enter valid date";
    isValid=true
    return;
   }
   else{
    error_day.textContent=" "
   }
})
input_month.addEventListener('input' , (e)=>{
    if(+input_month.value > 12){
     error_month.textContent="enter valid date";
     isValid=false;
     return;
    }
    else{
     isValid=true;
     error_month.textContent=" "
    }
    if(+input_month.value === 0){
     isValid=false;
     error_month.textContent="enter valid date";
     isValid=true
     return;
    }
    else{
     error_month.textContent=" "
    }
 })
 const date = new Date();
 input_year.addEventListener('input' , (e)=>{
    if(+input_year.value > date.getFullYear()){
     error_year.textContent="must be a valid date";
     isValid=false;
     return;
    }
    else{
     isValid=true;
     error_year.textContent=" "
    }
    if(+input_year.value === 0){
     isValid=false;
     error_year.textContent="must be a valid date";
     isValid=true
     return;
    }
    else{
     error_year.textContent=" "
    }
 })

submit_btn.addEventListener("click" , (e)=>{
   if(input_day.value!='' && input_month.value !='' && input_year.value !=''){
    calculate();
    input_day.value='';
    input_month.value='';
    input_year.value='';
   }
   else{
    sweetAlert()
    output_day.textContent="--";
    output_month.textContent="--";
    output_year.textContent="--";
   
   }
}
)
function calculate(){
    if(isValid){
        let birthday = `${input_day.value}/${input_month.value}/${input_year.value}`;
        let birthdayObject = new Date(birthday);
        let ageDifferent = Date.now() - birthdayObject;
        let ageDate = new Date(ageDifferent);
        let ageYear =ageDate.getUTCFullYear()-1970;
        let ageMonth =ageDate.getUTCMonth();
        let ageDay =ageDate.getUTCDay();
        output_day.textContent=ageDay;
        output_month.textContent=ageMonth;
        output_year.textContent=ageYear;
    }
    else{
        sweetAlert()
    }
}
function sweetAlert(){
    swal({
        title:"Warning",
        text:"you must enter your birthday date",
        icon:"error",
        className:"alert"
    })
}
