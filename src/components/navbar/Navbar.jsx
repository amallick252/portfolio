import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Abinash Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/amallick252">
            <img src="/github.svg" alt="" />
          </a>
          <a href="https://www.freelancer.com/u/abinashmallick">
            <img src="/freelancer.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/abinashmallick/">
            <img src="/linkedin.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/a_binash/">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
