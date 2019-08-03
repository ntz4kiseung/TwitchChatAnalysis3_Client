import React from 'react';

const SubMainLogoBox = ({img, text, logoImageBoxClass}) => (
    <div className="submain-logo-box">
        <div className={logoImageBoxClass}>
            <img src={img} alt="" />
        </div>
        <div className="submain-logo-text font-arial font-bold font-italic">
            {text}
        </div>
    </div>
)

export default SubMainLogoBox;