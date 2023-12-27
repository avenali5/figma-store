export type ProductType = {
  product: {
    product_name: string;
    main_image: string;
    tags: string[];
    description: string;
    pattern_image: string;
    price: string;
    id: string;
    units: string;
    new?: boolean;
    gallery: string[];
    quantity?: number;
  };
};

export type SearchTermType = {
  term: string;
};
