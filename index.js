function submitData(user_name, user_email){
    let formData = {
        name: user_name,
        email: user_email        
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users",configObj)
    .then(response => response.json())
    .then(obj => document.body.innerHTML = obj[ "id" ])
    .catch(error => document.body.innerHTML = error.message)

};