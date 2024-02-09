export interface SelectItemInterface {
  name?: string;
  label?: string;
  value: string;
  symbol?: string;
  image?: string;
}

interface ErrorMessage {
  property: string;
  message: string;
}

export interface ErrorInterface {
  message: ErrorMessage;
}
