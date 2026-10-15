import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";

type ColumnProps = {
  text: string;
  children?: React.ReactNode;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Genarate app scaffold" />
      <Card text="Learn Typescript" />
      <Card text="Begin to use static typing" />
    </ColumnContainer>
  );
};
