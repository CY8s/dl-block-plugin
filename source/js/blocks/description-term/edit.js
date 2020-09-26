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
}) => {
  return (
    <>
      {/*<CustomInputControl />*/}
      <RichText
        tag="dt"
        value={attributes.content}
        onChange={(content) => {
          setAttributes({ content });
        }}
        onSplit={(value) => {
          console.log(value);
          if (!value) {
            return createBlock(detailName);
          }

          return createBlock(name, {
            ...attributes,
            content: value,
          });
        }}
        onMerge={mergeBlocks}
        onReplace={onReplace}
        onRemove={onRemove}
        placeholder={attributes.placeholder || "Write term..."}
      />
    </>
  );
};

export default edit;
