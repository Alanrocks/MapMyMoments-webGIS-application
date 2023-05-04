// import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
// import {firebase} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
// import "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js"
// import {submitPost} from 'index.js'
var canvas = document.getElementById('capturedImg')
var userLocation
var geoRecall = true
var progressbar = document.getElementById('imgprogressbar')

function addimgtocanvas(e){
    var reader = new FileReader()
    reader.onload= function(event){
        var img = new Image()
        img.onload=function(){
            var ctx = canvas.getContext('2d')
            ctx.drawImage(img,0,0,240,320)
        }
        img.src = event.target.result
    }
    reader.readAsDataURL(e.files[0])
}



function showPosition(position){
    document.getElementById('position_info').innerHTML = '<i class="fa-solid fa-location-crosshairs fa-spin"></i> Position received, saving the post'
    progressbar.style.width='0%'
    document.getElementById('position_info').style.color='blue'
    userLocation={
        longitude:position.coords.longitude,
        latitude:position.coords.latitude
    }
    console.log(userLocation)
    submitPost(userLocation)
    geoRecall = false
}

function positionError(){
    document.getElementById('position_info').innerHTML = 'GPS authorization required!'
    document.getElementById('position_info').style.color='red'
    userLocation=undefined
    if (geoRecall){
        geolocagain()
    }
}

function geolocagain(){
    navigator.geolocation.getCurrentPosition(showPosition, positionError)

}
function getlocation(){
    navigator.geolocation.getCurrentPosition(showPosition, positionError)
}

// function submitPost(location){
//     var name = window.currentUsersemail + new Date().toISOString()
//     const storage = getStorage();
//     const storageRef = ref(storage, 'feed/'+name);

// // 'file' comes from the Blob or File API
//     uploadBytes(storageRef, file).then((snapshot) => {
//   console.log('Uploaded a blob or file!');
//   progressbar.parentElement.style.display='flex'
// });
// }

var myInput = document.getElementById('addphotobtn');

function sendPic() {
    var file = myInput.files[0];

    // Send file here either by adding it to a `FormData` object 
    // and sending that via XHR, or by simply passing the file into 
    // the `send` method of an XHR instance.
}

myInput.addEventListener('change', sendPic, false);
