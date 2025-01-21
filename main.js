// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === "MBK2009" && password === "43212323@$#*") {
    document.getElementById('message').textContent = "Login successful!";
    document.getElementById('message').style.color = "green";
    // Redirect to a different page after successful login
    window.location.href = "Page.html"; // Change "page2.html" to the path of your desired page
  } else {
    document.getElementById('message').textContent = "Invalid username or password.";
    document.getElementById('message').style.color = "red";
  }
});