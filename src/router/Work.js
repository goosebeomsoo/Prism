import Video from '../components/elements/Video';

const Work = () => {
    const videoList = [
        {
            title : "video", 
            desc : "description", 
            key : 1
        },
        {
            title : "video", 
            desc : "description", 
            key : 2
        },
        {
            title : "video", 
            desc : "description", 
            key : 3
        },
        {
            title : "video", 
            desc : "description", 
            key : 4
        },
    ];

    const videoLists = videoList.map((list) => 
        <div className="video-element" key={list.key}>
            <Video title={list.title} desc={list.desc}/>
        </div>
    );

    return (
        <div className="work-page page">
            <section className="work-section section">
                <div className="work-container container">
                    <div className="work-content">
                        {videoLists}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work;