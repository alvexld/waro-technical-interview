import React from "react";
import "./App.css";
import Card from "@mui/material/Card";
import { CardContent, CardHeader, Stack } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Stack spacing={2} alignItems="center">
        <header>
          <img
            src="waro-logo.png"
            className="App-logo"
            alt="logo"
            style={{
              height: 30,
            }}
          />
        </header>
        <Card>
          <CardHeader title="Welcome to Waro" />
          <CardContent>Hello World</CardContent>
        </Card>
      </Stack>
    </div>
  );
};

export default App;
