var inputBox=document.querySelector(".inputbox");
var inputEq=document.querySelector(".inputEq");
var historyDiv = document.querySelector(".history-div");
var answers = [];
var equations = [];
function setvalue(num){
    if(inputBox.value==0)
       inputBox.value=num;
    else
       inputBox.value+=num;
}

function clearInput(){
    inputEq.value='';
    inputBox.value=0;
}

function getAns(){
    equations.push(inputBox.value + " = ");
    console.log("eq =:",equations);
    answers.push(eval(inputBox.value));
    console.log("ans:",answers);
    inputEq.value = inputBox.value + " = ";
    inputBox.value=eval(inputBox.value);
}

function showHistory()
{
    document.querySelector(".history").style.display='block';
    historyDiv.innerHTML = "";

    for(let i=0; i<answers.length;i++)
    {
        historyDiv.innerHTML += '<div class="section">'+ equations[i]+' '+answers[i]+'<br><br></div>';
    }
}

function removeHistory()
{
    var status= confirm("Are You sure want to delete history ? ");
    if(status)
    {
        historyDiv.innerHTML = "";
        answers = [];
        equations = [];
    }


}

function closeHistory(){
    document.querySelector(".history").style.display='none';
}