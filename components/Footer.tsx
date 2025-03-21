import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center' as const,
        padding: '1rem 0',
        position: 'fixed' as const,
        bottom: 0,
        width: '100%',
    },
    text: {
        margin: 0,
        fontSize: '0.9rem',
    },
};

export default Footer;