import { InnerBlocks } from "@wordpress/block-editor";

export default ({ attributes }) => {
  const { className } = attributes;
  return (
    <dl>
      <InnerBlocks.Content />
    </dl>
  );
};
