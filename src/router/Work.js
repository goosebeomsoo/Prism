import { useState, useRef } from 'react';
import Video from '../components/elements/Video';

import video01_thumb from '../assets/img/video01_thumb.jpg'
import video02_thumb from '../assets/img/video02_thumb.jpg'
import video03_thumb from '../assets/img/video03_thumb.jpg'

const Work = () => {
    const popupVideoRef = useRef();

    const [popup, setPopup] = useState(false);
    const clickPopup = () => {setPopup(!popup)};

    const videoList = [
        {
            thumb : video01_thumb,
            link : "https://www.youtube.com/embed/8CoFPp39JO0",
            title : "video", 
            desc : "description", 
            key : 1
        },
        {
            thumb : video02_thumb,
            link : "",
            title : "video", 
            desc : "description", 
            key : 2
        },
        {
            thumb : video03_thumb,
            link : "",
            title : "video", 
            desc : "description", 
            key : 3
        }
    ];

    const videoLists = videoList.map((list) => 
            <Video thumb={list.thumb} title={list.title} desc={list.desc} key={list.key} videoRef={popupVideoRef} clickPopup={clickPopup} link={list.link}/>

    );

    return (
        <div className="work-page page">
            <section className="work-section section">
                <div className="work-container container">
                    <div className="work-content">
                        {videoLists}
                    </div>
                </div>

                <div className={popup ? "popup popup-open" : "popup"} onClick={clickPopup} ref={popupVideoRef}>
                    <div className="image-content">
                        <iframe width="560" height="315" src="" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work;