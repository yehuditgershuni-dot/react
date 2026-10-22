import React, { useState } from 'react';

// הגדרת ממשק הנתונים לפי טבלת משתמשים [3, 6]
interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('נתוני הרשמה לשליחה:', formData);
    alert(`ברוך/ה הבא/ה, ${formData.firstName}! ההרשמה בוצעה בהצלחה.`);
  };

  return (
    <div className="form-card-container">
      <div className="form-header">
        <h2>הרשמה למערכת</h2>
        <p>הצטרפו לקהילת השבת האבידות שלנו</p>
      </div>

      <form onSubmit={handleSubmit} className="styled-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">שם פרטי</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">שם משפחה</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">אימייל</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">מספר טלפון</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">סיסמה</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-primary">צור חשבון</button>
      </form>
    </div>
  );
};

export default Register;