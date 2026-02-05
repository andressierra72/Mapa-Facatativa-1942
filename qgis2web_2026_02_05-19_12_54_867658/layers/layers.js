var wms_layers = [];


        var lyr_OSMHumanitarian_0 = new ol.layer.Tile({
            'title': 'OSM Humanitarian',
            'type':'base',
            'opacity': 0.811000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
            })
        });
var lyr_Mapa1942_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mapa 1942<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Mapa1942_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8278112.376335, 534952.626346, -8275667.171521, 537323.414675]
        })
    });

lyr_OSMHumanitarian_0.setVisible(true);lyr_Mapa1942_1.setVisible(true);
var layersList = [lyr_OSMHumanitarian_0,lyr_Mapa1942_1];
