 emailjs.init("9cAhnLmP5LNeBLdII"); // ID fourni par EmailJS

  document.getElementById("formContact").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_eln7o86", "template_nyito7j", this)
      .then(() => alert("Message envoyé ✅"))
      .catch(err => alert("Erreur ❌ " + JSON.stringify(err)));
  });