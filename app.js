let publishBtn = document.getElementById("Publish");
let inputVal = document.getElementById("main-input");
let from = document.getElementById("fromInp");
let to = document.getElementById("toInp");
let messageCout = 0;
publishBtn.addEventListener("click", () => {
  let messContinair = document.querySelector(".mess-list");
  if (inputVal.value != "" && from.value != "" && to.value != "") {
    messageCout++;
    messContinair.innerHTML += `
    <p class="mess-div">
      <span>From ${from.value}</span>, ${inputVal.value}<span> To ${to.value}</span>
    </p>`;
  }else if(inputVal.value == "" && from.value != "" && to.value != ""){
    alert("please enter a message")
  }else if(inputVal.value != "" && from.value == "" && to.value != ""){
    alert("please enter your name")
  }else if(inputVal.value != "" && from.value != "" && to.value == ""){
    alert("please enter that person you send it, name")
  }else{
    alert("please insert data in inputs")
  }

});
