import Button from '../components/elements/Button';

const MainBanner = (props) => {
    const sectionName = "main-banner";

    return (
        <section className={sectionName + "-section section"}>
            <div className={sectionName + "-container"}>
                <div className={sectionName + "-content"}>
                    <div className={sectionName + "-copy-content"}>
                        <h2 className="copy-heading">
                            Visual identity &amp; Clear messages
                        </h2>
                    </div>
                    <Button content={"Learn more"} link={"/work"}/>
                </div>
                <video
                 className={sectionName + "-background-video"}
                 autoPlay
                 loop
                 muted
                 src={props.video}>
                </video>
            </div>
        </section>
    )
}

export default MainBanner;