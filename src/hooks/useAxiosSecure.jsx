import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthProvaide";
import { useNavigate } from "react-router-dom";

const axiosInstence = axios.create({
  baseURL: `https://server-mu-ten-68.vercel.app`,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate()


  useEffect(() => {
    axiosInstence.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          console.log("neded to logout the user");
          logOut()
          .then(() => {
            console.log("logout user")
            navigate('/login')
          })
          .catch(error => console.log(error))
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstence
};

export default useAxiosSecure;
