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
  return (
    <>
      {/*<CustomInputControl />*/}
      <RichText
        tag="dd"
        style={{
          padding: "0 0 0 1.6em",
        }}
        value={attributes.content}
        onChange={(content) => {
          setAttributes({ content });
        }}
        onSplit={(value) => {
          console.log(value);
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
        placeholder={attributes.placeholder || "Write detail..."}
      />
    </>
  );
};

export default edit;
