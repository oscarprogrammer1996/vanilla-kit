import type { NextPage } from "next";
import { ReactNode } from "react";
import { sprinkles, Sprinkles } from "theme/sprinkles";

type BoxProps = Sprinkles & {
  children: ReactNode;
};

const Box: NextPage<BoxProps> = ({ children, ...css }) => {
  return <div className={sprinkles(css)}>{children}</div>;
};

export default Box;
