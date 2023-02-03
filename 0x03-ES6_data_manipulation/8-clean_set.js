export default function cleanSet(set, startString) {
  let result = "";
  if (
    !set ||
    !startString ||
    !(set instanceof Set) ||
    typeof startString !== "string"
  ) {
    return "";
  }
  for (let item of set) {
    if (item.startsWith(startString)) {
      result += item.slice(startString.length) + "-";
    }
  }
  return result.slice(0, -1);
}
