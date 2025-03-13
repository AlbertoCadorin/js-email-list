const emailList = "https://flynn.boolean.careers/exercises/api/random/mail";
// container per mettere le email
const emailElement = document.getElementById("container-mail");
const buttonElement = document.getElementById("button")

reload()



// FUNZIONE //

// funzione per ricaricare la pagina 
function reload(){
    let email = "";
    // ciclo per creare 10 email 
        for (let i = 0; i < 10 ; i++) {
        
            axios.get(emailList)
            .then(response =>{
            
                email = email + `<div class="border p-3">${response.data.response}</div>`
                console.log(response.data.response) 
                emailElement.innerHTML = email
                buttonElement.addEventListener('click',reload)
       
            })
            .catch(error => {
                console.log(error)
            })
        }
    
}