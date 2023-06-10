import React from "react";

function HomePage() {
  return (
    <div
      style={{
        backgroundImage:
          'url( "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80")',
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "92px",
          fontFamily:
            ("Franklin Gothic Medium", "Arial Narrow", "Arial, sans-serif"),
          marginTop: "0px",
          textAlign: "center",
          color: "white",
        }}
      >
        ברוכים הבאים למסעדה{" "}
      </h1>
    </div>
  );
}

export default HomePage;
