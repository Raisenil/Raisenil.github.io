// scroll section
window.onscroll = () => {
    let header=document.quarySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
}