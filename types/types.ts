export interface BundleOption {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  isPopular?: boolean;
  perks: {
    icon: "truck" | "book" | "gift";
    text: string;
  }[];
  desc?: string;
}

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export interface IngredientProps {
  data: {
    benefit: string;
    name: string;
    dosage: string;
    image: string;
    desc: string;
    study:string;
  };
}
