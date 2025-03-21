import React, { useState } from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Add your login logic here
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;