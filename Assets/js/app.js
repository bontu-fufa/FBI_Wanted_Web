let displayBox = document.querySelector('#cards')
let pageLoader = document.querySelector('.spin');
// load button

var cyber = document.querySelector("#Cybers_Most_Wanted");
var murders = document.querySelector("#Violent_Crime_Murders");
var seeking = document.querySelector('#Seeking_Information')
var white = document.querySelector('#White-Collar_Crime')
var kidnapping = document.querySelector('#Kidnappings_and_Missing_Persons')
var vicap = document.querySelector('#ViCAP_Unidentified_Persons')
var additional = document.querySelector('#Additional_Violent_Crimes')

// log variable
let log = console.log

document.addEventListener('DOMContentLoaded', () => {
    // load all 
    fetchWanted();

    // get filters 
    cyber.addEventListener("click", ()=>{

        filter_crime("Cyber's_Most_Wanted")
    });       
    murders.addEventListener("click", ()=>{
      filter_crime("Violent_Crime_- Murders")
  });   
  seeking.addEventListener("click", ()=>{

    filter_crime("Seeking_Information")
  });   
  white.addEventListener("click", ()=>{

  filter_crime("White-Collar_Crime")
});   
kidnapping.addEventListener("click", ()=>{

  filter_crime("Kidnappings_and_Missing_Persons")
}); 
vicap.addEventListener("click", ()=>{

  filter_crime("ViCAP_Unidentified_Persons")
}); 
additional.addEventListener("click", ()=>{

  filter_crime("Additional_Violent_Crimes")
}); 

})


// get json file 
const fetchJson = async function(){
    var response = await fetch("Assets/js/json/api.json"); 
    var parsed = await response.json()
    return parsed
}

// fetch all

function fetchWanted(){
    fetchJson().then(jsonData => {
         var items = jsonData.items
 
         // iterate over items 
         var outputs = '';
         items.forEach(item => {
           // json extracts - start
 
             // first image
             var images = item.images
             var imagesUrl = images[0].original
 
             // name - Title
             var name = item.title
 
             // files - english will be filtered 
             var files = item.files 
             var firstFileUrl = files[0].url
 
             // reward text 
             var rewardTxt = !(item.reward_text === null) ? item.reward_text : 'reward not mentioned'
             
             // description
             var description = item.description
             
             // subject
             var subjects = item.subjects.length > 0 ? (item.subjects[0]) :  'subjects not mentioned'
             
             // uid 
             var uidid = item.uid 
             // modal id 
             var idd = `#${uidid}`
        // race_raw
            var race_raw = !(item.race_raw === null) ? item.race_raw : 'Unknown'

            // sex
            var sex = !(item.sex === null) ? item.sex : 'Unknown'
            
            // weight
            var weight = !(item.weigh === null) ? item.weight : 'Unknown'

            // hair
            var hair = !(item.hair === null) ? item.hair : 'Unknown'

            // scars_and_marks
            var scars_and_marks = !(item.scars_and_marks === null) ? item.scars_and_marks : 'Not identified yet'

            // aliases - array
            var aliases = !(item.aliases === null) ? item.aliases : []
            
            // url
            var url = item.url

            
            // warning_message
            var warning_message = !(item.warning_message === null) ? item.warning_message : 'NOT STATED YET'

            // field_offices - array
            var field_offices = !(item.field_offices === null) ? item.field_offices : []
            
            
            // Publication 
            var publication = item.publication

            // Modified 
            var modified = item.modified


            // remarks 
            var remarks = !(item.remarks === null) ? item.remarks : 'Not Stated'

            // 
            var caution = !(item.caution === null) ? item.caution : 'Not Stated'

             
             
             log(`image_URL ${imagesUrl}` )
             log(`file_URL ${firstFileUrl}` )
             log(`reward-text ${rewardTxt}` )
             log(`subject-text ${subjects}` )
             log(`uidid ${uidid}`)
             log(`modal id ${idd}`)
             log('--------------------------------------------------------------------------')
           // json extracts - end
           outputs += `<div class="col-12 my-3">
           <div class="card ">
               <div class="card-horizontal row">
                   
                   <div class="card-body col-md-9">
                       
                       <div class="d-flex justify-content-between">
                           <h4 class="card-title text-center color-blueblack"> ${name}</h4>
                           <button type="button" class=" btn  btn-outline border-0" data-toggle="modal" data-target="${idd}" >
                        <i class="fa fa-info-circle" aria-hidden="true" ></i></button>
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
               </div>


               <!-- Modal -->
               <div class="modal fade" id="${uidid}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                 <div class="modal-dialog" role="document">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="exampleModalLongTitle">${name}</h5>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                       </button>
                     </div>
                     <div class="modal-body">
                       <p class="text-center"> some Descriptions</p>
                        <hr>
                        <p>sex : ${sex}</p>
                        <p>weight : ${weight}</p>
                        <p>hair : ${hair}<p>
                        <p>scars_and_marks : ${scars_and_marks}</p>
                        <hr>
                        
                        <p> Description </P>
                        <p class="text-center>
                            ${remarks}
                        </p>

                        <p> Remark </P>
                        <p class="text-center>
                            ${remarks}
                        </p>

                        <p> Caution </P>
                        <p class="text-center>
                            ${caution}
                        </p>

                        <p> warning_message </P>
                        <p class="text-center>
                            ${warning_message}
                        </p>

                        <hr>
                        <hr>
                        <p> Publication :  ${publication}  </P>
                        <p> Modified :  ${modified}  </P>
                        <p class="text-center>
                            Field Office : ${field_offices[0]}
                        </p>
                     </div>
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                       <button type="button" class="btn btn-primary">Save changes</button>
                     </div>
                   </div>
                 </div>
               </div>
         `
         });
 
         
     displayBox.innerHTML = outputs;
     })
     .catch((err) => { console.log(err); })
     
 }

// filter crime



var filter_crime = function(choosen){
    fetchJson().then(jsonData =>{
      displayBox.innerHTML= '';
      var items = jsonData.items
      var crime = choosen.replaceAll("_"," ")
      log(items)
      log(crime)
  
      var results = items.filter(item => item.subjects == crime )
      var total_crime = results.length;
      log(results)
      var html = ''
      results.forEach(item => {
              log(item)
              var images = item.images
              var imagesUrl = images[0].original
              // name - Title
              var name = item.title
  
              // files - english will be filtered 
              var files = item.files 
              var firstFileUrl = files[0].url
  
              // reward text 
              var rewardTxt = !(item.reward_text === null) ? item.reward_text : 'reward not mentioned'
              
              // description
              var description = item.description
              
              // subject
              var subjects = item.subjects.length > 0 ? (item.subjects[0]) :  'subjects not mentioned'
              
              // uid 
              var uidid = item.uid 
              // modal id 
              var idd = `#${uidid}`
  
  
  
              html += `<div class="col-12 my-3">
              <div class="card ">
                  <div class="card-horizontal row">
                      
                      <div class="card-body col-md-9">
                          
                          <div class="d-flex justify-content-between">
                              <h4 class="card-title text-center color-blueblack"> ${name}</h4>
                              <button type="button" class=" btn  btn-outline border-0" data-toggle="modal" data-target="${idd}" >
                           <i class="fa fa-info-circle" aria-hidden="true" ></i></button>
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
                  </div>
  
                 
            `
  
        
      })
  
  
      html += (total_crime > 1) ? `<p>${total_crime} results are found! </p>` : `<p>${total_crime} result is found! </p>` 
  
      log(html)
      displayBox.innerHTML = html;
  
  })
    
  }















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