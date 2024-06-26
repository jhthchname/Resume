import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Transition from "./transition/transition";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <div>
        <AntdRegistry>
          <Transition>{children}</Transition>
        </AntdRegistry>
      </div>
    </body>
  </html>
);

export default RootLayout;
