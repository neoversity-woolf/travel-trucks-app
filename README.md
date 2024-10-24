# Travel Trucks App

This project is built using React, Redux, and React Router to create a
single-page application (SPA) with state management powered by Redux. Axios is
used to handle API requests, and CSS modules are used for component styling. The
backend is mocked using [MockAPI](https://mockapi.io) for handling data
operations.

## Installation and Project Setup

### Prerequisites

- Node.js >= 18.0.0
- npm

### How to Run the Project

1. **Clone the repository:**

```bash
git clone https://github.com/neoversity-woolf/travel-trucks-app
```

2. **Navigate to the project directory:**

```bash
cd path/to/folder/travel-trucks-app
```

3. **Install dependencies: Using npm:**

```bash
  npm install
```

4. **Start the development server: Using npm:**

```bash
  npm run dev
```

5. **Open your browser and go to:**

```bash
http://localhost:5173/
```

## Technologies Used

- [Vite](https://vite.dev/) — For fast project setup and development.
- [React](https://react.dev/) — For building user interfaces.
- [Redux](https://redux.js.org/) — For state management.
- [React Router](https://reactrouter.com/en/main) — For routing between pages.
- [Axios](https://axios-http.com/docs/intro) — For handling HTTP requests.
- CSS Modules — For styling components.

## Project Structure

```bash
src/
│
├── assets/              # Static files (images, icons, etc.)
├── components/          # Reusable UI components and custom elements
├── pages/               # Pages for routing (each page corresponds to a route)
├── redux/               # Redux state management (slices, store, actions)
├── utils/               # Utility functions and helper modules used across the project
├── App.css              # Styles specific to the main App component
├── App.jsx              # Root App component that handles routing and layout
├── index.css            # Global application styles (applied to the entire project)
└── main.jsx             # Entry point of the application that renders the App component
```

## Key Pages Description

1. **_Home Page_** — Contains a banner with a primary call-to-action.
2. **_Catalog Page_** — Displays a list of available vehicles with filtering
   options by:

- Location
- Type of vehicle
- Availability of air conditioning
- Kitchen, etc.

3. **_Camper Detail Page_** — Displays detailed information about a selected
   camper, including a photo gallery, user reviews, and a booking form.

## Coding Standards

- The project follows a component-based architecture.
- DRY (Don't Repeat Yourself) principle is applied to minimize code duplication.
- Code is kept clean and readable with comments where necessary to improve
  understanding.

## Deployment

The project is deployed on [Netlify](https://netlify.com) and can be accessed at
[travel-trucks.netlify.app](https://travel-trucks.netlify.app/). To deploy the
project on Netlify:

1. Go to Netlify and create a new site.
2. Connect your Git repository.
3. Set the build command in the settings:

```bash
npm run build
```

4. Set the publish directory to:

```bash
dist
```

The project will automatically be deployed to Netlify after each push to the
main branch.

## License

This project is licensed under the MIT License.
