import * as _ from "underscore";

export function getCirclePaintStyle(activeCaseType, maxCircleSize) {
  const visible = ["number", ["feature-state", "visible"], 0],
    isActive = ["number", ["feature-state", "isActive"], 0],
    cases = ["number", ["feature-state", "cases"], 0];

  return {
    "circle-opacity": [
      "case",
      // Check to make sure property is not undefined
      ["==", visible, 1],
      1,
      0
    ],
    "circle-radius": [
      "interpolate",
      ["linear"],
      ["sqrt", cases],
      0,
      0,
      1250, // Square root of US total cases, around 1.55M on May 21, 2020
      maxCircleSize
    ],
    "circle-stroke-width": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0,
      0.5,
      6,
      1.5
    ],
    "circle-stroke-opacity": [
      "case",
      ["==", isActive, 1],
      1,
      0.45
    ],
    "circle-opacity": [
      "case",
      ["==", isActive, 1],
      0.85,
      0.25
    ],
    "circle-color": [
      "case",
      ["==", isActive, 1],
      activeCaseType.colorHex,
      "rgb(220, 220, 220)"
    ]
  };
}
