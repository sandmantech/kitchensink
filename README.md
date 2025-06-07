# Personal Website with React and Vite

This project is a personal website built with React and Vite, designed to be hosted on GitHub Pages. It includes an "About Me" page and an "Experiments" page.

## Prerequisites

- Node.js (version 16.x or higher recommended)
- npm (comes with Node.js)

## Setup and Local Development

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPONAME.git
    cd YOUR_REPONAME
    ```

2.  **Important: Configure for your GitHub Pages URL:**
    Before installing dependencies, you **must** update the placeholder values in `package.json` and `vite.config.js`:
    - In `package.json`, update the `homepage` field:
      `"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPONAME/",`
      Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPONAME` with your repository name.
    - In `vite.config.js`, update the `base` field:
      `base: '/YOUR_REPONAME/',`
      Replace `YOUR_REPONAME` with your repository name.

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    If you encounter issues, you might try:
    ```bash
    npm install --legacy-peer-deps
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`.

## Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Bundles the app into static files for production (output to `dist` directory).
-   `npm run lint`: Runs the linter (if configured).
-   `npm run predeploy`: Automatically run before `deploy`, executes `npm run build`.
-   `npm run deploy`: Deploys the application to GitHub Pages (pushes the `dist` folder to the `gh-pages` branch).

## Deployment to GitHub Pages

1.  **Ensure you have configured `package.json` and `vite.config.js` as per the 'Setup' section.**
2.  **Commit and push your changes to the main branch.**
3.  **Run the deploy script:**
    ```bash
    npm run deploy
    ```
    This command will first build your project and then push the contents of the `dist` directory to a branch named `gh-pages` in your repository.

4.  **Configure GitHub Pages settings in your repository:**
    - Go to your repository on GitHub.
    - Go to "Settings" > "Pages".
    - Under "Build and deployment", for "Source", select "Deploy from a branch".
    - Set the branch to `gh-pages` and the folder to `/ (root)`.
    - Save the changes.

It might take a few minutes for your site to be live at the `homepage` URL you configured.
