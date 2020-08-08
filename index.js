function submitData(username, email) {
    const formObj = {
        name: username,
        email: email
    };
    
    const url = "http://localhost:3000/users";
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formObj)
    };
    
    return fetch(url, configObj)
    .then(response => response.json())
    .then(object => document.body.innerHTML = object.id)
    .catch(error => document.body.innerHTML = error.message)
};
      