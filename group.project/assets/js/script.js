const short_home = document.getElementById("shortcut-home");

short_home.addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({
    behavior: "smooth",
  });
});

const topic_cont = document.getElementById("topic-container");
const habitat_cont = document.getElementById("habitat-container");

function habitat_cards() {
  topic_cont.style.display = "none";
  habitat_cont.style.display = "flex";
}

function topic_cards() {
  habitat_cont.style.display = "none";
  topic_cont.style.display = "flex";
}

const main_container = document.getElementById("container");
const left_container = document.getElementById("left-container");
const right_container = document.getElementById("right-container");
const header_container = document.getElementById("header-container");
const header_title = document.getElementById("header-title");
const signup_btn = document.getElementById("signup-btn");
const login_btn = document.getElementById("login-btn");
const signup_content = document.getElementById("signup-form-wrapper");

function sign_up() {
  left_container.style.width = "70%";
  right_container.style.width = "30%";
  right_container.style.visibility = "visible";
  right_container.style.opacity = "1";

  header_title.innerText = "Sign Up";
  signup_btn.classList.add("active-button");
  login_btn.classList.remove("active-button");

  signup_content.style.display = "flex";
}

function log_in() {
  left_container.style.width = "70%";
  right_container.style.width = "30%";
  right_container.style.visibility = "visible";
  right_container.style.opacity = "1";

  header_title.innerText = "Log In";
  login_btn.classList.add("active-button");
  signup_btn.classList.remove("active-button");

  signup_content.style.display = "none";
}

function close_panel() {
  left_container.style.width = "100%";
  right_container.style.width = "0%";
  right_container.style.visibility = "hidden";
  right_container.style.opacity = "0";
  signup_btn.classList.remove("active-button");
  login_btn.classList.remove("active-button");
}

login_btn.addEventListener("mouseover", () => {
  signup_btn.classList.remove("active-button");
});

login_btn.addEventListener("mouseleave", () => {
  if (header_title.innerText === "Sign Up") {
    signup_btn.classList.add("active-button");
  }
});

signup_btn.addEventListener("mouseover", () => {
  login_btn.classList.remove("active-button");
});

signup_btn.addEventListener("mouseleave", () => {
  if (header_title.innerText === "Log In") {
    login_btn.classList.add("active-button");
  }
});


function reveal_pass() {
    const reveal_pass = document.getElementById("reveal-pass");
    const signup_pass = document.getElementById("signup-password");
    reveal_pass.addEventListener("change", e => {
        if (reveal_pass.checked) {
            signup_pass.type ? "text" : "password";
        }
    })
}  
