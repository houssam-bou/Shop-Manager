# Shop Manager

A web application for managing shop products, built with HTML, CSS, and JavaScript. This project focuses on creating a practical interface for product management while applying modern JavaScript concepts and ES modules.

## Features

- Product management interface
- Add new products
- Search products through the API
- Dynamic user interface updates
- Modular JavaScript code using ES modules

> Features may evolve as development continues.

## Tech Stack

- **HTML5** — application structure
- **CSS3** — styling and layout
- **JavaScript (ES6+)** — application logic and DOM interactions
- **Vite** — frontend development server and build tool
- **Fetch API** — communication with the backend API

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/houssam-bou/Shop-Manager.git
   ```

2. Open the project directory:

   ```bash
   cd Shop-Manager
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal (Vite commonly uses `http://localhost:5173/`).

## Backend API

The frontend communicates with a backend API for product-related operations.

For local development, the API endpoint used in the project has been:

```text
http://localhost:3000/api/products
```

For example, product search can use the `search` query parameter:

```text
http://localhost:3000/api/products?search=keyboard
```

Make sure the backend API is running before testing features that require it. If your API URL changes, update the endpoint used by the frontend.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |

## Project Structure

The frontend uses JavaScript ES modules to organize application logic.

```text
Shop-Manager/
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── ui.js
│   └── utils.js
├── index.html
├── package.json
└── README.md
```

This is the known frontend structure; update it as additional files and folders are added.

## Development Workflow

The project uses Git for version control and Git Flow for branch organization.

- `main` — stable version
- `develop` — integration branch
- `feature/*` — branches for individual features

Feature branches are merged into `develop` when completed.

## Author

**Houssam Bou**

- GitHub: [@houssam-bou](https://github.com/houssam-bou)

## License

No license has been specified yet.
