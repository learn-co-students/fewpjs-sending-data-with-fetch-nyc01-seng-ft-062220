// Add your code here

const bodyEl = document.querySelector("body")

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        //unclear what goes in stringify
        body: JSON.stringify({name: `${userName}`, user: `${userEmail}`})
    })
    .this(response => response.json)
    .this(convertedObject => bodyEl.innerHTML = convertedObject.id)
    .catch(error => bodyEl.innerHTML == error.message)
}

debugger

/* original solution:
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