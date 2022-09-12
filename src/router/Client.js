import Button from "../components/elements/Button";

const Client = () => {
    const clientList = [
        {
            img : "asdf", 
            alt : "asdf", 
            key: 1
        },
        {
            img : "asdf", 
            alt : "asdf", 
            key: 2
        },
        {
            img : "", 
            alt : "", 
            key: 3
        },
        {
            img : "", 
            alt : "", 
            key: 4
        }
    ]

    const clientLists = clientList.map((list) => 
        <div className="client-logo" key={list.key}>
            <img src={list.img} alt={list.alt}/>
        </div>
    );

    return (
        <div className="client-page page">
            <section className="client-section section">
                <div className="client-container container">
                    <div className="client-content">
                        <div className="copy-content">
                            <h2 className="copy-heading">
                                Clients
                            </h2>
                            <p className="copy-body">
                                blabla
                            </p>
                        </div>
                        <div className="client-logo-content">
                            {clientLists}
                        </div>
                        <Button content={"Learn more"}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Client;