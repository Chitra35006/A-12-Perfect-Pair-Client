import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import EditBioDataPage from "./EditBioDataPage";
import AddEditBioData from "./AddEditBioData";
import useAuth from "../../../hooks/useAuth";

const UserBioDataPage = () => {
  const { user } = useAuth(); // Get user from auth context
  const userEmail = user?.email; // Safely access email
  const [userBioData, setUserBioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!userEmail) {
      // console.error("User email is not available");
      setIsLoading(false); // Avoid infinite loading state
      return;
    }

    const fetchUserBioData = async () => {
      try {
        const response = await axiosSecure.get(`/userBioDataId`, {
          params: { email: userEmail },
        });

        if (response.data) {
          setUserBioData(response.data);
        } else {
          setUserBioData(null);
        }
      } catch (error) {
        console.error("Error fetching user bio data:", error);
        setUserBioData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserBioData();
  }, [userEmail, axiosSecure]); // Include axiosSecure in dependency array

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {userBioData ? (
        userBioData.id ? (
          <EditBioDataPage userBioData={userBioData} />
        ) : (
          <AddEditBioData userEmail={userEmail} />
        )
      ) : (
        <AddEditBioData userEmail={userEmail} />
      )}
    </div>
  );
};

export default UserBioDataPage;
