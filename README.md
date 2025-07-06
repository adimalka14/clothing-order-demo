# 🛍 **Clothing Store Demo**

This project is a **demonstration of an e-commerce web app** built with **React 19**, **Material-UI (MUI)**, **Redux Toolkit**, **Formik**, **React Router**, and **Storybook**.
It showcases advanced UI components, theming (light/dark), RTL/LTR direction support, global theme management via custom `ThemeContext`, and a functional shopping cart system.

🌐 **Live Demos**

* [Netlify - App Demo](https://clothing-store-demo.netlify.app/) <!-- Update with your link -->
* [GitHub Pages - Storybook](https://adimalka14.github.io/clothing-store-demo) <!-- Update with your link -->

---

## 🚀 **Features**

### 🛒 E-Commerce Functionality

* Product listing with dynamic data (via `json-server` mock API)
* Product details page with variant & quantity selection
* Shopping cart with add/update/remove functionality
* Light/dark mode + RTL/LTR support
* Responsive design using MUI Grid/Flex
* SPA navigation with `react-router-dom`
* Custom `ThemeContext` powered by `useContext` for theme and direction management

### 🧩 **Wrapped MUI Components**

| Component             | MUI Base                                                                              | Key Features                                        |
| --------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Button**            | [`@mui/material/Button`](https://mui.com/material-ui/react-button/)                   | Loading state, variants, Storybook controls         |
| **IconButton**        | [`@mui/material/IconButton`](https://mui.com/material-ui/react-button/)               | Badge support for counts (e.g. cart count)          |
| **TextField**         | [`@mui/material/TextField`](https://mui.com/material-ui/react-text-field/)            | Adornments, multiline, password toggle              |
| **Select**            | [`@mui/material/Select`](https://mui.com/material-ui/react-select/)                   | Standardized API with helper text and error display |
| **Tooltip**           | [`@mui/material/Tooltip`](https://mui.com/material-ui/react-tooltip/)                 | Custom placements, wraps any element                |
| **AppBar**            | [`@mui/material/AppBar`](https://mui.com/material-ui/react-app-bar/)                  | Top bar with theme toggle, cart icon                |
| **ToggleButtonGroup** | [`@mui/material/ToggleButtonGroup`](https://mui.com/material-ui/react-toggle-button/) | Variant selector with icon support                  |

---

## 🎨 **Theming & Direction**

* Light/dark themes via `ThemeProvider`
* Direction support (`LTR`/`RTL`) with `DirectionWrapper` + Emotion cache + [`stylis-plugin-rtl`](https://github.com/Emotion-js/rtl)
* Theme/direction switch in `AppBar`

---

## 📖 **Storybook**

* Interactive documentation of all components
* Variants (sizes, themes, icons) displayed
* Useful for design review and isolated testing

---

## ⚡ **Run Locally**

Clone the repo:

```bash
git clone https://github.com/adimalka14/clothing-store-demo.git
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev          # run the app locally
npm run start:server # start the mock json-server backend
npm run storybook    # run Storybook
```

Build Storybook:

```bash
npm run build-storybook
```

---

## 📦 **Environment**

* **Node.js**: >= 22
* **React**: ^19.x
* **Redux Toolkit**: ^2.x
* **Formik**: ^2.x
* **React Router DOM**: ^7.x
* **Storybook**: 9.x
* **Vite**: ^7.x

---

## 🛠 **Libraries & Tools**

### ✨ Main Dependencies

| Library                                                                                               | Purpose                      |
| ----------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`@mui/material`](https://mui.com/)                                                                   | UI components                |
| [`@mui/icons-material`](https://mui.com/material-ui/material-icons/)                                  | MUI's icon set               |
| [`@emotion/react`](https://emotion.sh/docs/introduction`), [`stylis-plugin-rtl`](https://emotion.sh/) | CSS-in-JS + RTL              |
| [`@reduxjs/toolkit`](https://redux-toolkit.js.org/)                                                   | State management             |
| [`react-redux`](https://react-redux.js.org/)                                                          | React bindings for Redux     |
| [`formik`](https://formik.org/)                                                                       | Forms management             |
| [`yup`](https://github.com/jquense/yup)                                                               | Validation schema            |
| [`react-router-dom`](https://reactrouter.com/)                                                        | Routing and navigation (SPA) |
| [`json-server`](https://github.com/typicode/json-server)                                              | Mock REST API server         |
| [`axios`](https://axios-http.com/)                                                                    | HTTP requests (optional use) |
| [`prop-types`](https://www.npmjs.com/package/prop-types)                                              | Runtime props validation     |

### 🛠 Dev & Build Tools

| Tool                                                                | Purpose                            |
| ------------------------------------------------------------------- | ---------------------------------- |
| [`storybook`](https://storybook.js.org/)                            | Component documentation/playground |
| [`vite`](https://vitejs.dev/)                                       | Fast bundler                       |
| [`eslint`](https://eslint.org/), [`prettier`](https://prettier.io/) | Linting & formatting               |

---

## 📁 **Project Structure**

```
src/
 ├── components/          # UI components (ProductCard, CartItem, etc.)
 ├── base-components/     # Wrapped MUI components
 ├── pages/               # App pages (Home, ProductPage, CartPage)
 ├── store/               # Redux Toolkit setup (slices, thunks)
 ├── themes/              # ThemeProvider, theme definitions
 ├── services/            # Hooks for interacting with store/api
 ├── api/                 # API calls
 └── utils/               # Utility functions (env, constants)
```

---

## 🙌 **Credits**

Created by **Adi Malka** as a personal project to showcase frontend architecture, UI composition, and modern React practices.
