

function initialize() {
      	   
	
    var secheltLoc = new google.maps.LatLng(49.47216, -123.76307);
		
		var popupText =  document.getElementById("google-popup-text").innerHTML;	
		
		var styles = [
		    {
		      stylers: [
		        { "hue": "#0044ff" }, { "saturation": -100 }, { "lightness": 10 }
		      ]
		    }
		  ];

		var myMapOptions = {
			/* zoom: 15
			,center: secheltLoc
			,mapTypeId: google.maps.MapTypeId.ROADMAP, */
			
			center: secheltLoc,
      zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
      //mapTypeControl: false,
      //draggable: false,
      //scaleControl: false,*/
      scrollwheel: false,
      //navigationControl: false,
      //streetViewControl: false,		
			styles: styles
		};
		var theMap = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);


		var marker = new google.maps.Marker({
			map: theMap,
			draggable: true,
			position: new google.maps.LatLng(49.47216, -123.76307),
			visible: true,
			icon: '/wp-content/themes/children_theme/images/map_marker.png'
		});

		var boxText = document.createElement("div");
		boxText.style.cssText = "font-family: 'halisgr book'; font-size: 18px; line-height: 1.8em; background: #1f1f1f; margin-top: 10px; padding: 20px 30px;overflow:hidden; color:#FFF;";
		boxText.innerHTML = popupText;

		var myOptions = {
			 content: boxText
			,disableAutoPan: false
			,maxWidth: 0
			,pixelOffset: new google.maps.Size(-261, 0) 
			,zIndex: null			
			,boxStyle: { 
			  background: "url('/wp-content/themes/children_theme/images/map_arrow.png') no-repeat 50% 5px"
			  ,opacity: 1 
			   
			 }
			,closeBoxMargin: "3px"
			//,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
			,closeBoxURL: ""
			,infoBoxClearance: new google.maps.Size(1, 1)
			,isHidden: false
			//,pane: "floatPane"
			,enableEventPropagation: false
		
			
		};

		google.maps.event.addListener(marker, "click", function (e) {
			ib.open(theMap, this);
		});

		var ib = new InfoBox(myOptions);
		ib.open(theMap, marker);	

}

jQuery(document).ready(function(){
   initialize();	
	
});
jQuery(window).load(function(){ 
   jQuery('.gm-style > div > div').addClass('first'); 
});

	