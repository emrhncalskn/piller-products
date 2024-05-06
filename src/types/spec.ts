export type Spec = {
  type: string;
  title: string;
  name: string;
  subType?: string;
  placeholder?: string;
  options?: {
    label: string;
    value: string;
  }[];
};
