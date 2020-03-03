import React from "react";

class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  componentDidMount = () => {
    console.log(this.props.bpi);
  };

  render() {
    const { bpi } = this.props.bpi;
    return (
      <React.Fragment>
        <div>
          <ul className="list-group">
            <li className="list-group-item">
              Bitcoin rate for {bpi.USD.description} :
              <span className="badge badge-primary"> {bpi.USD.code} </span>
              <strong>{bpi.USD.rate}</strong>
            </li>
          </ul>
        </div>
        <style jsx>{`
          span {
            margin: 0 0.3rem;
          }
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Prices;
