import React, { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { DataContext } from "./context/DataProvider";

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icon="/"
        color="#ff3c41"
        iconColor="#fff"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0ebeff"
        iconColor="#1d1e22"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JS"
        icon="{}"
        color="#fcd000"
        iconColor="#1d1e22"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  background: #060606;
  height: 100%;
  max-height: 50vh;
`;

export default Code;
