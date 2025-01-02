document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const onScroll = () => {
        timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 10 && rect.bottom > 0;

            if (isVisible) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger on page load in case items are already visible
});


document.addEventListener("DOMContentLoaded", () => {
    const homeImg = document.querySelector("#homeImg img");
    homeImg.classList.add("visible");
});


document.addEventListener("DOMContentLoaded", () => {
    const nameTitle = document.querySelector("#nameTitle");
    nameTitle.classList.add("visible");
});


document.addEventListener("DOMContentLoaded", () => {
    const workTitle = document.querySelector("#workTitle");
    workTitle.classList.add("visible");
});


document.addEventListener("DOMContentLoaded", () => {
    const workTitle = document.querySelector("#pfButton");
    workTitle.classList.add("visible");
});





document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const emailID = document.getElementById("emailID").value;
    const phone = document.getElementById("phone").value;
    const name = document.getElementById("name").value;
    const mes = document.getElementById("mes").value;

    var emailData = {
        to_email: 'aarthiraju23527@gmail.com', // recipient's email
        subject: 'Connection Request from Portfolio',      // subject of the email
        message: `Hi Aarthi,\n\n I'm happy to say you that ${name} is trying to connect with you.\nPlease do connecting with him|her by Phone: ${phone} or by email ID: ${emailID}. \nAdditionally, you got a message saying "${mes}" \n\n Thank you..` // email body content
    };

    // Send the email using EmailJS
    emailjs.send("service_i9j58qs", "template_gzj7rgw", emailData)
        .then(function (response) {
            console.log('Email sent successfully', response);
            alert('Email sent successfully!');
        }, function (error) {
            console.error('Error sending email', error);
            alert('Failed to send email.');
        });
});