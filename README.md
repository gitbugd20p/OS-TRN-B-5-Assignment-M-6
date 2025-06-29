# 📚 Bookstore Project

Welcome to the **Bookstore** web application — a responsive and interactive platform for browsing and managing books. This project features both a **frontend user interface** and an **admin dashboard** for managing book-related data.

---

## 🔗 Live Preview

🌐 [Click here to view the live application](https://your-live-preview-url.com)

---

## 🗂️ Project Structure

```

Assignment
├── public/                 # Static public assets
│   ├── assets/            # Image assets
│   └── vite.svg
├── src/
│   ├── Layout/            # Layout components for frontend and admin
│   ├── assets/            # App styles and additional assets
│   ├── components/        # Reusable components (tables, nav, etc.)
│   ├── frontend/          # Frontend-specific components (Header, Hero, etc.)
│   ├── pages/             # Page-level components (Books, About)
│   ├── utils/             # Utility functions and components
│   ├── App.css
│   ├── index.css
│   ├── main.jsx           # App entry point
│   └── Home.jsx
├── index.html
├── vite.config.js         # Vite config
├── eslint.config.js       # ESLint config
├── package.json
└── README.md

```

---

## 🎯 Features

### 🔹 Frontend (User Interface)

- Clean and responsive UI with a **hero section** and search functionality.
- Navigation between `Home`, `Books`, `About`, and `Contact` pages.
- Styled with utility-first CSS (likely Tailwind CSS or similar).

### 🔸 Admin Dashboard

- Accessible via `/admin` route.
- Functional **DataTable** with:
  - Sorting and filtering capabilities
  - Dynamic status and price display
- Modular components for scalability (e.g., `SearchBar`, `Sidebar`, `NavLink`).

---

## 🛠️ Tech Stack

- **React** — Component-based UI
- **React Router** — Routing and navigation
- **Vite** — Fast build tool for development
- **CSS Modules / Utility-first CSS** — Styling
- **React Icons** — Icon library
- **ESLint** — Linting and code quality

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. **Clone the repository**:

   ````bash
   git clone https://github.com/gitbugd20p/OS-TRN-B-5-Assignment-M-6.git
   cd OS-TRN-B-5-Assignment-M-6```

   ````

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173` to view the app.

---

## 🌐 Routing Overview

| Route          | Description                   |
| -------------- | ----------------------------- |
| `/`            | Homepage with hero and search |
| `/books`       | Book listing page             |
| `/about`       | About page                    |
| `/contact`     | (Placeholder in navbar)       |
| `/admin/books` | Admin panel for book data     |
| `/admin/about` | Admin view of about page      |

---

## 📸 Screenshots

> _Will include UI screenshots of the Hero Section, Book Table in Admin Dashboard, and Navigation menu here._

---

## 📁 Assets

- Logos, avatars, and images are located in `public/assets/`.
- Background images and illustrations enrich the frontend design.

---

## 🧩 Component Highlights

- **Navbar & Sidebar**: Dynamic navigation rendering with icons.
- **DataTable**: Modular design with `Header`, `Body`, and `Footer` subcomponents.
- **SearchBar**: Integrated into both user and admin views.

---

## 📌 Future Improvements

- Add authentication for admin routes
- Enhance the book form (`+ Add Book` button)
- Introduce pagination to DataTable
- Implement contact form functionality

---

## 🧑‍💻 Author

**GitHub Repository:**
[https://github.com/gitbugd20p/OS-TRN-B-5-Assignment-M-6](https://github.com/gitbugd20p/OS-TRN-B-5-Assignment-M-6)

---

## 📄 License

This project is licensed under the MIT License.

---
