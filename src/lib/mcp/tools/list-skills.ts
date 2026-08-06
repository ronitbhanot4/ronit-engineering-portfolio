import { defineTool } from "@lovable.dev/mcp-js";
import { technicalSkills, softSkills } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "List Ronit Bhanot's technical skills and soft skills.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { technicalSkills, softSkills };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
