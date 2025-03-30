"use client";
import React, { useEffect, useState } from "react";

const ProfilePage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access window safely
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to the profile page!</p>
      {windowWidth && <p>Window width: {windowWidth}px</p>}
    </div>
  );
};

export default ProfilePage;