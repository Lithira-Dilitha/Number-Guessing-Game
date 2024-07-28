//genarated random number between 2 to 12
let randomnum;
let count = 3;
function genarateRandomeNumber(){
    let genaratedNum;
    genaratedNum = Math.random() * 10 + 2;
     randomnum = Math.round(genaratedNum);
    console.log(genaratedNum);
    console.log(randomnum);
    if(2 < randomnum & randomnum < 7){
        console.log("genarated number grater than 2 and lessthan 7");
    }else if(7<randomnum & randomnum<12){
        console.log("genarated number grater than 7 and lessthan 12");
    }
}
genarateRandomeNumber();
//genarate id function
function genarateId() {
    let txtvalue = parseInt(document.getElementById("txtbox").value);
    console.log(txtvalue);

    if(isNaN(txtvalue) || txtvalue<2 || txtvalue>12){
        Swal.fire({
            title: "Invalid Number!",
            text: "Pleas enter a number between 2 to 12",
            icon: "warning"
          });
    }
    if(randomnum == txtvalue){
        Swal.fire({
            title: "congratulations!",
            text: "You Win The Game",
            icon: "success"
          });
          genarateRandomeNumber();
    }else{
        count--;
        if(count > 0){
            Swal.fire({
                title: "Try Again!",
                text: `You have ${count} attemts left.`,
                icon: "info"
              });
        }else{
            Swal.fire({
                title: "Try Again!",
                text: `You lost game`,
                icon: "info"
              });
            genarateRandomeNumber();
        }
    }

}

