# 📊 FinDash - Financial Dashboard

> A modern, interactive financial dashboard built with React, TypeScript, and Clean Architecture principles.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 🎯 Overview

**FinDash** is a comprehensive financial dashboard application that provides real-time cryptocurrency market data, interactive data visualizations, and customizable widgets. Built with modern web technologies and following Clean Architecture principles, it offers a professional, elegant, and highly maintainable codebase.

### ✨ Key Features

- 📈 **Interactive Dashboard** - Customizable widgets with drag-and-drop functionality
- 💰 **Live Crypto Data** - Real-time cryptocurrency market information via CoinGecko API
- 📊 **Rich Visualizations** - Multiple chart types (Line, Bar, Pie) using Recharts
- 🌍 **Internationalization** - Full support for English and Spanish (52+ translations)
- 🎨 **Modern UI/UX** - Clean, minimalist design with smooth animations
- 🌓 **Theme Support** - Dark and Light mode
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

---

## 🏗️ Architecture

This project follows **Clean Architecture** principles with a clear separation of concerns:

```
src/
├── domain/              # Business logic and entities
│   ├── models/          # Domain models
│   └── repositories/    # Repository interfaces
│
├── application/         # Application logic
│   ├── slices/          # Redux Toolkit slices
│   │   ├── dashboardSlice.ts
│   │   ├── reportsSlice.ts
│   │   └── themeSlice.ts
│   └── store/           # Redux store configuration
│
├── infrastructure/      # External implementations
│   ├── api/             # API clients
│   ├── i18n/            # Internationalization
│   ├── mock/            # Mock data
│   └── repositories/    # Repository implementations
│
└── presentation/        # UI layer
    ├── components/      # React components
    │   ├── common/      # Shared components
    │   ├── dashboard/   # Dashboard-specific
    │   ├── reports/     # Reports-specific
    │   └── widgets/     # Widget components
    ├── layout/          # Layout components
    └── pages/           # Page components
```

---

## 🛠️ Tech Stack

### Core
- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 7.2** - Build tool & dev server

### State Management
- **Redux Toolkit 2.11** - Global state management
- **React Query 5.90** - Server state management
- **Immer 10.2** - Immutable state updates

### UI & Styling
- **Styled Components 6.1** - CSS-in-JS
- **Framer Motion 12.23** - Animations
- **Lucide React 0.555** - Icon library
- **Recharts 3.5** - Data visualization

### Utilities
- **React Router DOM 7.9** - Routing
- **React Hook Form 7.66** - Form management
- **React Grid Layout 1.5** - Drag-and-drop grid
- **Axios 1.13** - HTTP client
- **i18next 25.6** - Internationalization
- **date-fns 4.1** - Date utilities
- **UUID 13.0** - Unique ID generation
- **Ramda 0.32** - Functional utilities
- **clsx 2.1** - Conditional classnames

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Proyecto
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📱 Pages & Features

### 🏠 Dashboard Page
- **Customizable Widgets**: Drag and drop to reorganize
- **Multiple Widget Types**:
  - 📊 KPI Cards - Display key metrics
  - 📈 Line Charts - Trend visualization
  - 📊 Bar Charts - Comparative data
  - 🥧 Pie Charts - Distribution data
  - 📋 Tables - Detailed data view
- **Edit Mode**: Toggle to customize layout
- **Persistent Layout**: Saves widget positions

### 📊 Reports Page
- **Live Cryptocurrency Data**: Real-time market information
- **Market Overview Cards**:
  - Total Market Cap
  - Total Volume (24h)
  - Average Change
  - Gainers Count
- **Cryptocurrency Table**:
  - Rank, Name, Symbol
  - Current Price
  - 24h Change (with trend indicators)
  - Market Cap
  - Volume
- **Auto-refresh**: Updates data automatically
- **Manual Refresh**: Button to force update

### ⚙️ Settings Page
- **Theme Toggle**: Switch between Dark/Light mode
- **Language Selection**: English / Spanish
- **User Preferences**: Persistent settings

---

## 🌍 Internationalization

Full i18n support with **52+ translation keys** in both English and Spanish:

### Translation Categories
- `common` - Shared UI text (8 keys)
- `navigation` - Menu items (5 keys)
- `user` - User profile (3 keys)
- `dashboard` - Dashboard page (9 keys)
- `reports` - Reports page (7 keys)
- `cryptoTable` - Table headers (6 keys)
- `marketStats` - Statistics labels (5 keys)
- `metrics` - KPI metrics (4 keys)
- `settings` - Settings page (5 keys)

### Supported Languages
- 🇺🇸 English
- 🇪🇸 Spanish

---

## 🎨 Component Library

### Common Components
- **Button** - Reusable button with variants
- **Card** - Container with consistent styling

### Widget Components
- **KPIWidget** - Key Performance Indicator display
- **LineChartWidget** - Time-series data visualization
- **BarChartWidget** - Comparative bar charts
- **PieChartWidget** - Distribution pie charts
- **TableWidget** - Data table with sorting

### Layout Components
- **MainLayout** - App shell with sidebar and header
- **Sidebar** - Navigation menu
- **Header** - Top bar with theme/language controls

### Report Components
- **CryptoTable** - Cryptocurrency data table
- **MarketOverview** - Market statistics cards

---

## 🔌 API Integration

### CoinGecko API
- **Endpoint**: `/coins/markets`
- **Features**:
  - Live cryptocurrency prices
  - Market cap and volume data
  - 24h price changes
  - Trending indicators
- **Update Frequency**: Manual refresh + auto-refresh capability

---

## 🎯 State Management

### Redux Slices

#### Dashboard Slice
```typescript
- widgets: Widget[]
- editMode: boolean
- Actions: addWidget, removeWidget, updateWidget, toggleEditMode
```

#### Reports Slice
```typescript
- cryptocurrencies: CryptoReport[]
- loading: boolean
- error: string | null
- Actions: fetchCryptoReports
```

#### Theme Slice
```typescript
- theme: 'light' | 'dark'
- language: 'en' | 'es'
- Actions: toggleTheme, setLanguage
```

---

## 📂 Project Structure

```
Proyecto/
├── public/              # Static assets
├── src/
│   ├── application/     # Redux slices & store
│   ├── config/          # Configuration files
│   ├── domain/          # Business logic
│   ├── infrastructure/  # External services
│   └── presentation/    # UI components
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── index.html           # Entry HTML
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite configuration
└── README.md            # This file
```

---

## 🎨 Design Principles

1. **Clean Architecture** - Separation of concerns with clear boundaries
2. **SOLID Principles** - Maintainable and scalable code
3. **Component Composition** - Reusable, modular components
4. **Type Safety** - Full TypeScript coverage
5. **Responsive Design** - Mobile-first approach
6. **Accessibility** - Semantic HTML and ARIA labels

---

## 🔒 Best Practices

- ✅ Strict TypeScript configuration
- ✅ ESLint for code quality
- ✅ Clean Architecture layers
- ✅ Repository pattern for data access
- ✅ Redux Toolkit for predictable state
- ✅ Component-based architecture
- ✅ Internationalization from the start
- ✅ Responsive and accessible UI

---

## 🚧 Future Enhancements

- [ ] User authentication & authorization
- [ ] Backend API integration
- [ ] More cryptocurrency exchanges
- [ ] Advanced charting options
- [ ] Export data to CSV/PDF
- [ ] Real-time WebSocket updates
- [ ] Portfolio tracking
- [ ] Price alerts & notifications
- [ ] Historical data analysis
- [ ] Additional languages

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support

For questions or issues, please open an issue on the repository.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
