const Video = (props) => {
    return (
        <div className="video-block">
            <div className="copy-content">
                <h3 className="copy-heading">
                    {props.title}
                </h3>
                <p className="copy-small">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}

export default Video;