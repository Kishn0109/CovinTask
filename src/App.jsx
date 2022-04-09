import { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loaddata } from "./feature/counter/userSlice";
import Card from "./Card";
import "./style.css";
export default function App() {
  const users = useSelector((state) => state.User.value);
  const dispatch = useDispatch();

  const [page, setpage] = useState(0);
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        dispatch(loaddata(response.data.data));
        // console.log(response());
      })
      .catch((error) => console.log(error));
    // console.log(`https://reqres.in/api/users?page=${page}`);
  }, [page]);
  const style = {
    button: {
      borderRadius: "0.5rem",
      backgroundColor: "black",
      color: "white",
      padding: "0.5rem 1rem "
    }
  };
  return (
    <div
      className="d-flex flex-wrap gap-1 justify-content-center"
      // onClick={() => console.log(userdata)}
    >
      {users.length <= 0 ? (
        <>
          <div className="spinardiv"></div>
          <div className="spinner-border text-secondary" role="status"></div>
        </>
      ) : (
        <>
          <Card />
          <div className="buttoncontainer w-100 d-flex justify-content-center gap-1 py-5">
            <button
              style={style.button}
              onClick={() => {
                setpage(page + 1);
                console.log(page);
                // console.log(`https://reqres.in/api/users?page=${page}`);
              }}
              disabled={page >= 2 && true}
            >
              `next`
            </button>
            <button
              style={style.button}
              onClick={() => {
                setpage(page - 1);
              }}
              disabled={page <= 0 && true}
            >
              prev
            </button>
          </div>
        </>
      )}
    </div>
  );
}
