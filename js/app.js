const emailList = "https://flynn.boolean.careers/exercises/api/random/mail";
// container per mettere le email
const emailElement = document.getElementById("container-mail");
const buttonElement = document.getElementById("button");


// funzione per ricaricare la pagina 
buttonElement.addEventListener('click', function(){
    let email = "";
    // ciclo per creare 10 email 
        for (let i = 0; i < 10 ; i++) {
        
            axios.get(emailList)
            .then(response =>{
            
                email = email + `<p class="border p-3 mb-4 rounded-pill d-flex">${response.data.response}</p>`
                console.log(response.data.response) 
                emailElement.innerHTML = email
            
       
            })
            .catch(error => {
                console.log(error)
            });
        };
});
