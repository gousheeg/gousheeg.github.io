// Searching the list of cars
function search_cars() {
    // Getting user input
    var input = document.getElementById('searchBar').value;
    // Converting input to lower case
    input = input.toLowerCase();
    // Gathering the list of cars based on className
    let carList = document.getElementsByClassName("listEntry");
    // Looping through the cars list to find a match with user input
    for (i = 0; i < carList.length; i++) {
        // Checks if the car list name does not include value from input
        if (!carList[i].innerHTML.toLowerCase().includes(input)) {
            // If user input doesnt match then set current entry to not display
            carList[i].style.display = "none";
        }
        else {
            carList[i].style.display = "list-item";
        }
    }
}

/*
REFERENCES:
Bhutani, K. (2019, April 08). Search Bar using HTML, CSS and JavaScript. Retrieved October 01, 2020, from https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
*/
