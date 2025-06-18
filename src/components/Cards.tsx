
// import { dataCard } from "../data/dataCard";
import { dataCard } from "../data/cardData";
import SingleCard from "./SingleCard"; // create this

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 space-y-20 md:space-y-0 place-items-center ">
      {dataCard.map((item) => (
        <SingleCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Card;
