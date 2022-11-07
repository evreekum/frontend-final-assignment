import React from "react";
import "./Footer.css";
import "../../App.css";
import SocialIcon from "./SocialIcon";
import {ReactComponent as FacebookIcon} from "../../assets/icons/facebook.svg";
import {ReactComponent as InstagramIcon} from "../../assets/icons/instagram.svg";
import {ReactComponent as LinkedInIcon} from "../../assets/icons/linkedin.svg";
import {ReactComponent as TwitterIcon} from "../../assets/icons/twitter.svg";
import FooterListItem from "./FooterListItem";


function Footer() {

    return (
        <footer className="outer-container">
            <div className="footer__inner-container inner-container">
                <ul className="footer__ul">

                    <FooterListItem title="information">
                        <p>Nullam a enim</p>
                        <p>Quisque cursus</p>
                        <p>Cras egestas</p>
                        <p>Nunc vitae</p>
                    </FooterListItem>

                    <FooterListItem id="about-footer" title="about">
                        <p>This website is</p>
                        <p>made by</p>
                        <p>Evelien van Reekum</p>
                        <p>June 2022</p>
                    </FooterListItem>

                    <FooterListItem title="contact">
                        <p>e.v.reekum@gmail.com</p>
                        <p>Phone number:</p>
                        <p>+31648769524</p>
                    </FooterListItem>

                    <FooterListItem title="social">
                        <div className="footer__social-card">
                            <SocialIcon link="/">
                                <FacebookIcon className="footer__svg" alt="Facebook Icon"/>
                            </SocialIcon>
                            <SocialIcon link="/">
                                <InstagramIcon className="footer__svg" alt="Instagram Icon"/>
                            </SocialIcon>
                            <SocialIcon link="/">
                                <LinkedInIcon className="footer__svg" alt="LinkedIn Icon"/>
                            </SocialIcon>
                            <SocialIcon link="/">
                                <TwitterIcon className="footer__svg" alt="Twitter Icon"/>
                            </SocialIcon>
                        </div>
                    </FooterListItem>

                </ul>
            </div>
        </footer>
    )
}

export default Footer;