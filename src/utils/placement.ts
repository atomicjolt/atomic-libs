import { Placement, PlacementAxis } from '@react-aria/overlays';

const placementMap: Record<Placement, PlacementAxis> = {
  "end": "right",
  "end top": "right",
  "end bottom": "right",
  "right": "right",
  "right bottom": "right",
  "right top": "right",

  "start": "left",
  "start top": "left",
  "start bottom": "left",
  "left": "left",
  "left bottom": "left",
  "left top": "left",

  "top": "top",
  "top start": "top",
  "top end": "top",
  "top left": "top",
  "top right": "top",

  "bottom": "bottom",
  "bottom start": "bottom",
  "bottom end": "bottom",
  "bottom left": "bottom",
  "bottom right": "bottom"
};

const invertAxisMap: Record<PlacementAxis, PlacementAxis> = {
  "left": "right",
  "right": "left",
  "top": "bottom",
  "bottom": "top",
  "center": "center"
};

export function placementAxis(placement: Placement): PlacementAxis {
  return placementMap[placement];
}

export function invertPlacementAxis(placement: Placement): PlacementAxis {
  const axis = placementAxis(placement);
  return invertAxisMap[axis];
}
