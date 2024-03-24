import { MdOutlineWatchLater } from "react-icons/md";
import { BsFire } from "react-icons/bs";

const Scard = ({ card,handleWantTocok }) => {
  // console.log(card);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-md border  ">
        <figure className="p-4">
          <img className="rounded-xl h-60 w-80" src={card.image} alt="Shoes" />
        </figure>
        <div className="px-4">
          <h2 className="lexend  font-semibold text-lg">{card.r_name}</h2>
          <p className="mt-2 lexend text-sm text-gray-500 font-normal">
            {card.description}
          </p>
          <hr className="mt-4" />
          <h1 className="lexend font-semibold text-lg mt-4">
            Ingredients:{card.ingredients.length}{" "}
          </h1>
          <div className="pl-8 mt-3">
            <ul className="lexend text-sm text-gray-500">
              <li className="list-disc">{card.ingredients[0]}</li>
              <li className="list-disc">{card.ingredients[1]}</li>
              <li className="list-disc">{card.ingredients[2]}</li>
              <li className="list-disc">{card.ingredients[3]}</li>
            </ul>
          </div>

          <hr className="mt-3" />
          <div className="flex gap-4 mt-3">
            <div className="flex gap-2 lexend text-base">
              <MdOutlineWatchLater className="text-2xl text-gray-500" />
              <h1>{card.p_time}</h1>
            </div>
            <div className="flex gap-2 lexend text-base">
              <BsFire className=" text-xl text-gray-500" />
              <h1>{card.calories}</h1>
            </div>
          </div>
          <div className="card-actions mt-4 mb-4 ">
            <button onClick={()=>handleWantTocok(card)} className="bg-[#0BE58A] rounded-full  w-32 text-normal btn ">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scard;
