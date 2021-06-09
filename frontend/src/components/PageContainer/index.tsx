import { ReactNode } from "react";
import { Container } from "reactstrap";
import Header from "../Header";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}