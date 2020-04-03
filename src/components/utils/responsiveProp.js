export const normaliseResponsiveProp = (value) => {
  if (typeof value === "string" || typeof value === "number") {
    return [value, value, value];
  }

  if ("length" in value) {
    const { length } = value;

    if (length === 2) {
      const [mobileValue, tabletValue] = value;
      return [mobileValue, tabletValue, tabletValue];
    }

    if (length === 3) {
      return value;
    }

    if (length === 1) {
      const [mobileValue] = value;
      return [mobileValue, mobileValue, mobileValue];
    }

    throw new Error(`Invalid responsive prop length: ${JSON.stringify(value)}`);
  }

  throw new Error(`Invalid responsive prop value: ${JSON.stringify(value)}`);
};

export const mapResponsiveProp = (value, valueMap) => {
  if (value === undefined) {
    return value;
  }

  // If it's not a responsive prop, just map it directly
  if (typeof value === "string" || typeof value === "number") {
    return valueMap[value];
  }

  const [mobileValue, tabletValue, desktopValue] = normaliseResponsiveProp(
    value
  );

  return [valueMap[mobileValue], valueMap[tabletValue], valueMap[desktopValue]];
};

export const resolveResponsiveProp = (
  value,
  mobileAtoms,
  tabletAtoms,
  desktopAtoms
) => {
  if (typeof value === "string" || typeof value === "number") {
    return mobileAtoms[value];
  }

  const [mobileValue, tabletValue, desktopValue] = normaliseResponsiveProp(
    value
  );

  return `${mobileAtoms[mobileValue]}${
    tabletValue !== mobileValue ? ` ${tabletAtoms[tabletValue]}` : ""
  }${desktopValue !== tabletValue ? ` ${desktopAtoms[desktopValue]}` : ""}`;
};
