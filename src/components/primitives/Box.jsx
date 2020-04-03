import React from "react";
import PropTypes from "prop-types";

export const Box = ({ component, base, sm, md, lg, xl, children }) => {
  const Component = component
  const smClasses = sm.split(" ").map(s => `sm:${s}`)
  const mdClasses = md.split(" ").map(m => `md:${m}`)
  const lgClasses = lg.split(" ").map(lg => `lg:${lg}`)
  const xlClasses = xl.split(" ").map(xl => `xl:${xl}`)
  const classes = [base, smClasses, mdClasses, lgClasses, xlClasses].flat().join(" ")

  return <Component className={classes}>{children}</Component>;
};

Box.propTypes = {
  children: PropTypes.node,
  component: PropTypes.string,
  base: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string
};

Box.defaultProps = {
  children: undefined,
  component: "div",
  base: "w-full",
  sm: "",
  md: "",
  lg: "",
  xl: ""
};
