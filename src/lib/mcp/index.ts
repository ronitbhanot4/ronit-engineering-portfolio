import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listProjectsTool from "./tools/list-projects";
import listSkillsTool from "./tools/list-skills";
import listExperienceTool from "./tools/list-experience";
import getContactAndResumeTool from "./tools/get-contact-and-resume";

export default defineMcp({
  name: "ronit-s-tech-hub",
  title: "Ronit's Tech Hub",
  version: "0.1.0",
  instructions:
    "Public tools for Ronit Bhanot's engineering portfolio. Use `get_profile` for background and education, `list_projects` for featured projects (optionally filtered by technology), `list_skills` for technical and soft skills, `list_experience` for leadership and work history, and `get_contact_and_resume` for how to reach him and download his resume.",
  tools: [
    getProfileTool,
    listProjectsTool,
    listSkillsTool,
    listExperienceTool,
    getContactAndResumeTool,
  ],
});
