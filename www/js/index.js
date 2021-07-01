

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
};
function onSuccess(result){
    console.log("Success:"+result);
  }
  
  function onError(result) {
   console.log("Error:"+result);
  }
  
  $scope.callNumber = function(number){
    console.log("Calling "+number);
    window.plugins.CallNumber.callNumber(onSuccess, onError, number, false);
  }