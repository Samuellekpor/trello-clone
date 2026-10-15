import { CardContainer } from "./styles";

type CardTProps = {
  text: string;
};

export const Card = ({ text }: CardTProps) => {
  return <CardContainer>{text}</CardContainer>;
};
