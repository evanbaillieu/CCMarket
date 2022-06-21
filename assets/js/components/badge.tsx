import React, { FC } from 'react';

export interface IBadgeProps {
    svg?: JSX.Element;
    title: string;
}

const Badge: FC<IBadgeProps> = ({ svg, title }) => {
    return (
        <div className="home_section_presentation_text_points_importants_badge_item">
            <div className="home_section_presentation_text_points_importants_badge_item_red_background_picto">
                {svg}
            </div>
            <div className="home_section_presentation_text_points_importants_badge_item_title">
                <h6>{title}</h6>
            </div>
        </div>
    );
};

export default Badge;
