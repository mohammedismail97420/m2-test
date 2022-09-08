import Image from "next/image";
const CategoryCard = ({ title, subtitle, img, number }) => {
  return (
    <div className="bg-white p-20 min-h-[230px] max-w-[250px] w-[100%] relative">
      <h3 className="font-bold">{title}</h3>
      <p className="text-12 text-darkgray font-medium">{subtitle}</p>
      <span className="text-categoryNumber text-100 absolute -left-25  bottom-10 font-bold leading-[1] font-[Montserrat]">
        {number}
      </span>
      <div className="absolute right-20 -bottom-20">
        <Image width="100px" height="150px" src={img} alt="Product" />
      </div>
    </div>
  );
};
export default CategoryCard;
