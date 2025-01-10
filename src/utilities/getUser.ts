export const initializeLocalStorage = () => {
  const users : string | null = localStorage.getItem("users");
  if (!users) {
    // Initialize with an empty array if not already present
    localStorage.setItem("users", JSON.stringify([]));
    }
    return users;
};
initializeLocalStorage();
