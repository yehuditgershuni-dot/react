import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PersonalArea from './components/PersonalArea';
import ReportLostItem from './components/ReportLostItem';
import ReportFoundItem from './components/ReportFoundItem';

// הגדרת סוגי המסכים המותאמים באפליקציה
export type ScreenName = 'home' | 'login' | 'register' | 'personalArea' | 'reportLostitem' | 'reportFounditem';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('home');

  return (
    <div className="app-container">
      {/* תפריט ניווט עליון לבדיקה קלה בין המסכים */}
      <nav style={{ display: 'flex', gap: '10px', padding: '10px', background: '#e9ecef' }}>
        <button onClick={() => setCurrentScreen('home')}>מסך ראשי</button>
        <button onClick={() => setCurrentScreen('login')}>התחברות</button>
        <button onClick={() => setCurrentScreen('register')}>הרשמה</button>
        <button onClick={() => setCurrentScreen('personalArea')}>אזור אישי</button>
        <button onClick={() => setCurrentScreen('reportLostitem')}>העלאת פריט שאבד</button>
        <button onClick={() => setCurrentScreen('reportFounditem')}>העלאת פריט שנמצא</button>
      </nav>

      {/* הצגת המסך הנבחר לפי ה-State */}
      <main style={{ padding: '20px' }}>
        {currentScreen === 'home' && <Home onNavigate={setCurrentScreen} />}
        {currentScreen === 'login' && <Login onNavigate={setCurrentScreen} />}
        {currentScreen === 'register' && <Register onNavigate={setCurrentScreen} />}
        {currentScreen === 'personalArea' && <PersonalArea onNavigate={setCurrentScreen} />}
        {currentScreen === 'reportLostitem' && <ReportLostItem onNavigate={setCurrentScreen} />}
        {currentScreen === 'reportFounditem' && <ReportFoundItem onNavigate={setCurrentScreen} />}
      </main>
    </div>
  );
}

export default App;