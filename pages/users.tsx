import DataTable from "react-data-table-component";
import { TableColumn } from "react-data-table-component/dist/src/DataTable/types";
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

const columns = [
  {
    name: "#",
    selector: "serial",
  },
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
  },
  {
    name: "Role",
    selector: "role.name",
    sortable: true,
  },
  {
    name: "Created At",
    selector: "createdAt",
    sortable: true,
  },
] as unknown as TableColumn<unknown>[];

export default function Users({ userList }: { userList: responseData }) {
  userList.data.forEach((user: any, index: any) => {
    user.serial = index + 1;
    user.createdAt = user.createdAt.substring(0, 10);
  });
  return (
    <>
      <Navbar />
      {userList.success && (
        <div className="mx-x px-5">
          <DataTable
            title="Users"
            columns={columns}
            data={userList.data}
            pagination
            highlightOnHover
            className="border"
          />
        </div>
      )}
    </>
  );
}
