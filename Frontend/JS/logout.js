document.addEventListener("DOMContentLoaded", ()=>{

    document.querySelector("#btn-logout").addEventListener("click", ()=>{

        console.log("in")
        logOutUser();
        
        async function logOutUser() {
        
            let response = await fetch('http://localhost/api/logout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
            })
            if (!response.ok) {
                
            }else{
                let mytext = await response.text();
                if(mytext.includes("Usuario Deslogueado")){
                    window.location = '../index.html'
                }
            }
            
        }
    })

    

})
