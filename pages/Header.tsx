import React from "react";
import Link from "next/link";

export const Header: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <ul className="Wrapper">
          <Link href="/">
            <li className="link">not memonized Index</li>
          </Link>
          <Link href="/memonizedIndex">
            <li className="link">memonized Index</li>
          </Link>
          <Link href="/withFunc">
            <li className="link">withFunc</li>
          </Link>
          <Link href="/memonizedWithFunc">
            <li className="link">memonizedWithFunc</li>
          </Link>
        </ul>
      </nav>
      {children}
      <style jsx>{`
        .Wrapper {
          display: flex;
        }
        .link {
          margin: 10px;
          color: blue;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
      <style jsx global>{`
        li {
          list-style: none;
        }
      `}</style>
    </>
  );
};
