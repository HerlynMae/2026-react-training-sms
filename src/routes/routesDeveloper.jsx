import { devNavUrl, urlDeveloper } from "../functions/functions-general";
import Dashboard from "../pages/developer/dashboard/Dashboard";
import Student from "../pages/developer/student/Student";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${urlDeveloper}/`,
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/dashboard`,
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/students`,
    element: (
      <>
        <Student />
      </>
    ),
  },
];
