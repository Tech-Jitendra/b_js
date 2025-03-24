import React from 'react';
import { Button } from 'antd';
import 'animate.css';
import '@/styles/components.scss'
import { FacebookOutlined, InstagramOutlined, PinterestOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer className="footer animate__animated animate__fadeInUp">
            <div className="footer-top">
                <div className="footer-logo">
                    <h2>🔥 TrioTrendz- JBS</h2>
                    <p>Where the world goes for premium custom shirts.</p>
                    <Button type="primary" className="get-started">Get started</Button>
                </div>

                <div className="footer-columns">
                    <div className="column">
                        <h4>Sell online</h4>
                        <ul>
                            <li>Limited edition campaign</li>
                            <li>On-demand merch store</li>
                            <li>Personal fundraiser</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Nonprofits</h4>
                        <ul>
                            <li>For nonprofits</li>
                            <li>Peer-to-peer fundraising</li>
                        </ul>
                        <h4>Creators</h4>
                        <ul>
                            <li>For creators</li>
                            <li>Discover top creators</li>
                            <li>Sell with Merch Shelf</li>
                            <li>YouTube creators</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Resources</h4>
                        <ul>
                            <li>Blog</li>
                            <li>Help center</li>
                            <li>Order custom shirts</li>
                            <li>Pricing calculator</li>
                            <li>Request a custom design</li>
                            <li>Stories</li>
                            <li>Track my order</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Reviews</li>
                            <li>Sustainability</li>
                        </ul>
                        <h4>Legal</h4>
                        <ul>
                            <li>Accessibility</li>
                            <li>Privacy</li>
                            <li>Cookie policy</li>
                            <li>Consent Preferences</li>
                            <li>Terms & Conditions</li>
                            <li>Do not share or sell my data</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 TrioTrendz.com | DMCA | Trademark Takedown</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61574655234987" target="_blank" rel="noopener noreferrer">
                        <i><FacebookOutlined /></i>
                    </a>
                    <a href="https://www.instagram.com/trio.trendz?utm_source=qr&igsh=enk0Mjd6b3MzbXZ5" target="_blank" rel="noopener noreferrer">
                        <i><InstagramOutlined /></i>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                        <i><PinterestOutlined /></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i><TwitterOutlined /></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i><YoutubeOutlined /></i>
                    </a>
                </div>
                <p>Based in India, UK</p>
            </div>
        </footer>
    );
};

export default Footer;
