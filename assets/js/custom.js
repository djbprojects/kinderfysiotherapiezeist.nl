$(document).ready(function() {
	$("img[src$='/header.jpg']").on('click', function(e) {
        window.location.href = 'index.html';
    });
    $(".col-md-6.col-lg-3 button").on('click', function(e) {
        var href = $(this).find("a").attr('href');
        if (href == "#") {
            window.location.reload();
            return;
        }
        
        window.location.href = href;
    });
});

var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contact-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Uw bericht is verstuurd.";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Er is iets fout gegaan met het versturen van uw bericht. Neem alstublieft telefonisch contact op."
  });
}

if (form != null) {
    form.addEventListener("submit", handleSubmit)
}