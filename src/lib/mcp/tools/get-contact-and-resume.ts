import { defineTool } from "@lovable.dev/mcp-js";
import { contact, profile } from "../data";

export default defineTool({
  name: "get_contact_and_resume",
  title: "Get contact and resume",
  description:
    "Get Ronit Bhanot's public contact details (email, phone, LinkedIn, GitHub), portfolio website, and a direct link to his resume PDF.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      ...contact,
      website: profile.website,
      resumeUrl: profile.resumeUrl,
      availability: profile.availability,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
