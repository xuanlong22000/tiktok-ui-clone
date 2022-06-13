import { publicRoutes } from "./routes";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { DefaultLayout } from "~/components/Layout";
import { Fragment } from "react";


function App() {
  return (
    <Router>
      <div>

        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout // Or HeaderOnly
            } else if (route.layout === null) {
              Layout = Fragment // Or null
            }

            const Page = route.component
            return <Route key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>

      </div>
    </Router>
  )
}

export default App;
