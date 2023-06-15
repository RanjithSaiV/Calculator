
// let username=prompt("enter your name")

let result = document.getElementById("input");
function calculate(number){
    result.value+=number;
}
function Result(){
    try{
        result.value=eval(result.value);
    }
    catch(err){
        // alert("enter the vallid input");
        result.value="Error";
    }
}
function clr(){
    result.value=" ";
}
function Del(){
    result.value=result.value.slice(0,-1);

}
// alert("Hello @"+username+" here you can calculate your input.");
