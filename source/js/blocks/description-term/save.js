import { RichText } from "@wordpress/block-editor";

export default ({ attributes }) => {
  const { content } = attributes;
  return <RichText.Content tagName="dt" value={content} />;
};
