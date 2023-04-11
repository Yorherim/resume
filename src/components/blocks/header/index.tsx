import React, { ComponentProps, FC } from "react";

import styles from "./Header.module.css";
import { Contacts, Container, Divider, Name, Profession } from "../../index";
import { contacts, summary } from "../../../data";

const Header: FC<ComponentProps<"header">> = () => {
  return (
    <header>
      <Container>
        <Name name={"Igor Trifonov"} className={styles.name} />
        <Profession
          title={"Frontend developer"}
          className={styles.profession}
        />
        <Contacts contacts={contacts} className={styles.contacts} />
        <div className={styles.summary}>{summary}</div>
        <Divider />
      </Container>
    </header>
  );
};

export default Header;
