function goto_next1()
{
  target='mainframe';
  form1.action = 'search/city.htm';
  form1.submit();
  return false;
}

function mm_calljs(jsstr) { //v2.0
  return eval(jsstr)
}

function mm_reloadpage(init) {  //reloads the window if nav4 resized
  if (init==true) with (navigator) {if ((appName=="netscape")&&(parseint(appversion)==4)) {
    document.mm_pgw=innerwidth; document.mm_pgh=innerheight; onresize=mm_reloadpage; }}
  else if (innerwidth!=document.mm_pgw || innerheight!=document.mm_pgh) location.reload();
}
mm_reloadpage(true);

    jing=[];
    wei=[];
    fplace=[];
    function deleteoption(){
        indx=document.getElementById("selectlist").options.selectedIndex;
        if(getCookie(document.getElementById("selectlist").options[document.getElementById("selectlist").options.selectedIndex].text)==null ){
          document.getElementById("selectlist").options.remove(indx);
          jing.splice(indx, 1);
          wei.splice(indx, 1);
          fplace.splice(indx, 1);
        }
        else{
          delCookie(document.getElementById("selectlist").options[document.getElementById("selectlist").options.selectedIndex].text);
          document.getElementById("selectlist").options.remove(indx);
          jing.splice(indx, 1);
          wei.splice(indx, 1);
          fplace.splice(indx, 1);
        }
    }
    function list_cookies()
    {
      var test_cookies = showAllCookie();
      if(test_cookies=='') return;
      test_cookies = test_cookies.split(';');
      for (var i=0;i<test_cookies.length;i++){
        document.getElementById('selectlist').innerHTML+=("<option value='"+test_cookies[i].substring(0,test_cookies[i].indexOf('='))+"'>"+test_cookies[i].substring(0,test_cookies[i].indexOf('='))); //>"+test_cookies[i].substring(0,test_cookies[i].indexOf('=')));  
        jing.push(test_cookies[i].substring(test_cookies[i].indexOf('=')+1, test_cookies[i].indexOf(',')));
        wei.push(test_cookies[i].substring(test_cookies[i].indexOf(',')+1));
        fplace.push(test_cookies[i].substring(0,test_cookies[i].indexOf('=') ));
      }
    }
    function funplan(){
      var i;
      for(i=0; i<jing.length; i++){
        document.cookie=(escape(fplace[i])+"="+jing[i]+","+wei[i]);
      }
      location.assign("routeplan.html");
    }
    function addroute(){
        var flightPlanCoordinates = [
                               new google.maps.LatLng(22.99734055314386, 120.21136164665222),
                               new google.maps.LatLng(22.998061509455827, 120.20709156990051),
                               new google.maps.LatLng(23.004046285795752, 120.21053552627563),
                               new google.maps.LatLng(23.004540067371902, 120.21073937416077),
                               new google.maps.LatLng(23.005606629410384, 120.20565390586853),
                               new google.maps.LatLng(23.00495484249965, 120.20527839660645),
                               new google.maps.LatLng(23.003848772659392, 120.20443081855774),
                               new google.maps.LatLng(23.005083225018918, 120.20330429077148),
                               new google.maps.LatLng(23.002683439271003, 120.19657731056213),
                               new google.maps.LatLng(22.99615541111367, 120.19389510154724),
                               new google.maps.LatLng(22.991503628092868, 120.1927900314331),
                               new google.maps.LatLng(22.993360409960367, 120.18339157104492),
                               new google.maps.LatLng(22.98956780704664, 120.18251180648804),
                               new google.maps.LatLng(22.989014710222328, 120.1869535446167),
                               new google.maps.LatLng(22.988580132556997, 120.18990397453308),
                               new google.maps.LatLng(22.987592450844314, 120.19487142562866),
                               new google.maps.LatLng(22.98150817222059, 120.19506454467773),
                               new google.maps.LatLng(22.98125136222544, 120.21199464797974),
                               new google.maps.LatLng(22.982555161764243, 120.21689772605896),
                               new google.maps.LatLng(22.98387870297132, 120.21781504154205),
                               new google.maps.LatLng(22.989291258917635, 120.21978378295898),
                               new google.maps.LatLng(22.99132584976624, 120.22150039672852),
                               new google.maps.LatLng(23.004342554958242, 120.22261619567871),
                               new google.maps.LatLng(23.005379491904932, 120.22236943244934),
                               new google.maps.LatLng(23.00768047590891, 120.22087812423706),
                               new google.maps.LatLng(23.007236082913884, 120.21990180015564),
                               new google.maps.LatLng(23.004964718082395, 120.21389365196228),
                               new google.maps.LatLng(23.003967280575893, 120.2135717868805),
                               new google.maps.LatLng(22.9976170847872, 120.21225214004517),
                               new google.maps.LatLng(22.99769609372411, 120.21162986755371),
                               new google.maps.LatLng(22.99764671314397, 120.21140456199646),
                               new google.maps.LatLng(22.99734055314386, 120.21136164665222)
                             ];
        var flightPlan3Co = [
                            new google.maps.LatLng(23.048948326119643, 120.1755702495575),
                            new google.maps.LatLng(23.047195970690577, 120.1840353012085),
                            new google.maps.LatLng(23.042970479034796, 120.18699645996094),
                            new google.maps.LatLng(23.036000102671093, 120.18889009952545),
                            new google.maps.LatLng(23.018997190874753, 120.19291877746582),  
                            new google.maps.LatLng(23.014612817110386, 120.19381999969482),
                            new google.maps.LatLng(23.009635787699278, 120.19386291503906),
                            new google.maps.LatLng(23.005369616352542, 120.1935625076294),
                            new google.maps.LatLng(23.003552502412866, 120.19381999969482),
                            new google.maps.LatLng(23.0015724128998, 120.19583702087402),
                            new google.maps.LatLng(22.999720681957594, 120.20124435424805),
                            new google.maps.LatLng(22.99754795192947, 120.20012855529785),
                            new google.maps.LatLng(22.994822113893896, 120.20849704742432),
                            new google.maps.LatLng(22.99683686905228, 120.21145820617676),
                            new google.maps.LatLng(22.99746894290586, 120.21197319030762),
                            new google.maps.LatLng(22.99683686905228, 120.2120590209961),
                            new google.maps.LatLng(22.993355471744568, 120.21167814731598),
                            new google.maps.LatLng(22.98897520321963, 120.21145820617676),
                            new google.maps.LatLng(22.987562820281347, 120.21580338478088),
                            new google.maps.LatLng(22.985231862291595, 120.22329479455948),
                            new google.maps.LatLng(22.984708378906717, 120.22446155548096),
                            new google.maps.LatLng(22.983246565505045, 120.22643566131592),
                            new google.maps.LatLng(22.979927795278424, 120.22347450256348),
                            new google.maps.LatLng(22.978070828750337, 120.22162914276123),
                            new google.maps.LatLng(22.977616460713737, 120.2200198173523),
                            new google.maps.LatLng(22.974277796545557, 120.22313117980957),
                            new google.maps.LatLng(22.974909975972878, 120.22401094436646),
                            new google.maps.LatLng(22.97585823956909, 120.22482633590698),
                            new google.maps.LatLng(22.97402097280853, 120.22744417190552),
                            new google.maps.LatLng(22.971037830568942, 120.22748708724976),
                            new google.maps.LatLng(22.96559490803778, 120.2275139093399),
                            new google.maps.LatLng(22.961692859577365, 120.227530002594),
                            new google.maps.LatLng(22.961692859577365, 120.22976160049438),
                            new google.maps.LatLng(22.961850919424656, 120.23066282272339),
                            new google.maps.LatLng(22.961732374556494, 120.23516893386841),
                            new google.maps.LatLng(22.961890434357603, 120.23641347885132),
                            new google.maps.LatLng(22.966592628933576, 120.23267984390259),
                            new google.maps.LatLng(22.965165194294475, 120.22978842258453),
                            new google.maps.LatLng(22.964933049520152, 120.22941827774048),
                            new google.maps.LatLng(22.964933049520152, 120.22759437561035)
                            ];
        var flightPlan1Co = [
                            new google.maps.LatLng(22.99734055314386, 120.21124362945557),
                            new google.maps.LatLng(22.997110932688134, 120.21127849817276),
                            new google.maps.LatLng(22.99695044509006, 120.21143540754792),
                            new google.maps.LatLng(22.99688378088528, 120.21162986755371),
                            new google.maps.LatLng(22.992590046114422, 120.20511746406555),
                            new google.maps.LatLng(22.991898690202955, 120.20274639129639),
                            new google.maps.LatLng(22.99274806982575, 120.19862651824951),
                            new google.maps.LatLng(22.98972583429467, 120.19757509231567),
                            new google.maps.LatLng(22.979789511416424, 120.19768238067627),
                            new google.maps.LatLng(22.979700614573318, 120.19741415977478),
                            new google.maps.LatLng(22.975275453355234, 120.19103050231934),
                            new google.maps.LatLng(22.972746724741725, 120.19068717956543),
                            new google.maps.LatLng(22.97055874364296, 120.19051551818848),
                            new google.maps.LatLng(22.966691412780023, 120.19009709358215),
                            new google.maps.LatLng(22.961337224245483, 120.18921732902527),
                            new google.maps.LatLng(22.96086304234818, 120.18903493881226),
                            new google.maps.LatLng(22.958946540240685, 120.18713593482971),
                            new google.maps.LatLng(22.950712187425776, 120.18462002277374),
                            new google.maps.LatLng(22.950317004921022, 120.18282294273376),
                            new google.maps.LatLng(22.949363622377298, 120.18014073371887),
                            new google.maps.LatLng(22.949086991988132, 120.1798939704895),
                            new google.maps.LatLng(22.948840000091348, 120.17976522445679),
                            new google.maps.LatLng(22.94824721769964, 120.17967939376831),
                            new google.maps.LatLng(22.94679488986558, 120.17995834350586),
                            new google.maps.LatLng(22.94321834262735, 120.1798939704895),
                            new google.maps.LatLng(22.942329131130574, 120.17946481704712),
                            new google.maps.LatLng(22.9406099723397, 120.1779842376709),
                            new google.maps.LatLng(22.938801867986236, 120.17847776412964),
                            new google.maps.LatLng(22.93282408335508, 120.1804518699646),
                            new google.maps.LatLng(22.933189674454216, 120.18232941627502),
                            new google.maps.LatLng(22.931381471008752, 120.1830267906189),
                            new google.maps.LatLng(22.930156226536972, 120.18405675888062),
                            new google.maps.LatLng(22.928733348079067, 120.18613815307617),
                            new google.maps.LatLng(22.92804166565175, 120.1863956451416),
                            new google.maps.LatLng(22.92693496642145, 120.18630981445312),
                            new google.maps.LatLng(22.92602588528968, 120.18566608428955),
                            new google.maps.LatLng(22.9234962361217, 120.18487215042114),
                            new google.maps.LatLng(22.921500151486043, 120.1845932006836),
                            new google.maps.LatLng(22.92015623635555, 120.18412113189697),
                            new google.maps.LatLng(22.916381344619374, 120.18517255783081),
                            new google.maps.LatLng(22.91535360719315, 120.18568754196167),
                            new google.maps.LatLng(22.905135101605897, 120.18348813056946),
                            new google.maps.LatLng(22.900084859475644, 120.18424987792969),
                            new google.maps.LatLng(22.89905699851576, 120.18452882766724),
                            new google.maps.LatLng(22.897989596198116, 120.18472194671631),
                            new google.maps.LatLng(22.895350704419414, 120.18514037132263),
                            new google.maps.LatLng(22.892825424712075, 120.18627762794495),
                            new google.maps.LatLng(22.89066580380438, 120.18688917160034),
                            new google.maps.LatLng(22.88799711722029, 120.18718957901001),
                            new google.maps.LatLng(22.886158658157, 120.18626689910889),
                            new google.maps.LatLng(22.88707912632506, 120.18555074930191),
                            new google.maps.LatLng(22.88903865253387, 120.18530264496803),
                            new google.maps.LatLng(22.88916838057187, 120.18522083759308)
                            ];
      var flightPath = new google.maps.Polyline({
                               path: flightPlanCoordinates,
                               strokeColor: "#FF0000",
                               strokeOpacity: 1.0,
                               strokeWeight: 4
                             });
      var Path3 = new google.maps.Polyline({
                               path: flightPlan3Co,
                               strokeColor: "#0000FF",
                               strokeOpacity: 1.0,
                               strokeWeight: 4
                             });
      var Path1 = new google.maps.Polyline({
                               path: flightPlan1Co,
                               strokeColor: "#00FF00",
                               strokeOpacity: 1.0,
                               strokeWeight: 4
                             });
                             Path1.setMap(map);
                             Path3.setMap(map);
                             flightPath.setMap(map);
    }
    function initialize() {
      var mapOptions = {
        center: new google.maps.LatLng(23.068191,120.290043),
        zoom: 10
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
    }
    function gogogo(){
      jing.push(jingjing);
      wei.push(weiwei);
      fplace.push(funp);
      document.getElementById("selectlist").innerHTML+=("<option value='"+funp+"'>"+funp);
    }
    function initialize2() {
      var mapOptions = {
        center: new google.maps.LatLng(23.306732, 120.323055),
        zoom: 12
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">新營火車站</h1>'+
    '<div id="bodyContent">'+
    '<p><b>新營火車站</b></p>'+
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">鹽水蜂炮</h1>'+
    '<div id="bodyContent">'+
    '<p><b>鹽水蜂炮</b></p>'+
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">頑皮世界野生動物園</h1>'+
    '<div id="bodyContent">'+
    '<p><b>頑皮世界野生動物園</b></p>'+
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.306732, 120.323055),
    map: map,
    title: '新營火車站'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(23.323823, 120.265778),
    map: map,
    title: '鹽水蜂炮'
});
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(23.281004, 120.209471),
    map: map,
    title: '頑皮世界野生動物園'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="新營火車站";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="鹽水蜂炮";
}); 
google.maps.event.addListener(marker3, 'click', function(event) {
  infowindow3.open(map,marker3);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="頑皮世界野生動物園";
}); 
    }

    function initialize3() {
      var mapOptions = {
        center: new google.maps.LatLng(23.3292451, 120.4639661),
        zoom: 13
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">台影文化城</h1>'+
    '<div id="bodyContent">'+
    '<p><b>台影文化城</b></p>'+
    '<p>位在台南縣白河鎮的台影文化城創立於民國八十年，園區佔地約兩公頃，是提供拍攝影集取景的文化城。園區中主要為台灣光復初期時的傳統建築，在此拍攝的影劇有「愛」、「緣」以及較近期的「台灣阿誠」、「流氓教授」與「嫁妝一牛車」等本土劇。後來台影文化城雖有過一段時間的沒落，但是民國九十五年時林務局買下六溪電影文化城之經營權，與白河鎮每年的蓮花節盛會結合策劃旅遊動線，提升影城的知名度，吸引更多民眾前來遊玩。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">白河水庫風景區</h1>'+
    '<div id="bodyContent">'+
    '<p><b>白河水庫風景區</b></p>'+
    '<p>白河水庫位於白河鎮東側，為白河、東山一帶農田灌溉主要水源，同時水庫也兼具有防洪、給水、觀光功能，自水庫的大門進入，您會看見兩排高聳的大王椰子樹及綠油油的草坪，正等著迎接您的到來，每逢周休假日，總成為遊客烤肉、露營的最佳休憩佇足點。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">好漢坡</h1>'+
    '<div id="bodyContent">'+
    '<p><b>好漢坡</b></p>'+
    '<p>好漢坡在日治時期稱為「男人的坡」，原有兩百九十三階，但在拓寬縣道(南175)時，被從中截斷，僅餘兩百三十四階，這裡原為日軍醫療復建之所，因為階梯十分陡峭，登好漢坡需要有好的腳力，因此現今成為熱門的登山健行步道，登高可遠眺關子嶺風光。'+
    '</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.315547, 120.444585),
    map: map,
    title: '台影文化城'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(23.353571, 120.472984),
    map: map,
    title: '白河水庫風景區'
});
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(23.341028, 120.473328),
    map: map,
    title: '好漢坡'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1); 
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="台影文化城";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="白河水庫風景區";
}); 
google.maps.event.addListener(marker3, 'click', function(event) {
  infowindow3.open(map,marker3);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="好漢坡";
}); 
    }
    function initialize4() {
      var mapOptions = {
        center: new google.maps.LatLng(23.339884, 120.504725),
        zoom: 14
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">關子嶺溫泉</h1>'+
    '<div id="bodyContent">'+
    '<p><b>關子嶺溫泉</b></p>'+
    '<p>關子嶺溫泉位於白河東境，海拔270公尺，因閩南語“高”與“關”發音近似，故得名。關子嶺溫泉與北投、陽明山、四重溪溫泉，並列台灣四大溫泉區，其泉水屬鹼性碳酸泉，濃濁且含有硫磺成分，並具滑膩感，因此也為台灣地區特有的「濁泉」。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">紅葉公園</h1>'+
    '<div id="bodyContent">'+
    '<p><b>紅葉公園</b></p>'+
    '<p>紅葉公園位於台南縣白河鎮關子嶺枕頭山上，關子嶺溫泉區的上方，又稱為「關子嶺公園」，這兒的面積不大，但園內遍植變葉植物，每每到了秋季，滿目紅葉的景致，浪漫的詩情畫意氛圍即會湧上心頭，此外，「關嶺覽勝」巨石及大成殿內的溫泉展示館，更為此處的新興景點。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">水火同源</h1>'+
    '<div id="bodyContent">'+
    '<p><b>水火同源</b></p>'+
    '<p>水火同源於關仔嶺風景區內，又稱「水火洞」，在台頗負盛名，水火同源一景為，崖壁上冒出的天然氣與泉水從壁縫中流出，只要點燃火焰，就形成了水中有火的特殊景觀，日據時代，這裡有尊石佛-水火神君（不動神君）在出火處之上，供居民膜拜，由於此景少有，因此逐而形成知名的旅遊據點。'+
    '</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.339884, 120.504725),
    map: map,
    title: '關子嶺溫泉'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(23.3411737, 120.5063651),
    map: map,
    title: '紅葉公園'
});
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(23.322234, 120.485447),
    map: map,
    title: '水火同源'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="關子嶺溫泉";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="紅葉公園";
}); 
google.maps.event.addListener(marker3, 'click', function(event) {
  infowindow3.open(map,marker3);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="水火同源";
}); 
    }
    function initialize5() {
      var mapOptions = {
        center: new google.maps.LatLng(23.1237711, 120.4600399),
        zoom: 13
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">芒果產業文化資訊館</h1>'+
    '<div id="bodyContent">'+
    '<p><b>芒果產業文化資訊館</b></p>'+
    '<p>台南縣玉井鄉被譽為是「芒果的故鄉」，高溫的氣候栽種出香甜多汁的芒果，為了讓更多人了解芒果的產業文化與自然生態，經過多個單位的積極推動下，約兩百坪的芒果產業文化資訊館於民國八十五年竣工啟用。芒果產業文化資訊館共有四層樓，收集了許多文字、圖片與模型等資訊展示，包括玉井鄉的芒果產業發展、芒果的種類、營養成分、自然生態與食譜等，蘊含多樣性的資訊。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">走馬瀨農場</h1>'+
    '<div id="bodyContent">'+
    '<p><b>走馬瀨農場</b></p>'+
    '<p>以專業種草起家，再轉型升級為觀光休閒農場，並且第一批獲頒合法風景遊樂區標章，連續11年優等及特優考核園區。2004年11月，榮獲農委會委託台灣休閒農業協會評鑑，優級休閒農業標章。走馬瀨農場佔地120公頃，足足有四個台北大安森林公園大，由台南市農會於國民77年開發經營，是全國第一個休閒農業主題遊樂園。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">冰島芒果城</h1>'+
    '<div id="bodyContent">'+
    '<p><b>冰島芒果城</b></p>'+
    '<p>好吃不解釋。'+
    '</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.120266,120.465993),
    map: map,
    title: '芒果產業文化資訊館'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(23.13685,120.429857),
    map: map,
    title: '走馬瀨農場'
});
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(23.1338113,120.4428603),
    map: map,
    title: '冰島芒果城'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="芒果產業文化資訊館";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="走馬瀨農場";
}); 
google.maps.event.addListener(marker3, 'click', function(event) {
  infowindow3.open(map,marker3);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="冰島芒果城";
}); 
    }
    function initialize6() {
      var mapOptions = {
        center: new google.maps.LatLng(23.1800114,120.3248246),
        zoom: 12
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">葫蘆埤自然生態公園</h1>'+
    '<div id="bodyContent">'+
    '<p><b>葫蘆埤自然生態公園</b></p>'+
    '<p>葫蘆埤位於「隆田」與「麻豆」間的「葫蘆埤」建於乾隆35年，主要為灌溉蓄水之用，因為形狀像葫蘆而命名，縣道176線的闢建，則剛好成了葫蘆的腰繫，將它分成了兩半。葫蘆埤平常除了有白鷺鷥群聚居，水雉在此棲息，偶見舟影點綴著菱田，風情萬種，因此，葫蘆埤躍升為新南瀛八景之一「菱香舟影」。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">阿扁總統祖厝</h1>'+
    '<div id="bodyContent">'+
    '<p><b>阿扁總統祖厝</b></p>'+
    '<p>阿扁總統祖厝位於官田鄉西庄村，西庄及東庄是官田鄉菱角生產最多的地方。「官田」原名「官佃」顧名思義，是鄭成功時代，設營屯墾的官屬田地，已有130餘年歷史。每到週末假日，道路兩旁攤販雲集，攤販販賣與陳水扁總統有關的各式紀念品，遊客絡繹不絕。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">麻豆鱷魚王</h1>'+
    '<div id="bodyContent">'+
    '<p><b>麻豆鱷魚王</b></p>'+
    '<p>鱷魚場位於麻豆鎮小埤里91-1號，目前展示的種類達二百種之多，堪稱台灣第一家「稀有動物王國」。園內重達1250台斤的大鱷魚可供遊客坐在尾巴上面拍照外，另有兩棲爬蟲館，世界三大走禽區，突變種動物區，可愛動物區，水生植物區，鳥園。</p>'+
    '<p>鱷魚大王邱鍚河表示：飼養的珍奇的稀有動物，有不少是在台灣難得一見的，種類近二百種，包括雪白玉米蛇、咬尾刺蜥、翠蟒蛇、水龍、花園石龍。巴西角蛇、肥尾守官、非洲牛蛙、四腳鵝、三頭龜、鱷魚、楓葉龜、紅毛猩猩、瑤山鱷蜥、恐龍蜥、鬆獅蜥、超級大鱉、肺魚、水角龍、蜥蜴（可表演催眠秀）豪豬、南美蜥、海帆蜥、毒蠍等，無奇不有的動物世叫人大開眼界。'+
    '</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString4 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">林鳳營蓮花世界</h1>'+
    '<div id="bodyContent">'+
    '<p><b>林鳳營蓮花世界</b></p>'+
    '<p>蓮花世界位於六甲鄉林鳳營109號，由林森津先生負責，他鑽研蓮花，時間達廿餘年，並且不斷開發出新品種，是位無師自通的傳奇人物，地方上都以「蓮花博士」來尊稱他，這廿幾年來，他已經研發出三百多種蓮花。在這裡，可以看到各式各樣的蓮花，有色彩繽紛的香水蓮花、難得一見的黑色睡蓮、僅1公分大小的世界最小蓮花，還有可以載重40公斤的大王蓮等，種類多到令人目不暇給。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString5 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">林家古厝</h1>'+
    '<div id="bodyContent">'+
    '<p><b>林家古厝</b></p>'+
    '<p>古厝位於麻豆鎮興農里和平路20號，麻豆林家曾與板橋林家、霧峰林家並稱為「台灣三林」。麻豆林家古厝，建於清嘉慶年間，其開基祖是林文敏，清嘉慶四年由褊建泉州府安溪縣渡海來臺，林家大院在道光年間興建，為三落兩院式的大宅，是林家祖厝，稱為「舊四房」；其中最著名的是位於和平路20號的「新四房」，建於光緒元年（1875年），地方以「大厝九包五，三落百二門」形容，字裡行間可看出當時的風光與氣派。林家各房光復後在麻豆建有七座華宅，如今三房與八房古厝依舊保持完整，為「七包三」兩進四合院，精緻古樸。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString6 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">沈光文紀念廳</h1>'+
    '<div id="bodyContent">'+
    '<p><b>沈光文紀念廳</b></p>'+
    '<p>沈光文，字文開，父祖輩曾是明朝宰相，自小飽讀詩書，明朝福王時，與史可法一起抗清，後隨魯王退守浙江，魯王兵敗，他隱居普陀山為僧，明鄭時期，鄭成功禮聘沈光文。鄭經嗣位，沈光文作賦諷刺政權，惹出殺身之危，遂逃往大崗山、羅漢門等地，並在羅漢門(今內門)出家為僧，之後，流離至目加溜灣社（今善化一帶），在此宣揚儒家思想，教導當地平埔族讀書識字，並為他們治病，乃至終老，葬於善化。1982年中秋節，善化居民為了紀念沈光文，造像入祀慶安宮後殿，與5位文昌君一起供奉，並為其建造一座紀念碑。慶安宮東側2樓新成立規劃的沈光文紀念廳，由文建會、原台南縣政府、廟方共同補助經費修建，慶安宮管委會特邀書法名家王九儒、謝永田等人書寫沈公詩文展出。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
});
var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
});
var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
});
var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.19799,120.297533),
    map: map,
    title: '葫蘆埤自然生態公園'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(23.187742,120.292289),
    map: map,
    title: '阿扁總統祖厝'
});
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(23.189502,120.234997),
    map: map,
    title: '麻豆鱷魚王'
});
var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(23.243586,120.319299),
    map: map,
    title: '林鳳營蓮花世界'
});
var marker5 = new google.maps.Marker({
    position: new google.maps.LatLng(23.181079,120.245455),
    map: map,
    title: '林家古厝'
});
var marker6 = new google.maps.Marker({
    position: new google.maps.LatLng(23.136956,120.307127),
    map: map,
    title: '沈光文紀念廳'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="葫蘆埤自然生態公園";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="阿扁總統祖厝";
}); 
google.maps.event.addListener(marker3, 'click', function(event) {
  infowindow3.open(map,marker3);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="麻豆鱷魚王";
}); 
google.maps.event.addListener(marker4, 'click', function(event) {
  infowindow4.open(map,marker4);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="林鳳營蓮花世界";
}); 
google.maps.event.addListener(marker5, 'click', function(event) {
  infowindow5.open(map,marker5);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="林家古厝";
}); 
google.maps.event.addListener(marker6, 'click', function(event) {
  infowindow6.open(map,marker6);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="沈光文紀念廳";
}); 
    }
    function initialize7() {
      var mapOptions = {
        center: new google.maps.LatLng(23.208692,120.369341),
        zoom: 12
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">烏山頭水庫風景區</h1>'+
    '<div id="bodyContent">'+
    '<p><b>烏山頭水庫風景區</b></p>'+
    '<p>水庫位於台南縣官田鄉嘉南村68之2號，由高空鳥瞰發現蜿蜒曲折的湖岸，彷彿就像一株碧綠的珊瑚礁，故命名為「珊瑚潭」。民國9年（1920年）由日本八田與一所設計監工，費了十年的光陰所建造完成，成為當時東南亞最大的水庫，對於供應嘉南地區農田之灌溉及供水有很大的貢獻。而八田與一更配農民尊稱為「烏山頭水庫之父」，園區內立有他的紀念銅像，及與其妻共葬的日式墓園。</p>'+
    '<p>因水庫上方設有蓄水石壩，是世界目前僅存的半水力沖淤式土石壩結構，被堪稱國寶，在夕陽映照下形上萬水珠與夕陽共舞的景觀，更成為名聞遐邇的台南八景之一珊瑚飛泉。規劃有以親水設施為主體的「親水公園」、「三角埤公園」、「兒童遊樂設施」、「遊客服務中心」、「八田技師紀念館」。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">尖山埤水庫</h1>'+
    '<div id="bodyContent">'+
    '<p><b>尖山埤水庫</b></p>'+
    '<p>尖山埤水庫建於民國二十七年，原本是一座台糖公司的專用水庫，因周圍風景秀麗，開放後吸引許多民眾前來休閒踏青，因而規劃為江南渡假村，並由台糖公司經營。江南渡假村總共約一百公頃，設置有泡湯、游泳ＳＰＡ、踩船、漆彈與遊湖生態導覽等。除露營區之外，有醉月小樓、江南會館與原木屋三種住宿型態供遊客選擇，讓遊客能夠看見尖山埤的晨曦之美。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.208692,120.369341),
    map: map,
    title: '烏山頭水庫風景區'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(23.2578872,120.3951954),
    map: map,
    title: '尖山埤水庫'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="烏山頭水庫風景區";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="尖山埤水庫";
}); 
    }
    function initialize8() {
      var mapOptions = {
        center: new google.maps.LatLng(23.026494,120.33694),
        zoom: 14
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">虎頭埤風景區</h1>'+
    '<div id="bodyContent">'+
    '<p><b>虎頭埤風景區</b></p>'+
    '<p>虎頭埤風景區位於台南縣新化鎮中興路42巷36號，因山勢像虎頭而得名，虎頭埤湖面廣闊，而休憩區則設有游泳池、烤肉區、釣魚區、露營區、餐飲中心、半島休閒區、吊橋虎月亭、平台觀湖涼亭、青年活動中心，來到這裡的遊客，也可以租借手划船及遊湖快艇，迎覽湖景。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">新化老街</h1>'+
    '<div id="bodyContent">'+
    '<p><b>新化老街</b></p>'+
    '<p>老街位於今日的台南縣新化鎮中山路，是很早以前即形成商家行旅的交易、補給重鎮，中正路、中山路一帶街採歐洲文藝復興時期的巴洛克式建築，花紋與雕飾相當講究，具有古典、堅實、壯麗，帶來了新的建築風貌。</p>'+
    '<p>目前這裡僅存中正路48戶，齡約80年之建築群。經鎮民多數表決，學者、文化工作者的努力爭取而保留下來，富藝術價值及歷史意義的建築，並重新整理美化老街的外觀，讓老街風華再現。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">草山月世界</h1>'+
    '<div id="bodyContent">'+
    '<p><b>草山月世界</b></p>'+
    '<p>草山月世界是位在台南縣左鎮鄉的青灰岩地形，由砂岩與頁岩所組成，與高雄的田寮月世界及燕巢月世界的泥岩惡地為一體，是台灣僅有的三處月世界地形，屬於高鹼性的白堊土地形。月世界因地質鬆軟且鹽分含量高，不利於草木生長，沿途只有耐旱的刺竹，在不同的季節裡，刺竹呈現出紅黃綠相異的樣貌，爬上308公尺的至高點還可欣賞晨曦與夕陽，居高臨下的寬闊視野令人心曠神怡。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.026494,120.33694),
    map: map,
    title: '虎頭埤風景區'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(23.035458,120.308121),
    map: map,
    title: '新化老街'
});
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(23.0248796,120.3482441),
    map: map,
    title: '草山月世界'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="虎頭埤風景區";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="新化老街";
}); 
google.maps.event.addListener(marker3, 'click', function(event) {
  infowindow3.open(map,marker3);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="草山月世界";
}); 
    }
    function initialize9() {
      var mapOptions = {
        center: new google.maps.LatLng(23.038338,120.253524),
        zoom: 14
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">永康火車站</h1>'+
    '<div id="bodyContent">'+
    '<p><b>永康火車站</b></p>'+
    '<p>永康可以搭車去保安，拿永保安康的票ㄏㄏ。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.038338,120.253524),
    map: map,
    title: '永康火車站'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="永康火車站";
});
    }
    function initialize10() {
      var mapOptions = {
        center: new google.maps.LatLng(23.1399936,120.114298),
        zoom: 12
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">七股鹽山</h1>'+
    '<div id="bodyContent">'+
    '<p><b>七股鹽山</b></p>'+
    '<p>鹽山位於中七股近海岸的中寮，佔地2000多公頃，每年10月翌年5月是產鹽期，是台灣工業用鹽的最大產地。民國70年（西元1982年），台鹽為因應晒鹽產業逐漸面臨人力老化和工業成本不斷高漲的困境，直至民國77年（西元1988年）開始全面採用機械器具來收成，綿延西南海岸的鹽場都已陸續收攤，只剩此處七股鹽場引入機械產製的鹽田，國內用鹽來源也因高成本而逐漸用進口鹽，現今鹽山分為南、北兩堆，南堆為產地鹽，北堆則是進口鹽，作為工業用鹽，以「鹽田晒玉」為南瀛新八景之一。台鹽見觀光客日益增多，乃於工場旁設立簡易展示部，販售新產品，如沐浴乳等清潔用品。台鹽公司譽七股鹽山為「南台長白山」。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">七股潟湖</h1>'+
    '<div id="bodyContent">'+
    '<p><b>七股潟湖</b></p>'+
    '<p>七股潟湖區域面積達1,600公頃，介於七股溪與將軍溪之間，當地人稱為「內海仔」，由於曾文溪的四次改道而造成今日的潟湖景觀，這是目前台灣最大的一個潟湖。這兒有著豐富旺盛的動植物生態，如魚、貝、蚵、蟹、蝦、紅樹林、白鷺鷥，以及國際級的貴客－黑面琵鷺，總計有125種魚類、73種貝類，以及30種以上的貝類。附近的龍山村大街上到處可以看到海產和鮮蚵的料理，喜歡海鮮的人不能錯過。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">黑面琵鷺保護區</h1>'+
    '<div id="bodyContent">'+
    '<p><b>黑面琵鷺保護區</b></p>'+
    '<p>賞鳥區位於曾文溪出海口向北的海埔地，黑面琵鷺元棲息地在西伯利亞、中國東北和朝鮮半島，每年10月續飛抵曾文溪口過冬，一直到隔年的3、4月才離開。長期以來七股漁民即以「黑面仔」、「黑面鳥仔」或「撓杯」（台音：ㄌㄚˇㄅㄨㄟ）稱之。</p>'+
    '<p>黑面琵鷺站立的平均高度約在80公分間，嘴長，先端扁平如湯匙狀，顏臉和雙腳皆黑。夏羽全身多白，胸部及後頭飾羽則呈黃色；冬天時全身皆白，飾羽會變短，故有「黑面舞者」之雅稱。目前全世界總數量不足800隻，民國90年在曾文溪口已超過600隻來台度冬，佔了世界的三分之二，使曾文溪口有「曾溪飛鷺」的美名。</p>'+
    '<p>民國87年(1998)此地成立「黑面琵鷺保育學會」，積極研究和保護這類瀕臨絕種的國際名鳥。'+
    '</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString4 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">溪南春休閒渡假漁村</h1>'+
    '<div id="bodyContent">'+
    '<p><b>溪南春休閒渡假漁村</b></p>'+
    '<p>溪南春休閒渡假漁村位於七股鄉溪南村42-1號，以漁村特色結合生態旅遊，不僅規劃有海水健康步道、海水健康步道、混水摸魚區、釣魚區、烤肉區、兒童遊戲區、牛車巡禮區、卡拉ok、交誼廳、民宿區等，另外還養殖有虱目魚、吳郭魚及蚵等漁業，讓遊客對漁村生活有更多的體驗。園內附設的文物館收藏許多民俗文物與藝品。溪南春結合了吳郭魚池、虱目魚池及蚵寮，除了漁村生活體驗之外，還提供住宿和餐飲，其中「桶間寮」的住宿便是讓遊客體驗過去漁民的真實生活，這原先是早期漁民為了方便夜間照料魚塭時，所棲身而在水面上搭建的茅廬。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString5 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">南鯤鯓代天府</h1>'+
    '<div id="bodyContent">'+
    '<p><b>南鯤鯓代天府</b></p>'+
    '<p>南鯤鯓的代天府囉。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString6 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">佳里金唐殿</h1>'+
    '<div id="bodyContent">'+
    '<p><b>佳里金唐殿</b></p>'+
    '<p>沈光文，字文開，父祖輩曾是明朝宰相，自小飽讀詩書，明朝福王時，與史可法一起抗清，後隨魯王退守浙江，魯王兵敗，他隱居普陀山為僧，明鄭時期，鄭成功禮聘沈光文。鄭經嗣位，沈光文作賦諷刺政權，惹出殺身之危，遂逃往大崗山、羅漢門等地，並在羅漢門(今內門)出家為僧，之後，流離至目加溜灣社（今善化一帶），在此宣揚儒家思想，教導當地平埔族讀書識字，並為他們治病，乃至終老，葬於善化。1982年中秋節，善化居民為了紀念沈光文，造像入祀慶安宮後殿，與5位文昌君一起供奉，並為其建造一座紀念碑。慶安宮東側2樓新成立規劃的沈光文紀念廳，由文建會、原台南縣政府、廟方共同補助經費修建，慶安宮管委會特邀書法名家王九儒、謝永田等人書寫沈公詩文展出。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
});
var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
});
var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
});
var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.154163,120.100298),
    map: map,
    title: '七股鹽山'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(23.124526,120.078433),
    map: map,
    title: '七股潟湖'
});
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(23.119574,120.104644),
    map: map,
    title: '黑面琵鷺保護區'
});
var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(23.126779,120.116685),
    map: map,
    title: '溪南春休閒渡假漁村'
});
var marker5 = new google.maps.Marker({
    position: new google.maps.LatLng(23.286087,120.143135),
    map: map,
    title: '南鯤鯓代天府'
});
var marker6 = new google.maps.Marker({
    position: new google.maps.LatLng(23.1592534,120.150495),
    map: map,
    title: '佳里金唐殿'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="七股鹽山";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="七股潟湖";
}); 
google.maps.event.addListener(marker3, 'click', function(event) {
  infowindow3.open(map,marker3);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="黑面琵鷺保護區";
}); 
google.maps.event.addListener(marker4, 'click', function(event) {
  infowindow4.open(map,marker4);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="溪南春休閒渡假漁村";
}); 
google.maps.event.addListener(marker5, 'click', function(event) {
  infowindow5.open(map,marker5);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="南鯤鯓代天府";
}); 
google.maps.event.addListener(marker6, 'click', function(event) {
  infowindow6.open(map,marker6);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="佳里金唐殿";
}); 
    }
    function initialize11() {
      var mapOptions = {
        center: new google.maps.LatLng(22.986638,120.193044),
        zoom: 13
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">赤崁樓</h1>'+
    '<div id="bodyContent">'+
    '<p><b>赤崁樓</b></p>'+
    '<p>赤崁樓位於今日的台南市民族路二段212號，原稱普羅民遮城，因漢人稱荷蘭人為紅毛，也叫做「番仔樓」或「紅毛樓」。赤崁樓由山南面的庭園、北面的閣樓及西面蓬壺書院組成，其前有九座清代石龜馱碑，傳說石龜為龍生九子之一，因身好負重而變成龜狀，由於其貌與龜無異，稱為〔龜碑〕。</p>'+
    '<p>原為荷蘭人的行政中心，後改為承天府治，日治時期為陸軍衛戍醫院。光復後，將原有的木製結構，改為鋼筋混泥土，並將主要入口由西改為南向，成今日赤崁樓的模樣。民國71年被列為國家的一級古蹟。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">台南火車站</h1>'+
    '<div id="bodyContent">'+
    '<p><b>台南火車站</b></p>'+
    '<p>國定古蹟，1998年，臺灣省政府公告省定古蹟範圍則包含車站本體、站務室、北側站前廣場的原派出所、以及第一月臺，精省後改為國定古蹟。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString3 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">台南孔廟</h1>'+
    '<div id="bodyContent">'+
    '<p><b>台南孔廟</b></p>'+
    '<p>孔子廟又稱文廟，是全台最早的文廟，清末前是的官辦學府，故有「全台首學」之稱，地點位於承天府鬼仔埔（今台南市南門路2號），廟門以「全台首學」金字橫匾作為登堂之階。坐北朝南的建築，柱廊式的大成門，又稱戢門，門的兩側分立名宦祠及鄉賢祠。獨立式殿堂帶露臺的大成殿，是整座建築的主體，殿內主祀至聖先師孔子牌位。紅瓦、紅牆、綠蔭是對孔廟的基本印象，兒童嬉戲、情侶散步、老人下棋與悠閒的氣氛。民國72年被指定為國家第一級古蹟。'+
    '</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString4 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">延平郡王祠</h1>'+
    '<div id="bodyContent">'+
    '<p><b>延平郡王祠</b></p>'+
    '<p>延平郡王祠位於今日台南市開山路152號。因政治顧慮稱為開山王廟，到清同治年間，欽差大臣沈葆楨來台，強調鄭成功是「明室遺臣」，不是「亂臣賊子」，並為鄭氏立祠，將開山王廟擴建成「福州式」建築，改為明延平郡王祠。日治以後，改為「開山神社」。光復後，將福州式建築拆除，建為鋼筋水泥的中國北方式建築。祠旁的民族文物館收藏著許多台南文物，讓民眾了解先人生活起居狀況，舉凡史前文物陳列、台南歷史文物、鄭成功、沈葆楨等人的畫像或遺墨，和街牌、眠床……等等。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString5 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">五妃廟</h1>'+
    '<div id="bodyContent">'+
    '<p><b>五妃廟</b></p>'+
    '<p>五妃廟位於魁斗山，晚明時鄭經迎寧靖王渡台，施琅征台，寧靖王決心尋死，隨侍在側的五妃都表達了全節從死的決心，於是從容自縊，寧靖王遂將五妃（袁氏、王氏、秀姑、梅姐、荷姐等五人）之靈柩安葬於南門城外魁斗山後（今五妃廟址）。該廟坐西南朝東北，正殿內供奉著五妃神像，牆上鑲著「寧靖王從死五妃慕」碑，燕尾翹脊的屋頂。正殿前馬背式屋頂的拜亭，彩繪門神的門扇四樘，做為廟的出入口。門的左右，紅色的院牆連接五百兩護龍的山牆面，與三弧形的馬背屋脊構成高低起伏的外觀。最近一次於民國86年修復落成，現為一級古蹟。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString6 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">國立文化資產保存研究中心</h1>'+
    '<div id="bodyContent">'+
    '<p><b>國立文化資產保存研究中心</b></p>'+
    '<p>國立文化資產保存研究中心位於今日的台南市中正路1號，為總督府技師森山松之助之作品，二次世界大戰時曾遭受盟軍轟炸，損毀嚴重，經整修後，保存還算完整。是台灣當時幾個廳舍中之代表作之一，其他同類建築有台北廳舍（今監察院）及台中廳舍（今台中市政府）。</p>'+
    '<p>民國9年台滔行政架構調整，台南廢廳置州，台南廳舍稱「台南州廳」，台南市政府搬遷到新市政大樓後，改為「國立文化資產保存研究中心」。民國86年因空間不足，台南市政府遷建，後由文建會規劃為「文化資產保存研究中心」。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString7 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">安平古堡</h1>'+
    '<div id="bodyContent">'+
    '<p><b>安平古堡</b></p>'+
    '<p>安平古堡位於台南市安平區效忠街、國勝路上，古稱奧倫治城(Orange)、熱蘭遮城(Zeelandia)、安平城、臺灣城，俗名紅毛城、番仔城或王城，最早建於1624年，荷蘭人在『一鯤鯓』建立一座簡單的砦城，這就是安平古堡的前身是台灣最古老的城堡，因此曾是荷蘭人統治台灣的中樞、也曾經是鄭氏王朝三代的宅第，舊熱蘭遮城分內外二部，城垣範圍包括台灣最早的延平市街。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString8 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">台南花園夜市</h1>'+
    '<div id="bodyContent">'+
    '<p><b>台南花園夜市</b></p>'+
    '<p>夜市，幾乎可說是台南在地文化的代名詞之一。吃的、喝的、玩的、用的，在這裡一應俱全，因此夜市成為許多台南人晚上沒事閒晃，找好吃的好所在，台南人天天都有夜市逛。其中占地規模、攤位數量最多，同時也是最具指標性的，莫過於台南花園夜市。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';
    var contentString9 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">億載金城</h1>'+
    '<div id="bodyContent">'+
    '<p><b>億載金城</b></p>'+
    '<p>又名「二鯤身砲台」，所謂的二鯤身即是昔日羅列在台江西岸的沙洲島名，當時安平古堡位於一鯤身，億載金城位在二鯤身。不過後來因為港口淤積，所以沙洲也就慢慢的連在一起。億載金城源於「牡丹社事件」所引起的日軍犯台事件，當時欽差大臣沈葆禎奏請朝廷架設仿西式的砲台獲得批准，延請法國人設計，於光緒二年(1876)完成，而此西式的砲台可是台灣的第一座。當時建構此砲台時，因地處沙洲所以材料取得和運送不易，據說所多城磚來自當時已成破牆殘瓦的安平古堡。</p>'+
    '<p>億載金城採西洋式紅磚建築，呈四方形，四隅有稜堡，用來放置大砲，而中央凹入的場地則是用來操練軍隊。城外引海水為護城濠，城上設有大炮，故稱大砲台。城門作拱形，外題「億載金城」，內題「萬流砥柱」皆為沈氏手筆，剛勁有力的筆觸更襯托出城堡的固若金湯。</p>'+
    '<p>目前億載金城離海漸遠，四周茂林密佈，早失軍事價值。城門右邊的紀念碑上面，記載著億載金城的建築歷史。城內有沈葆禎的紀念銅像，目前放置在城內供人參觀的砲台，是民國65年(1976)台南市政府推動觀光年，為紀念此砲台創建一百週年特別仿製的成品。億載金城現已列為國家一級古蹟。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
});
var infowindow3 = new google.maps.InfoWindow({
    content: contentString3
});
var infowindow4 = new google.maps.InfoWindow({
    content: contentString4
});
var infowindow5 = new google.maps.InfoWindow({
    content: contentString5
});
var infowindow6 = new google.maps.InfoWindow({
    content: contentString6
});
var infowindow7 = new google.maps.InfoWindow({
    content: contentString7
});
var infowindow8 = new google.maps.InfoWindow({
    content: contentString8
});
var infowindow9 = new google.maps.InfoWindow({
    content: contentString9
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(22.997108,120.202215),
    map: map,
    title: '赤崁樓'
});
var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(22.997144,120.212966),
    map: map,
    title: '台南火車站'
});
var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(22.990415,120.204164),
    map: map,
    title: '台南孔廟'
});
var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(22.987925,120.20757),
    map: map,
    title: '延平郡王祠'
});
var marker5 = new google.maps.Marker({
    position: new google.maps.LatLng(22.982504,120.205039),
    map: map,
    title: '五妃廟'
});
var marker6 = new google.maps.Marker({
    position: new google.maps.LatLng(22.9920289,120.2046283),
    map: map,
    title: '國立文化資產保存研究中心'
});
var marker7 = new google.maps.Marker({
    position: new google.maps.LatLng(23.001624,120.161073),
    map: map,
    title: '安平古堡'
});
var marker8 = new google.maps.Marker({
    position: new google.maps.LatLng(23.011505,120.200502),
    map: map,
    title: '台南花園夜市'
});
var marker9 = new google.maps.Marker({
    position: new google.maps.LatLng(22.987642,120.159048),
    map: map,
    title: '億載金城'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="赤崁樓";
});
google.maps.event.addListener(marker2, 'click', function(event) {
  infowindow2.open(map,marker2);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="台南火車站";
}); 
google.maps.event.addListener(marker3, 'click', function(event) {
  infowindow3.open(map,marker3);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="台南孔廟";
}); 
google.maps.event.addListener(marker4, 'click', function(event) {
  infowindow4.open(map,marker4);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="延平郡王祠";
}); 
google.maps.event.addListener(marker5, 'click', function(event) {
  infowindow5.open(map,marker5);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="五妃廟";
}); 
google.maps.event.addListener(marker6, 'click', function(event) {
  infowindow6.open(map,marker6);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="國立文化資產保存研究中心";
}); 
google.maps.event.addListener(marker7, 'click', function(event) {
  infowindow7.open(map,marker7);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="安平古堡";
}); 
google.maps.event.addListener(marker8, 'click', function(event) {
  infowindow8.open(map,marker8);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="台南花園夜市";
}); 
google.maps.event.addListener(marker9, 'click', function(event) {
  infowindow9.open(map,marker9);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="億載金城";
}); 
    }
    function initialize12() {
      var mapOptions = {
        center: new google.maps.LatLng(23.0272106,120.141997),
        zoom: 13
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">南寮</h1>'+
    '<div id="bodyContent">'+
    '<p><b>南寮</b></p>'+
    '<p>南寮台南地區科技園區。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.0272106,120.141997),
    map: map,
    title: '南寮'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="南寮";
});
    }
    function initialize13() {
      var mapOptions = {
        center: new google.maps.LatLng(23.174143,120.486336),
        zoom: 13
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">楠西地區</h1>'+
    '<div id="bodyContent">'+
    '<p><b>楠西</b></p>'+
    '<p>楠西地區。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.174143,120.486336),
    map: map,
    title: '楠西'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="楠西";
});
    }
    function initialize14() {
      var mapOptions = {
        center: new google.maps.LatLng(23.266519,120.393253),
        zoom: 13
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">尖山埤江南渡假村</h1>'+
    '<div id="bodyContent">'+
    '<p><b>尖山埤江南渡假村</b></p>'+
    '<p>由台灣糖業公司經營的「尖山埤江南渡假村」，以秀麗的自然景觀、完善的設施規劃以及親切的專業服務，成為南台灣別具特色的渡假勝地。民國89年起，年年皆獲得交通部觀光局評鑑為「優等」風景遊樂區，97年至100年更獲得「特優等」榮譽，絕對值得顧客的信賴與推薦。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.266519,120.393253),
    map: map,
    title: '尖山埤江南渡假村'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="尖山埤江南渡假村";
});
    }
    function initialize15() {
      var mapOptions = {
        center: new google.maps.LatLng(23.0101279,120.2017249),
        zoom: 14
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">台南花園夜市</h1>'+
    '<div id="bodyContent">'+
    '<p><b>台南花園夜市</b></p>'+
    '<p>夜市，幾乎可說是台南在地文化的代名詞之一。吃的、喝的、玩的、用的，在這裡一應俱全，因此夜市成為許多台南人晚上沒事閒晃，找好吃的好所在，台南人天天都有夜市逛。其中占地規模、攤位數量最多，同時也是最具指標性的，莫過於台南花園夜市。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(23.0101279,120.2017249),
    map: map,
    title: '台南花園夜市'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="台南花園夜市";
});
    }
    function initialize16() {
      var mapOptions = {
        center: new google.maps.LatLng(22.995946, 120.159067),
        zoom: 14
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">安平港渡船碼頭</h1>'+
    '<div id="bodyContent">'+
    '<p><b>安平港渡船碼頭</b></p>'+
    '<p>安平港渡船碼頭。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(22.995946, 120.159067),
    map: map,
    title: '安平港渡船碼頭'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="安平港渡船碼頭";
});
    }
    function initialize17() {
      var mapOptions = {
        center: new google.maps.LatLng(22.9848497,120.2140972),
        zoom: 14
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">長榮高中</h1>'+
    '<div id="bodyContent">'+
    '<p><b>長榮高中</b></p>'+
    '<p>長榮中學於1885年（清光緒十一年）由英國基督長老教會創辦臺灣第一所中學，當時校名『長老教中學』。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(22.9848497,120.2140972),
    map: map,
    title: '長榮高中'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="長榮高中";
});
    }
    function initialize18() {
      var mapOptions = {
        center: new google.maps.LatLng(22.9502026,120.1827314),
        zoom: 14
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
      var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">臺南航空站</h1>'+
    '<div id="bodyContent">'+
    '<p><b>臺南航空站</b></p>'+
    '<p>臺南機場（IATA：TNN，ICAO：RCNN），位於臺南市南區，為軍民共用機場：包括交通部民用航空局臺南航空站、以及空軍臺南基地。機場至市中心約6公里。現有金門、馬公航線兼營國際線與兩岸包機。同時也是飛機維修商亞洲航空總部與維修基地所在地。</p>'+
    '</div>'+
    '</div>'+'<p><input type=button onclick="gogogo()" id=myButtonId value="加入預定行程"></input></p>';

var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
});
var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(22.9502026,120.1827314),
    map: map,
    title: '臺南航空站'
});
google.maps.event.addListener(marker1, 'click', function(event) {
  infowindow1.open(map,marker1);
  jingjing=event.latLng.lat();
  weiwei=event.latLng.lng();
  funp="臺南航空站";
});
    }
    google.maps.event.addDomListener(window, 'load', initialize);
