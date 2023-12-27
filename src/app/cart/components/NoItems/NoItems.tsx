import React from "react";
import { NoItemsStyle } from "./NoItems.style";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const NoItems = () => {
  const router = useRouter();
  return (
    <NoItemsStyle>
      <h2>EMPTY CART, AAACKKK</h2>
      <Button type='solid' onClick={() => router.push("/#store")}>
        SEE ALL PRODUCTS
      </Button>
    </NoItemsStyle>
  );
};

export default NoItems;
