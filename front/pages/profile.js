import { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import ProfilePage from "../components/profile-page";
import { GetUser } from "../lib/user";

export default function Profile() {
	const [userData, setUserData] = useState();
	useEffect(()=>{
		async function GetUserData() {
			const userData = await GetUser();
			setUserData(userData);
		} 
		GetUserData();
	}, [])
	console.log(userData);
  return (
    <Layout filterless={true}>
	{
		userData ? <ProfilePage username={userData.user.username} email={userData.user.email} />
	: null
	} 
    </Layout>
  );
}
