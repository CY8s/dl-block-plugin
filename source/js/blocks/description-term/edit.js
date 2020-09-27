import { RichText } from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";

import { name } from "./block.json";

import { name as detailName } from "../description-detail/block.json";

const edit = ({
  attributes,
  setAttributes,
  mergeBlocks,
  onReplace,
  onRemove,
  context,
}) => {
  setAttributes({
    ariaLevel: context["cydlwp/dt-aria-level"],
  });

  return (
    <>
      <RichText
        tag="dt"
        value={attributes.content}
        onChange={(content) => {
          setAttributes({ content });
        }}
        onSplit={(value) => {
          if (!value) {
            return createBlock(detailName);
          }

          return createBlock(name, {
            ...attributes,
            content: value,
          });
        }}
        aria-level={attributes.ariaLevel}
        onMerge={mergeBlocks}
        onReplace={onReplace}
        onRemove={onRemove}
        placeholder={attributes.placeholder || "Write term..."}
      />
    </>
  );
};

export default edit;
