import { devNavUrl, urlDeveloper } from "../functions/functions-general";
import Classes from "../pages/developer/classes/Classes";
import Dashboard from "../pages/developer/dashboard/Dashboard";
import Student from "../pages/developer/student/Student";
import Teacher from "../pages/developer/teacher/Teacher";

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
  {
    path: `${devNavUrl}/${urlDeveloper}/teachers`,
    element: (
      <>
        <Teacher />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/classes`,
    element: (
      <>
        <Classes />
      </>
    ),
  },
];
