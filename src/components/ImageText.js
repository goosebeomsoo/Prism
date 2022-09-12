const ImageText = (props) => {
    return (
        <section className="image-text">
            <div className="image-text-container container">
                <div className="image-text-content">
                    <img src={props.photo} alt="camera 01"/>
                    <h2 className="copy-heading">
                        Add beauty in your story
                    </h2>
                    <p className="copy-body">
                    Prism Visual Arts creates video advertisements adding "meaning" to your tales. Let us listen to your story in detail.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ImageText;