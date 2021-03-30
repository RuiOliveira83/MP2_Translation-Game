function sendEmail(contactForm) {
    "use strict";
    emailjs.send("gmail", "temp-MSP", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Thank you for your message!");

            },
            function (error) {
                console.log("FAILED", error);
            }
        );
        // to clean the values on the form fields
         $('input[type="text"], textarea').val('');
        //  to close the modal after the message is sent
         $('#Modal').modal('hide');
    return false;
}

