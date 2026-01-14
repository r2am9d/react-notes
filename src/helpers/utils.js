/**
 * Capitalizes the first letter of a string.
 */
export const capitalize = (str) =>
  str && typeof str === "string"
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : "";
