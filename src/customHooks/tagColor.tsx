const useTagColor = (role: string) => {
  if (role.includes("Cashier")) {
    return "gold";
  } else if (role.includes("Waiter")) {
    return "red";
  } else if (role.includes("Barista")) {
    return "blue";
  } else if (role.includes("Janitor")) {
    return "purple";
  }
};

export default useTagColor;
