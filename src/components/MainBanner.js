import Button from '../components/elements/Button';

const MainBanner = (props) => {
    const sectionName = "main-banner";

    return (
        <section className={sectionName + "-section section"}>
            <div className={sectionName + "-container container"}>
                <div className={sectionName + "-content"}>
                    <div className={sectionName + "-copy-content"}>
                        <h2 className="copy-heading">
                        Add beauty in your story - <span>Prism Visual Arts</span> creates video advertisements adding "meaning" to your tales. Let us listen to your story in detail.

                        We PRODUCE narrative series & commercials videos.
                        
                        Our contents CHALLENGE the barriers between platforms,
                        and TRAVEL different cultures and territories to BRING
                        BEAUTY to the world.
                        Producers Prism see the world through creative lens
                        to see beyond the boarders.
                        </h2>
                    </div>
                </div>
            </div>
            <video
                 className={sectionName + "-background-video"}
                 autoPlay
                 playsInline
                 loop
                 muted
                 src={props.video}>
            </video>
        </section>
    )
}

export default MainBanner;