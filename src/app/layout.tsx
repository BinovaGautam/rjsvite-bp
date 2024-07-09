import "./globals.css";
import { ReduxStoreProvider } from "@/lib/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxStoreProvider>{children}</ReduxStoreProvider>
      </body>
    </html>
  );
}
