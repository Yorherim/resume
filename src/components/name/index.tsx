import React, { ComponentProps, FC } from "react";

import styles from "./Name.module.css";

type NameProps = {
  name: string;
};

const Name: FC<ComponentProps<"div"> & NameProps> = ({
  name,
  className,
  ...props
}) => {
  return (
    <h2 className={`${styles.name} ${className}`} {...props}>
      {name}
    </h2>
  );
};

export default Name;
