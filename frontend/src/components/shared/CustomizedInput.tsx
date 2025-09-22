
import TextField from "@mui/material/TextField";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
     InputLabelProps={{ style: { color: 'white', fontSize: 20 } }} // label styles
      InputProps={{
        style: {
          color: "white",      // text color
          width: "400px",      // fixed width
          borderRadius: 10,    // rounded corners
          fontSize: 20,        // bigger font size
        },
      }}
      name={props.name}
      label={props.label}
      type={props.type}
      margin="normal"
      variant="outlined"
    />
  );
};

export default CustomizedInput;
