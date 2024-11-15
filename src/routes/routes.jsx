import Contato from "../pages/contato/Contato";
import Home from "../pages/home/Home";
import Post from "../pages/post/Post";
import Sobre from "../pages/sobre/Sobre";

   export const routes = [
        {
            path: "/post",
            element: <Post />
        },
        {
            path: "/contatos",
            element: <Contato />
        },
        {
            path: "/sobre",
            element: <Sobre />
        },
        {
            path: "/home",
            element: <Home />
        },
    ]
