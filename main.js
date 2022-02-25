const loginButton = document.querySelector('.loginBtn');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const alert = document.querySelector('.alert');

// Main Function
loginButton.onclick = function (e) {
  e.preventDefault();
  let user = username.value;
  let pass = password.value;

  // Make a request to fetch api and compare values enterd by student if it matches it redirect student to courses page
  fetch('http://webbred2.utb.hb.se/~fewe/api/api.php?data=students')
    .then((respond) => respond.json())
    .then((data) => {
      // We itriate in each single element
      data.forEach((el) => {
        // We make Compare if it matches it redirect student in courses page
        if (el.login.username == user && el.login.password == pass) {
          window.location = 'courses.html';
        } else {
          alert.style.display = 'block';
          hideAlert();
        }
      });
    });
  function hideAlert() {
    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000);
  }
};
