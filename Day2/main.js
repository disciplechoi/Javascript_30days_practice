

const theme_switcher = document.querySelector("input");
const theme_bg = document.querySelector('body');

console.log(theme_switcher);

theme_switcher.addEventListener('change',(e)=>{
    if (e.target.checked){
        console.log('dark-mode');
        document.body.setAttribute("data-theme","dark");

    }
    else {
        console.log('white-mode');
        document.body.setAttribute("data-theme","light");
    }
});

