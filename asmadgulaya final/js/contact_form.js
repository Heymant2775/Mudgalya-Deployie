const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Company Email and to whom we want to send the email to on form submission
    const emailTo = "hemanttomar1012@gmail.com";
    const toPerson = "Hemant";

    // User filled out form data
    const senderEmail = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Composed Email 
    const subject = "Inquiry from website";
    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
        `Dear ${toPerson},\n\n` +
        `${message}\n\n` + 
        `Here are my details,\n` +
        `Name : ${name}\n`+
        `Email : ${senderEmail}\n` + 
        `Phone Number : ${phone}\n\n`+
        `Looking forward to hearing from you.\n` + 
        `Best Regards, \n${name}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${emailSubject}&body=${emailBody}`;
    window.open(gmailLink, "_blank");
});