import Link from "next/link";

const Breadcrumb = ({ links, active }) => {
  return (
    <div className="flex mb-20">
      {links.map(({ link, title }) => {
        return (
          <Link href={link} key={link}>
            <a className="font-semibold text-12 uppercase text-darkgray relative pr-20 after:w-3 after:h-3 after:rounded-full after:bg-darkgray after:absolute after:right-[9px] after:top-[50%] after:translate-y-[-50%]">
              {title}
            </a>
          </Link>
        );
      })}

      <Link href="#">
        <a className="font-semibold uppercase text-12">{active}</a>
      </Link>
    </div>
  );
};
export default Breadcrumb;
