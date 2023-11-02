var screen=document.getElementById("screen");

function btnclick(value){
    screen.value+=value;
}

function clearscrean(){
    screen.value= "";
}

function findresult(){
    var result=eval(screen.value);
    screen.value=result;
}