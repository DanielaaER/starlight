import React from "react";
import "./style.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Withdrawals from "./Withdrawals";
import Orders from "./Orders";
import Products from "./Products";
import Settings from './Settings';
import Dashboard from './Dashboard';

const Sell = () => {

    return (
        <>
            <Tabs
                defaultActiveKey="sell-dashboard"
                id="fill-tab-example"
                className="mb-3 navbar-sell"
                fill>
                <Tab eventKey="sell-dashboard" title="Escritorio">
                    <Dashboard />
                </Tab>
                <Tab eventKey="sell-productsw" title="Productos">
                    <Products />
                </Tab>
                <Tab eventKey="sell-orders" title="Pedidos">
                    <Orders />
                </Tab>
                <Tab eventKey="sell-withdrawals" title="Retiros">
                    <Withdrawals />
                </Tab>
                <Tab eventKey="sell-setting" title="Ajustes">
                    <Settings />
                </Tab>
            </Tabs>
        </>
    );
};

export default Sell;