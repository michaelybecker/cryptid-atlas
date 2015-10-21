function initMap(){function e(e,l,i){google.maps.event.addListener(e,"click",function(){t&&t.close(),t=i,i.setContent(l),i.open(map,e),$("#cryptlink").on("click",function(){$.ajax({url:"http://cryptidz.wikia.com/api/v1/Search/List?query=mothman&limit=25&minArticleQuality=10&batch=1%2C14?callback=?",type:"GET",jsonp:"callback",dataType:"jsonp",crossDomain:!0,headers:{Accept:"jsonp; charset=utf-8","Content-Type":"application/jsonp; charset=utf-8","Access-Control-Allow-Origin":"Content-Type, Accept, X-Requested-With, Session"},error:function(e,t,l){console.log("error",e,t,l)},success:function(e){console.log("success "+e)}})}),console.log(beasts[e.label-1].name)})}map=new google.maps.Map(document.getElementById("map"),{center:{lat:10,lng:-30},zoom:2,styles:[{featureType:"all",elementType:"all",stylers:[{color:"#d4b78f"},{visibility:"on"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#0d0000"},{visibility:"on"},{weight:1}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#98290e"},{visibility:"on"}]},{featureType:"administrative",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"labels",stylers:[{visibility:"off"},{hue:"#ff0000"}]},{featureType:"administrative.country",elementType:"labels.text",stylers:[{visibility:"on"},{saturation:"-40"},{hue:"#ff0000"},{lightness:"-15"},{weight:"0.01"}]},{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#98290e"},{visibility:"on"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#d4b78f"},{visibility:"on"}]},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"all",stylers:[{color:"#c4b17e"},{visibility:"on"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#0d0000"},{visibility:"on"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#d9be94"},{visibility:"on"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#0d0000"},{visibility:"off"},{weight:2}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#a8ac91"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#98290e"},{visibility:"on"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]}]});for(var t=!1,l=0;l<beasts.length;l++){beasts[l].markerRef=l+1;var i=new google.maps.Marker({map:map,draggable:!1,label:(l+1).toString(),position:new google.maps.LatLng(beasts[l].lat,beasts[l]["long"])});markers.push(i);var a="<p>"+beasts[l].name+"<br>"+beasts[l].verbalLoc+'</p><a href="#" id="cryptlink">search the Cryptid Wiki for '+beasts[l].name+'</a><br><br><iframe width="360" height="200" src="'+beasts[l].vidLink+'"frameborder="0"/></iframe>',r=new google.maps.InfoWindow;e(i,a,r)}}var markers=[],beasts=[{name:"Ogopogo",verbalLoc:"Okanagan Lake, BC",lat:49.83385,"long":-119.52361,vidLink:"https://www.youtube.com/embed/7w7Kkatcnu0",markerRef:null},{name:"Mothman",verbalLoc:"Point Pleasant, WV, USA",lat:38.844525,"long":-82.137089,vidLink:"https://www.youtube.com/embed/pXoaWMD5A-M",markerRef:null},{name:"Momo",verbalLoc:"Dundee, MI, USA",lat:41.957268,"long":-83.65966,vidLink:"https://www.youtube.com/embed/ZxYfW4iufQ4",markerRef:null},{name:"Cottingley Fairies",verbalLoc:"Cottingley, UK",lat:53.830186,"long":-1.820804,vidLink:"https://www.youtube.com/embed/CN3DpHDKFMg",markerRef:null},{name:"Jersey Devil",verbalLoc:"Pine Barrens of southern NJ, USA",lat:40.058324,"long":-74.405661,vidLink:"https://www.youtube.com/embed/Q5x_3nCkMBw",markerRef:null},{name:"Crichton Leperchaun",verbalLoc:"Mobile, AL, USA",lat:30.706301,"long":-88.106112,vidLink:"https://www.youtube.com/embed/nda_OSWeyn8",markerRef:null}],ViewModel=function(){var e=this;e.beastList=ko.observableArray(beasts),e.query=ko.observable(""),e.search=ko.computed(function(){return ko.utils.arrayFilter(e.beastList(),function(t){return t.name.toLowerCase().indexOf(e.query().toLowerCase())>=0})}),e.openInfoWindow=function(e){google.maps.event.trigger(markers[e.markerRef-1],"click")}};ko.applyBindings(new ViewModel);