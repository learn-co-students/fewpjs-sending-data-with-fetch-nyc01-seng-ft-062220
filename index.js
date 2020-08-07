// Add your code here

const bodyEl = document.querySelector("body")

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        //unclear wwhy my stringify isn't working
        body: JSON.stringify({name: `${userName}`, email: `${userEmail}`})
    })
    .then(response => response.json())
    .then(convertedObject => bodyEl.innerHTML = convertedObject.id)
    // function(convertedObject){
        //bodyEl.innerHTML = convertedObject.id
    }
    .catch(error => bodyEl.innerHTML = error.message)
}// function(error) {
    bodyEl.innerHTML = error.message
}



/* original solution: didn't work either
// Add your code here
let configData = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
    //unclear what goes in stringify
    body: JSON.stringify({name: userName, user: userEmail})
}


const bodyEl = document.querySelector("body")

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", configData)
    .this(response => response.json)
    .this(convertedObject => bodyEl.innerHTML = convertedObject.id)
    .catch(error => bodyEl.innerHTML == error.message)
}

*/