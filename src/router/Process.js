import strategy_illust from '../assets/icon/strategy.svg';
import planning_illust from '../assets/icon/planning.svg';
import shooting_illust from '../assets/icon/shooting.svg';
import edit_illust from '../assets/icon/edit.svg';

const Process = () => {
    const processList = [
        {
            // img : strategy_illust, 
            number : "1",
            subHeading : "STRATEGY", 
            desc : "We brainstorm your creative concept, outline and schedule each step of the production process, and collect the details we need to get started."
        },
        {
            // img : planning_illust, 
            number : "2",
            subHeading : "PRE-PRODUCTION", 
            desc : "We cast the perfect talent, scout locations, create call sheets, script and storyboard your video. and prepare other elements of your project for produciton.", 
        },
        {
            // img : shooting_illust, 
            number : "3",
            subHeading : "PRODUCTION", 
            desc : "We capture footage, manage photography, and handle all creww and art direction from start to finish."
        },
        {
            // img : edit_illust, 
            number : "4",
            subHeading : "POST-PRODUCTION", 
            desc : "We edit your footage, handle color and sound correction, create graphics and animation, and more to bring your story to life."
        }
    ];

    const processLists = processList.map((list)=> 
        <div className="process-block" key={list.subHeading}>
            <div className="block-copy-content">
                <h3 className="copy-sub-heading">
                    {list.number}
                </h3>
                <h2 className="copy-heading">
                    {list.subHeading}
                </h2>
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