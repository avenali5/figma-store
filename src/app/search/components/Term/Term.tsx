import React from "react";
import { TermStyle } from "./Term.style";
import { SearchTermType } from "@/types";

const Term = ({ term }: SearchTermType) => {
  return (
    <TermStyle>
      <h3>"{term.toUpperCase()}"</h3>
    </TermStyle>
  );
};

export default Term;
