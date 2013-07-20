//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(function(){
    var watchID=null
    //Acelerometro
    $("#acelrometro .idividual li ").tap(function(){ 
        if($(this).index()==0){//boton de iniciar
            function onSuccess(acceleration) {
    $("#acelerometro h2").html('Acceleration X: ' + acceleration.x + '<br>' +
          'Acceleration Y: ' + acceleration.y + '<br>' +
          'Acceleration Z: ' + acceleration.z + '<br>');
};

function onError() {
    alert('onError!');
};

var options = { frequency: 1000 };  // un segundo

 watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        } else{//Boton Detener
             if (watchID) {
            navigator.accelerometer.clearWatch(watchID);
            watchID = null;    
                 $("#acelerometro h2").html('DETENIDO');
             }
        }
         });
});