// Constants and Variables
const baseURL = "https://excuser.herokuapp.com/v1"

// api call format: 

// function that gets a random excuse
function getRandomExcuse(){
    // constructing url for request
    const url = `${baseURL}/excuse`
    console.log(url)
}

getRandomExcuse()

// event listener on form that calls quote search function

// https://zenquotes.io/api/quotes/

// $.ajax({
//     url: "https://type.fit/api/quotes",
//     headers: {
//         "Access-Control-Allow-Origin": "*"
//     }
// }).then(data => {
//     console.log(data)
// })