// index.html -- description 
const magicText = document.getElementById('magic')
magicText.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('assets/wow.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    magicText.style.color = '#FCD12A';
    magicText.style.textDecoration = 'underline';
});

magicText.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "";
    magicText.style.color = '';
    magicText.style.textDecoration = '';
});

const receiveText = document.getElementById('receive')
receiveText.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('assets/cat-kiss.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    receiveText.style.color = '#4dd9f0';
    receiveText.style.textDecoration = 'underline';
});

receiveText.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "";
    receiveText.style.color = '';
    receiveText.style.textDecoration = '';
});
  

const makeText = document.getElementById('make')
makeText.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('assets/make.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    makeText.style.color = '#ff4500';
    makeText.style.textDecoration = 'underline';
});

makeText.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "";
    makeText.style.color = '';
    makeText.style.textDecoration = '';
});
  
const zineText = document.getElementById('zine-club')
zineText.addEventListener('mouseenter', () => {
    document.body.style.backgroundImage = "url('assets/spongebob.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    zineText.style.color = '#c8b6ff';
    zineText.style.textDecoration = 'underline';
});

zineText.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = "";
    zineText.style.color = '';
    zineText.style.textDecoration = '';
});

const close_env = document.getElementById('join-1');
const open_env = document.getElementById('join-2');
close_env.addEventListener('mouseenter', () => {
    close_env.style.display = 'none';
    open_env.style.display = 'inline';
});

open_env.addEventListener('mouseleave', () => {
    close_env.style.display = 'inline';
    open_env.style.display = 'none';
});
