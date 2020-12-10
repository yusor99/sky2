const { default: NavBar } = require("../componnents/navbar");
import { RightOutlined } from "@ant-design/icons";
import Cards from "../componnents/cards";
const Home = () => {
  return (
    <>
      <NavBar />
      <section className="home-cover">
        <img src="/img/cover.png" alt="cover" />
        <div className="overlay">
          <div className="container">
            <section className="head">
              <small style={{ color: "gray", fontWeight: 700, fontSize: 11 }}>
                Welcome
              </small>
              <p className="des">
                Empowering your everyday transactions making payment processing
                easy
              </p>
              <button className="start-btn">
                Get Started <RightOutlined />
              </button>
            </section>
          </div>
        </div>
      </section>
      <div>
        <Cards />
      </div>
    </>
  );
};
export default Home;
