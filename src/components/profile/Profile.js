import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img
          src="https://nashvilleguru.com/officialwebsite/wp-content/uploads/2020/05/Cheekwood-Estate-and-Gardens-1200x533.jpg"
          className="about_image"
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          navigate("/profile/userForm");
        }}
      >
        Edit User Account
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate("/profile/userComments");
        }}
      >
        Edit Favorites Events
      </button>
    </>
  );
};
