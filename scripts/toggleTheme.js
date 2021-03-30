// Function sets the theme of the website
function setTheme(themeName, iconName) {
    // Variable declaration
    var pageElementsLength;
    var pageElements;
    
    // Store user preference in local storage
    localStorage.setItem('currentTheme', themeName);
    
    // Change the class of the body
    document.body.className = themeName;
    
    if (themeName === 'lightMode') {
        // Select all elements with the className given
        pageElements = document.querySelectorAll(".darkElement");
        pageElementsLength = pageElements.length;
        
        // Iterate through the elements, update their classname
        for (let i = 0; i < pageElementsLength; i++) {
            pageElements.item(i).className = pageElements.item(i).className.replace("darkElement", "lightElement");
        }
    }
    else {
        // Selects all elements with the className given
        pageElements= document.querySelectorAll(".lightElement");

        // Iterate through the elements, update their classname
        for (let i = 0; i < pageElements.length; i++) {
            pageElements.item(i).className = pageElements.item(i).className.replace("lightElement", "darkElement");
        }
    }
    
    // Update the icon on the theme button
    document.getElementById("themeButton").className = "fa " + iconName;
}

// Function runs when theme button is pressed 
function toggleTheme() {
    // Checks local storage for current theme preference and toggles opposite theme 
    if (localStorage.getItem('currentTheme') === 'darkMode') {
        setTheme('lightMode',"fa-moon-o");
    } else {
        setTheme('darkMode',"fa-sun-o");
    }
}

// This function is called immediately when the script is loaded (everytime a page loads)
(function () {
    // Check local storage for user preference 
    if (localStorage.getItem('currentTheme') === 'lightMode') {
        setTheme('lightMode', "fa-moon-o");
    } else {
        setTheme('darkMode', "fa-sun-o");
    }
}
)();

/*
REFERENCES:
How TO - Toggle Dark Mode. (n.d.). Retrieved September 28, 2020, from https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
Idea of replacing class names obtained from below tutorial
How TO - Slideshow. (n.d.). Retrieved September 28, 2020, from https://www.w3schools.com/howto/howto_js_slideshow.asp
*/