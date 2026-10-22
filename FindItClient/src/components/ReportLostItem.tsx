import React, { useState } from 'react';

interface LostItemForm {
  title: string;
  description: string;
  category: string;
  isRoute: boolean;
  startTime: string;
  endTime: string;
  singleLocationDescription: string;
  imageUrl: string;
}

const CATEGORIES = ['אלקטרוניקה', 'ארנקים ומסמכים', 'מפתחות', 'ביגוד', 'בעלי חיים', 'אחר']; [9]

const ReportLostItem: React.FC = () => {
  const [form, setForm] = useState<LostItemForm>({
    title: '',
    description: '',
    category: 'אלקטרוניקה',
    isRoute: false,
    startTime: '',
    endTime: '',
    singleLocationDescription: '',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('דיווח על אבידה:', form);
    alert('דיווח על האבידה נשלח בהצלחה! האלגוריתם יחפש התאמות.');
  };

  return (
    <div className="form-card-container lost-theme">
      <div className="form-header">
        <span className="badge badge-lost">דיווח אבידה 🔍</span>
        <h2>מה איבדת?</h2>
        <p>ספקו כמה שיותר פרטים כדי שנוכל לעזור לכם למצוא את האבידה</p>
      </div>

      <form onSubmit={handleSubmit} className="styled-form">
        <div className="form-group">
          <label htmlFor="title">כותרת הפריט</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="למשל: ארנק עור חום, מפתחות עם מחזיק מפתחות כחול"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">קטגוריה</label>
          <select id="category" name="category" value={form.category} onChange={handleChange}>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">תיאור מפורט (סימנים מזהים, צבע, חברה)</label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* בחירה האם מדובר במסלול [7] */}
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="isRoute"
              checked={form.isRoute}
              onChange={handleChange}
            />
            האם האיבוד התרחש לאורך מסלול הליכה/נסיעה?
          </label>
        </div>

        {form.isRoute ? (
          <div className="route-section">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startTime">שעת התחלה משוערת</label>
                <input type="time" id="startTime" name="startTime" value={form.startTime} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="endTime">שעת סיום משוערת</label>
                <input type="time" id="endTime" name="endTime" value={form.endTime} onChange={handleChange} />
              </div>
            </div>
            <div className="map-placeholder">
              📍 מפה לסימון נקודת יציאה ונקודת סיום של המסלול [7]
            </div>
          </div>
        ) : (
          <div className="single-location-section">
            <div className="form-group">
              <label htmlFor="singleLocationDescription">תיאור מיקום האיבוד</label>
              <input
                type="text"
                id="singleLocationDescription"
                name="singleLocationDescription"
                placeholder="למשל: ספסל ליד גינת הכלבים בפארק"
                value={form.singleLocationDescription}
                onChange={handleChange}
              />
            </div>
            <div className="map-placeholder">
              📍 מפה לסימון נקודת האבידה מדויקת [7]
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="imageUrl">קישור/העלאת תמונה (אופציונלי)</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="הזינו URL של תמונת הפריט"
            value={form.imageUrl}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary btn-lost">פרסם דיווח אבידה</button>
      </form>
    </div>
  );
};

export default ReportLostItem;