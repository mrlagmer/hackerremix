import { Links, LiveReload, Outlet } from "remix";
import type { LinksFunction } from "remix";

import stylesUrl from "node_modules/@dracula/dracula-ui/styles/dracula-ui.css";
import styles from "./tailwind.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    { rel: "stylesheet", href: styles },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Hacker News by Remix</title>
        <Links />
      </head>
      <body className="drac-bg-black container mx-auto">
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
