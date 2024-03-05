import leftArrow from "../../../../../assets/icons/arrowLeft.svg";
import rightArrow from "../../../../../assets/icons/arrowRight.svg";

export type Side = "right" | "left";

export const IMAGES: Record<Side, string> = {
  left: leftArrow,
  right: rightArrow,
};

export const POSITIONS: Record<Side, string> = {
  left: "arrowLeft",
  right: "arrowRight",
};
