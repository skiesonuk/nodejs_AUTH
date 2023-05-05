const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", async e => {
  //prevent default browser
  e.preventDefault();
  const response = await axios.post("/login", {
    username: username.value,
    password: password.value,
  });

  if (response.data.status === "Success") {
    //save the token into localstorage
    console.log(response.data.token);
    localStorage.setItem("token", response.data.token);
  } else {
    alert("Sorry try again");
  }
});
