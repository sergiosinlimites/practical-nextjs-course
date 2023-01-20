import OldOrders from "@containers/OldOrders";
import Order from '@components/Order';
import '@styles/CheckoutContainer.scss';

const Orders = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My orders</h1>
        <OldOrders>
          <Order />
        </OldOrders>
      </div>
    </div>
  );
}

export default Orders;