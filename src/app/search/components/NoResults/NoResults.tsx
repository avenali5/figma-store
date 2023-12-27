import React from "react";
import { NoResultsStyle } from "./NoResults.style";
import { SearchTermType } from "@/types";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const NoResults = ({ term }: SearchTermType) => {
  const router = useRouter();
  return (
    <NoResultsStyle>
      <h2>NO RESULTS FOR "{term.toUpperCase()}", AAACKKK</h2>
      <Button type='solid' onClick={() => router.push("/#store")}>
        SEE ALL PRODUCTS
      </Button>
    </NoResultsStyle>
  );
};

export default NoResults;
