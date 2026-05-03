
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

function toggleDescription(id) {
  var desc = document.getElementById(id);

  if (desc.style.display === "" || desc.style.display === "block") {
    desc.style.display = "none";
  } else {
    desc.style.display = "block";
  }
}


window.addEventListener("DOMContentLoaded", function () {
  var quote = document.getElementById("quote");

  if (quote) {
    quote.addEventListener("mouseover", function () {
      quote.style.backgroundColor = "#ffd6e0";
      quote.style.fontStyle = "italic";
    });

    quote.addEventListener("mouseout", function () {
      quote.style.backgroundColor = "#fff0f5";
      quote.style.fontStyle = "normal";
    });
  }
});


window.onload = function () {
  var footer = document.getElementsByTagName("footer")[0];

  if (footer) {
    var p = document.createElement("p");
    var date = new Date();

    p.appendChild(document.createTextNode("Page loaded on: " + date));
    footer.appendChild(p);
  }
};
