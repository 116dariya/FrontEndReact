import React from "react";
// import styles from './last.css';
import './last.css';
export class Last extends React.Component {
    render() {
        var items = [];
        let url = "https://assets.vogue.com/photos/5da795d3101aa4000920e07c/1:1/w_240,c_limit/simz-2-promo.jpg";
        let title = "Little Simz Breaks All the Red Carpet Suiting Rules";
        let author = "RACHEL HAHN";
        let date = "2 days ago";
        for (let i = 1; i <= 4; ++ i) {
            items.push(
                <div className="last-items-detail">
                    <div className="feed-card">
                        <img src={url} className="popular-image" alt="Kek"/>
                        <h2 className="feed-card--title">
                            <a href="#">{title}</a>
                        </h2>

                        <a href="#">{author}</a>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className="intro-banner"><h2 className="intro-banner--title">Latest News</h2>
                    <div className="intro-banner--date">Friday, October 18, 2019</div>
                </div>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}