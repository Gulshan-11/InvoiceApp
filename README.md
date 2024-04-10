```markdown
# React + Vite

This provides a setup to get React working in Vite.

## Usage

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses Babel for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses SWC for Fast Refresh.

## Folder Structure

The project structure is as follows:

```
- public/          # Public assets (index.html)
- src/             # Source code
  - Home/          # Home Page
  - InvoicesList   # Invoices Page
  - SideNavbar     # Side Navbar Component
  - App.jsx        # Main application component
- .eslintrc.json   # ESLint configuration file
- vite.config.js   # Vite configuration file
- package.json     # Project dependencies and scripts
- README.md        # Project documentation
```


- For now, Onlu update of the row works. I have not completed the add functionality.
