import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <span className="logo2">Dopaming</span>
                <span className="contact-info">contact : dopaming@naver.com</span>
                <div className="footer-links">
                    <a >이용약관</a>
                    <a >개인정보처리방침</a>
                    <a >서비스소개</a>
                </div>
            </div>
            <div className="copyright">
                All copyright by 2024 도파밍
            </div>
        </footer>
    );
};

export default Footer;
