// Add your code here




function submitData(name, email){
    let configObject = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            name: name, 
            email: email
        })
    }
    
   return fetch('http://localhost:3000/users', configObject)
    .then(resp => resp.json())
    .then(resp => document.body.innerHTML = resp["id"])
    .catch(error => document.body.innerHTML = error.message)
}



