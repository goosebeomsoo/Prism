import strategy_illust from '../assets/icon/strategy.svg';
import planning_illust from '../assets/icon/planning.svg';
import shooting_illust from '../assets/icon/shooting.svg';
import edit_illust from '../assets/icon/edit.svg';

const Process = () => {
    const processList = [
        {
            img : strategy_illust, 
            subHeading : "asdf", 
            desc : "asdf"
        },
        {
            img : planning_illust, 
            subHeading : "asdf", 
            desc : "asdf", 
        },
        {
            img : shooting_illust, 
            subHeading : "asdf", 
            desc : "asdf"
        },
        {
            img : edit_illust, 
            subHeading : "asdf", 
            desc : ""
        }
    ];

    const processLists = processList.map((list)=> 
        <div className="process-block" key={list.subHeading}>
            <div className="block-image-content">
                <img src={list.img} alt={list.subHeading}/>
            </div>
            <div className="block-copy-content">
                <h3 className="copy-sub-heading">
                    {list.subHeading}
                </h3>
                <p className="copy-body">
                    {list.desc}
                </p>
            </div>
        </div>
    );

    return (
        <div className="process-page page">
            <section className="process-section section">
                <div className="process-container container">
                    <div className="process-content">
                        {processLists}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Process;