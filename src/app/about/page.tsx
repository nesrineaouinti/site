export default function AboutPage() {
  return (
  <section className="w-full">
  <h1 className="text-3xl font-bold tracking-tight">About</h1>

  <div className="mt-4 space-y-4 text-black/80 dark:text-white/80">
    <p>
      I’m <span className="font-semibold">Nesrine Aouinti</span>, a full-stack developer
      focused on building fast, accessible, and scalable web applications.
      I work primarily with <span className="font-semibold">Next.js</span>, 
      <span className="font-semibold">TypeScript</span>, and modern engineering practices.
    </p>

    <p>
      I specialize in crafting clean UI, strong UX, and pragmatic engineering solutions.
      I enjoy collaborating with designers, product owners, and cross-functional teams 
      to build reliable features that users love while maintaining high performance and code quality.
    </p>

    <div>
      <h2 className="text-xl font-semibold">Skills</h2>

      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li><strong>Languages:</strong> HTML5, CSS3, JavaScript, TypeScript, Python, PHP</li>
        <li><strong>Front-end:</strong> React, Next.js, Angular</li>
        <li><strong>UI:</strong> Tailwind CSS, Bootstrap, Material UI (MUI)</li>
        <li><strong>Preprocessors:</strong> Sass, Less</li>
        <li><strong>Back-end:</strong> Django, Express.js, Laravel</li>
        <li><strong>APIs:</strong> REST, GraphQL</li>
        <li><strong>Real-time & Streaming:</strong> WebSockets, Apache Kafka</li>
        <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB (SQL & NoSQL)</li>
        <li><strong>Version Control:</strong> Git (GitHub, GitLab)</li>
        <li><strong>Deployment & DevOps:</strong> Docker, Azure (App Service, Functions, CI/CD), Vercel, Heroku</li>
        <li><strong>Project Management:</strong> Agile/Scrum (Jira, ClickUp)</li>
      </ul>
    </div>
  </div>
</section>

  );
}
