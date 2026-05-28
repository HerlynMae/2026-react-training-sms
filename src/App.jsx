import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routesDeveloper } from "./routes/routesDeveloper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./store/StoreContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path="*" element=<>page not found.</> />
              {/* ... - spread or get all the key and value pairs from each route object */}
              {routesDeveloper.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
