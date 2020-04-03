export const resolveSizeBySpace = {
  none: "0",
  auto: "auto",
  default: "6",
  xs: "1",
  sm: "2",
  md: "4",
  lg: "8",
  xl: "12",
};

export const resolveSpacingClass = (value, space) => {
  if (value === undefined) return value;
  if (space === undefined) space = "default";
  const size = resolveSizeBySpace[space] || "0";
  return `${value}-${size}`;
};

const resolveAlignmentByName = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const resolveAlignmentClass = (name) => {
  if (name === undefined) return name;
  const className = resolveAlignmentByName[name] || "text-left";
  return className;
};
