import { useRouteError, NavLink } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Oops! An error occurred.</h1>
      {/* error safe check */}
      {error && (
        <p>
          {error.statusText || error.message || "Something went wrong!"}
        </p>
      )}

      <NavLink to="/">
        <button
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Go Home
        </button>
      </NavLink>
    </div>
  );
};
