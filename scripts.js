/* Add your JavaScript to this file */
var email;



window.addEventListener("load", (event) => {

    var btn= document.getElementsByClassName("btn")[1];

    btn.addEventListener("click", (event) => {
        event.preventDefault();
        email= document.querySelector('input[name="email"]').value;


        if(email==""){
            document.getElementsByClassName("message")[0].innerHTML="Please enter a valid email address.";

        }else{
            
            var message= document.getElementsByClassName("message")[0];
            document.getElementsByClassName("message")[0].innerHTML="Thank you! Your email address " + email + " has been added to our mailing list!";
    
        }
        
    })

})

