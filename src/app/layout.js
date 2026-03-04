
import "./style.css";

export const metadata = {
  title: "My First To-do app",
  description: "by Nithi Prasarnphanich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="app-body">
        {children}
      </body>
    </html>
  )
}
