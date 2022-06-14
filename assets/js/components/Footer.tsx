import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <nav className="nav_footer">
                <ul>
                    <li className="nav_item">Home</li>
                    <li className="nav_item">Projects</li>
                    <li className="nav_item">Jobs</li>
                    <li className="nav_item">My account</li>
                    <li className="nav_item">Messaging</li>
                </ul>
            </nav>

            <div>
                <img src="./svg/logo.svg" className="logo_footer" alt="logo_footer" />
            </div>
        </div>
    );
};

export default Footer;
