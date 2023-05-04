var deferredPrompt;





if ('serviceWorker' in navigator){
    console.log('sw can be installed')
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(){
        console.log('service worker is registered')
    })
    .catch(function(err){
        console.log('error while registering sw',err)
    })
}

window.addEventListener('beforeinstallprompt', function(event){
    event.preventDefault();
    deferredPrompt = event
    return false
})