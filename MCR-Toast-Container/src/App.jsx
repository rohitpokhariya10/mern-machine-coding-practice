import { useEffect, useState } from "react";
import "./index.css";
const App = () => {
  let [toasts, setToasts] = useState([
    {
      id: 0,
      type: "success",
      message: "Operation completed successfully!",
      status: false,
    },
    {
      id: 1,
      type: "Error",
      message: "Operation Failed",
      status: false,
    },
    {
      id: 2,
      type: "warning",
      message: "Operation have bugs",
      status: false,
    },
  ]);
  let [active, setActive] = useState(null);
   console.log("All Toasts-->", toasts);

  /*  */
  function handleSuccessToast(id) {
    setActive(id);
    setToasts((prev) =>
      prev.map((t) =>
        t.id == id ? { ...t, status: !t.status } : { ...t, status: false },
      ),
    );
  }

  /*  */
  function handleWarningToast(id) {
    setActive(id);
    setToasts((prev) =>
      prev.map((t) =>
        t.id == id ? { ...t, status: !t.status } : { ...t, status: false },
      ),
    );
  }
  /*  */
  function handleErrorToast(id) {
    setActive(id);
    setToasts((prev) =>
      prev.map((t) =>
        t.id == id ? { ...t, status: !t.status } : { ...t, status: false },
      ),
    );
  }

  /* Deleet Toast */
  function handleDeleteToast(id) {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id == id ? { ...toast, status: false } : toast,
      ),
    );
  }

  useEffect(() => {
    if (active == null) {
      console.log("No toast is active");
      return;
    }

   

    let timer = setTimeout(() => {
      setToasts((prev)=> prev.map((toast)=> toast.id == active ? {...toast , status:false} : toast))
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [active]);
 

  return (
    <div className="App">
      <div className="heading">
        <h1>MCR DAY 11 | Toast </h1>
      </div>
      {/* Toast container */}
      <div className="toast-container">
        {/* Render all Toasts */}
        {toasts.map((toast) => {
          return (
            toast.status && (
              <div className="toast" key={toast.id}>
                <div className="toast-type">
                  <div className="toast-content">
                  <span className={`toats-type ${toast.type.toLocaleLowerCase()}`}>{toast.type}</span>
                  <span className="toast-msg">{toast.message}</span>
                  </div>
                  <button
                    className="close"
                    onClick={() => handleDeleteToast(toast.id)}
                  >
                    ❌
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="toast-btn-container">
        <button onClick={() => handleSuccessToast(0)}>Success</button>
        <button onClick={() => handleErrorToast(1)}>Error</button>
        <button onClick={() => handleWarningToast(2)}>Warning</button>
      </div>
    </div>
  );
};

export default App;
