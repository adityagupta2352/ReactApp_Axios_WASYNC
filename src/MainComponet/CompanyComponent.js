import { React} from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

const buttonStyles = {
  margin: "8px",
  fontSize: "14px",
  backgroundColor: "#333",
  color: "white",
  padding: "10px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const CompanyComponent = (page) => {
  
  // const handle = (page) => {
    // setCurrentPage(page);
  // };
  
  const navigate = useNavigate();
  // const [currentPage, setCurrentPage] = useState(null);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "30px", marginRight: "10px" }}
        />
        <button style={buttonStyles} onClick={() => navigate("/AllCom")}>
          Get All Company
        </button>
        <button style={buttonStyles} onClick={() => navigate("/AddCom")}>
          Add Company
        </button>
      </div>
      {/* <Display page={currentPage} /> */}
    </div>
  );
};

export default CompanyComponent;
