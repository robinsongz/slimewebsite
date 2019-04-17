import React from 'react';
import './index.scss';

const Footer = () => (
    <div className="footer-comp">
        <div className="copyright"> Copyright © 2019 Slime Bot Team</div>
        <div className="footer-links">
            <a href='https://discord.gg/DVjQ39K' target='blank'>
                <div>Discord</div>
            </a>
            <a href='https://github.com/robinsongz' target='blank'>
                <div>Github</div>
            </a>
            <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=62784SLG9W6M2&currency_code=USD&source=url' target='blank'>
                <div>Donate</div>
            </a>
        </div>
    </div>

)

export default Footer;