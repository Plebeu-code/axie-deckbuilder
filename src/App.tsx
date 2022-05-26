import { Route, Routes, Router, useRoutes, BrowserRouter } from "react-router-dom";
import PageCharm from "./pages/Charm";
import { HomeCard } from "./pages/HomeCard";
// import { PageRunas } from "./pages/Runas";
// import { PageCharm } from "./pages/Charm";
import { NotFound } from "./pages/NotFound";



function App() {
  console.log('App');
  
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeCard />,
      children: [
        { index: true, element: <div>No page is selected</div> },
        { path: '/*', element: <PageCharm /> },
        { path: 'two', element: <NotFound /> },
      ],
    },
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;





// export default function App() {
//   console.log("App test");
//   return (
//     <Routes>
//       <Route path="/" element={<HomeCard />} />
//       <Route path="/charm" element={<PageCharm />} />
//     </Routes>
//   );
// }
