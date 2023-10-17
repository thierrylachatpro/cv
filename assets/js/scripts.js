window.onscroll = () => {
    let shadow = Math.floor(scrollY/20)-5;
    document.querySelector('#aboutMe h2').style.setProperty('--brShadow', `2px ${shadow}px 6px rgba(0,0,0,0.5)`);
}