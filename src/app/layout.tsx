import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <div>
        <AntdRegistry>{children}</AntdRegistry>
      </div>
    </body>
  </html>
);

export default RootLayout;
