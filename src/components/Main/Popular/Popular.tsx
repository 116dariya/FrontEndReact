import React from "react";
import './Popular.css'
export class Popular extends React.Component {

    render() {
        let items = [];
        let url = "https://media.vogue.com/r/w_540,h_540,c_true/2019/10/15/00-promo-1.jpg";
        let text = "Made in a Small Parisian Atelier, Peng Tai’s Ethereal Dresses Are Modern Heirlooms"
        for (let i = 1; i <= 4; ++ i) {
            items.push(
                <div className="popular-items-detail">
                    <img src={url} className="popular-image" alt="Kek"/>
                    <a href="#">{text}</a>
                </div>
                );
        }
        return (
            <div className="popular-items">
                {items}
            </div>
        );
    }
}