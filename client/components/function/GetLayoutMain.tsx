import { ReactElement } from "react";
import MainLayout from "../layout/Main";

export default function getMainLayout(page: ReactElement) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
}