import logo from '../assets/icon/logo.svg';
import mainVideo from '../assets/video/main-video.mp4';

const Maintenance = () => {
    return (
        <div className="maintenance-page">
            <div className="maintenance-container container">
                <div className="logo-content">
                    <img src={logo} alt="logo"/>
                </div>

                <p className="copy-small">
                    Sorry, We are under maintenece currently.
                </p>
            </div>
            <video
             autoPlay
             loop
             muted
             src={mainVideo}>
            </video>
        </div>
    )
}

export default Maintenance;