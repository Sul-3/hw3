// =======================
// 1. Form Validation (Contact Page)
// =======================
function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");

  if (name.value == "" || email.value == "") {
    alert("Please fill out all required fields.");
    return false;
  } else {
    return true;
  }
}


// =======================
// 2. Toggle Project Description (Projects Page)
// =======================
function toggleDescription(id) {
  var desc = document.getElementById(id);

  if (desc.style.display === "none") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }
}


// =======================
// 3. CV Quote Hover Effect
// =======================
window.addEventListener("DOMContentLoaded", function () {
  var quote = document.getElementById("quote");

  if (quote) {
    quote.addEventListener("mouseover", function () {
      quote.style.backgroundColor = "#ffd6e0";
      quote.style.fontStyle = "normal";
    });

    quote.addEventListener("mouseout", function () {
      quote.style.backgroundColor = "#fff0f5";
      quote.style.fontStyle = "italic";
    });
  }
});


// =======================
// 4. Page Load Date (Homepage)
// =======================
window.onload = function () {
  var footer = document.getElementsByTagName("footer")[0];

  if (footer) {
    var p = document.createElement("p");
    var date = new Date();

    p.appendChild(document.createTextNode("Page loaded on: " + date));
    footer.appendChild(p);
  }
};
