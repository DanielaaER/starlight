import React, { useState } from 'react';
import './WishList.css';
import { Link } from "react-router-dom"

const products = [
    {
        id: 1,
        name: "Xbox control",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores corporis minima laboriosam omnis accusantium molestiae. Molestiae atque incidunt quia iure neque? Assumenda saepe nesciunt praesentium dolor architecto, fuga distinctio.",
        price: 1290.0,
        quantity: 1,
        url_img: "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088984261392l.jpg",
        delivery_address_id: 1,
        date_of_purchase: "10/04/2023 15:30",
        delivery_date: "11/04/2023 12:30",
        status: "en proceso de devolución"
    }
];

const WishList = () => {
    const [wish, setWish] = useState('');
    const [lists, setLists] = useState([]);
    const [activeListIndex, setActiveListIndex] = useState(0);
    const [isAddingList, setIsAddingList] = useState(false);
    const [listName, setListName] = useState('');
    const [isAddingWish, setIsAddingWish] = useState(false);
    const [jsonOutput, setJsonOutput] = useState('');
    const [productCode, setProductCode] = useState('');
    const [productDetails, setProductDetails] = useState(null);

    const handleInputChange = (e) => {
        setWish(e.target.value);
    };

    const handleAddWish = () => {
        if (productCode.trim() !== '') {
            const product = products.find((item) => item.id === parseInt(productCode));
            if (product) {
                const updatedLists = [...lists];
                updatedLists[activeListIndex].wishes.push({
                    name: product.name,
                    link: product.url_img,
                    price: product.price
                });
                setLists(updatedLists);
                setProductCode('');
                setProductDetails(product);
                setIsAddingWish(false);
            }
        }
    };

    const handleRemoveWish = (index) => {
        const updatedLists = [...lists];
        updatedLists[activeListIndex].wishes.splice(index, 1);
        setLists(updatedLists);
    };

    const handleAddList = () => {
        if (isAddingList && listName.trim() !== '') {
            const newList = {
                name: listName,
                wishes: []
            };
            setLists([...lists, newList]);
            setActiveListIndex(lists.length);
            setListName('');
        }
        setIsAddingList(!isAddingList);
    };

    const handleSetActiveList = (index) => {
        setActiveListIndex(index);
    };

    const handleListNameChange = (e) => {
        setListName(e.target.value);
    };

    const currentList = lists[activeListIndex];

    const handleShowJson = () => {
        const json = JSON.stringify(lists[activeListIndex]);
        setJsonOutput(json);
    };

    return (
        <wishlist>
            <div className="container-wish">
                <h2>Lista de Deseos</h2>
                <div className="list-navigation">
                    {lists.map((list, index) => (
                        <button
                            key={index}
                            onClick={() => handleSetActiveList(index)}
                            className={index === activeListIndex ? 'active' : ''}
                        >
                            {list.name}
                        </button>
                    ))}
                    <button onClick={() => setIsAddingList(!isAddingList)}>
                        {isAddingList ? 'Cancelar' : 'Agregar Lista'}
                    </button>
                </div>
                {isAddingList ? (
                    <div className="list-name-input">
                        <input
                            type="text"
                            placeholder="Nombre de la lista"
                            value={listName}
                            onChange={handleListNameChange}
                        />
                        <button onClick={handleAddList}>Agregar</button>
                    </div>
                ) : (
                    <>
                        {currentList ? (
                            <>
                                {isAddingWish ? (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Nombre del producto"
                                            value={productCode}
                                            onChange={(e) => setProductCode(e.target.value)}
                                        />
                                        <button onClick={handleAddWish}>Agregar</button>
                                        <button onClick={() => setIsAddingWish(false)}>Cancelar</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => setIsAddingWish(true)}>Agregar Producto</button>
                                        {/* <button onClick={handleShowJson}>Mostrar JSON</button> */}
                                        {/* {productDetails && (
                                            <div className="product-details">
                                                <h3>{productDetails.name}</h3>
                                                <img src={productDetails.url_img} alt={productDetails.name} />
                                                <p>Precio: ${productDetails.price}</p>
                                            </div>
                                        )} */}
                                        {currentList.wishes.length > 0 ? (
                                            <ul className="wish-list">
                                                {currentList.wishes.map((wish, index) => (
                                                    <li key={index}>
                                                        <img className='ImagenList' src={wish.link} alt={wish.name} />
                                                        <Link to="/producto">
                                                            <label>{wish.name}</label>
                                                        </Link>
                                                        <p>${wish.price}</p>
                                                        <button onClick={() => handleRemoveWish(index)}>Eliminar</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="empty-message">No hay productos en la lista.</p>
                                        )}
                                    </>
                                )}
                            </>
                        ) : (
                            <p className="empty-message" onClick={() => setIsAddingList(true)}>
                                Lista vacía. Haz clic aquí para crear una nueva lista.
                            </p>
                        )}
                    </>
                )}
            </div>
            {/* {jsonOutput && (
        <div className="json-output">
          <h3>JSON de la Lista</h3>
          <pre>{jsonOutput}</pre>
        </div>
      )} */}
        </wishlist>
    );
};

export default WishList;
