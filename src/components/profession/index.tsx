import React, { ComponentProps, FC } from "react";

import styles from "./Profession.module.css";

type ProfessionProps = {
  title: string;
};
const Profession: FC<ComponentProps<"div"> & ProfessionProps> = ({
  title,
  className,
  ...props
}) => {
  return (
    <h3 className={`${styles.profession} ${className}`} {...props}>
      {title}
    </h3>
  );
};

export default Profession;
