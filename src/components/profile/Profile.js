

// import { UserComments } from "./UserComments";
// import { UserForm } from "./UserForm";

// export const Profile = () => {
//     return (
//         <>
//         <div>
//         <img
//             src="https://nashvilleguru.com/officialwebsite/wp-content/uploads/2020/05/Cheekwood-Estate-and-Gardens-1200x533.jpg"
//             className="about_image"
//         />
//     </div>
//             <UserForm />;
//             <UserComments />
            
//         </>
//     );
// };  
/* ------------------------------------------------------------------------- */

/* 
        if (cheekwoodUserObject.userType === "employee") {
        //if employee Form
        return <EmployeeForm />;
    } else if(cheekwoodUserObject.userType === "patron"){
        //if Patron Form
        return <PatronForm  />;
    }
    */

/* ------------------------------------------------------------------------- */
    
import { UserForm } from "./UserForm";
import { useNavigate } from "react-router-dom";
import {UserComments} from "./UserComments";

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
            <button className="btn" onClick={() => { navigate("/profile/userForm") }}>
                Edit User Account
            </button>
            <button className="btn" onClick={() => { navigate("/profile/userComments") }}>
            Edit Favorites Events
        </button>
        </>
    );
};
    /* 
    onClick={() => {
                            localStorage.removeItem("honey_user")
                            navigate("/", {replace: true})
                        }}>
    */

    // navigate("/tickets"); //???????