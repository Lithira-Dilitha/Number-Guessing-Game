function genarateId (){
    let genaratedNum = (Math.random()*10)+2;
    let txtvalue = parseInt(document.getElementById('txtbox').value);
    let roundnum = Math.round(genaratedNum);
    console.log(roundnum);
    console.log(txtvalue);

    // logic
if (roundnum==txtvalue) {
    console.log("YOU WIN");
}
else if (roundnum>2 && 5<roundnum) {
    console.log("Num is grater than 2 and lessthn 5 and Try again...");
    // console.log("Try again...");
} else if(roundnum>5 && 10<roundnum){
    console.log("Num is grater than 5 and lessthn 10 and Try again...");
    // console.log("Try again...");
}else{
    console.log("Num is grater 10 and Try again...");
    // console.log("Try again...");
}

}

// logic
