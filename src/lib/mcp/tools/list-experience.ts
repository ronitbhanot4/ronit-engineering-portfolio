import { defineTool } from "@lovable.dev/mcp-js";
import { experience } from "../data";

export default defineTool({
  name: "list_experience",
  title: "List experience",
  description:
    "List Ronit Bhanot's leadership, tutoring, competition, and club experience entries.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});
