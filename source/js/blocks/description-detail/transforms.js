import { createBlock } from "@wordpress/blocks";

export default {
  from: [
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
