//array that sote the true answers
let answers= [3,1,2,1,3,1,2,1,1,3];

//array that stores the user answes
let user_answer=[];

let Num_Of_Right_Anwers=0;

//functoin take the questionnumber and the user answe

function Result(q_num,answer){

    user_answer[q_num] = answer.value;
}

function correct_answer(){
    
    for(let i=0;i<answers.length;i++){
        if(answers[i]==user_answer[i]){
            Num_Of_Right_Anwers ++;
        }
    }
    document.getElementById("result").innerHTML=Num_Of_Right_Anwers;

    if(Num_Of_Right_Anwers>=5){

        document.getElementById("win").style.display = "block";
    }
    else{
    
        document.getElementById("fail").style.display = "block";
    
    }
    

}



