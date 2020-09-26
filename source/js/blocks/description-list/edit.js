import { InnerBlocks } from "@wordpress/block-editor";

const edit = () => {
  return (
    <>
      <InnerBlocks
        template={[["cydlwp/description-term"]]}
        allowedBlocks={["cydlwp/description-term", "cydlwp/description-detail"]}
      />
    </>
  );
};

export default edit;
