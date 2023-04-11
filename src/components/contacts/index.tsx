import React, { ComponentProps, FC } from "react";

import styles from "./Contacts.module.css";

type ContactsProps = {
  contacts: string[];
};
const Contacts: FC<ComponentProps<"div"> & ContactsProps> = ({
  contacts,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.contacts} ${className}`} {...props}>
      {contacts.map((contact, i) => {
        return (
          <>
            <span className={styles.contact}>{contact}</span>
            <span className={styles.slash}>
              {i !== contacts.length - 1 && "/"}
            </span>
          </>
        );
      })}
    </div>
  );
};

export default Contacts;
