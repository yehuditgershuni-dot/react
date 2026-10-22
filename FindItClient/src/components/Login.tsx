import React, { useState } from 'react';

// הגדרת interface עבור ה-Props של הקומפוננטה (תמיכה בניווט בין מסכים)
interface LoginProps {
  onNavigate?: (screen: string) => void;
}

// הגדרת interface עבור נתוני הטופס
interface LoginFormData {
  emailOrName: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    emailOrName: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('התחברות עם:', formData);
    alert(`מתחבר עם: ${formData.emailOrName}`);

    // מעבר אוטומטי לאזור האישי ('profile') או לדף הבית לאחר התחברות
    if (onNavigate) {
      onNavigate('PERSONALAREA'); // שינוי ל-'personalArea' בהתאם לשם המסך החדש
    }
  };

  return (
    <div className="login-container">
      <h2>מסך התחברות</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailOrName">שם פרטי / מייל:</label>
          <input
            type="text"
            id="emailOrName"
            name="emailOrName"
            value={formData.emailOrName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">סיסמה:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">התחברות</button>
      </form>
    </div>
  );
};

export default Login;