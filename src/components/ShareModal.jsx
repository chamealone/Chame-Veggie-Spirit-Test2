import React from 'react';
import { useState } from 'react';
import { gsap } from 'gsap';

const ShareModal = ({ isOpen, onClose, result }) => {
    const [linkCopied, setLinkCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setLinkCopied(true);
        gsap.to('.copy-message', { opacity: 1, duration: 0.5 });
        gsap.to('.copy-message', { opacity: 0, duration: 0.5, delay: 2 });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Share Your Result!</h2>
                <p>Your spirit veggie is: {result}</p>
                <button onClick={handleCopyLink}>Copy Link</button>
                {linkCopied && <div className="copy-message">Link copied!</div>}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ShareModal;