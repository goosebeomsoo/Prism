const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={props.footer_logo} alt="footer logo"/>
                    </div>
                    <div className="footer-info">
                        <ul>
                            <li>000-0000-0000</li>
                            <li>example@prismvisualarts.com</li>
                            <li>Seoul, sinsa</li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <p className="">@PRISM VISUAL ARTS 2022.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;