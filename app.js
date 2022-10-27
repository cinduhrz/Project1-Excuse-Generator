// Constants and Variables
const baseURL = "https://excuser.herokuapp.com/v1"

// api call format: 

// function that gets a random excuse and renders to screen
function renderRandomExcuse(){
    // constructing url for request
    const url = `${baseURL}/excuse`
    console.log(url)

    $.ajax(url).then((excuse) => {
        console.log(excuse)

        // put data on screen
        const $excuseDisplay = $("div.excuse")
        $excuseDisplay.html(excuse[0].excuse)

    })


}

renderRandomExcuse()

// event listener on form that calls quote search function
$("input[type=submit]").on("click", (e) => {
    // prevent auto refresh after clicking button
    e.preventDeafult()

    // update the screen
    renderRandomExcuse()
})


// https://zenquotes.io/api/quotes/

// $.ajax({
//     url: "https://type.fit/api/quotes",
//     headers: {
//         "Access-Control-Allow-Origin": "*"
//     }
// }).then(data => {
//     console.log(data)
// })