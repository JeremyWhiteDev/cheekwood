//import { UserComment } from "./UserComment";
import { UserForm } from "./UserForm";
import { useNavigate } from "react-router-dom";
import {UserComment} from "./UserComment";

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
            <button className="btn" onClick={() => navigate("/UserForm")}>
                Edit User Account
            </button>

{/*             <button className="btn" onClick={() => navigate("/userComment")}>
                Edit Favorites Events
            </button> */}

            <button className="btn" onClick={() => navigate("/UserComment")}>
            Edit Favorites Events
        </button>

            {/* <UserForm />  */}
           {/*  <UserComment /> */}
        </>
    );
};

/* 
        if (cheekwoodUserObject.userType === "employee") {
        //if employee Form
        return <EmployeeForm />;
    } else if(cheekwoodUserObject.userType === "patron"){
        //if Patron Form
        return <PatronForm  />;
    }
    */
