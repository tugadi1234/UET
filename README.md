# User Management API

Bu loyiha **Node.js**, **Express**, va **MongoDB** yordamida yozilgan professional **CRUD API**. API foydalanuvchilarni yaratish, olish, yangilash, o‘chirish va foto yuklash imkoniyatini beradi.

---

## 📦 Texnologiyalar

- Node.js v24.x  
- Express v5.x  
- MongoDB v6.x  
- Mongoose v9.x  
- Multer (photo upload)  
- http-status-codes (status kodlarni boshqarish)  
- Cors (Cross-Origin Resource Sharing)

---

## 🚀 Features

- Foydalanuvchi qo‘shish (`POST /v1/add`)  
- Barcha foydalanuvchilarni olish (`GET /v1/all`)  
- Foydalanuvchini ID orqali olish (`GET /v1/:id`)  
- Foydalanuvchini ID orqali o‘chirish (`DELETE /v1/:id`)  
- Foydalanuvchi uchun **photo upload** qo‘llab-quvvatlash  
- Status kodi va `message` bilan **professional JSON response**  

---

## 🔧 O‘rnatish va ishga tushirish

1. Repository ni klonlash:

```bash
git clone https://github.com/username/user-management-api.git
cd user-management-api
npm install
npm start
