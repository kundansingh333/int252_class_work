import React from "react";

const Practice = () => {
  const [search, setSearch] = React.useState("");
  const [cart, setCart] = React.useState([
    { id: 1, name: "Item A", price: 30 },
    { id: 2, name: "Item B", price: 20 },
    { id: 3, name: "Item C", price: 50 },
  ]);
  const total = React.memo(() => {
    console.log("calculating total...");
    return cart.reduce((sum, item) => sum + item.price, 0);
  });

  const ClearButton = React.memo(({ onClear }) => {
    console.log("Rendering ClearButton");
    return (
      <button
        onClick={onClear}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Clear Cart
      </button>
    );
  });

  const clearCart = React.useCallback(() => {
    setCart([]);
  }, []);
  return (
    <div className="mt-28">
      <h1 className="text-4xl font-bold text-center">Practice Page</h1>
      <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Optimization Demo
          </h1>

          {/* 1. The Input (Forces Parent Re-render) */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-600">
              Type here (Watch the Console):
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type anything..."
              className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">
              Typing here updates state, but should NOT trigger logs below.
            </p>
          </div>

          {/* 2. The Cart Display */}
          <div className="border-t border-b py-4 my-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span className="font-bold">${item.price}</span>
              </div>
            ))}
            {cart.length === 0 && (
              <p className="text-gray-400 italic">Cart is empty</p>
            )}
          </div>

          {/* 3. The Result */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold text-green-600">${total}</span>
          </div>

          {/* 4. The Child Component */}
          <div className="flex justify-end">
            <ClearButton onClear={clearCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
