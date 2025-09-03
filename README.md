# Portfolio (Vue + Vite)
Personal portfolio website built with Vue (Vite). A clean, responsive single-page site to showcase projects, experience, and contact information. Here all data are coming from a google sheet.

## Live
[https://tameemahamed.vercel.app/](https://tameemahamed.vercel.app/)

---

## Features
* Responsive layout for desktop & mobile.
* Sections for About, Skills, Education, Experience, Projects, Certifications, Contact.
* Easy to customize content.
* Fast dev server powered by Vite.

---

## Prerequisites
* Node.js (v20.0.1 or up)
* npm
If you ran into `Unsupported engine` warnings, upgrade Node to a supported version.

---

## Quick start
```bash
# Clone the repository
git clone https://github.com/tameemahamed/portfolio_vue.git
cd portfolio_vue

# Install dependencies
npm install
```

---

## Setup Google Sheet

**Sheet Layout**
Just make a copy of this [Google Sheet](https://docs.google.com/spreadsheets/d/1rg3HFf-tgU7dMu0OJZs2cjnyINoX77cxn_Glj49HwoI/edit) and put your own informations in there.

**How to get the Google Sheet ID**
1. Open your Google Sheet in the browser.
2. The URL looks like `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit#gid=0`.
3. Copy the `<SHEET_ID>` portion and paste into `VITE_SHEET_ID`.
4. You need to set the sheet privacy to public(view only). And also have to do File → Share → Publish to Web.

**Setup environment variable**
```bash
cp .env.example .env
```

Now replace `Google_Sheet_ID` with your own `sheet id` in your `.env` file.

---

## Development
```bash
npm run dev
```
now you can access it in `http://localhost:5173`

