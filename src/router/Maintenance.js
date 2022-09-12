import logo from '../assets/icon/header-logo.svg';
import mainVideo from '../assets/video/main-video.mp4';

const Maintenance = () => {
    return (
        <div className="maintenance-page">
            <div className="maintenance-container container">
                <div className="logo-content">
                    <img src={logo} alt="logo"/>
                </div>

                <p className="copy-small">
                    Website renewal work is in progress. <br />We'll be back soon
                </p>
            </div>
            <video
             autoPlay
             loop
             muted
             playsInline
             src={mainVideo}>
            </video>
        </div>
    )
}

export default Maintenance;