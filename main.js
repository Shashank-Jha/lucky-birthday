var closeBtn = document.querySelector("#close");
var date = document.querySelector("#input-bday");
var luckyNumber = document.querySelector("#luckyNumber");
var checkBtn = document.querySelector("#check-btn");


function sumDigit(number){
    var sum = 0;
    while(number!=0){
        sum += Math.floor(number%10);
        Math.floor(number/=10);
    }
    return sum;
}


function isBirthdayLucky(){
    document.getElementById("giffy").style.display = "block";
    if(date.value === ""){
        
        document.querySelector("#giffy").innerText = "Please Enter Your Birth Date";
    }
    else if(luckyNumber.value === ""){
       
        document.querySelector("#giffy").innerText = "Please Enter Your Lucky Number";
    }
   else{
    var bday = date.value.split("-");
    var digitSum = 0;
    for(var i=0;i<3;i++){
        digitSum += sumDigit(parseInt(bday[i]));
    }
    
  
  if(digitSum%(luckyNumber.value)==0){
    document.querySelector("#giffy").innerHTML = `<img src="./image/happy.gif" alt="Happy"/>`;
  }
  else  document.querySelector("#giffy").innerHTML = `<img src="./image/sad.gif" alt="sad"/>`;
}
}

checkBtn.addEventListener("click",isBirthdayLucky);