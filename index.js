// Add your code here
const url = `http://localhost:3000/users`
    const submitData = (name, email) => {
        return fetch(url, {
            method: `POST`,
            headers: {
                "content-type": `application/json`,
                "accept": `application/json`
            },
            body: JSON.stringify({
                name,
                email
            })
        })
        .then(resp => resp.json())
        .then(data => {
            // const dataDiv = document.createElement(`div`)
            // const id = document.createElement(`li`)
            // id.innerText = data.id
            // const name = document.createElement(`li`)
            // name.innerText = data.name
            // const email = document.createElement(`li`)
            // email.innerText = data.email
            // dataDiv.append(id)
            // dataDiv.append(name)
            // dataDiv.append(email)
            document.body.innerHTML = data["id"]
        })
        .catch(error => {
            // const errorMessage = document.createElement(`p`)
            // errorMessage.innerText = error.message
            document.body.innerHTML = error.message
        })
    }
document.addEventListener(`DOMContentLoaded`, e => {
    
})
