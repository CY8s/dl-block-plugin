import { RichText } from "@wordpress/block-editor";

export default ({ attributes, context }) => {
  const { content, ariaLevel } = attributes;
  //const ariaLevel = context["cydlwp/dt-aria-level"];

  return content ? (
    <RichText.Content tagName="dt" aria-level={ariaLevel} value={content} />
  ) : null;
};
