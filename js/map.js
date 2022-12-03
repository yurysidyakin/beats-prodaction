
ymaps.ready(init);

var placemarks = [
  {
    latitude: 59.939,
    langitude: 30.3145,
    hintContent: "<div class = 'map__hint'>Адрес заведения</div>",
    balloonContent: [
      '<div class = "map__balloon">Адрес заведения</div>'   
    ]
  },
  {
    latitude: 59.940,
    langitude: 30.32,
    hintContent: "<div class = 'map__hint'>Адрес заведения</div>",
    balloonContent: [
      '<div class = "map__balloon">Адрес заведения</div>' 
    ]
  },
  {
    latitude: 59.941,
    langitude: 30.33,
    hintContent: "<div class = 'map__hint'>Адрес заведения</div>",
    balloonContent: [
      '<div class = "map__balloon">Адрес заведения</div>'  
    ]
  }
],
  geoObjects = [];

function init(){
    var map = new ymaps.Map("map", {

        center: [59.94, 30.32],
        zoom: 15,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i<placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].langitude], 
      {
        hintContent: placemarks[i].hintContent,
        balloonContent: placemarks[i].balloonContent.join()
      },
      { 
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/marker.svg',
        iconImageSize: [44, 54],
        iconImageOffset: [-22, -54]
      });
      
    }

    var clusterer = new ymaps.Clusterer({
      clusterIcons: [
        {
          href:'img/svg/marker.svg',
          size: [50, 50],
          offset: [-25, -25]
        }
      ],
      clusterIconContentLayout: null

    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}
