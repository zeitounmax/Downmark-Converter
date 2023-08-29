import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import Turndown from "turndown";
import {
  Grid,
  Container,
  TextareaAutosize,
  Button,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

function Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const md = new MarkdownIt();
  const turndownService = new Turndown();

  const convertToHTML = () => {
    let htmlOutput = md.render(input);
    setOutput(htmlOutput);
  };

  const convertToMarkdown = () => {
    let markdown = turndownService.turndown(input);
    setOutput(markdown);
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="center" my={3}>
        <Avatar
          src="https://i.ibb.co/NVtyBMR/DownMark.png"
          alt="DownMark Logo"
          style={{ width: 120, height: 120 }}
        />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            DownMark Converter
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            style={{ width: "100%", padding: "10px" }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tapez votre texte ici..."
            rowsMin={10}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={convertToHTML}
            fullWidth>
            Convertir en HTML
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={convertToMarkdown}
            fullWidth>
            Convertir en Markdown
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            style={{ width: "100%", padding: "10px" }}
            value={output}
            readOnly
            placeholder="Résultat de la conversion..."
            rowsMin={10}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Converter;
