import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Ronit Bhanot's featured engineering and software projects, with descriptions, technologies used, and links. Optionally filter by a technology keyword.",
  inputSchema: {
    technology: z
      .string()
      .optional()
      .describe("Optional technology keyword to filter by, e.g. 'Python' or 'JavaScript'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ technology }) => {
    const needle = technology?.trim().toLowerCase();
    const results = needle
      ? projects.filter((p) =>
          p.technologies.some((t) => t.toLowerCase().includes(needle)),
        )
      : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { projects: results },
    };
  },
});
