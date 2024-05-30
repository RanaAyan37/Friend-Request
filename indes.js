let istatus = document.querySelector("h4");
let btn = document.querySelector("#Add");
let check = 0;
btn.addEventListener("click", function () {
  if (check === 0) {
    istatus.innerText = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    istatus.innerText = "Stranger";
    istatus.style.color = "red";
    check = 0;
    btn.innerHTML = "Add Friends";
  }
});
