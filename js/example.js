var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content

const toBeChanged = ["fresh figs","kale","honey"];
/*  WRITE YOUR CODE BELOW */


// Part1. Hint: Use the listItems object to iterate through the elements of the list
for(let x = 0; x < totalItems; x++){
    //The second for loop is used to iterate through the toBeChanged array and check if it matches.
    for(let y = 0; y < toBeChanged.length; y++){ 
        if(listItems[x].textContent == toBeChanged[y]){
            listItems[x].className = 'cool';
        }
    }
}





// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list
heading.innerHTML = newHeading;




