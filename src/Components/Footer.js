import React, { Component } from "react";
import "../Styles/Footer.scss";
import { Link } from "react-router-dom";

// Pictures
import Post1 from "../Img/post-1.jpg";
import Post2 from "../Img/post-2.jpg";
import Post3 from "../Img/post-3.jpg";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: "We are skilled technologists that apply our passion for technology to create successful products and solutions for our clients. Our passion drives us to be innovative, creative, and experts.",
            phone: "+1 1234 567",
            email: "info@example.com",
            address: "771 street, deira, dubai",
            services: ["E-Commerce", "Domain & Hosting", "IT Services", "App Development", "Mobile Application", "SEO Optimization", "Graphic Designing"],
            links: [
                {text: "About Us", url: "/about-us"},
                {text: "Our Projects", url: "/projects"},
                {text: "Help?", url: "/#"},
                {text: "Career?", url: "/#"},
                {text: "Contact Us", url: "/contact"},
                {text: "Privacy Policy", url: "/privacy-policy"},
                {text: "Terms & Conditions", url: "/terms-and-conditions"}
            ],
            posts: [
                {picture: Post1, title: "How Much Should You Be Invest on Business?", date: "January 15, 2022"},
                {picture: Post2, title: "10 Things Most Users Don't Know About Development", date: "January 17, 2022"},
                {picture: Post3, title: "What is the hottest technology trend and development?", date: "January 25, 2022"}
            ]
        }
    }
    render() {
        const { about, phone, email, address, services, links, posts } = this.state;
        return(
            <footer>
                <div className="footer-about footer-column">
                    <h3 className="footer-title">about us</h3>
                    <div className="footer-about-details">
                        <p className="footer-text">{about}</p>
                        <p className="footer-phone"><span className="orange">Phone: </span>{phone}</p>
                        <p className="footer-email"><span className="orange">Email: </span>{email}</p>
                        <p className="footer-address"><span className="orange">Address: </span>{address}</p>

                        <div className="footer-email-input-container">
                            <input type="email" className="footer-email-input" placeholder="Enter your email" spellCheck="flase" />
                            <button className="footer-btn">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-services footer-column">
                    <h3 className="footer-title">our services</h3>
                    <div className="footer-services-details">
                        {services.map((service, index) => {
                            return <Link to="/#" key={index} className="footer-service">{service}</Link>
                        })}
                    </div>
                </div>

                <div className="footer-links footer-column">
                    <h3 className="footer-title">quick links</h3>
                    <div className="footer-links-details">
                        {links.map((link, index) => {
                            return <Link to={link.url} key={index} className="footer-link">{link.text}</Link>
                        })}
                    </div>
                </div>

                <div className="footer-posts footer-column">
                    <h3 className="footer-title">popular posts</h3>
                    <div className="footer-posts-details">
                        {posts.map((post, index) => {
                            return <div className="footer-post" key={index}>
                                <img src={post.picture} alt={post.title} className="footer-post-img" />
                                <div className="footer-post-detail">
                                    <p className="footer-post-title">{post.title}</p>
                                    <p className="footer-post-date">{post.date}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;