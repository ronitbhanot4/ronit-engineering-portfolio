# Ronit Bhanot — Engineering Portfolio

A personal portfolio site built to showcase my engineering and software projects, technical skills, and experience. It features an animated particle background, typewriter hero text, project cards, and animated skill bars.

## Highlights

- Responsive single-page design with smooth section navigation
- Animated particle field and typewriter intro
- Project showcase (Q-Arm robotic manipulator, GradeGenius GPA calculator)
- Skills, experience, and contact sections
- Downloadable resume
- A small MCP server that exposes my public portfolio data (profile, projects, skills, experience, contact) to AI assistants

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- React Router
- Supabase Edge Functions (MCP endpoint)

## Getting Started

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
  components/   Reusable UI (Navbar, ProjectCard, SkillBar, ParticleField, ...)
  pages/        Route-level pages (Index, NotFound)
  lib/mcp/      MCP server definition, tools, and portfolio data
supabase/
  functions/    Deployed edge function serving the MCP endpoint
```

## Contact

- Email: ronit.bhanot@gmail.com
- LinkedIn: https://linkedin.com/in/ronit-bhanot-48940632a
- GitHub: https://github.com/ronitbhanot4
