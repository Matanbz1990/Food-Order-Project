import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>
        <CopyrightOutlinedIcon fontSize="x-small" />
        Matan Ben Zahav 2022
      </p>
    </div>
  );
};
export default Footer;
