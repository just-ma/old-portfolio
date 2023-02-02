import React from "react";
import PictureContainer from "../components/PictureContainer/PictureContainer";
import { FILE_TYPE } from "../constants";

import UCLA_0_t from "../assets/pictures/design/ucla/UCLA_0_t.png";
import UCLA_1_t from "../assets/pictures/design/ucla/UCLA_1_t.png";
import UCLA_2_t from "../assets/pictures/design/ucla/UCLA_2_t.png";

import UCLA_0 from "../assets/pictures/design/ucla/UCLA_0.png";
import UCLA_1 from "../assets/pictures/design/ucla/UCLA_1.png";
import UCLA_2 from "../assets/pictures/design/ucla/UCLA_2.png";
import UCLA_3 from "../assets/pictures/design/ucla/UCLA_3.png";
import UCLA_4 from "../assets/pictures/design/ucla/UCLA_4.png";
import UCLA_5 from "../assets/pictures/design/ucla/UCLA_5.png";
import UCLA_6 from "../assets/pictures/design/ucla/UCLA_6.png";
import UCLA_7 from "../assets/pictures/design/ucla/UCLA_7.png";
import UCLA_8 from "../assets/pictures/design/ucla/UCLA_8.png";
import UCLA_9 from "../assets/pictures/design/ucla/UCLA_9.png";
import UCLA_10 from "../assets/pictures/design/ucla/UCLA_10.png";

import shirt_1_t from "../assets/pictures/design/shirts/shirt_1_t.png";
import shirt_2_t from "../assets/pictures/design/shirts/shirt_2_t.png";
import shirt_3_t from "../assets/pictures/design/shirts/shirt_3_t.png";

import shirt_1 from "../assets/pictures/design/shirts/shirt_1.png";
import shirt_2 from "../assets/pictures/design/shirts/shirt_2.png";
import shirt_3 from "../assets/pictures/design/shirts/shirt_3.png";
import shirt_4 from "../assets/pictures/design/shirts/shirt_4.png";
import shirt_5 from "../assets/pictures/design/shirts/shirt_5.png";
import shirt_6 from "../assets/pictures/design/shirts/shirt_6.png";
import shirt_7 from "../assets/pictures/design/shirts/shirt_7.png";
import shirt_8 from "../assets/pictures/design/shirts/shirt_8.png";
import shirt_9 from "../assets/pictures/design/shirts/shirt_9.png";

import misc_1_t from "../assets/pictures/design/misc/misc_1_t.png";
import misc_2_t from "../assets/pictures/design/misc/misc_2_t.png";
import misc_3_t from "../assets/pictures/design/misc/misc_3_t.png";

import misc_1 from "../assets/pictures/design/misc/misc_1.png";
import misc_2 from "../assets/pictures/design/misc/misc_2.png";
import misc_3 from "../assets/pictures/design/misc/misc_3.png";
import misc_4 from "../assets/pictures/design/misc/misc_4.png";
import misc_5 from "../assets/pictures/design/misc/misc_5.png";

const DESIGN = [
  {
    id: "design_ucla",
    size: { x: 500, y: 400 },
    pos: { x: -100, y: 100 },
    title: "UCLA",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [UCLA_0_t, UCLA_1_t, UCLA_2_t],
    content: (
      <PictureContainer
        pictures={[
          UCLA_0,
          UCLA_1,
          UCLA_2,
          UCLA_3,
          UCLA_4,
          UCLA_5,
          UCLA_6,
          UCLA_7,
          UCLA_8,
          UCLA_9,
          UCLA_10,
        ]}
      />
    ),
  },
  {
    id: "design_shirt",
    size: { x: 500, y: 400 },
    pos: { x: -80, y: 130 },
    title: "Tshirt designs",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [shirt_1_t, shirt_2_t, shirt_3_t],
    content: (
      <PictureContainer
        pictures={[
          shirt_1,
          shirt_2,
          shirt_3,
          shirt_4,
          shirt_5,
          shirt_6,
          shirt_7,
          shirt_8,
          shirt_9,
        ]}
      />
    ),
  },
  {
    id: "design_misc",
    size: { x: 340, y: 380 },
    pos: { x: -60, y: 160 },
    title: "Misc",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [misc_1_t, misc_2_t, misc_3_t],
    content: (
      <PictureContainer pictures={[misc_1, misc_2, misc_3, misc_4, misc_5]} />
    ),
  },
];

export default DESIGN;
