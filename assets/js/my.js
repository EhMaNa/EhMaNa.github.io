
function fillAll () {
let pc = document.getElementById('name').value;
let ec = document.getElementById('phone').value;
let c = document.getElementById('message').value;

if (pc === "" ||ec === "" ||c === "") {
   alert('Please Fill All Fields');
   return document.getElementById("contactForm").action = ""
} else {
    document.getElementById("contactForm").action = "mailto:raphpopeyetmnt@gmail.com"
    alert("Message Sent");
}

}


