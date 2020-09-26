import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { DescriptionDetailIcon as icon } from "../../icons";

import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";
import transforms from "./transforms";

import { name, category, supports, attributes, parent } from "./block.json";

registerBlockType(name, {
  title: "Description Detail",
  icon: icon,
  category,
  supports: {
    className: false,
    align: false,
  },
  transforms,
  keywords: [__("description detail"), __("Description Detail")],
  attributes,
  edit,
  save,
  parent,
  deprecated,
});
