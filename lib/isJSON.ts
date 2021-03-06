import assertString from "./utils/assertString.ts";

export default function isJSON(str: string) {
  assertString(str);
  try {
    const obj = JSON.parse(str);
    return !!obj && typeof obj === "object";
  } catch (e) { /* ignore */ }
  return false;
}
