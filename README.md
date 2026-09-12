# Appu M — Engineering Portfolio

Responsive portfolio for Appu M, featuring selected projects, career progression, technical expertise, education, and direct contact links.

## Pages

- `/` — Introduction, selected work, engineering toolkit, and career summary
- `/projects/` — Project contributions and technology stacks
- `/about/` — Experience, skills, education, and certifications
- `/services/` — Engineering expertise
- `/contact/` — Email, telephone, GitHub, and résumé

## Local preview

Serve the repository root so navigation and asset paths resolve correctly:

```sh
python3 -m http.server 4173
```

Open http://localhost:4173. The site is static and deploys directly to GitHub Pages without a build step.

## Editing

Shared styles are in `styles.css`; navigation and certificate carousel behavior are in `script.js`. Each page contains its own semantic HTML. Update the shared navigation and footer across all five pages when changing them. The résumé is `assets/APPUM_2026.pdf`.

Home-page project visuals are conceptual system diagrams, not product screenshots. Project claims and experience are based on the existing portfolio content. Replace or update them as your work changes.

Content remains visible without JavaScript. The site includes keyboard navigation, reduced-motion support, responsive layouts, and print styles.

## Contact

Contact links open the visitor’s email application. No backend is required. The existing optional Express server and `/api/contact` endpoint remain available for separate integrations; the portfolio does not submit to that endpoint. To run that server, install dependencies, configure `SENDINBLUE_API_KEY` in `.env` if using the API, and run `npm start`.

## License

See `LICENSE`.
