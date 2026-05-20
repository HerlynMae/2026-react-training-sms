import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routesDeveloper } from "./routes/routesDeveloper";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element=<>page not found.</> />
          {/* ... - spread or get all the key and value pairs from each route object */}
          {routesDeveloper.map(({ ...routesProps }, key) => {
            return <Route key={key} {...routesProps} />;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
