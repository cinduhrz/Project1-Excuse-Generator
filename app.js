// Constants and Variables
const apiKey = "d2eb542144mshb55642cc8fd3881p1d80c5jsnc5a89d56f7df"
const baseURL = "https://healthruwords.p.rapidapi.com/v1/quotes/?"

// api call format: https://healthruwords.p.rapidapi.com/v1/quotes/?rapidapi-key=d2eb542144mshb55642cc8fd3881p1d80c5jsnc5a89d56f7df&t=Wisdom&maxR=1&size=medium&id=731

// function that does quote search based on topic
function quoteSearch(topic){
    // constructing url for request
    const url = `${baseURL}rapidapi-key=${apiKey}&t=${topic}&maxR=1&size=medium&id=21`
    console.log(url)
}

quoteSearch("Wisdom")

// event listener on form that calls quote search function