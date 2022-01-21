const occupationSelections = document.getElementById("occupations");
const stateSelections = document.getElementById("state");
const newUserForm = document.getElementById("new-user-form");
const successConfirmation = document.querySelector(".successful-signup");
let fname = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let occupation = document.getElementById("occupations").value;
let state = document.getElementById("state").value;

const url = "https://frontend-take-home.fetchrewards.com/form";
// occupation list options will be updated with after fetch request
let occupationList = [];
// state list options will be updated with after fetch request
let stateList = [];
// get data from api with fetch
function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // then assign data to update selection lists
      occupationList = data.occupations;
      stateList = data.states;
      console.log(stateList);
      console.log(occupationList); //checking if list has data
      occupationList.forEach((item) => {
        const occupationItem = document.createElement("option");
        occupationItem.innerHTML = item;
        occupationSelections.appendChild(occupationItem);
      });

      stateList.forEach((item) => {
        const stateItem = document.createElement("option");
        stateItem.innerHTML = "-- " + item.abbreviation + " -- " + item.name;
        stateSelections.appendChild(stateItem);
      });
      //dropdown lists are current
    });
}
window.onload = getData();

newUserForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(newUserForm);
  const formDataObj = Object.fromEntries(formData); //collect data from form
  console.log(formDataObj);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObj),
    // {
    //   name: fname,
    //   email: email,
    //   password: password,
    //   occupation: occupation,
    //   state: state,
    //  }
    //also try body:{JSON.stringify(formDataObj)}
  })
    .then((response) => {
      if (response.ok) {
        console.log(response.text());
      }
    })
    .then((response) => {
      console.log("Success:", response);
      //success is shown, but post data is empty ?
      newUserForm.style.display = "none";
      successConfirmation.style.display = "block";
    })
    .catch((err) => {
      console.log("Error:", err);
    }); //console shows error on failure
});
