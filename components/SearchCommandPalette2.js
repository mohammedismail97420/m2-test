import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import MagnifyingGlassIcon from "@heroicons/react/solid";
import { UsersIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";

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

// const recent = [people[5], people[4], people[2], people[8], people[7]];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchCommandPalette() {
  const [query, setQuery] = useState("");

  const [open, setOpen] = useState(true);

  const filteredPeople =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="relative bg-darkgray2 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="relative z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-darkgray2 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox
                onChange={(person) => (window.location = person.profileUrl)}
              >
                {({ activeOption }) => (
                  <>
                    <div className="relative">
                      {/* <MagnifyingGlassIcon
                        className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 textdarkgray2-400"
                        aria-hidden="true"
                      /> */}
                      <Combobox.Input
                        className="h-35 w-full border-0 bg-transparent pl-11 pr-4 text-darkgray2 placeholder-darkgray2 focus:ring-0 sm:text-sm"
                        placeholder="Search..."
                        onChange={(event) => setQuery(event.target.value)}
                      />
                    </div>

                    {(query === "" || filteredPeople.length > 0) && (
                      <Combobox.Options
                        as="div"
                        static
                        hold
                        className="flex divide-x divide-darkgray2"
                      >
                        <div
                          className={classNames(
                            "max-h-160 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-15 py-15",
                            activeOption && "sm:h-160"
                          )}
                        >
                          {query === "" && (
                            <h2 className="mt-2 mb-4 text-xs font-semibold text-darkgray2">
                              Recent searches
                            </h2>
                          )}
                          <div className="-mx-2 text-sm divide-y divide-gray">
                            {(query === "" ? people : filteredPeople).map(
                              (person) => (
                                <Combobox.Option
                                  as="div"
                                  key={person.id}
                                  value={person}
                                  className={({ active }) =>
                                    classNames(
                                      "flex cursor-default select-none items-center p-2",
                                      active && "bg-gray "
                                    )
                                  }
                                >
                                  {({ active }) => (
                                    <div className="flex gap-30 justify-between w-full items-center my-6">
                                      <Image
                                        src={person.imageUrl}
                                        alt=""
                                        className="flex-none"
                                        height="70px"
                                        width="70px"
                                      />
                                      <div className="flex-auto truncate h-full flex flex-col justify-between">
                                        <span className="ml-3">
                                          {person.name}
                                        </span>
                                        <p className="h-full">{`Article Number: ${person.articleNumber}`}</p>
                                      </div>
                                      <div className="flex flex-col justify-between">
                                        <p className="text-red">{`Price: ${person.price}`}</p>
                                        <p>{`Delivery Time: ${person.deliveryTime}`}</p>
                                      </div>

                                      {active && (
                                        <ChevronRightIcon
                                          className="ml-3 h-25 w-25 flex-none text-darkgray"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </div>
                                  )}
                                </Combobox.Option>
                              )
                            )}
                          </div>
                        </div>

                        {/* {activeOption && (
                          <div className="hidden h-200 w-1/2 flex-none flex-col divide-y divide-darkgray2 overflow-y-auto sm:flex">
                            <div className="flex-none p-6 text-center">
                              <Image
                                src={activeOption.imageUrl}
                                alt=""
                                className="mx-auto h-45 w-45 rounded-full"
                                height="45px"
                                width="45px"
                              />
                              <h2 className="mt-3 font-semibold text-darkgray2">
                                {activeOption.name}
                              </h2>
                              <p className="text-sm leading-6 text-darkgray2">
                                {activeOption.role}
                              </p>
                            </div>
                            <div className="flex flex-auto flex-col justify-between p-6">
                              <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-darkgray2">
                                <dt className="col-end-1 font-semibold text-darkgray2">
                                  Phone
                                </dt>
                                <dd>{activeOption.phone}</dd>
                                <dt className="col-end-1 font-semibold text-darkgray2">
                                  URL
                                </dt>
                                <dd className="truncate">
                                  <a
                                    href={activeOption.url}
                                    className="text-indigo-600 underline"
                                  >
                                    {activeOption.url}
                                  </a>
                                </dd>
                                <dt className="col-end-1 font-semibold text-darkgray2">
                                  Email
                                </dt>
                                <dd className="truncate">
                                  <a
                                    href={`mailto:${activeOption.email}`}
                                    className="text-indigo-600 underline"
                                  >
                                    {activeOption.email}
                                  </a>
                                </dd>
                              </dl>
                              <button
                                type="button"
                                className="mt-6 w-full rounded-md border border-transparent bg-themeBlue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-themeBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                Send message
                              </button>
                            </div>
                          </div>
                        )} */}
                      </Combobox.Options>
                    )}

                    {query !== "" && filteredPeople.length === 0 && (
                      <div className="py-14 px-6 text-center text-sm sm:px-14">
                        <UsersIcon
                          className="mx-auto h-6 w-6 text-darkgray2-400"
                          aria-hidden="true"
                        />
                        <p className="mt-4 font-semibold text-darkgray2-900">
                          No people found
                        </p>
                        <p className="mt-2 text-darkgray2-500">
                          We couldn’t find anything with that term. Please try
                          again.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
