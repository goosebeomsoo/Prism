import { forwardRef } from "react";

const Video = (props, ref) => {
    return (
        <div className="video-block" onClick = {(e) => {
            props.clickPopup();
            console.log(e.target.dataset.id);
            console.log(ref);
        }} >
            <div className="thumb">
                <img src={props.thumb} alt="s" />
            </div>
            <div className="copy-content" data-id={props.link}>
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

export default forwardRef(Video);