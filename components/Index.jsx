'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();

    const restaurant = {
        name: "Tasty Bites",
        image: "/Restaunt_Image.jpg",
        items: [
            { id: 1, name: "Margherita Pizza", price: 8.99, image: "/Pizza_image.jpg" },
            { id: 2, name: "Veg Burger", price: 5.99, image: "/Veg_burger.jpg" },
            { id: 3, name: "Pasta Alfredo", price: 7.49, image: "/Pasta_image.jpg" },
        ],
    };

    const [cart, setCart] = useState({});

    const addToCart = (item) => {
        setCart((prevCart) => ({
            ...prevCart,
            [item.id]: prevCart[item.id] ? { ...prevCart[item.id], quantity: prevCart[item.id].quantity + 1 } : { ...item, quantity: 1 },
        }));
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            if (prevCart[itemId].quantity === 1) {
                const newCart = { ...prevCart };
                delete newCart[itemId];
                return newCart;
            }
            return {
                ...prevCart,
                [itemId]: { ...prevCart[itemId], quantity: prevCart[itemId].quantity - 1 },
            };
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold">
                        {restaurant.name}
                    </div>
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-black">Menu</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {restaurant.items.map((item) => (
                            <div key={item.id} className="flex items-center bg-gray-50 p-4 rounded-lg shadow">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover mr-4" />
                                <div className="flex-1">
                                    <h3 className="font-medium text-black">{item.name}</h3>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    <div className="mt-2 flex items-center gap-2">
                                        {cart[item.id] ? (
                                            <>
                                                <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
                                                <span>{cart[item.id].quantity}</span>
                                                <button onClick={() => addToCart(item)} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
                                            </>
                                        ) : (
                                            <button onClick={() => addToCart(item)} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {Object.keys(cart).length > 0 && (
                    <div className="p-6 bg-gray-200">
                        <h2 className="text-lg font-semibold mb-2 text-black">Your Cart</h2>
                        {Object.values(cart).map((item) => (
                            <div key={item.id} className="flex justify-between bg-white p-2 rounded shadow mb-2">
                                <span className="text-black">{item.name} (x{item.quantity})</span>
                                <span className="text-black">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <button 
                            className="w-full mt-4 bg-orange-500 text-white py-2 rounded" 
                            onClick={() => router.push('/checkout')}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
