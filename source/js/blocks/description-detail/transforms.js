import { createBlock, getBlockAttributes } from "@wordpress/blocks";

import { name } from "./block.json";

export default {
  from: [
    {
      type: "raw",
      priority: 5,
      selector: "dd",
      schema: ({ phrasingContentSchema, isPaste }) => ({
        dd: {
          children: phrasingContentSchema,
          attributes: isPaste ? [] : ["style", "id"],
        },
      }),
      transform(node) {
        const attributes = getBlockAttributes(name, node.outerHTML);
        attributes.content = node.outerHTML;
        return createBlock(name, attributes);
      },
    },
    {
      type: "block",
      blocks: ["cydlwp/description-term"],
      transform: ({ content }) => {
        return createBlock("cydlwp/description-detail", {
          content,
        });
      },
    },
  ],
};
