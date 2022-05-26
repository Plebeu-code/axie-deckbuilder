import "../style/notFound.scss";
import notFound from "../assets/img/notFound.svg";
import notFound2 from "../assets/img/notFound2.svg";
import notFound3 from "../assets/img/notFound3.svg";

export function NotFound() {
  return (
    <div className="container-notFound">
      <div></div>
      <img src={notFound} alt="" />
      <img src={notFound2} alt="" />
      <img src={notFound3} alt="" />
      <h2>Page Not Found.</h2>
    </div>
  );
}
