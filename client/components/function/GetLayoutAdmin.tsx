import { ReactElement } from "react";
import AdminLayout from "../layout/Admin";

export default function getLayoutAdmin(page: ReactElement) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
}