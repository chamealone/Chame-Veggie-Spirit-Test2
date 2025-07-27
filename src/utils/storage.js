const STORAGE_KEYS = {
    USER_DATA: 'userData',
    QUIZ_ANSWERS: 'quizAnswers',
    PERSONALITY_TYPE: 'personalityType',
};

export const saveUserData = (name, instagram) => {
    const userData = { name, instagram };
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
};

export const getUserData = () => {
    const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
};

export const saveQuizAnswers = (answers) => {
    localStorage.setItem(STORAGE_KEYS.QUIZ_ANSWERS, JSON.stringify(answers));
};

export const getQuizAnswers = () => {
    const answers = localStorage.getItem(STORAGE_KEYS.QUIZ_ANSWERS);
    return answers ? JSON.parse(answers) : null;
};

export const savePersonalityType = (type) => {
    localStorage.setItem(STORAGE_KEYS.PERSONALITY_TYPE, type);
};

export const getPersonalityType = () => {
    return localStorage.getItem(STORAGE_KEYS.PERSONALITY_TYPE);
};

export const clearStorage = () => {
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    localStorage.removeItem(STORAGE_KEYS.QUIZ_ANSWERS);
    localStorage.removeItem(STORAGE_KEYS.PERSONALITY_TYPE);
};