import React from 'react';
import Link from 'next/link';
import '@/styles/components.scss'

const Header: React.FC = () => {
    return (
        <header className="header">
            {/* Logo */}
            <Link href="/" className="logo">
                TrioTrendz
            </Link>

            {/* Navigation */}
            <nav className="nav">
                <Link href="/products" className="nav-item">
                    Products
                </Link>
                <Link href="/about" className="nav-item">
                    About Us
                </Link>
                <Link href="/contact" className="nav-item">
                    Contact
                </Link>
            </nav>

            {/* Actions */}
            <div className="actions">
                <button className="button">Login</button>
                <button className="button">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;