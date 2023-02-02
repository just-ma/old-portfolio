import React from "react";
import PictureContainer from "../components/PictureContainer/PictureContainer";
import { FILE_TYPE } from "../constants";

import paint_1_t from "../assets/pictures/art/paint/paint_1_t.jpg";
import paint_2_t from "../assets/pictures/art/paint/paint_2_t.jpg";
import paint_3_t from "../assets/pictures/art/paint/paint_3_t.jpg";

import paint_1 from "../assets/pictures/art/paint/paint_1.jpg";
import paint_2 from "../assets/pictures/art/paint/paint_2.jpg";
import paint_3 from "../assets/pictures/art/paint/paint_3.jpg";
import paint_4 from "../assets/pictures/art/paint/paint_4.jpg";
import paint_5 from "../assets/pictures/art/paint/paint_5.jpg";
import paint_6 from "../assets/pictures/art/paint/paint_6.jpg";
import paint_7 from "../assets/pictures/art/paint/paint_7.jpg";
import paint_8 from "../assets/pictures/art/paint/paint_8.jpg";
import paint_9 from "../assets/pictures/art/paint/paint_9.jpg";
import paint_10 from "../assets/pictures/art/paint/paint_10.jpg";
import paint_11 from "../assets/pictures/art/paint/paint_11.jpg";
import paint_12 from "../assets/pictures/art/paint/paint_12.jpg";
import paint_13 from "../assets/pictures/art/paint/paint_13.jpg";
import paint_14 from "../assets/pictures/art/paint/paint_14.jpg";

import draw_1_t from "../assets/pictures/art/draw/draw_1_t.jpg";
import draw_2_t from "../assets/pictures/art/draw/draw_2_t.jpg";
import draw_3_t from "../assets/pictures/art/draw/draw_3_t.jpg";

import draw_1 from "../assets/pictures/art/draw/draw_1.jpg";
import draw_2 from "../assets/pictures/art/draw/draw_2.jpg";
import draw_3 from "../assets/pictures/art/draw/draw_3.jpg";
import draw_4 from "../assets/pictures/art/draw/draw_4.jpg";

const ART = [
  {
    id: "art_paint",
    size: { x: 350, y: 400 },
    pos: { x: -100, y: 160 },
    title: "Paintings",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [paint_1_t, paint_2_t, paint_3_t],
    content: (
      <PictureContainer
        pictures={[
          paint_1,
          paint_2,
          paint_3,
          paint_4,
          paint_5,
          paint_6,
          paint_7,
          paint_8,
          paint_9,
          paint_10,
          paint_11,
          paint_12,
          paint_13,
          paint_14,
        ]}
      />
    ),
  },
  {
    id: "art_draw",
    size: { x: 440, y: 320 },
    pos: { x: -70, y: 190 },
    title: "Drawings",
    type: FILE_TYPE.PICTURE_CONTAINER,
    multiSource: [draw_1_t, draw_2_t, draw_3_t],
    content: <PictureContainer pictures={[draw_1, draw_2, draw_3, draw_4]} />,
  },
];

export default ART;
