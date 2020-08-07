// // let formData = {
// //     dogName: "Byron",
// //     dogBreed: "Poodle"
// //   };
   
// //   let configObj = {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //       "Accept": "application/json"
// //     },
// //     body: JSON.stringify(formData)
// //   };
   
// //   fetch("http://localhost:3000/dogs", configObj)
// //     .then(function(response) {
// //       return response.json();
// //     })
// //     .then(function(object) {
// //       console.log(object);
// //     })
//     // .catch(function(error) {
//     //     alert("Bad things! Ragnarők!");
//     //     console.log(error.message);
//     // })

    function submitData(name="Kate", email="any"){
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email
              })
          })
        .then(function(response) {
          return response.json();
        })
        .then(function(object) { document.body.innerHTML=object["id"],
          console.log(object, "ha");
        })  
        .catch(function(error) {
            document.body.innerHTML=error.message;
          } )
        
}
submitData()