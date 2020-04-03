import React from "react";
import PropTypes from "prop-types";
import { resolveAlignmentClass } from "../utils/resolvers";
import { Link } from "gatsby";

const ButtonLink = ({ route, title, type, align, children }) => {
  const resolveClasses = {
    "lg-primary":
      "flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10",
    "md-primary":
      "flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",
    "lg-secondary":
      "flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10",
  };

  const classes = `${resolveClasses[type]} ${resolveAlignmentClass(align)}`;

  return (
    <Link className={classes} key={title} to={route}>
      {children}
    </Link>
  );
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  route: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  align: PropTypes.string,
};

ButtonLink.defaultProps = {
  children: undefined,
  type: "lg-primary",
  route: "#",
  target: undefined,
  title: undefined,
  align: "center",
};

export { ButtonLink };
