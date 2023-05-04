self.addEventListener('install',function(event){
    console.log("Service worker is successfully installed", event)
} )

self.addEventListener('activate',function(event){
    console.log("Service worker is successfully activated", event)
} )

// self.addEventListener('fetch',function(event){
//     // console.log(event)
// } )