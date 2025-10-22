Overview
This project is part of the **HNG Frontend Wizard Stage 1 Task**.  
It builds upon the Stage 0 single-card project by adding two new pages —  
a **Contact Us Page** (with form validation and accessibility) and an **About Me Page** (with personal reflections).

---

## 🧠 Features

### 📨 Contact Us Page
- Fully functional contact form with validation.
- Validation rules:
  - All fields are required.
  - Email must be valid (`name@example.com`).
  - Message must be at least 10 characters.
- Displays success message only after valid submission.
- Each field has its own error message and is linked via `aria-describedby` for accessibility.
- Uses `data-testid` attributes for automated testing.
- Fully responsive and keyboard-accessible.

### 🙋‍♂️ About Me Page
- Semantic HTML structure using `<main>`, `<section>`, `<h2>`, `<p>`, and `<ul>`.
- Sections include:
  - **Bio** — `test-about-bio`
  - **Goals in this program** — `test-about-goals`
  - **Areas of low confidence** — `test-about-confidence`
  - **Note to future self** — `test-about-future-note`
  - **Extra thoughts** — `test-about-extra`
- Clean and responsive design.

---

## 🧩 Technologies Used
- **HTML5** — for semantic structure  
- **CSS3** — for styling and responsiveness  
- **JavaScript (ES6)** — for form validation and DOM manipulation  
- **Ionicons** — for icons  

---

## 🚀 Getting Started

### 🔹 Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
