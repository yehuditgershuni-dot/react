import React from 'react';

interface HomeProps {
  onNavigate: (screen: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="home-container">
      {/* חלק עליון: לוגו ותמונה להמחשה */}
      <header className="home-header">
        <div className="logo-container">
          <span className="logo-icon">🔍</span>
          <h1 className="logo-text">מערכת אבידות ומציאות</h1>
        </div>
        <div className="illustration-container">
          <img
            src="https://via.placeholder.com/400x200?text=תמונה+להמחשה+-+השבת+אבידות"
            alt="תמונה להמחשה"
            className="hero-image"
          />
        </div>
      </header>

      {/* חלק מרכזי: כפתורי ניתוב לפי צרכי המשתמש */}
      <main className="home-actions">
        <h2>כיצד נוכל לעזור לך היום?</h2>
        
        <div className="action-buttons-grid">
          <button 
            className="action-btn btn-lost" 
            onClick={() => onNavigate('reportLost')}
          >
            🔍 העלאת פריט שאבד
          </button>

          <button 
            className="action-btn btn-found" 
            onClick={() => onNavigate('reportFound')}
          >
            ✨ העלאת פריט שנמצא
          </button>

          <button 
            className="action-btn" 
            onClick={() => onNavigate('profile')}
          >
            👤 אזור אישי
          </button>

          <button 
            className="action-btn btn-bell" 
            onClick={() => alert('אין התראות חדשות כרגע')}
          >
            🔔 פעמון התראות
          </button>

          <button 
            className="action-btn" 
            onClick={() => onNavigate('login')}
          >
            🔑 התחברות
          </button>

          <button 
            className="action-btn btn-register" 
            onClick={() => onNavigate('register')}
          >
            📝 הרשמה
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;