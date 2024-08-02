import { Helmet } from "react-helmet-async";
import { CardStyled } from "../../components/card-styled";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <CardStyled />      
    </>
  );
}
