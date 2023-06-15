function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("number").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };

    const serviceID="service_iymp626";
    const templateID="template_3viahrd";
    
    emailjs
        .send(serviceID,templateID,params)
        .then((res) => {
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("number").value="";
            document.getElementById("subject").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("your message sent successfully");
        })
        .catch((err)=>console.log(err));
}

function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Check if any required field is empty
    if (!name || !email || !number || !subject || !message) {
        alert("Please fill in all the required fields.");
        return; // Stop execution if any field is empty
    }

    var params = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message
    };

    const serviceID = "service_iymp626";
    const templateID = "template_3viahrd";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            // Clear input fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("number").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully.");
        })
        .catch((err) => console.log(err));
}
