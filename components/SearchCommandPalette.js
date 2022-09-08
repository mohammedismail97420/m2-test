import { useState } from "react";

const SearchCommandPalette = () => {
  const all = ["apple", "banana", "mango", "grapes"];
  const people = [
    {
      id: 1,
      name: "Leslie Alexander",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
    {
      id: 2,
      name: "James Alexander",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
    {
      id: 3,
      name: "Ben Alexander",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
    {
      id: 4,
      name: "Cat Ben",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
    {
      id: 5,
      name: "James Tim",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
    {
      id: 6,
      name: "Tim Alexander",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
    {
      id: 7,
      name: "Mohd Gausi",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
    {
      id: 8,
      name: "James Due",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
    {
      id: 9,
      name: "James Cameron",
      phone: "1-493-747-9031",
      email: "lesliealexander@example.com",
      role: "Co-Founder / CEO",
      url: "https://example.com",
      profileUrl: "#",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
    },
  ];
  const [filter, setFilter] = useState([]);

  const [noResults, setNoResults] = useState(false);

  const search = (e) => {
    const finds = people.filter((element) => {
      return element.name.toLowerCase().includes(e.target.value);
    });

    if (e.target.value.length > 0) {
      setFilter(finds);
    } else {
      setFilter([]);
      setNoResults(true);
    }
  };

  const handleBlur = () => {
    setFilter([]);
    setNoResults(false);
  };

  return (
    <div search={search}>
      {filter.length !== 0 && (
        <div className="absolute top-full z-10 w-[50vw] shadow-md bg-gray">
          {filter.map((data) => {
            return (
              <div
                key={data?.name}
                className="group flex gap-30 justify-between w-full px-15 py-3 items-center odd:bg-white flex-1 hover:bg-themeBlue divide-1"
              >
                <img src={data.imageUrl} alt="" className="flex-none h-55" />
                <div className="flex-auto truncate flex flex-col justify-between">
                  <p className="ml-3 text-black text-12 font-bold mb-10 group-hover:text-white">
                    {data.name}
                  </p>
                  <p className="group-hover:text-white text-black text-12">{`Article Number: ${data.articleNumber}`}</p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className=" group-hover:text-white text-red text-12 mb-10 font-bold">{`Price: ${data.price}`}</p>
                  <p className="group-hover:text-white text-black text-12">{`Delivery Time: ${data.deliveryTime}`}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {noResults && (
        <p className="text-red absolute top-full bg-white">No result found!</p>
      )}
    </div>
  );
};
export default SearchCommandPalette;
