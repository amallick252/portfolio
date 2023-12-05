import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>Explore below!</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ReactJS</h2>
          <p>
          Form designing components to creating complete app and deployment, I will build your front-end SPA React-JS project in no time. Leverage the power of reacts component based architecture, and take your business to the next level.
          </p>
          <motion.a href="#Contact">
          <button >Let's Chat!</button>
          </motion.a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Shopify</h2>
          <p>
          With over 4.36 million online stores relying on Shopify's robust and user-friendly no-code platform, I can create a high-converting, SEO-optimized, fast, professional, and minimalistic store tailored to your needs. Let's connect and kickstart your eCommerce journey with Shopify.
          </p>
          <motion.a href="#Contact">
          <button>Let's Chat!</button>
          </motion.a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Wordpress</h2>
          <p>
          From blogs to ecommerce, WordPress provides all the functionalities you need and a lot more, through its no code plugin eco-system which is perfect for small-mid-sized businesses. Build your online presence with WordPress. Lets Connect!
          </p>
          <motion.a href="#Contact">
          <button>Let's Chat!</button>
          </motion.a>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
