import "../App.css";
import { useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import CommentDisp from "./CommentDisp";

function DisplayInfo() {
    const currentTime = useAppSelector((state) => state.time.value);
    const updateTime  = useAppSelector((state) => state.updateTime.value);

    const [latLocation, setLatLocation] = useState<number>();
    const [lngLocation, setLngLocation] = useState<number>();
    
      //現在位置を取得する
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat  = position.coords.latitude;
            let lng  = position.coords.longitude;
    
            setLatLocation(lat);
            setLngLocation(lng);
        });
    }, [latLocation, lngLocation]);

    return (
        <>
            <img className="AF" src="./src/assets/images/AF.svg" alt="AF" width="60" height="60" />
            <img className="battery" src="./src/assets/images/battery.svg" alt="battery" width="60" height="60" />

            <h1 className="live">REC
                <img src="./src/assets/images/live.svg" alt="live-Camera-icon" width="45" height="45" />
            </h1>

            <CommentDisp />

            {/* 現在位置 */}
            <div className="geo-info">
                <h2 id="place">河原電子ビジネス専門学校</h2> {/* 場所はここへ */}
                <h3>latitude &nbsp;&nbsp;: <span>{latLocation}</span></h3>
                <h3>longitude: <span>{lngLocation}</span></h3>
            </div>

            {updateTime? <div id="last-update">{updateTime}</div> : <div id="last-update">最終更新日時</div>}
            <div id="timer">{currentTime}</div>
        </>
    )
}
export default DisplayInfo;