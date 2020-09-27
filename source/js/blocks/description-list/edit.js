import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";

import { Panel, PanelBody, SelectControl } from "@wordpress/components";

const edit = ({ attributes, setAttributes }) => {
  return (
    <>
      <InspectorControls>
        <Panel>
          <PanelBody title="Aria Level for DT">
            <SelectControl
              value={attributes.ariaLevel}
              options={[
                {
                  label: "",
                  value: null,
                },
                {
                  label: "1",
                  value: 1,
                },
                {
                  label: "2",
                  value: 2,
                },
                {
                  label: "3",
                  value: 3,
                },
                {
                  label: "4",
                  value: 4,
                },
                {
                  label: "5",
                  value: 5,
                },
                {
                  label: "6",
                  value: 6,
                },
              ]}
              onChange={(ariaLevel) =>
                setAttributes({
                  ariaLevel: ariaLevel ? parseInt(ariaLevel) : null,
                })
              }
            />
          </PanelBody>
        </Panel>
      </InspectorControls>
      <InnerBlocks
        template={[["cydlwp/description-term"]]}
        allowedBlocks={["cydlwp/description-term", "cydlwp/description-detail"]}
      />
    </>
  );
};

export default edit;
