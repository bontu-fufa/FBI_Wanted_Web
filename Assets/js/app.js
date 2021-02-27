let apiBox = document.querySelector('#api_box')

let pageLoader = document.querySelector('.spin');


document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = "red";

    fetchWanted();
})

function fetchWanted() {
    // fetch(' https://cors-anywhere.herkuapp.com/https://api.fbi.gov/wanted/v1/list')
    fetch('https://api.fbi.gov/wanted', { mode: "no-cors" })
    .then(function(res) {  return res.json(); //return the JSON Promise
    })
    .then(function(posts) {
        //iterate over each post [100 posts]
        let output = 'success fully fetched '
        // ${posts[title]} ;
        apiBox.innerHTML = output;
    })
    .catch(function(err) {     
        console.log(err);
    });
}