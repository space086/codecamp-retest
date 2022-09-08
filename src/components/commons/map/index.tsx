// import Head from "next/head"
import { useEffect, useState } from "react"


declare const window: typeof globalThis & {
  kakao: any;
}

export default function KaKaoMap() {

  const [lat, setLat]= useState();
  const [lng, setLng]= useState();

  useEffect(() => {
    const script = document.createElement("script") // <script></script>
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=b22fcdd40598d9e0b81b04d7a2e012cd&autoload=false"
    script.src= "//dapi.kakao.com/v2/maps/sdk.js?appkey=b22fcdd40598d9e0b81b04d7a2e012cd&libraries=services,clusterer,drawing"
    document.head.appendChild(script)

  script.onload = () => {
    window.kakao.maps.load(function() {
      const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
      const options = { // 지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(37.4848,126.8967), // 지도의 중심좌표.
        level: 3 // 지도의 레벨(확대, 축소 정도)
      };

      const map = new window.kakao.maps.Map(container, options);
      
      const marker = new window.kakao.maps.Marker({
        position: map.getCenter(),
      })

      marker.setMap(map);
      window.kakao.maps.event.addListener(
        map,
        "click",
        function(mouseEvent: any) {
          const latlng = mouseEvent.latLng;
          setLat(latlng.getLat())
          setLng(latlng.getLng())
          marker.setPosition(latlng);
        }
      )
    });
  }
}, [])    


    

  return (
    <div>
      {/* <Head>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b22fcdd40598d9e0b81b04d7a2e012cd"></script>
      </Head> */}
      <div id="map" style={{width:500, height:400}}></div>
      <div>lat:{lat}</div>
      <div>lng:{lng}</div>
    </div>
  )
}