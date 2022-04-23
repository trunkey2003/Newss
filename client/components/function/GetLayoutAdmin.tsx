import { ReactElement } from "react";
import AdminLayout from "../layout/admin";

export default function getLayoutAdmin(page: ReactElement) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
}