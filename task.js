function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(3, 300)); 
console.log(makeTransaction(10, 500)); 
console.log(makeTransaction(1, 1000)); 
console.log(makeTransaction(100, 1000)); 

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true
    };

    return false;
}

console.log(checkForSpam("World Economic News Today.")); 
console.log(checkForSpam("Get the best SALE offers now!")); 
console.log(checkForSpam("Beware of spam messages!")); 
console.log(checkForSpam("How to Recognize and Report Spam Text Messages.")); 

function filterArray(numbers, value) {
    const filteredNumbers = []; 

    for (number of numbers) { 
        if (number > value) { 
            filteredNumbers.push(number); 
        }
    }

    return filteredNumbers; 
}

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); 
console.log(filterArray([10, 20, 30, 40, 50], 15)); 
console.log(filterArray([6, 7, 12, 39, 45, 99, 2000, 75, 22], 20));
console.log(filterArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 100));

function sortArray(numbers) {
    const divisibleBy2 = [];
    const divisibleBy2And3 = [];
    const divisibleBy3 = [];

    for (number of numbers) {
        if (number % 2 === 0 && number % 3 === 0) {
            divisibleBy2And3.push(number);
            } else if (number % 2 === 0) {
            divisibleBy2.push(number);
            } else if (number % 3 === 0) {
            divisibleBy3.push(number);
        }
    }

    const sortedArray = [...divisibleBy2, ...divisibleBy2And3, ...divisibleBy3];
    return sortedArray;
}

console.log("Вхідний масив:", [1, 6, 51, 77, 97, 159, 227, 242, 313, 314, 347, 360, 414, 447, 589, 648, 692, 696, 733, 942,]);
console.log(
    "Вихідний масив:",
    sortArray([
        1, 6, 51, 77, 97, 159, 227, 242, 313, 314, 347, 360, 414, 447, 589, 648,
        692, 696, 733, 942
    ])
);
console.log(
    "Вхідний масив:",
    [
        27, 148, 199, 233, 268, 286, 337, 366, 447, 462, 506, 545, 550, 561, 589,
        659, 668, 786, 846, 859
    ]
);
console.log(
    "Вихідний масив:",
    sortArray([
        27, 148, 199, 233, 268, 286, 337, 366, 447, 462, 506, 545, 550, 561, 589,
        659, 668, 786, 846, 859
    ])
);

const colors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];
const textInput = document.getElementById("textInput");
const autocompleteList = document.getElementById("autocomplete-list");

textInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    autocompleteList.innerHTML = ""; 

    if (!query) return;

    const filteredColors = colors.filter((item) =>
        item.toLowerCase().includes(query)
    );

    filteredColors.forEach((color) => {
        const item = document.createElement("div");
        item.textContent = color;
        autocompleteList.appendChild(item);

        item.addEventListener("click", function () {
            textInput.value = color;
            autocompleteList.innerHTML = "";
            document.body.style.backgroundColor = color;
        });
    });
});

document.addEventListener("click", function (e) {
    if (e.target !== textInput) {
        autocompleteList.innerHTML = "";
    }
});