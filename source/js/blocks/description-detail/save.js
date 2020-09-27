import { RichText } from "@wordpress/block-editor";

export default ({ attributes }) => {
  const { content } = attributes;
  return content ? <RichText.Content tagName="dd" value={content} /> : null;
};
