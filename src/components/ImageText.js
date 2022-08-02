const ImageText = (props) => {
    return (
        <section className="image-text">
            <div className="image-text-container container">
                <div className="image-text-content">
                    <img src={props.photo} alt="camera 01"/>
                    <h2 className="copy-heading">
                        당신의 이야기에 아름다움을 더해드립니다.
                    </h2>
                    <p className="copy-body">
                        Prism Visual Arts는 소중한 당신의 이야기에 가치를 더하는 영상을 제작합니다. 우리에게 여러분의 이야기를 들려주세요!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ImageText;