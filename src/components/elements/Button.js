import {Link} from 'react-router-dom';

import arrow from '../../assets/icon/arrow.svg';

const Button = (props) => {
    return (
        <Link to={props.link} style={{display: 
        'inline-block'}}>
            <div className="button button-type-01">
                <span>
                    {props.content}
                </span>
                <i>
                    <img src={arrow} alt="arrow"/>
                </i>
            </div>
        </Link>
    )
}

export default Button;