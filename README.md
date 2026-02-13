# **ScribeMD - Patient Info Extraction**

A **full-stack application** that extracts patient information from text using **AI**.  
The **backend** is built with **Node.js** and **Express**, while the **frontend** uses **React**.  

The AI parses patient messages and returns structured information such as:  

- **Name**  
- **Date of birth**  
- **Phone number**  
- **Reason for the call**  
- **Urgency**  

---

## **Features**

- ✅ Extract patient info from free-text input using AI  
- ✅ Validate input before sending to AI  
- ✅ Display results in a React interface  
- ✅ Easy-to-use API endpoint: **`/api/patient-info`**

---

## **Tech Stack**

- **Backend:** Node.js, Express, OpenAI API (via Hugging Face router)  
- **Frontend:** React, Axios  
- **Other:** dotenv, CORS  

---

## **Prerequisites**

- **Node.js ≥ 18**  
- **npm**  
- **OpenAI API key** (stored in `.env` as `MODEL_AI`)  

---

## **Getting Started**

### **1. Clone the Repository**

```bash
git clone https://github.com/maienab/ScribeMD.git
cd ScribeMD



Run the Backend
npm start



run frontend 
npm run dev
