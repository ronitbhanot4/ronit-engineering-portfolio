import { defineTool } from "@lovable.dev/mcp-js";
import { profile, contact } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Ronit Bhanot's public profile: summary, school, program, graduation year, availability, goals, resume link and public contact links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { ...profile, contact };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
