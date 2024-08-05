// Grab Elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element;

    throw new Error(`Something went, make sure that ${selector} exists or is typed correctly.`);
};

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated');
    } else {
        headerElement.classList.remove('activated');
    }
};
window.addEventListener('scroll', scrollHeader);
// Open and Search Pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};
menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search from pop
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));
// Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if (event.key === 'Escape') searchFormContainer.classList.remove('activated');
});
// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    bodyElement.classList.add('light-theme');
}
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');
    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});
// Search code
let availableKeywords = [
    'Slime Wars: Origins',
    'Winter is here: Origins',
    'Founder',
    "Why does Scope matter?"
]

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if (!result.length) {
        resultBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list) {
    if (list.innerHTML == "Founder") {
        console.log("Clicked FOunder");
        location.replace("https://phantomstudios.dev/Articles/Featured/Featured1/IntroToPhantomStudios.html");
        
    } else if (list.innerHTML == "Slime Wars: Origins") {
        console.log("Clicked Slime Wars Origins");
        
        location.replace("https://phantomstudios.dev/Articles/Featured/Featured2/Slime%20Wars%20Origins.html");
    }
    else if (list.innerHTML == "Winter is here: Origins") {
        console.log("Clicked Winter is here Origins");
        location.replace("https://phantomstudios.dev/Articles/Featured/Featured3/Winter%20is%20here%20Origins.html");
    }
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
