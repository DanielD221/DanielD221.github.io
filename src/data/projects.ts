export interface Project {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  status: string;
  repository: string;
  stack: string[];
  overview: string;
  features: string[];
  note: string;
}

export const projects: Project[] = [
  {
    slug: 'syllabuspilot',
    number: '01',
    category: 'AI & learning',
    title: 'SyllabusPilot',
    description: 'A study-planning prototype that turns course syllabi into editable deadlines, study sessions, and a workload overview.',
    status: 'Prototype',
    repository: 'syllabuspilot',
    stack: ['React', 'TypeScript', 'Express', 'Gemini API', 'Tailwind CSS'],
    overview: 'SyllabusPilot explores how a course syllabus can become a practical study plan. An Express endpoint extracts course details from text or uploaded documents with Gemini, while a rule-based planner turns the reviewed deadlines into study sessions. The interface brings together multiple courses, daily focus tasks, and a workload heatmap.',
    features: [
      'Import syllabus text, PDFs, or images for AI-assisted extraction.',
      'Review and edit deliverables, due dates, and grade weights.',
      'Generate study sessions around preferred days and study hours.',
      'Shift unfinished sessions after missed study days.',
      'Save course data locally and export calendar events.',
    ],
    note: 'A prototype with sample courses and a text-only fallback parser. AI document extraction requires a working Gemini API key. Generated dates and study plans need review; some defaults use fixed 2026 dates.',
  },
  {
    slug: 'full-stack-open',
    number: '02',
    category: 'Full-stack development',
    title: 'Full Stack Open',
    description: 'Coursework progressing from React fundamentals to MongoDB-backed APIs, JWT login, and a blog-management interface.',
    status: 'Coursework',
    repository: 'fullstackopen',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Supertest'],
    overview: 'A collection of exercises from the University of Helsinki’s Full Stack Open course. Each application builds on a different concept: component composition and state, requests to an API, persistent storage, authentication, or backend tests. The repository includes the later blog application with a React interface and user login.',
    features: [
      'Browser/server sequence diagrams and small React exercises.',
      'Feedback statistics, anecdote voting, and course information views.',
      'A phonebook with contact filtering and management.',
      'A blog backend with password hashing and JWT login.',
      'A React blog interface and backend test suites.',
    ],
    note: 'These are learning exercises at different stages. Some API tests need updates for the current authentication behavior; the repository is not a single production application.',
  },
  {
    slug: 'phonebook',
    number: '03',
    category: 'Backend & persistence',
    title: 'Phonebook',
    description: 'An Express and MongoDB contact API with a bundled React frontend, extracted from the Full Stack Open exercises.',
    status: 'Coursework',
    repository: 'phonebook_backend',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'React'],
    overview: 'A standalone phonebook repository for storing names and phone numbers. Express serves the contact API and a bundled React interface from the same origin, while MongoDB persists the records. The source frontend lives in the main Full Stack Open repository.',
    features: [
      'Create, retrieve, update, and delete contacts.',
      'Require contact details and reject duplicate names on creation.',
      'Return contact data through a JSON API.',
      'Show the contact count and server time on an information page.',
      'Serve the included frontend build alongside the API.',
    ],
    note: 'A learning project without authentication or an automated test suite. Frontend rebuild scripts assume the original course-repository layout.',
  },
  {
    slug: 'blog-list-api',
    number: '04',
    category: 'REST API',
    title: 'Blog List API',
    description: 'A standalone REST API for saving blog links, authors, and like counts with Express and MongoDB.',
    status: 'Coursework',
    repository: 'blog_list',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    overview: 'An early standalone version of the Full Stack Open blog backend. It separates routes, models, configuration, and middleware, and exposes a small API for a reading list. The later version with users and a frontend is part of the main Full Stack Open repository.',
    features: [
      'List all blog entries or retrieve one by ID.',
      'Create, update, and delete saved blog links.',
      'Validate required title and URL fields on creation.',
      'Store entries in MongoDB with clean JSON identifiers.',
      'Handle malformed IDs and unknown endpoints.',
    ],
    note: 'This repository contains an API, not a complete blog publishing platform. Authentication and automated tests are not included in this standalone version.',
  },
  {
    slug: 'containers-coursework',
    number: '05',
    category: 'Infrastructure & testing',
    title: 'Containers coursework',
    description: 'A work-in-progress todo application with React, Express, MongoDB, Redis connectivity, and Playwright test scenarios.',
    status: 'In progress',
    repository: 'fullstackopen-containers',
    stack: ['React', 'Express', 'MongoDB', 'Redis', 'Playwright'],
    overview: 'Exercises for the containers section of Full Stack Open. The repository brings together a todo frontend, an Express backend, optional Redis connectivity, and browser/API test scenarios intended for a containerized deployment.',
    features: [
      'A React todo interface and Express API.',
      'MongoDB models for persistent todo records.',
      'An optional Redis client connection.',
      'Playwright scenarios for UI and API behavior.',
      'A draft GitHub Actions E2E workflow.',
    ],
    note: 'An unfinished exercise: Docker and reverse-proxy configuration files referenced by CI are not committed. Some todo endpoints and the statistics endpoint are also unfinished, so the E2E scenarios do not imply a working container deployment.',
  },
  {
    slug: 'personal-website',
    number: '06',
    category: 'Web design & development',
    title: 'Personal website',
    description: 'This portfolio: a static Astro and TypeScript website with a persistent profile, project pages, and space for a PDF CV.',
    status: 'Personal project',
    repository: 'DanielD221.github.io',
    stack: ['Astro', 'TypeScript', 'CSS', 'GitHub Pages'],
    overview: 'A place to bring software, teaching, and creative interests together. The website uses Astro to generate static pages, with a shared profile sidebar, project summaries, and a CV section. Its deployment workflow targets GitHub Pages and the custom domain danielduda.dev.',
    features: [
      'A profile sidebar that stays accessible while scrolling on desktop.',
      'Separate Home, Projects, and CV pages.',
      'Project descriptions and links to their source repositories.',
      'A responsive layout for smaller screens.',
      'Support for an embedded PDF CV and a download link when the file is supplied.',
    ],
    note: 'The profile image is currently a monogram, and the PDF CV is still to be added. The contact email will be linked after domain forwarding is confirmed.',
  },
];
