import { ReactElement } from "react";
import { AdminLayout } from "../layout/index";

export default function getLayoutAdmin(page: ReactElement) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
}