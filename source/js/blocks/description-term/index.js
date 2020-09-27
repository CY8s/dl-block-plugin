import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { DescriptionTitleIcon as icon } from "../../icons";

import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";
import transforms from "./transforms";

import { name, category, supports, attributes, parent } from "./block.json";

registerBlockType(name, {
  title: "Description Term",
  icon: icon,
  category,
  supports: {
    className: false,
    align: false,
  },
  keywords: [__("description term"), __("Description Term")],
  attributes,
  usesContext: ["cydlwp/dt-aria-level"],
  transforms,
  parent,
  edit,
  save,
  deprecated,
});
