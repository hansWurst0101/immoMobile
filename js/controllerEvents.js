// Controller fuer Events

document.addEventListener("deviceready", init, false);

    function init(){

        //----------------------------------------------------------------
        //-- Bei Klick auf Buttons entsprechende Funktionen ausloesen
        //----------------------------------------------------------------


        //BarcodeButton
        $('#barcodeButton').click(cordova.plugins.barcodeScanner.scan);


        // position='fixed' aller Header+Footer
        $.mobile.toolbar.prototype.options.position = "fixed";

        console.log("DOM ready");
    }











