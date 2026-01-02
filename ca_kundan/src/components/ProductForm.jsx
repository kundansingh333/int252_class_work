import React, { useRef } from "react";

const ProductForm = ({ handleAdd }) => {
  let urlRef = useRef(null);
  let nameRef = useRef(null);
  let priceRef = useRef(null);
  let categoryRef = useRef(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      url: urlRef.current.value,
      name: nameRef.current.value,
      price: priceRef.current.value,
      category: categoryRef.current.value,
    };
    console.log(data);
    handleAdd(data);


    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Add New Product
        </h2>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            type="text"
            placeholder="https://example.com/image.jpg"
            required
            ref={urlRef}
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            type="text"
            placeholder="Enter product name"
            required
            ref={nameRef}
          />
        </div>


        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              type="number"
              placeholder="0.00"
              min={0}
              step="0.01"
              required
              ref={priceRef}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
              name="category"
              id="category"
              required
              ref={categoryRef}
            >
              <option value="" disabled selected>
                Select...
              </option>
              <option value="electronics">Electronics</option>
              <option value="clothes">Clothes</option>
              <option value="books">Books</option>
              <option value="furniture">Furniture</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>


        <button
          className="w-full mt-4 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
