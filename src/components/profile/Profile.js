//import { EmployeeForm } from "./EmployeeForm";

import { UserComments } from "./UserComments";
import { UserForm } from "./UserForm";

export const Profile = () => {
    return (
        <>
            <UserForm />;
            <UserComments />
            
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
