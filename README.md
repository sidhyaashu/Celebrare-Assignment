# 📸 Photo Gallery — Celebrare Frontend Assignment

A modern **React Photo Gallery application** built using **React, TypeScript, Vite, and TailwindCSS**.

The application fetches photos from the **Picsum Photos API**, displays them in a responsive grid, allows users to search by author name, and mark photos as favourites with persistence using **localStorage**.

This project was developed as part of the **Celebrare Frontend Intern Pre-Screening Assignment**.

---

# 🚀 Live Features

- Fetch photos from the **Picsum Photos API**
- Display photos in a **responsive grid layout**
- **Real-time search filtering** by author name
- Mark photos as **favourites**
- Favourites stored in **localStorage**
- **Load more photos** dynamically
- **Loading state** with spinner
- **Error handling** for failed API requests
- **ErrorBoundary** to prevent application crashes
- Performance optimizations using **useMemo** and **useCallback**

---

# 🧰 Tech Stack

| Technology | Purpose |
|------------|--------|
| React 19 | UI Library |
| TypeScript | Type-safe development |
| Vite | Fast development & build tool |
| TailwindCSS v4 | Styling |
| React Hooks | State and lifecycle management |

---

# 📂 Project Structure

```
src
│
├── components
│ ├── ErrorBoundary.tsx
│ ├── ErrorMessage.tsx
│ ├── Gallery.tsx
│ ├── Loader.tsx
│ ├── PhotoCard.tsx
│ └── SearchBar.tsx
│
├── hooks
│ └── useFetchPhotos.ts
│
├── reducers
│ └── favouritesReducer.ts
│
├── utils
│ └── localStorage.ts
│
├── constant
│ ├── api.ts
│ └── constant.ts
│
├── types
│ └── type.ts
│
├── App.tsx
└── main.tsx
```

The structure separates:

- **UI Components**
- **Business Logic**
- **Custom Hooks**
- **Utilities**
- **Types**

This keeps the codebase **clean and scalable**.

---

# ⚙️ Installation

Clone the repository:

```
git clone https://github.com/sidhyaashu/Celebrare-Assignment.git
```

Navigate into the project:

```
cd Celebrare-Assignment
```

Install dependencies:

```
pnpm install
```

Run the development server:

```
pnpm run dev
```

Open the browser:

```
http://localhost:5173
```

---

# 📡 API Used

Picsum Photos API

```
https://picsum.photos/v2/list
```

The application fetches photos with pagination using:

```
?page=1&limit=30
```

---

# 🧠 Key Implementation Concepts

## Custom Hook — `useFetchPhotos`

The application uses a **custom hook** to manage photo fetching.

Location:

```
src/hooks/useFetchPhotos.ts
```

The hook handles:

- API requests
- loading state
- error state
- pagination (Load More)

Returned values:

```
{
photos,
loading,
error,
loadMore
}
```

This keeps the **data logic separate from UI components**.

---

# 🔁 State Management with useReducer

Favourites are managed using **useReducer**.

Location:

```
src/reducers/favouritesReducer.ts
```

Reducer action:

```
TOGGLE_FAV
```

Logic:

- Add photo ID to favourites
- Remove photo ID if already favourited

Reducers make state transitions **predictable and easier to maintain**.

---

# 💾 Local Storage Persistence

Favourites persist across refresh using **localStorage**.

Utility functions:

```
loadFavorites()
saveFavourites()
```

Location:

```
src/utils/localStorage.ts
```

---

# ⚡ Performance Optimizations

## useCallback

Used to memoize event handlers:

- Search input handler
- Favourite toggle handler

Prevents unnecessary re-renders of child components.

---

## useMemo

Used to memoize filtered photo lists.

Filtering only recomputes when:

- photos change
- search query changes

This improves performance when the photo list grows.

---

# 🖼️ Responsive Layout

The photo grid adapts to different screen sizes.

| Device | Columns |
|------|--------|
| Mobile | 1 |
| Tablet | 2 |
| Desktop | 4 |

Implemented with TailwindCSS:

```
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
```

---

# 🛡 Error Handling

Two layers of error handling are implemented.

### API Error Handling

Displays a user-friendly error message if the API request fails.

Component:

```
ErrorMessage.tsx
```

---

### Application Error Boundary

Prevents the entire application from crashing.

Component:

```
ErrorBoundary.tsx
```

---

# ♿ Accessibility Improvements

The application includes accessibility features:

- ARIA labels for buttons
- semantic HTML structure
- proper alt text for images
- keyboard-friendly UI

---

# 📜 Available Scripts

Run development server

```
npm run dev
```

Build production bundle

```
npm run build
```

Preview production build

```
npm run preview
```

Run ESLint

```
npm run lint
```

---

# 🎯 Assignment Requirements Covered

✔ React + Vite project setup  
✔ TailwindCSS styling  
✔ Fetch photos from API  
✔ Responsive grid layout  
✔ Real-time search filtering  
✔ Favourites using **useReducer**  
✔ Persistence using **localStorage**  
✔ Custom hook for API fetching  
✔ Performance optimization using **useMemo** and **useCallback**

---

# 📌 Author

**Asutosh Sidhya**

BTech CSE (AI/ML)

Full-stack Developer | AI Enthusiast