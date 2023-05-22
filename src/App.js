import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationMenu from "./components/layout/NavigationMenu";
import Home from "./pages/Home";
import JobListing from "./pages/JobListing";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { autoLogin } from "./store/actions/auth";
import store from "./store";
import { Provider } from "react-redux";
import { getToken } from "./services/cache";
import { setCurrentUser } from "./store/reducers/auth";
import { NotificationContainer } from "react-notifications";
import PrivateRoute from "./routers/PrivateRoute";
import NotFound from "./pages/NotFound";
import JobDetail from "./pages/JobDetail";

// get token from localstorage
const token = getToken();

// to check if token is valid whenever app start
if (token) {
  store.dispatch(autoLogin());
  store.dispatch(setCurrentUser(JSON.parse(token)));
}

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavigationMenu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobListing />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            
            {/* protected register and login route */}
            <Route
              path="/register"
              element={
                <PrivateRoute>
                  <Register />
                </PrivateRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PrivateRoute>
                  <Login />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Page Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavigationMenu>
        <Footer />
      </BrowserRouter>
      <NotificationContainer />
    </Provider>
  );
};

export default App;
