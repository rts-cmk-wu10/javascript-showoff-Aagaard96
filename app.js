const dishes = [
    {
        dishName: "Spaghetti Carbonara",
        cookingTime: 30,
        foodType: "Italian",
        vegan: "No"
    },
    {
        dishName: "Vegan Chickpea Curry",
        cookingTime: 45,
        foodType: "Indian",
        vegan: "Yes"
    },
    {
        dishName: "Grilled Chicken Salad",
        cookingTime: 20,
        foodType: "Salad",
        vegan: "No"
    },
    {
        dishName: "Mushroom Risotto",
        cookingTime: 35,
        foodType: "Italian",
        vegan: "No"
    },
    {
        dishName: "Vegetable Stir-Fry",
        cookingTime: 25,
        foodType: "Chinese",
        vegan: "Yes"
    },
    {
        dishName: "Classic Cheeseburger",
        cookingTime: 15,
        foodType: "American",
        vegan: "No"
    },
    {
        dishName: "Vegan Tofu Tacos",
        cookingTime: 30,
        foodType: "Mexican",
        vegan: "Yes"
    },
    {
        dishName: "Sushi Rolls",
        cookingTime: 40,
        foodType: "Japanese",
        vegan: "No"
    },
    {
        dishName: "Spinach and Mushroom Quiche",
        cookingTime: 50,
        foodType: "French",
        vegan: "No"
    },
    {
        dishName: "Vegan Pad Thai",
        cookingTime: 35,
        foodType: "Thai",
        vegan: "Yes"
    }
];

const FORM = document.querySelector(".searchField__form");

FORM.addEventListener("submit", submitHandler);


function submitHandler(event) {
    event.preventDefault();

    const RESULTS = dishes.filter(function (element) {
        return searchTitle(event.target.search.value, element.dishName)
            || compare(element.cookingTime, event.target.search.value)
            || compare(element.foodType, event.target.search.value)
            || compare(element.vegan.toLowerCase(), event.target.search.value.toLowerCase())
    });

    const UL = document.getElementsByClassName("foodResults")[0];
    UL.innerHTML = '';

    RESULTS.forEach(function (result) {
        const LI = document.createElement("li");
        LI.innerHTML = `
        <h2 class="food__title">${result.dishName}</h2>
        <h3 class="cook__time">Cook time (Minutes):</h3>
        <span>${result.cookingTime}</span>
        <h3 class="food__type">Food Type:</h3>
        <span>${result.foodType}</span>
        <h3 class="food__vegan">Vegan?:</h3>
        <span>${result.vegan}</span>
        `;

        UL.append(LI);

    });

    console.log(RESULTS);
}

function searchTitle(keyword, dishName) {
    return dishName
        .toLowerCase()
        .includes(
            keyword.toLowerCase()
        )
}

const compare = (a, b) => a == b

function findInArray(arr, keyword) {
    return arr.find(function (item) {
        return item.toLowerCase().includes(keyword.toLowerCase())
    })
}

const element = document.querySelector(".foodResults");
element.addEventListener("mouseover", showNewsletter);

function showNewsletter() {
    const newsletters = document.getElementsByClassName("newsletter");
    for (let i = 0; i < newsletters.length; i++) {
        newsletters[i].style.display = "block";
    }
}