import React from 'react';

// 1. הגדרת טיפוס המידע של הפריט
export interface Item {
  id: string;
  title: string;
  category: string;
  type: 'LOST' | 'FOUND'; // 'LOST' = אבידה, 'FOUND' = מציאה
  location: string;
  date: string;
  imageUrl?: string;
  description: string;
}

// 2. הגדרת טיפוס ה-Props של הקומפוננטה
interface ItemCardProps {
  item: Item;
  onSelect?: (id: string) => void;
}

// 3. הקומפוננטה החוזרת
const ItemCard: React.FC<ItemCardProps> = ({ item, onSelect }) => {
  return (
    <div className={`item-card ${item.type === 'LOST' ? 'border-lost' : 'border-found'}`}>
      <div className="card-header">
        <span className={`badge ${item.type === 'LOST' ? 'badge-lost' : 'badge-found'}`}>
          {item.type === 'LOST' ? 'אבידה 🔍' : 'מציאה ✨'}
        </span>
        <span className="card-date">{item.date}</span>
      </div>

      {item.imageUrl && (
        <div className="card-image-container">
          <img src={item.imageUrl} alt={item.title} className="card-image" />
        </div>
      )}

      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-category">📁 קטגוריה: {item.category}</p>
        <p className="card-location">📍 מיקום: {item.location}</p>
        <p className="card-description">{item.description}</p>
      </div>

      <div className="card-footer">
        <button className="btn-small-outline" onClick={() => onSelect && onSelect(item.id)}>
          צפה בפרטים
        </button>
      </div>
    </div>
  );
};

export default ItemCard;