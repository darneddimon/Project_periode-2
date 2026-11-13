
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
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

function checkCookie() {
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


document.addEventListener("DOMContentLoaded", () => {
    const cookiesPopUp = document.getElementById("cookie");
    const rejectButton = document.getElementById("reject_button");
    const acceptButton = document.getElementById("accept_button");
    
    if (getCookie("cookie") === "") {
        rejectButton.addEventListener("click", () => {
            setCookie("cookie", "rejected", 30);
            cookiesPopUp.classList.add("hidden");
            console.log("Cookies rejected");
            
        })

        acceptButton.addEventListener("click", () => {
            setCookie("cookie", "accepted", 30);
            cookiesPopUp.classList.add("hidden");
            console.log("Cookies accepted");
        })

    } else {
        cookiesPopUp.classList.add("hidden");
    };
    
    

    if (getCookie("cookie") === "accepted") {
        const d = new Date;
        const welcomeM = document.getElementById("welcome_morning");
        const welcomeA = document.getElementById("welcome_afternoon");
        const welcomeE = document.getElementById("welcome_evening");
        const hours = d.getHours();
        
        
        if (hours < 12) {
            welcomeM.classList.add("visible");
        } else if (hours < 18) {
            welcomeA.classList.add("visible");
        } else {
            welcomeE.classList.add("visible");
        };
        
        const imgConnectiviteit = document.getElementById("img_connectiviteit");
        imgConnectiviteit.addEventListener("mouseover", () => {
          console.log("Op de afbeelding gewezen");
        });
    }

    console.log(`cookie_status = ${getCookie("cookie")}`);
    
})
  




