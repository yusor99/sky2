import { DownOutlined } from "@ant-design/icons";
const Labtop = () => {
  return (
    <div className="container">
      <div className="navbar-desktop">
        <div className="logo">
          <img src="img/black.png" alt="logo" />
        </div>
        <ul className="nav-ul">
          <li>
            <small className="nav-ul-li"> Products</small> <DownOutlined />
          </li>

          <li>
            <small> Use Cases </small>
            <DownOutlined />
          </li>

          <li>
            <small>Docs</small> <DownOutlined />
          </li>

          <li>
            <small>Pricing</small>
          </li>
          <li>
            <small>About us </small>
            <DownOutlined />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Labtop;
