import Button from '../components/elements/Button';

const Masonry = (props) => {
    const sectionName = "masonry";

    const masonryList = props.masonryLists.map((list) => 
        <div className="block" key={list.id}>
            <div className="block-image-content">
                <img src={list.img} alt={list.id} />
            </div>
            <div className="block-copy-content">
                <h3 className="copy-sub-heading">
                    {list.subHeading}
                </h3>
                <p className="copy-body">
                    {list.body}
                </p>
            </div>
        </div>
    );

    return (
        <section className={sectionName + "-section section"}>
            <div className={sectionName + "-container container"}>
                <div className={sectionName + "-content"}>
                    <div className={sectionName + "-copy-content"}>
                        <h2 className="copy-heading">
                            Why Prism?
                        </h2>
                    </div>
                    <div className="block-content">
                        {masonryList}
                    </div>
                    <Button content={"Learn more"} link={"/process"}/>
                </div>
            </div>
        </section>
    )
}

export default Masonry;