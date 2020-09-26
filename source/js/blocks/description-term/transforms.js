import { createBlock } from "@wordpress/blocks";

export default {
  from: [
    {
      type: "block",
      blocks: ["cydlwp/description-detail"],
      transform: ({ content }) => {
        return createBlock("cydlwp/description-term", {
          content,
        });
      },
    },
  ],
};
