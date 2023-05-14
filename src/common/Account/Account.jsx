import React from "react";
import "./style.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import AccountProfile from "../../components/account/Profile";
import AccountAddress from "../../components/account/Address";
import AccountOrders from "../../components/account/Orders"
import AccountReturnOfOrder from "../../components/account/ReturnOfOrder"
import AccountBills from "../../components/account/Bills"


const Account = () => {

    return (
        <>
            <Tabs
                defaultActiveKey="profile-account"
                id="fill-tab-example"
                className="mb-3 navbar-account"
                fill>
                <Tab eventKey="profile-account" title="Perfil">
                    <AccountProfile />
                </Tab>
                <Tab eventKey="address-account" title="Direcciones">
                    <AccountAddress />
                </Tab>
                <Tab eventKey="orders-account" title="Pedidos">
                    <AccountOrders />
                </Tab>
                <Tab eventKey="return_of_order-account" title="Devoluciones" >
                    <AccountReturnOfOrder />
                </Tab>
                <Tab eventKey="bills-account" title="Facturas" >
                    <AccountBills />
                </Tab>
            </Tabs>
        </>
    );
};

export default Account;
