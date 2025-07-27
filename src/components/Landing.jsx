import { useState } from 'react';

const Landing = ({ setUserData }) => {
    const [name, setName] = useState('');
    const [instagram, setInstagram] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({ name, instagram });
        // No navigation needed, App.jsx will show Quiz after userData is set
    };

    return (
        <div className="landing-container">
            <h1>What's Your Spirit Veggie Test</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="nameInput">Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name..."
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="instagramInput">Instagram (optional):</label>
                    <input
                        type="text"
                        id="instagramInput"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        placeholder="@yourusername"
                    />
                </div>
                <button type="submit">Start Quiz</button>
            </form>
        </div>
    );
};

export default Landing;