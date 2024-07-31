import { Helmet } from "react-helmet-async";
import { CardStyled } from "../../components/CardStyled";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <CardStyled />      
    </>
  );
}
