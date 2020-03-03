import Layout from "../components/Layout";
import Prices from "../components/Prices";
import Fetch from "isomorphic-unfetch"; // Esto permite hacer fetch desde el cliente

const Index = props => (
  // este props agarra lo del getInitialProps
  <Layout>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  // getInitialProps es un lifecycle method de Next

  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data // bitcoin price index
  };
};

export default Index;
