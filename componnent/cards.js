import { RightOutlined, LeftOutlined } from "@ant-design/icons";
const Cards = () => {
  return (
      <div className="cards">
        <div className="card">
          <img src="/img/pic1.png" />
          <div>
            <h4>Reinventing Benin City</h4>
            <small>
              In making payment easier we <br></br>reinvented Nigeria's vibrant
              city.
            </small>
          </div>
        </div>
        <div className="card">
          <img src="/img/pic2.png" />
          <div>
            <h4>The BOO Project</h4>
            <small>The Bringing Online Open (BOO) </small>
          </div>
        </div>
        <div className="card">
          <img src="/img/pic3.png" />
          <div>
            <h4>Improved dev enviroment</h4>
            <small>Integration and use of our API</small>
          </div>
        </div>
        <div className="slide">
          <LeftOutlined className="left" />
          <RightOutlined className="right" />
        </div>
      </div>
  );
};
export default Cards;
