export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
};

const acceptButton = document.getElementById("accept_button");
const rejectButton = document.getElementById("reject_button");
const cookiePopUp = document.getElementById("cookie");

if (getCookie("cookieStatus") === "") {
    acceptButton.addEventListener("click", function() {
        console.log("cookies accepted");
        setCookie("cookieStatus", "accepted", 30);
        cookiePopUp.classList.add("hidden")
    })
    
    rejectButton.addEventListener("click", function() {
        console.log("cookies declined");
        setCookie("cookieStatus", "declined", 30);
        cookiePopUp.classList.add("hidden");
    })
} else {
  cookiePopUp.classList.add("hidden")
  console.log(`cookies = ${getCookie("cookieStatus")}`)
}
  

