import Navbar from "../components/navbar";
import { GETAPI, responseData } from "../constants/API";
export async function getStaticProps() {
  const userList = await GETAPI("/user");
  return {
    props: {
      userList,
    },
  };
}
export default function Users({ userList }: { userList: responseData }) {
  console.log(userList);

  return (
    <>
      <Navbar />
      <ul>
        {userList.success &&
          userList.data.map((item: any) => <li>{item.name}</li>)}
      </ul>
    </>
  );
}
