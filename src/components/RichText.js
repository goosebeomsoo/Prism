import Button from '../components/elements/Button';

const RichText = () => {
    const sectionName = "rich-text";

    return (
        <section className={sectionName + "-section section"}>
            <div className={sectionName + "container container"}>
                <div className={sectionName + "-content"}>
                    <div className={sectionName + "-copy-content"}>
                    <h2 className="copy-heading">
                        이제, 프리즘과 함께 하세요.
                    </h2>
                    <p className="copy-body">
                        이엔터테인먼트, 엄유민법, 서울시, 강남구, 수원시, 광주시, 국민연금공단, 경기스타트업캠퍼스, 강남구 & 종로구 사회적경제센터, 무궁화신탁, 정성호 국회의원 등 많은 기업이 프리즘과 함께 프로젝트를 진행했습니다. 그리고 높은 만족도를 보이며 지속적으로 콘텐츠를 제작하고 있습니다.
                    </p>
                    </div>
                </div>
                <Button content={"Learn more"} link={"/contact"}/>
            </div>
        </section>
    )
}

export default RichText;