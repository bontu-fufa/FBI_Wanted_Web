let displayBox = document.querySelector('#cards')
let pageLoader = document.querySelector('.spin');

// log variable
let log = console.log

document.addEventListener('DOMContentLoaded', () => {
    // load all 
    fetchWanted();

    // get filters 

})


// get json file 
const fetchJson = async function(){
    var response = await fetch("assets/js/json/api.json"); 
    var parsed = await response.json()
    return parsed
}

// fetch all



// filter crime



















// not working 
function fetchWantedFromApi() {
    // fetch(' https://cors-anywhere.herkuapp.com/https://api.fbi.gov/wanted/v1/list')
    fetch('https://api.fbi.gov/wanted', { mode: "no-cors" })
    .then(response  => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })//return the JSON Promise
    .then(function(jsonData) {
        let items = jsonData.items;
        let outputs = '';
        items.forEach(item => {

            let images = item.images
            let imagesUrl = images[0].original
            // name - Title
            let name = item.title
            // files - english will be filtered 
            let files = item.files 
            let firstFileUrl = files[0].url
            // reward text 
            let rewardTxt = !(item.reward_text === null) ? item.reward_text : 'reward not mentioned'
            // description
            let description = item.description
            // subject
            let subjects = item.subjects.length > 0 ? (item.subjects[0]) :  'subjects not mentioned'
           
            log(`at ${index} name : ${name} ` )
            log(`image_URL ${imagesUrl}` )
            log(`file_URL ${firstFileUrl}` )
            log(`reward-text ${rewardTxt}` )
            log(`subject-text ${subjects}` )
            log('--------------------------------------------------------------------------')

            outputs += `<div class="col-12 my-3">
            <div class="card ">
                <div class="card-horizontal row">
                    
                    <div class="card-body col-md-9">
                        
                        <div class="d-flex justify-content-between">
                            <h4 class="card-title text-center color-blueblack"> ${name}</h4>
                            <button class="btn btn-outline border-0"> <i class="fa fa-info-circle" aria-hidden="true"></i></button>
                        </div>
                        <p><small>Subjects </small></p>
                        <p class="card-text color-black">
                        ${subjects}
                        </p>

                        <p><Small>Reward</Small></p>
                        <p class="card-text color-black "> <em>
                        ${rewardTxt}
                        </em> </p>
                        <button class="btn btn-fill-1 mt-2" style="width:100%"><i class="fa fa-download"></i>
                        <a href="${firstFileUrl}" class="color-white" download="download.pdf"> Download File</a>
                        </button>

                    </div>
                    <div class="img-square-wrapper col-md-3 ">
                        <img class="img-adjust" src="${imagesUrl}" alt="Card image cap">
                    </div>
                </div>
               
            </div>
        </div>`
   
        });

    

    displayBox.innerHTML = outputs;
    })
    .catch(function(err) {     
        console.log(err);
    });
}