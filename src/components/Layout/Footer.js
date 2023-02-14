import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import classes from "./Footer.module.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.footer}>
      <p>
        <CopyrightOutlinedIcon fontSize="x-small" />
        Matan Ben Zahav {year}
      </p>
    </div>
  );
};
export default Footer;
