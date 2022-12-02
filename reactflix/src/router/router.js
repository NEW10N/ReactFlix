import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Background from "../components/background/Background";
import HomeContainer from "../components/home/HomeContainer";
import RandomBackground from "../components/randomBackground/RandomBackground";
import RegisterContainer from "../components/register/registerContainer/RegisterContainer";
import RedirectRegister from "../components/register/registerContainer/RegisterContainer";
import Login from "../components/login/Login";
import LoginContainer from "../components/login/loginContainer/LoginContainer";
import LogoutContainer from "../components/logout/logoutContainer/LogoutContainer";
import MovieContainerDetail from "../components/movie/MovieContainerDetail";
import PopularContainer from "../components/popular/PopularContainer";
import FavoriteList from "../components/favorite/FavoriteList";
 const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <App/>,
            children:[
                {
                    path:"/",
                    element:<HomeContainer/>
                },
                {
                    path:"/login",
                    element:<LoginContainer/>
                },
                {
                    path:"/logout",
                    element:<LogoutContainer/>
                },
                {
                    path:"/profile",
                    element:"Profile",
                },
                {
                    path:"/popular",
                    element:<PopularContainer/>,
                },
                {
                    path:"/favorites",
                    element:<FavoriteList/>,
                },
                {
                    path:"/movie/:id",
                    element:<MovieContainerDetail/>,
                }
            ]
            
        },
        {
            path:"/register",
            element: <Background/> ,
            children:[
                {
                    path:"/register",
                    element:<RegisterContainer/>
                }
            ]
        }
    ]
 )


 export default router