import React from 'react';
import { Link } from 'react-router-dom';
import SpiderManSad from '../404/spider-man-sad.png';
import './404.css';

const Page404 = () => {
    return(
        <div>
            <div className="message404">
                 <b>404</b>
                 <img src={SpiderManSad} alt="404-marvel" />
            </div>
            
        <p className='oops'>Oops... Page doesnt found</p>

        <div className="btn">
           <Link className='gohome' to='/'>GO HOMEPAGE</Link>
        </div>
     </div>
    )
}

export default Page404;