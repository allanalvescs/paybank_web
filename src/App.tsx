import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./Routes/app.routes";

import "./main.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      <AppRoutes />
    </>
  );
}

export default App;
