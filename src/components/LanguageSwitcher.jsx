const LanguageSwitcher = ({ currentLang, setCurrentLang }) => {
    const handleLanguageChange = (lang) => {
        setCurrentLang(lang);
    };

    return (
        <div className="language-switcher">
            <button
                className={`lang-button ${currentLang === 'id' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('id')}
            >
                🇮🇩 Indonesia
            </button>
            <button
                className={`lang-button ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
            >
                🇺🇸 English
            </button>
        </div>
    );
};

export default LanguageSwitcher;