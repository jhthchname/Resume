import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Loader from "./transition/transition";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <div>
        <AntdRegistry>
          <Loader>{children}</Loader>
        </AntdRegistry>
      </div>
    </body>
  </html>
);

export default RootLayout;
