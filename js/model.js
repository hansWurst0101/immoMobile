// Modell besteht aus Array von Locations mit Attributen

var myLocations = 
[
	{
	    "id":"immo001",
	    "typ":"Haus",
    	"adresse":"Turmstraße 13, 77933 Lahr/Schwarzwald",
    	"preis":"300000",
    	"wohnflaeche":"170",
       	"longitude":"7.873596",
    	"latitude":"48.342679",
        "image":"Haus1.jpg"
    },
    
    {
        "id":"immo002",
        "typ":"Haus",
    	"adresse":"Friedrichstraße 9, 77654 Offenburg",
    	"preis":"400000",
        "wohnflaeche":"250",
       	"longitude":"7.948382",
    	"latitude":"48.472518",
        "image":"Haus2.jpg"
    },

    {
        "id":"immo003",
        "typ":"Haus",
        "adresse":"Nollenstraße 55, 77723 Gengenbach",
        "preis":"230000",
        "wohnflaeche":"140",
        "longitude":"8.012727",
        "latitude":"48.410524",
        "image":"Haus3.jpg"
    },

    {
        "id":"immo004",
        "typ":"Wohnung",
        "adresse":"Bahnhofstraße 23, 77767 Appenweier",
        "preis":"160000",
        "wohnflaeche":"125",
        "longitude":"7.977123",
        "latitude":"48.540753",
        "image":"Haus4.jpg"
    },

    {
        "id":"immo005",
        "typ":"Wohnung",
        "adresse":"Schillerstraße 7, 77975 Ringsheim",
        "preis":"450000",
        "wohnflaeche":"280",
        "longitude":"7.783956",
        "latitude":"48.248849",
        "image":"Haus5.png"
    },

    {
        "id":"immo006",
        "typ":"Wohnung",
        "adresse":"Weinstraße 86, 77654 Offenburg",
        "preis":"520000",
        "wohnflaeche":"265",
        "longitude":"7.978632",
        "latitude":"48.480101",
        "image":"Haus6.jpg"
    },

    {
        "id":"immo007",
        "typ":"Wohnung",
        "adresse":"Tannenweg 4, 77781 Biberach",
        "preis":"395000",
        "wohnflaeche":"155",
        "longitude":"8.034231",
        "latitude":"48.339715",
        "image":"Haus7.jpg"
    },

    {
        "id":"immo008",
        "typ":"Haus",
        "adresse":"Goldgasse 7, 79341 Kenzingen",
        "preis":"870000",
        "wohnflaeche":"310",
        "longitude":"7.768009",
        "latitude":"48.192564",
        "image":"Haus8.jpg"
    },

    {
        "id":"immo009",
        "typ":"Haus",
        "adresse":"Sonnhalde 20, 77972 Mahlberg",
        "preis":"435000",
        "wohnflaeche":"215",
        "longitude":"7.813518",
        "latitude":"48.284902",
        "image":"Haus9.jpg"
    }
];

var current = 0;

