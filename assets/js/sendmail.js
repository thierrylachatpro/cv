const sendMail = (event) => {
    event.preventDefault();

    Email.send({
        SecureToken : "8ba29642-d127-4b65-a0f8-3ca5d8956583",
        To : 'tlachat@gmail.com',
        From : "contact@thierrylachat.fr",
        Subject : "Message de "+ lastname.value +" depuis le thierrylachat.fr",
        Body : message.value.replaceAll('\n','<br>') + '<br><br>'+ email.value
    }).then(
      message => console.log(message)
    );


}

formContact.addEventListener('submit', sendMail);