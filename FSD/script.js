function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function getLocation() {
  let locationDiv = document.getElementById("location");
  locationDiv.innerHTML = "Locating...";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    locationDiv.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("location").innerHTML =
    "Latitude : " + position.coords.latitude + "<br>Longitude : " + position.coords.longitude;
}

function showError(error) {
  let locationDiv = document.getElementById("location");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerHTML = "Error: Permission denied. Please allow location access in your browser settings.";
      break;
    case error.POSITION_UNAVAILABLE:
      locationDiv.innerHTML = "Error: Location information is unavailable. Ensure device location service is enabled.";
      break;
    case error.TIMEOUT:
      locationDiv.innerHTML = "Error: Location request timed out.";
      break;
    case error.UNKNOWN_ERROR:
      locationDiv.innerHTML = "Error: An unknown error occurred.";
      break;
  }
}

const validateForm = (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let dob = document.getElementById("dob").value;
  let account = document.getElementById("account").value;

  if (name == "" || password == "" || email == "" || account == "") {
    alert("Please fill all fields");
    return;
  }

  // creating customer object
  const customer = {
    name : name,
    password : password, 
    email : email,
    account : account
  }

  // retrieve existing customers 
  let customers = JSON.parse(localStorage.getItem("customers")) || [];
  // adding a new customer
  customers.push(customer);
  //save back to localstorage
  localStorage.setItem("customers", JSON.stringify(customers));

  // displaying registration card
  document.getElementById("card").innerHTML = `
    <div class="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 class="text-xl font-bold mb-3">Registration Details</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>DOB:</b> ${dob}</p>
      <p><b>Account:</b> ${account}</p>
    </div>
  `;
};

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
