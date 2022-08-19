import React from "react";
import { Sprinkles } from "theme/sprinkles";

export type ComponentTypes =
  | ButtonPropsWithSprinkles
  | DivPropsWithSprinkles
  | ImagePropsWithSprinkles;

export interface DivPropsWithSprinkles
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof Sprinkles>,
    Sprinkles {}

export interface ButtonPropsWithSprinkles
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Sprinkles>,
    Sprinkles {}

export interface ImagePropsWithSprinkles
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Sprinkles>,
    Sprinkles {}
