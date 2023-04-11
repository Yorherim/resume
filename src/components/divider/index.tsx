import React, { ComponentProps, FC } from "react";

import styles from "./Divider.module.css";

const Divider: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return <div className={`${styles.divider} ${className}`}></div>;
};

export default Divider;
