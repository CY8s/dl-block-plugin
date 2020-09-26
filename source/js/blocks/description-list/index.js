import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { DescriptionListIcon as icon } from "../../icons";

import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";

const name = "description-list";

registerBlockType(`cydlwp/${name}`, {
  title: "Description List",
  icon: icon,
  category: "common",
  supports: {
    className: false,
    align: false,
  },
  keywords: [__("description list"), __("Description List")],
  attributes: {},
  edit,
  save,
  deprecated,
});
