export function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export function calculateTotalPrice(arr) {
  return arr?.reduce((acc, current) => {
    return acc + (current?.totalPrice || 0);
  }, 0);
}
