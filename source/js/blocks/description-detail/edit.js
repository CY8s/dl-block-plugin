import { RichText } from "@wordpress/block-editor";
import { createBlock } from "@wordpress/blocks";

import { name } from "./block.json";

const edit = ({
  attributes,
  setAttributes,
  mergeBlocks,
  onReplace,
  onRemove,
}) => {
  const { content, placeholder } = attributes;
  return (
    <>
      <RichText
        tag="dd"
        style={{
          padding: "0 0 0 1.6em",
        }}
        value={content}
        onChange={(content) => {
          setAttributes({ content });
        }}
        onSplit={(value) => {
          if (!value) {
            return createBlock(name);
          }

          return createBlock(name, {
            ...attributes,
            content: value,
          });
        }}
        onMerge={mergeBlocks}
        onReplace={onReplace}
        onRemove={onRemove}
        placeholder={placeholder || "Write detail..."}
      />
    </>
  );
};

export default edit;
