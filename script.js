document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (name === "" || email === "" || message.length < 10) {
    msg.style.color = "red";
    msg.textContent = "Please fill out all fields correctly!";
  } else {
    msg.style.color = "green";
    msg.textContent = "Thank you! Your message has been sent successfully.";
    document.getElementById("contactForm").reset();
  }
});