"use client";

import Link, { LinkProps } from "next/link";

export type BreadcrumbItemProps = Omit<LinkProps, "href"> & {
  href?: LinkProps["href"];
  title: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItemProps[];
  separator?: React.ReactNode;
};

export const BreadcrumbItem = ({
  title,
  href,
  ...props
}: BreadcrumbItemProps) => {
  return href ? (
    <Link href={href} {...props} className="text-breadcr text-base">
      {title}
    </Link>
  ) : (
    <span className="text-light-green text-base">{title}</span>
  );
};

export const Breadcrumbs = ({ items, separator = ">" }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <BreadcrumbItem {...item} />
          {index < items.length - 1 && <span className="">{separator}</span>}
        </span>
      ))}
    </nav>
  );
};

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Breadcrumbs = () => {
//   const pathname = usePathname();

//   const pathSegments = pathname.split(">/").filter((segment) => segment);

//   return (
//     <nav>
//       <ol className="flex">
//         <li className=" text-light-green">
//           <Link href="#">Главная</Link>
//         </li>
//         {pathSegments.map((segment, index) => {
//           const isLast = index === pathSegments.length - 1;
//           const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
//           const displayName =
//             segment.charAt(0).toUpperCase() + segment.slice(1);
//           return (
//             <li key={segment} className={` ${isLast ? "" : "active"}`}>
//               {isLast ? displayName : <Link href={href}>{displayName}</Link>}
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumbs;
