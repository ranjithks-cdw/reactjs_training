import OrdersContainer from "../../containers/ordersContainer/OrdersContainer";
import HomePage from '../homePage/HomePage';
/**
 * @description Method to create Orders Page component
 * @returns Orders Page
 * @ranjithks-cdw
 */
const OrdersPage = () => {
    return (
        <>
            <OrdersContainer />
            <HomePage />     
        </>
    );
};

export default OrdersPage;