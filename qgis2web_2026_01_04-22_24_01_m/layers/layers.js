var wms_layers = [];


        var lyr_openstreetmap_0 = new ol.layer.Tile({
            'title': 'open street map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_dissolve_mala_1 = new ol.format.GeoJSON();
var features_dissolve_mala_1 = format_dissolve_mala_1.readFeatures(json_dissolve_mala_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dissolve_mala_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dissolve_mala_1.addFeatures(features_dissolve_mala_1);
var lyr_dissolve_mala_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dissolve_mala_1, 
                style: style_dissolve_mala_1,
                popuplayertitle: 'dissolve_mala',
                interactive: true,
    title: 'dissolve_mala<br />\
    <img src="styles/legend/dissolve_mala_1_0.png" /> Bukan Pertanian<br />\
    <img src="styles/legend/dissolve_mala_1_1.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/dissolve_mala_1_2.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/dissolve_mala_1_3.png" /> Pertanian Tanaman Tahunan/Perkebunan<br />' });

lyr_openstreetmap_0.setVisible(true);lyr_dissolve_mala_1.setVisible(true);
var layersList = [lyr_openstreetmap_0,lyr_dissolve_mala_1];
lyr_dissolve_mala_1.set('fieldAliases', {'kesesuaian': 'kesesuaian', });
lyr_dissolve_mala_1.set('fieldImages', {'kesesuaian': 'TextEdit', });
lyr_dissolve_mala_1.set('fieldLabels', {'kesesuaian': 'inline label - always visible', });
lyr_dissolve_mala_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});