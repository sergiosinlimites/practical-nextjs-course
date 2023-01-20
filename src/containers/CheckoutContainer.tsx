import CheckoutItem from "@components/CheckoutItem";
import CheckoutTotal from "@components/CheckoutTotal";
import '@styles/CheckoutContainer.scss';

const CheckoutContainer = () => {
  return (
    <div className="CheckoutContainer">
      <div className="CheckoutContainer-container">
        <h1 className="title">My order</h1>
        <div className="CheckoutContainer-content">
          <CheckoutTotal />
          <CheckoutItem />
        </div>
      </div>
    </div>
  );
}

export default CheckoutContainer;