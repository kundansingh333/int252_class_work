import Card_1 from "./Card_1";
import Card_2 from "./Card_2";
import Card_3 from "./Card_3";
const CardContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      <Card_1 />
      <Card_2 />
      <Card_3 />
    </div>
  );
};

export default CardContainer;
