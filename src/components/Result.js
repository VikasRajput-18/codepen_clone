import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./context/DataProvider";

const Result = () => {
  const { html, css, js } = useContext(DataContext);

  const [src, setSrc] = useState("");

  const srcCode = `
        <html>
          <style>${css}</style>
          <body>${html}
          <script>${js}</script>
          </body>
        </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js, srcCode]);

  console.log(src);

  return (
    <Container>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Container>
  );
};

const Container = styled(Box)`
  height: 41vh;
  word-break: break-word;
`;

export default Result;
