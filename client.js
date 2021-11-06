$( document ).ready(function() {
    console.log( "ready!" );
});


function onReady() {
console.log ('ready')
   $('#unicorns-button').on('click', onUnicornClick);
   $('#mushies-button').on('click', onMushiesClick);