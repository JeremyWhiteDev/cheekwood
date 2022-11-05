export const ApplicationViews = () => {
  const localUser = localStorage.getItem("project_user");
  const projectUserObject = JSON.parse(localUser);

  if (projectUserObject.userType === "employee") {
    return "<h1>Employee Views</h1>";
  } else {
    return "<h1>Patron Views</h1>";
  }
};
