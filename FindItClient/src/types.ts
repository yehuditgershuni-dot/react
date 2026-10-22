// טיפוס משתמש במערכת
export interface User {
  id: string | number;
  fullName: string;
  email: string;
  phoneNumber?: string;
}

// טיפוס קטגוריה
export interface Category {
  id: string | number;
  name: string;
}

// טיפוס פריט (שאבד או שנמצא)
export interface Item {
  id: string | number;
  userId: string | number;
  categoryId: string | number;
  title: string;
  description: string;
  status: 'Lost' | 'Found';
  locationDescription: string;
  eventDateTime: string;
  imageUrl?: string;
  isActive: boolean;
}
