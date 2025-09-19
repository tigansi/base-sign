import React from "react";
const AuthPage = React.lazy(() => import("@/modules/auth/AuthPage"));

export const authRoutes = [
  {
    path: "/",
    element: <AuthPage />,
    children: [
      { path: "", element: <AuthPage /> }
    ]
  }
];
