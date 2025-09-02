var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_COUNTY_MOI_1090820_1 = new ol.format.GeoJSON();
var features_COUNTY_MOI_1090820_1 = format_COUNTY_MOI_1090820_1.readFeatures(json_COUNTY_MOI_1090820_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COUNTY_MOI_1090820_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COUNTY_MOI_1090820_1.addFeatures(features_COUNTY_MOI_1090820_1);
var lyr_COUNTY_MOI_1090820_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COUNTY_MOI_1090820_1, 
                style: style_COUNTY_MOI_1090820_1,
                popuplayertitle: 'COUNTY_MOI_1090820',
                interactive: true,
                title: '<img src="styles/legend/COUNTY_MOI_1090820_1.png" /> COUNTY_MOI_1090820'
            });
var format_xiao2SHPnew_2 = new ol.format.GeoJSON();
var features_xiao2SHPnew_2 = format_xiao2SHPnew_2.readFeatures(json_xiao2SHPnew_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_xiao2SHPnew_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xiao2SHPnew_2.addFeatures(features_xiao2SHPnew_2);
var lyr_xiao2SHPnew_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_xiao2SHPnew_2, 
                style: style_xiao2SHPnew_2,
                popuplayertitle: 'xiao2SHP(new)',
                interactive: true,
                title: '<img src="styles/legend/xiao2SHPnew_2.png" /> xiao2SHP(new)'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '支流',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 支流'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '主流',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 主流'
            });
var format_AR6_____ssp126_ACCESSCM2_2018_5 = new ol.format.GeoJSON();
var features_AR6_____ssp126_ACCESSCM2_2018_5 = format_AR6_____ssp126_ACCESSCM2_2018_5.readFeatures(json_AR6_____ssp126_ACCESSCM2_2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR6_____ssp126_ACCESSCM2_2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR6_____ssp126_ACCESSCM2_2018_5.addFeatures(features_AR6_____ssp126_ACCESSCM2_2018_5);
var lyr_AR6_____ssp126_ACCESSCM2_2018_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR6_____ssp126_ACCESSCM2_2018_5, 
                style: style_AR6_____ssp126_ACCESSCM2_2018_5,
                popuplayertitle: 'AR6_統計降尺度_日資料_宜蘭縣_降雨量_ssp126_ACCESS-CM2_2018',
                interactive: true,
                title: '<img src="styles/legend/AR6_____ssp126_ACCESSCM2_2018_5.png" /> AR6_統計降尺度_日資料_宜蘭縣_降雨量_ssp126_ACCESS-CM2_2018'
            });
var format_utf8_6 = new ol.format.GeoJSON();
var features_utf8_6 = format_utf8_6.readFeatures(json_utf8_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_utf8_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_utf8_6.addFeatures(features_utf8_6);
var lyr_utf8_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_utf8_6, 
                style: style_utf8_6,
                popuplayertitle: '實際雨量utf-8',
                interactive: true,
                title: '<img src="styles/legend/utf8_6.png" /> 實際雨量utf-8'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_COUNTY_MOI_1090820_1.setVisible(true);lyr_xiao2SHPnew_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_AR6_____ssp126_ACCESSCM2_2018_5.setVisible(true);lyr_utf8_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_COUNTY_MOI_1090820_1,lyr_xiao2SHPnew_2,lyr__3,lyr__4,lyr_AR6_____ssp126_ACCESSCM2_2018_5,lyr_utf8_6];
lyr_COUNTY_MOI_1090820_1.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', });
lyr_xiao2SHPnew_2.set('fieldAliases', {'name': 'name', 'long_len': 'long_len', 'long_slo': 'long_slo', 'cent_len': 'cent_len', 'cent_slo': 'cent_slo', '10_85_len': '10_85_len', '10_85_slo': '10_85_slo', 'basin_slo': 'basin_slo', 'basin_rel': 'basin_rel', 'elong_ra': 'elong_ra', 'relief_ra': 'relief_ra', 'drain_den': 'drain_den', 'len_units': 'len_units', 'area': 'area', 'AREA_1': 'AREA_1', });
lyr__3.set('fieldAliases', {'NAME': 'NAME', 'FROM': 'FROM', });
lyr__4.set('fieldAliases', {'RIVER_NAME': 'RIVER_NAME', 'RIVER_TYPE': 'RIVER_TYPE', 'RIVER_CODE': 'RIVER_CODE', 'RIVER_FROM': 'RIVER_FROM', });
lyr_AR6_____ssp126_ACCESSCM2_2018_5.set('fieldAliases', {'LON': 'LON', 'LAT': 'LAT', });
lyr_utf8_6.set('fieldAliases', {'name': 'name', 'x': 'x', 'y': 'y', });
lyr_COUNTY_MOI_1090820_1.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', });
lyr_xiao2SHPnew_2.set('fieldImages', {'name': 'TextEdit', 'long_len': 'TextEdit', 'long_slo': 'TextEdit', 'cent_len': 'TextEdit', 'cent_slo': 'TextEdit', '10_85_len': 'TextEdit', '10_85_slo': 'TextEdit', 'basin_slo': 'TextEdit', 'basin_rel': 'TextEdit', 'elong_ra': 'TextEdit', 'relief_ra': 'TextEdit', 'drain_den': 'TextEdit', 'len_units': 'TextEdit', 'area': 'TextEdit', 'AREA_1': 'TextEdit', });
lyr__3.set('fieldImages', {'NAME': 'TextEdit', 'FROM': 'TextEdit', });
lyr__4.set('fieldImages', {'RIVER_NAME': 'TextEdit', 'RIVER_TYPE': 'TextEdit', 'RIVER_CODE': 'TextEdit', 'RIVER_FROM': 'TextEdit', });
lyr_AR6_____ssp126_ACCESSCM2_2018_5.set('fieldImages', {'LON': '', 'LAT': '', });
lyr_utf8_6.set('fieldImages', {'name': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_COUNTY_MOI_1090820_1.set('fieldLabels', {'COUNTYID': 'inline label - always visible', 'COUNTYCODE': 'no label', 'COUNTYNAME': 'inline label - always visible', 'COUNTYENG': 'no label', });
lyr_xiao2SHPnew_2.set('fieldLabels', {'name': 'no label', 'long_len': 'no label', 'long_slo': 'no label', 'cent_len': 'no label', 'cent_slo': 'no label', '10_85_len': 'no label', '10_85_slo': 'no label', 'basin_slo': 'no label', 'basin_rel': 'no label', 'elong_ra': 'no label', 'relief_ra': 'no label', 'drain_den': 'no label', 'len_units': 'no label', 'area': 'no label', 'AREA_1': 'no label', });
lyr__3.set('fieldLabels', {'NAME': 'no label', 'FROM': 'no label', });
lyr__4.set('fieldLabels', {'RIVER_NAME': 'no label', 'RIVER_TYPE': 'no label', 'RIVER_CODE': 'no label', 'RIVER_FROM': 'no label', });
lyr_AR6_____ssp126_ACCESSCM2_2018_5.set('fieldLabels', {'LON': 'no label', 'LAT': 'no label', });
lyr_utf8_6.set('fieldLabels', {'name': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_utf8_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});