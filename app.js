//genarated random number between 2 to 12
let randomnum;
let count = 3;
function genarateRandomeNumber() {
  let genaratedNum;
  genaratedNum = Math.random() * 10 + 2;
  randomnum = Math.round(genaratedNum);
  if ((2 < randomnum) & (randomnum < 7)) {
    document.getElementById("hint").innerHTML =
      "hint : Gnarated number is greater than 2 and less than 7";
  } else if ((7 < randomnum) & (randomnum < 12)) {
    document.getElementById("hint").innerHTML =
      "hint : Genarated number Greater than 7 and less than 12";
  }
}
genarateRandomeNumber();
document.getElementById('txtbox').value="";
//genarate id function
function genarateId() {
  let txtvalue = parseInt(document.getElementById("txtbox").value);

  if (isNaN(txtvalue) || txtvalue < 2 || txtvalue > 12) {
    Swal.fire({
      title: "Invalid Number!",
      text: "Pleas enter a number between 2 to 12",
      icon: "warning",
    });
    document.getElementById('txtbox').value="";
    return;
  }
  if (randomnum == txtvalue) {
    Swal.fire({
      title: "congratulations!",
      text: "You Win The Game",
      icon: "success",
    });
    document.getElementById('txtbox').value="";
    genarateRandomeNumber();
    return;
  } else {
    count--;
    if (count > 0) {
      Swal.fire({
        title: "Try Again!",
        text: `You have ${count} attemts left.`,
        icon: "info",
      });
      document.getElementById('txtbox').value="";
    } else {
      Swal.fire({
        title: "Try Again!",
        text: `You lost game`,
        icon: "warning",
      });
      genarateRandomeNumber();
      document.getElementById('txtbox').value="";
    }
  }
}
