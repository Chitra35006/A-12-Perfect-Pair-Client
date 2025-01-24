import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// Import useAuth
import EditBioDataPage from "./EditBioDataPage";
import AddEditBioData from "./AddEditBioData";
import useAuth from "../../../hooks/useAuth";

const UserBioDataPage = () => {
  const { user } = useAuth(); // Get user from auth context
  const userEmail = user?.email; // Get user email
  const [userBioData, setUserBioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!userEmail) {
      // If email is not available, return early
      console.error('User email is not available');
      return;
    }

    const fetchUserBioData = async () => {
      try {
        const response = await axiosSecure.get(`/userBioDataId`, {
          params: { email: userEmail }, // Pass email as a query parameter
        });

        if (response.data) {
          setUserBioData(response.data); // Store the returned bio data if exists
        } else {
          setUserBioData(null); // No data found (user hasn't filled the form)
        }
      } catch (error) {
        console.error('Error fetching user bio data:', error);
        setUserBioData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserBioData();
  }, [userEmail]); // Fetch when userEmail changes

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
