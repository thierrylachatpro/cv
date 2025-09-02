const sendMail = (event) => {
  event.preventDefault();

  try {
    if (!email.value || !lastname.value || !message.value) {
      throw new Error('Tous les champs sont obligatoires!');
    }

    Email.send({
      SecureToken: "8ba29642-d127-4b65-a0f8-3ca5d8956583",
      To: 'thierry.lachat.pro@gmail.com',
      From: "thierry.lachat.pro@gmail.com",
      Subject: "Message de " + lastname.value + " depuis le thierrylachat.fr",
      Body: message.value.replaceAll('\n', '<br>') + '<br><br>' + email.value
    }).then(
      message => {
        sentMessage.innerHTML = 'Merci! Votre message a bien été envoyé!!';
      }
    );

  } catch ({name, message}) {
    sentMessage.innerHTML = message;
  }
}

sendmail.addEventListener('click', sendMail);