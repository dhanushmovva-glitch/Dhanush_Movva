# Dhanush Movva — Portfolio

[View the portfolio](https://dhanushmovva-glitch.github.io/Portfolio/) · [GitHub repository](https://github.com/dhanushmovva-glitch/Portfolio)

A responsive personal portfolio built with HTML, CSS, and JavaScript. Designed for GitHub Pages, with no build process or package installation required.

## Preview the website

Open `index.html` in your browser, or run this command in the project folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish on GitHub Pages

1. Sign in to GitHub and create a **public** repository called `portfolio`. For a personal homepage at `https://YOUR-USERNAME.github.io`, name the repository `YOUR-USERNAME.github.io` instead.
2. Upload `index.html`, `styles.css`, `script.js`, the `assets` folder, and `.nojekyll` to the repository root. You can also upload this README. Keep the files directly in the root, not inside an additional `Portfolio` folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and the **/ (root)** folder, then click **Save**.
6. Once deployment finishes, GitHub displays the public website address on that same Pages settings screen.

For a repository named `portfolio`, the address will be `https://YOUR-USERNAME.github.io/portfolio/`. Relative asset paths support both project sites and personal homepages.

Official instructions: [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Edit your portfolio

- **Content, experience, contact links, and metadata:** `index.html`
- **Colors, typography, spacing, and responsive layouts:** `styles.css`
- **Mobile navigation and active section indicator:** `script.js`
- **Downloadable resume:** replace `assets/Dhanush-Movva-Resume.pdf` using the same filename.

Project highlights and numerical results come from the supplied resume. They describe professional work; no employer dashboards or source code are included. The downloadable PDF is an unchanged copy of the supplied resume, including its contact details. Certification names are included without verification links because the resume did not contain usable credential URLs.

The site uses Google Fonts with local system-font fallbacks. There is no analytics, contact-form service, database, or backend. Email opens the visitor's email application; LinkedIn opens the profile from the resume. Main content, resume links, and project details work without JavaScript.
