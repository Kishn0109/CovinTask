import react from "react";
import { useSelector } from "react-redux";
function Card() {
  const count = useSelector((state) => state.User.value);
  return (
    <>
      {count.map((obj, idx) => (
        <div
          key={idx.toString()}
          className="card "
          style={{ width: "18rem", display: "flex", justifyContent: "center" }}
        >
          <div className="card-body text-center flex justify-content-center w-100">
            <h5 className="card-title">
              <b>{obj.first_name}</b> &nbsp; <b>{obj.last_name}</b>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">{obj.email}</h6>
            <p className="card-text">
              <img src={obj.avatar} alt="" />
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
