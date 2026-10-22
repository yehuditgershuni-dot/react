import React, { useState } from 'react';

interface FoundItemForm {
  title: string;
  description: string;
  category: string;
  locationDescription: string;
  imageUrl: string;
}

const CATEGORIES = ['אלקטרוניקה', 'ארנקים ומסמכים', 'מפתחות', 'ביגוד', 'בעלי חיים', 'אחר']; [9]

const ReportFoundItem: React.FC = () => {
  const [form, setForm] = useState<FoundItemForm>({
    title: '',
    description: '',
    category: 'אלקטרוניקה',
    locationDescription: '',
    imageUrl: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('דיווח על מציאה:', form);
    alert('תודה רבה! המציאה נשמרה במערכת ותותאם למאבדים רלוונטיים.');
  };

  return (
    <div className="form-card-container found-theme">
      <div className="form-header">
        <span className="badge badge-found">דיווח מציאה ✨</span>
        <h2>מצאת פריט?</h2>
        <p>עזרו להשיב את האבידה לבעליה החוקיים</p>
      </div>

      <form onSubmit={handleSubmit} className="styled-form">
        <div className="form-group">
          <label htmlFor="title">מה מצאת?</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="למשל: צרור מפתחות, אוזניות אלחוטיות"
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
          <label htmlFor="description">תיאור הפריט (ללא סימנים מוכמנים מדי)</label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="תיאור כללי של הפריט והמצב שבו נמצא"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="locationDescription">תיאור מיקום המציאה</label>
          <input
            type="text"
            id="locationDescription"
            name="locationDescription"
            placeholder="למשל: בתחנת אוטובוס ברחוב הרצל"
            value={form.locationDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="map-placeholder">
          📍 סימון מיקום המציאה מדויק על המפה [7]
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">העלאת תמונה של המציאה</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="הזינו URL לתמונה"
            value={form.imageUrl}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn-primary btn-found">פרסם דיווח מציאה</button>
      </form>
    </div>
  );
};

export default ReportFoundItem;