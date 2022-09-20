import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
const ProductCard = ({
  img,
  title,
  subtitle,
  price,
  dashedPrice,
  discount,
  rating,
  tagType,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const addToFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const [rate, setRate] = useState(null);

  useEffect(() => setRate(parseFloat(Math.floor(rating))), [rating]);

  return (
    <div className="px-10">
      <div className="p-30 bg-white relative">
        <div className="mx-auto">
          <Image width="700px" height="700px" src={img} alt="Product" />
        </div>
        <h4 className="font-bold mb-10">{title}</h4>
        <p className="text-12 font-medium mb-10">{subtitle}</p>
        <div className="font-sans">
          <span className="mr-10 text-themeBlue font-bold">{price}</span>
          <span className="line-through text-red2 font-bold mr-5">
            {dashedPrice}
          </span>
          <span className="text-red2 font-bold">{discount}</span>
        </div>
        <div className="mt-10">
          {_.times(rate, (i) => (
            <i key={i} className="fas fa-star text-rating mr-5"></i>
          ))}

          {rating[2] > 0 && rating[2] <= 3 && (
            <i className="fa-solid fa-star rangeStar text-darkgray relative after:absolute after:content-['\f005'] after:inset-0 after:text-rating after:overflow-hidden after:w-[30%]"></i>
          )}
          {rating[2] > 3 && rating[2] <= 7 && (
            <i className="fa-solid fa-star rangeStar text-darkgray relative after:absolute after:content-['\f005'] after:inset-0 after:text-rating after:overflow-hidden after:w-[50%]"></i>
          )}
          {rating[2] > 7 && rating[2] <= 99 && (
            <i className="fa-solid fa-star rangeStar text-darkgray relative after:absolute after:content-['\f005'] after:inset-0 after:text-rating after:overflow-hidden after:w-[75%]"></i>
          )}
          <span>{`(${rating})`}</span>
        </div>

        {tagType === "red" && (
          <div className="bg-themePink text-white text-12 font-medium absolute top-25 -left-7 px-13 py-3 after:border-b-[4.5px] after:border-r-[4.5px] after:border-t-[4.5px] after:border-red2 after:left-3 after:absolute after:top-21 after:rotate-[134deg] after:w-0 after:h-0 after:z-[-1]">
            Topseller
          </div>
        )}
        {tagType === "blue" && (
          <div className="absolute top-25 text-12 bg-themeBlue text-white px-3 py-2 rounded-[2px]">
            1 Sets left!
          </div>
        )}
        {/* {<i className="absolute top-30 right-30 text-18 fa-regular fa-heart"></i>} */}
        <div onClick={addToFavorite}>
          {isFavorite ? (
            <i className="absolute top-30 right-30 text-18 fa-solid fa-heart text-red cursor-pointer"></i>
          ) : (
            <i className="absolute top-30 right-30 text-18 fa-regular fa-heart cursor-pointer"></i>
          )}
        </div>

        <button className="absolute bottom-30 right-30">
          <Image
            src="/common/shopping-bag-blue.svg"
            width="16px"
            height="16px"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
