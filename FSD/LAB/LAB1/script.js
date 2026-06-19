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
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position)
{
    document.getElementById("location").innerHTML =
    "Latitude : " +
    position.coords.latitude +
    "<br>Longitude : " +
    position.coords.longitude;
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
