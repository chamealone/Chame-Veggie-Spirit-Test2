import { useState } from 'react';
import Quiz from './components/Quiz';
import LanguageSwitcher from './components/LanguageSwitcher';
import Result from './components/Result';
import Landing from './components/Landing';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [userData, setUserData] = useLocalStorage('userData', { name: '', instagram: '' });
  const [quizProgress, setQuizProgress] = useState(0);
  const [quizResults, setQuizResults] = useState(null);
  const [language, setLanguage] = useState('id'); // Default language is Indonesian

  const handleUserData = (data) => {
    setUserData(data);
  };

  const handleQuizProgress = (progress) => {
    setQuizProgress(progress);
  };

  const handleQuizResults = (results) => {
    setQuizResults(results);
  };

  return (
    <div>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      {quizResults ? (
        <Result results={quizResults} userData={userData} />
      ) : (
        <Quiz
          userData={userData}
          onUserData={handleUserData}
          onQuizProgress={handleQuizProgress}
          onQuizResults={handleQuizResults}
        />
      )}
      {!quizResults && <Landing setUserData={setUserData} />}
    </div>
  );
};

export default App;