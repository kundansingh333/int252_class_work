import "./App.css";

function App() {
  return (
    <div className="ml-4">
      <div className="mt-8 mb-4">
        <img
          className="w-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05MQV0KkL7A9hMIbxJ8Z5G6eMkUuVQ08EBg&s"
          alt=""
        />
      </div>
      <h3 className="text-xl font-bold mb-8">
        Login to unlock awesome benefits
      </h3>
      <div className="flex justify-between items-center py-3 mr-4 mb-4">
        <div className="flex justify-center items-center gap-4">
          <img src="@assets/offers.png" alt="no" />
          <span className="font-bold">Personalize Offers</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src="" alt="no" />
          <span className="font-bold">Loalty Rewards</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src="" alt="no" />
          <span className="font-bold">Easy Payments</span>
        </div>
      </div>
      <div className="mr-8">
        <input
          type="text"
          placeholder="+91"
          className="w-full border-2 px-4 py-2 border-gray-600 rounded-md"
        />
      </div>
    </div>
  );
}

export default App;
