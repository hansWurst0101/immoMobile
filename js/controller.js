// Controller fuer Events

$(document).ready(function(){
    //Ereignis: Immobilie suchen
    $('#suchen').click(showImmobilien);
    $('#next').click(showNext);
    $('#previous').click(showPrevious);
    $('#suchen').click(searchPosition);

    console.log("DOM ready");
});

    var treffer = [];
    var indexTreffer;

    function showImmobilien()
    {
        treffer.length=0;
        var formFlaeche = document.getElementById("mindestwohnflaeche").value;
        var formPreis = document.getElementById("maxPreis").value;
        var formTyp = document.querySelector('[name="radioTyp"]:checked').value;

        // alert("formFlaeche: "+formFlaeche);
        // alert("formPreis: "+formPreis);
        // alert("formTyp: "+formTyp);

        var i;

        for(i=0; i<myLocations.length; i++)
        {
            //alert("alles: "+myLocations[i].typ+": "+formTyp+"/"+myLocations[i].preis+": "+formPreis+"/"+myLocations[i].wohnflaeche+": "+formFlaeche);
            if(myLocations[i].typ == formTyp)
            {
                if (myLocations[i].preis <= formPreis*1)
                {
                    if (myLocations[i].wohnflaeche >= formFlaeche*1) //ohne *1 funktioniert es nicht richtig, wird anscheinend nicht als Zahl behandelt
                    {
                        treffer[treffer.length] = i;
                    }
                }
            }
        }

         // alert("treffer: "+treffer.length);
         // alert("myLocations: "+myLocations.length);

        indexTreffer=-1;

        showNext();

    }

    function showNext()
    {
        if (indexTreffer<treffer.length-1)
            indexTreffer++;

        $(".anzahlErgebnisse").text("(Ergebnis "+(indexTreffer+1)+"/"+treffer.length+")");

        var i=indexTreffer;

        $(".typ").text(myLocations[treffer[i]].typ);
        $(".adresse").text(myLocations[treffer[i]].adresse);
        $(".preis").text(myLocations[treffer[i]].preis+" €");
        $(".wohnflaeche").text(myLocations[treffer[i]].wohnflaeche+" m²");
        $(".image").empty();
        $(".image").append("<img src='./img/" + myLocations[treffer[i]].image + "' width='200'>");

        searchPosition();
    }

    function showPrevious()
    {
        if (indexTreffer>0)
            indexTreffer--;

        $(".anzahlErgebnisse").text("(Ergebnis "+(indexTreffer+1)+"/"+treffer.length+")");

        var i=indexTreffer;

        $(".typ").text(myLocations[treffer[i]].typ);
        $(".adresse").text(myLocations[treffer[i]].adresse);
        $(".preis").text(myLocations[treffer[i]].preis+" €");
        $(".wohnflaeche").text(myLocations[treffer[i]].wohnflaeche+" m²");
        $(".image").empty();
        $(".image").append("<img src='./img/" + myLocations[treffer[i]].image + "' width='200'>");

        searchPosition();
    }




    // Geolocation

    function searchPosition() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getLocation);
            } else {
                alert("Geolocation wird vom Browser nicht unterstuetzt");
            }
        }

        function getLocation(position){

            var myLocation;
            var currentLng = position.coords.longitude;
            var currentLat = position.coords.latitude;
            var locationLng;
            var locationLat;
            var dx;
            var dy;

            var distance;

            var current=0;


                myLocation = myLocations[treffer[indexTreffer]];

                locationLng = myLocation.longitude;
                locationLat = myLocation.latitude;

                dx = 71.5 * (currentLng - locationLng);
                dy = 111.3 * (currentLat - locationLat);

                distance = Math.sqrt(dx * dx + dy * dy);


            showLocation(distance);
            showMap(position, distance);
        }

    //Location anzeigen ohne Karte
        function showLocation(distance) {

            var myLocation = myLocations[treffer[indexTreffer]];

            // Location page oeffnen
            $(':mobile-pagecontainer').pagecontainer('change', '#page-immobilie', { transition: 'slideup' });


            /***************************************************************************/
            /* Aktuelle Entferung zu Attraktion auf 2 Stellen runden und */
            /* an beschrLocationContent anfuegen                               */
            /***************************************************************************/
            var km = (Math.round(distance * 100) / 100);

            $('.entfernung').empty();
            $('.entfernung').append(km + " km");
        }

        function showMap(position, distance){

            var myLocation = myLocations[treffer[indexTreffer]];

            var latlngCurrent = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var latlngLocation = new google.maps.LatLng(myLocation.latitude,myLocation.longitude);

            var geocoder = new google.maps.Geocoder();

            //Optionen fuer Kartendarstellung festlegen

            //----------------------------------------------------------------
            //-- OPTIONEN FESTLEGEN
            //----------------------------------------------------------------
            var dynamicZoom;
            if (distance<10)
                dynamicZoom=11;
            else if (distance<25)
                    dynamicZoom=10;
            else if (distance<40)
                    dynamicZoom=9;
            else
                dynamicZoom=8;

            var myOptions = {
                zoom: dynamicZoom,
                center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            //----------------------------------------------------------------
            // KARTE DARSTELLEN (im Div-Container mit der id=karteAusgabe)
            //----------------------------------------------------------------
            map = new google.maps.Map(document.getElementById("karteAusgabe"), myOptions);

            //----------------------------------------------------------------
            // ICON FUER EIGENE POSITION DEFINIEREN
            //----------------------------------------------------------------
            markerCurrent = new google.maps.Marker({
                position: latlngCurrent,
                map: map,
                title: "Hier bist du"
            });

            //----------------------------------------------------------------
            // ICON FUER ATTRAKTION DEFINIEREN
            //----------------------------------------------------------------
            markerLocation = new google.maps.Marker({
                position: latlngLocation,
                map: map,
                title: "Hier ist dein Ziel"
            });

            // Postalische Adresse der aktuellen Pos. ermitteln und darstellen
            geocoder.geocode({
                'latLng' : latlngCurrent
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        this.adresse = results[0].formatted_address;
                        $("#adresseAusgabe").text("Sie sind gerade hier: " + this.adresse);
                    }
                }
            });
        }
