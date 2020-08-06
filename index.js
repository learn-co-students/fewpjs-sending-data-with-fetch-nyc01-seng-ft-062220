function submitData(name, email) {
    return fetch("http://localhost:3000/users",  {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email  
        })
    })
    .then(response => {return response.json()})
    .then( (object)=> {document.body.innerHTML = object["id"]})
    .catch(function(error) {
        alert("Bad things mfaka")
        document.body.innerHTML = error.message
    })
}