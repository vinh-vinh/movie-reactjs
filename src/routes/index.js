import SinglePage from "../components/watch/SinglePage";
import HomePages from "../home/HomePages";

const publicRoutes = [
  { path: "", component: HomePages },
  { path: "/singlepage/:id", component: SinglePage },
];

export { publicRoutes };
