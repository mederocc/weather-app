import Box from "@mui/material/Box";

export default function CenteredBox(props) {
  return (
    <Box
      display="flex"
      flexDirection={props.direction || "column"}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      {props.children}
    </Box>
  );
}
