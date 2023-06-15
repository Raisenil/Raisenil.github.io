function sendMail(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

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

    // Email validation regex pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // Stop execution if email is invalid
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
