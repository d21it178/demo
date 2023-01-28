function myTimer() {
    const date = new Date();
    document.getElementById("idp").innerHTML = date.toLocaleTimeString();
  }

  console.log(myTimer)