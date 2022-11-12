import "./Profile.css";
import { useEffect, useState } from "react";

export const UserForm = () => {
    const [profile, updateProfile] = useState({
        fullName: "",
        email: "",
    });
    /* --------------------------------- */
    const localCheekwoodUser = localStorage.getItem("project_user");
    const cheekwoodUserObject = JSON.parse(localCheekwoodUser);
    /* -------------Display-------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:8088/users?id=${cheekwoodUserObject.id} `
            );
            const data = await response.json();
            //console.log(data[0].userTypeId);
            updateProfile(data[0]);
        };
        fetchData();
    }, []);
    /* -------------Edit----------------- */
    const editProfile = async (SendToAPI) => {
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `http://localhost:8088/users/${profile.id}`,
            fetchOptions
        );
        const responseJson = await response.json();
        return responseJson;
    };

    /* ------------------------------ */
    const handleSaveButtonClick = (event) => {
        event.preventDefault();
        editProfile(profile);
    };
    /* ------------------------------ */

    return (
        <fieldset className="profile_form">
        <form className="profile">
            <h2 className="profile__title">Edit Patron Data:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullName">Name:</label>
                    <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        value={profile.fullName}
                        onChange={(evt) => {
                            const copy = { ...profile };
                            copy.fullName = evt.target.value;
                            updateProfile(copy);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={profile.email}
                        onChange={(evt) => {
                            const copy = { ...profile };
                            copy.email = evt.target.value;
                            updateProfile(copy);
                        }}
                    />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary"
            >
                Save Profile
                </button>
                <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary"
            >
                Delete Account
            </button>
            </form>
            </fieldset>
    );
};
