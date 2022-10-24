// Constants and Variables
const baseURL = "https://zenquotes.io/api/"

// api call format: https://zenquotes.io/api/[mode]/[key]?option1=value&option2=value

// function that does quote search based on keyword
function quoteSearch(keyword){
    // constructing url for request
    const url = `${baseURL}quotes/?keyword=${keyword}`
    console.log(url)
}

quoteSearch("happiness")

// event listener on form that calls quote search function
