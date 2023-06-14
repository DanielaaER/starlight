import React, { useState } from 'react';
import './Style.css';
const WishList = () => {
    const [wish, setWish] = useState('');
    const [lists, setLists] = useState([]);
    const [activeListIndex, setActiveListIndex] = useState(0);
    const [isAddingList, setIsAddingList] = useState(false);
    const [listName, setListName] = useState('');
    const [isAddingWish, setIsAddingWish] = useState(false);

    const handleInputChange = (e) => {
        setWish(e.target.value);
    };

    const handleAddWish = () => {
        if (wish.trim() !== '') {
            const updatedLists = [...lists];
            updatedLists[activeListIndex].wishes.push({ name: wish, link: '' });
            setLists(updatedLists);
            setWish('');
            setIsAddingWish(false);
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

    const toggleAddWish = () => {
        setIsAddingWish(!isAddingWish);
    };

    const currentList = lists[activeListIndex];

    return (
        <div className="wishlist">
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
                    <button onClick={handleAddList}>
                        {isAddingList ? 'Cancelar' : 'Nueva Lista'}
                    </button>
                </div>
                {isAddingList ? (
                    <div className="list-name-input">
                        <input
                            type="text"
                            value={listName}
                            onChange={handleListNameChange}
                            placeholder="Nombre de la lista"
                        />
                        <button onClick={handleAddList}>Crear</button>
                    </div>
                ) : (
                    <>
                        {currentList ? (
                            <>
                                <h3>{currentList.name}</h3>
                                {!isAddingWish ? (
                                    <button onClick={toggleAddWish}>Agregar Producto</button>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            value={wish}
                                            onChange={handleInputChange}
                                            placeholder="Nombre del producto"
                                        />
                                        <button onClick={handleAddWish}>Agregar</button>
                                    </>
                                )}
                                {currentList.wishes.length > 0 ? (
                                    <div className="wish-list">
                                        <ul>
                                            {currentList.wishes.map((wish, index) => (
                                                <li key={index}>
                                                    <div className="product">
                                                        <img
                                                            src="ruta/a/la/imagen.jpg"
                                                            alt="Producto"
                                                        />
                                                        <a href={'/product'} target="_blank" rel="noopener noreferrer"> <span className="product-name">{wish.name}</span>
                                                        </a>
                                                    </div>
                                                    <button onClick={() => handleRemoveWish(index)}>Eliminar</button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <p className="empty-message">No hay productos en esta lista de deseos</p>
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
        </div>
    );
};

export default WishList;
