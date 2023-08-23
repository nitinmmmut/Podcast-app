import React from "react";
import { useSelector } from "react-redux";
import Header from "../common/Header";
import Button from "../common/Button";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../common/Loader";

function Profile() {
  const user = useSelector((state) => state.user.user);

  console.log("My User", user);
  if (!user) {
    return <Loader />;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.uid}</h1>
      <Button text={"Logout"} onClick={handleLogout} />
    </div>
  );
}

export default Profile;
