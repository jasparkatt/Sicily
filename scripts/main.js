var geojsonMarkerOptions = {
    radius: 4,
    fillColor: "#ffd900",
    color: "#000",
    weight: 1,
    opacity: .7,
    fillOpacity: .6
};

function onEachFeature(e, a) {
    e.properties && e.properties.Species && a.bindPopup(e.properties.Species)
}
L.mapbox.accessToken = "pk.eyJ1IjoiYnVkc3V0dHJlZSIsImEiOiJjanh6Y3R1dWYwMW82M2Nya3BiajFjYXRsIn0.KfnC6zslYrBhd4L0flo-WA";
var classLegend = '<p style ="font-weight: bold;">Trout Fishing Wisconsin Key</p><i style="background: #0130b2; opacity: 0.8"></i><p>Class I</p><i style="background: #b16b02; opacity: 0.8"></i><p>Class II</p><i style="background: #e3ae5f; opacity: 0.8"></i><p>Class III</p><i style="background: #f78102; opacity: 0.8"></i><p>Spot X</p>',
    layers = {
        ESRI: {
            layer: L.tileLayer("https://server.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer/tile/{z}/{y}/{x}")
        },
        counties: {
            layer: L.geoJson.ajax("https://raw.githubusercontent.com/jasparkatt/Storymaps/master/data/SpotXX.geojson", {
                pointToLayer: function (e, a) {
                    return L.circleMarker(a, geojsonMarkerOptions).bindTooltip(e.properties.Stream, {
                        className: "label_tooltip"
                    })
                }
            })
        },
        rockies: {
            layer: L.geoJson.ajax("https://raw.githubusercontent.com/jasparkatt/Storymaps/master/data/west.geojson", {
                pointToLayer: function (e, a) {
                    return L.circleMarker(a, geojsonMarkerOptions).bindTooltip(e.properties.Stream, {
                        className: "label_tooltip"
                    })
                }
            })
        },
        hillshade: {
            layer: L.mapbox.styleLayer("mapbox://styles/budsuttree/cjxxen8yq5twc1cqaapjf1my9")
        },
        labels: {
            layer: L.mapbox.styleLayer("mapbox://styles/budsuttree/cjxzb1lq71k3y1cob7ha24xw1")
        },
        satellite: {
            layer: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}")
        },
        class1: {
            layer: L.mapbox.styleLayer("mapbox://styles/budsuttree/cjxw63sdr03gj1cmy6y89ul89"),
            legend: classLegend
        },
        cartodb_light: {
            layer: L.tileLayer("http://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png")
        }
    },
    scenes = {
        overview: {
            lat: 44,
            lng: -123.5,
            zoom: 7,
            name: "Cover Page",
            layers: []
        },          
        sicily: {
            lat: 37.778971,
            lng: 13.713557,
            zoom: 7.5,
            name: "Sicily",
            layers: [layers.hillshade, layers.labels, layers.class1]
        },
        alia: {
            lat: 37.778971,
            lng: 13.713557,
            zoom: 12.5,
            name: "Alia, Sicily",
            layers: [layers.labels, layers.class1, layers.counties]
        },/*
        westfork: {
            lat: 43.5,
            lng: -90.95,
            zoom: 12,
            name: "Avalanche",
            layers: [layers.hillshade, layers.labels, layers.counties, layers.class1]
        },
        west: {
            lat: 43.0241,
            lng: -109.8771,
            zoom: 7,
            name: "West",
            layers: [layers.hillshade, layers.labels, layers.rockies]
        },
        driftless: {
            lat: 43.5,
            lng: -90.95,
            zoom: 11,
            name: "The Driftless Area",
            layers: [layers.hillshade, layers.labels, layers.class1, layers.counties]
        },
        wisconsin: {
            lat: 44.7,
            lng: -90.95,
            zoom: 7.5,
            name: "Wisconsin State",
            layers: [layers.labels, layers.groups]
        }, */
        end: {
            lat: 44,
            lng: -123.5,
            zoom: 6.5,
            name: "The End"
        }
    };