export const formatMoney = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatDate = (date: Date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
