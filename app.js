// Constants and Variables
const baseURL = "https://excuser.herokuapp.com/v1"

// api call format: 

//-------------------------
// FUNCTIONS
//-------------------------

// function that creates a url based on selected option
function createURL(){
    // create variable for selected option in dropdown
    let selectedOption = $("select").val()

    // constructing url for request
    // construct diff urls based on option selected using conditionals
    // url format for specific category: https://excuser.herokuapp.com/v1/excuse/category
    if (selectedOption === "family") {
        return `${baseURL}/excuse/family`
    } else if (selectedOption === "work") {
        return `${baseURL}/excuse/office`
    } else if (selectedOption === "college") {
        return `${baseURL}/excuse/college`
    } else if (selectedOption === "kids") {
        return `${baseURL}/excuse/children`
    } else if (selectedOption === "party") {
        return `${baseURL}/excuse/party`
    } else if (selectedOption === "code") {
        return `${baseURL}/excuse/developers`
    } else if (selectedOption === "gaming") {
        return `${baseURL}/excuse/gaming`
    } else if (selectedOption === "unbelievable") {
        return `${baseURL}/excuse/unbelievable`
    } else if (selectedOption === "random") {
        return `${baseURL}/excuse`
    }
}

// function that gets a random excuse and renders to screen
function renderRandomExcuse(){

    // create url first and save it in a variable
    const url = createURL()
    console.log(url)

    // then get data using url
    $.ajax(url).then((excuse) => {
        console.log(excuse)

        // put data on screen
        const $excuseDisplay = $("div.excuse")
        $excuseDisplay.html(excuse[0].excuse)

    })
}

//-------------------------
// EVENT LISTENERS
//-------------------------


// event listener on form that calls quote search function
$("button").on("click", (e) => {
    // prevent auto refresh after clicking button
    e.preventDefault()

    // update the screen
    renderRandomExcuse()
})

// event listener on dropdown that updates selectedoption variable

$("select").on("change", (e) => {
    // updated selectedOption variable
    let selectedOption = $("select").val()
    console.log(selectedOption)
})