import React from "react";

import Switch from '@material-ui/core/Switch';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

export default function Switches() {
    const [state, setState] = React.useState({
      checkedA: false,
      checkedB: true,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div>
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            color="secondary"
          />
          </div>
  );
}