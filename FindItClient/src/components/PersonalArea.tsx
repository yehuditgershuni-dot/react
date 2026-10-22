import React, { useState } from 'react';

// טיפוסים מוגדרים [6]
interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
}

interface ItemSummary {
  id: string;
  title: string;
  type: 'LOST' | 'FOUND';
  date: string;
  status: string;
}

interface MatchSummary {
  id: string;
  lostTitle: string;
  foundTitle: string;
  matchScore: number;
  status: string;
}

const PersonalArea: React.FC = () => {
  // נתונים קבועים לדוגמה (Hardcoded) [11]
  const [user] = useState<UserProfile>({
    fullName: 'ישראל ישראלי',
    email: 'israel@example.com',
    phone: '050-1234567',
  });

  const [myItems] = useState<ItemSummary[]>([
    { id: '1', title: 'ארנק שחור', type: 'LOST', date: '20/10/2026', status: 'בטיפול' },
    { id: '2', title: 'מפתחות רכב', type: 'FOUND', date: '18/10/2026', status: 'הוחזר לבעלים' },
  ]);

  const [matches] = useState<MatchSummary[]>([
    { id: 'm1', lostTitle: 'ארנק שחור', foundTitle: 'ארנק עור שחור מעור', matchScore: 92, status: 'ממתין לאישור' },
  ]);

  const [notifications] = useState<string[]>([
    '🎉 נמצאה התאמה בסבירות גבוהה עבור "ארנק שחור"!',
    '🔔 פריט חדש באזורך הועלה לקטגוריית מפתחות.',
  ]);

  return (
    <div className="personal-area-container">
      {/* כותרת ופרטים אישיים */}
      <div className="profile-card">
        <h2>אזור אישי</h2>
        <div className="user-details">
          <p><strong>שם:</strong> {user.fullName}</p>
          <p><strong>אימייל:</strong> {user.email}</p>
          <p><strong>טלפון:</strong> {user.phone}</p>
          <button className="btn-secondary">עריכת פרטים אישיים [10]</button>
        </div>
      </div>

      {/* התראות מערכת */}
      <div className="notifications-card">
        <h3>🔔 הודעות מערכת [7, 10]</h3>
        <ul>
          {notifications.map((note, index) => (
            <li key={index} className="notification-item">{note}</li>
          ))}
        </ul>
      </div>

      {/* היסטוריית התאמות ("שידוכים") */}
      <div className="section-card">
        <h3>🧩 היסטוריית התאמות שהמערכת מצאה [10, 12]</h3>
        {matches.length === 0 ? (
          <p>אין התאמות כרגע.</p>
        ) : (
          <div className="matches-list">
            {matches.map((m) => (
              <div key={m.id} className="match-card">
                <div className="match-info">
                  <span><strong>אבידה:</strong> {m.lostTitle}</span>
                  <span>↔️</span>
                  <span><strong>מציאה:</strong> {m.foundTitle}</span>
                </div>
                <div className="match-score">
                  אחוז התאמה: <strong>{m.matchScore}%</strong>
                </div>
                <div className="match-actions">
                  <span className="status-tag">{m.status}</span>
                  <button className="btn-small">צפה בפרטים וצור קשר</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* פריטים שאיבדתי/מצאתי */}
      <div className="section-card">
        <h3>📋 פריטים שהעלתי למערכת [7, 10]</h3>
        <div className="items-grid">
          {myItems.map((item) => (
            <div key={item.id} className={`item-summary-card ${item.type === 'LOST' ? 'border-lost' : 'border-found'}`}>
              <div className="item-card-header">
                <span className={`badge ${item.type === 'LOST' ? 'badge-lost' : 'badge-found'}`}>
                  {item.type === 'LOST' ? 'אבידה' : 'מציאה'}
                </span>
                <span className="item-date">{item.date}</span>
              </div>
              <h4>{item.title}</h4>
              <p>סטטוס: {item.status}</p>
              <button className="btn-small-outline">עריכת דיווח</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalArea;