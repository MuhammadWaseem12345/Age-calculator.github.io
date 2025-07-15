
let dob=document.getElementById('dob');
let result=document.getElementById('result');

function ageclc(){
   
   
        let birthdate=new Date(dob.value);
        let birthYears=birthdate.getFullYear();
        let birthMonth=birthdate.getMonth();
        let birthDate=birthdate.getDate();
      
        let currdate=new Date();
        let currentYears=currdate.getFullYear();
        let currentMonth=currdate.getMonth();
        let currentDate=currdate.getDate();
        
        if(birthdate>currdate){
            result.textContent="date of birth cannot be in future";
            return;
        }

    
      if (birthDate > currentDate) {
        currentDate += new Date(currentYears, currentMonth, 0).getDate(); 
        currentMonth--;
    }
    let days = currentDate - birthDate;

        if(birthMonth > currentMonth){
            currentMonth +=12;
            currentYears--;

        }
       let months=currentMonth-birthMonth;

       let years=currentYears-birthYears;
 

       
    
        document.getElementById("result").innerHTML=` ${years} years, ${months} months and  ${days} days`;
     
    }
    