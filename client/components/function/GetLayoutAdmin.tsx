import { ReactElement } from "react";
import { AdminLayout } from "../layout";

export default function getLayoutAdmin(page: ReactElement) {
    return (
      <AdminLayout>
        {page}
      </AdminLayout>
    )
}