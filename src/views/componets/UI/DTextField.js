import { TextField, withStyles } from "@material-ui/core"
export const DTextField = withStyles({
    root: {
      "& label": {
        color: "#000"
      },
      // "& .MuiOutlinedInput-root": {
      //   backgroundColor: "#16181B",
      //   border: "1px solid #25282C",
      // },
      "& label.Mui-focused": {
        color: "#438AC1"
      },
      // "& .MuiOutlinedInput-root.Mui-focused": {
      //   borderColor: "green",
      // },
      "& label:hover": {
        color: "#438AC1"
      },
      "& label.Mui-focused.Mui-error": {
        color: "#C01515"
      },
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#fff",
        border: "1px solid #d8d6de;",
        "&.Mui-focused fieldset": {
          border: "1px solid #8DC454;"
          // box-shadow: "0 3px 10px 0 rgb(34 41 47 / 10%);",

        }
      }
      // "&.Mui-error.MuiInputBase-root.Mui-focused": {
      //   borderColor: "#C01515"
      // }
      // '& .MuiFormLabel-root.Mui-error': {
      //   color: '#C01515'
      // },
      // '& .MuiFormHelperText-root.Mui-error': {
      //   color: '#C01515'
      // },
      // '& .MuiFormLabel-root.Mui-disabled': {
      //   color: '#fff'
      // }
    }
  })(TextField)