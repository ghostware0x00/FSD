function openModal()
{
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal()
{
    document.getElementById("modal").classList.add("hidden");
}

function getLocation()
{
    let locationDiv = document.getElementById("location");
    locationDiv.innerHTML = "Locating...";

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else
    {
        locationDiv.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position)
{
    document.getElementById("location").innerHTML =
    "Latitude : " +
    position.coords.latitude +
    "<br>Longitude : " +
    position.coords.longitude;
}

function showError(error)
{
    let locationDiv = document.getElementById("location");
    switch(error.code)
    {
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

function validateForm()
{
    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    if(name === "" || email === "")
    {
        alert("All fields are required");
        return false;
    }

    alert("Registration Successful");
    return true;
}

function allowDrop(event)
{
    event.preventDefault();
}

function drag(event)
{
    event.dataTransfer.setData(
        "text",
        event.target.id
    );
}

function drop(event)
{
    event.preventDefault();

    let data =
    event.dataTransfer.getData("text");

    event.target.appendChild(
        document.getElementById(data)
    );
}
