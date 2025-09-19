import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import type { ReactElement } from "react";
import { authRoutes } from "./auth.routes";

// Interface com suporte a rotas aninhadas
export interface AppRoute {
  path: string;
  element: ReactElement;
  children?: AppRoute[];
}

// Exemplo de importação de rotas
// import { colaboradoresRoutes } from "@/routes/colaboradores.routes";

const allRoutes: AppRoute[] = [...authRoutes];

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {allRoutes.map(({ path, element, children }) => (
          <Route key={path} path={path} element={element}>
            {children?.map(({ path: childPath, element: childElement }) => (
              <Route key={childPath} path={childPath} element={childElement} />
            ))}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};
