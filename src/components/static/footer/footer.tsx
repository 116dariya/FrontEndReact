import React from "react";
import './footer.css';
import facebook from '../../../assets/img/facebook-logo.svg';
import twitter from '../../../assets/img/twitter.svg';

export default class Footer extends React.Component {
    public render() {
        return (
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-md-3">
                            <h3>Condé Nast</h3>
                            <ul className="footer-links"/>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2019 All Rights Reserved by:&nbsp;
                                <a id="elibaylink" href="https://t.me/nuptebek/">YELIBAY</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><img src={facebook}
                                                                          className="facebook-img"
                                                                          style={{width:"20px", height:"20px"}}/></a></li>
                                <li><a className="twitter" href="#"><img src={twitter}
                                                                         className="twitter-img"
                                                                         style={{width:"20px", height:"20px"}}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}