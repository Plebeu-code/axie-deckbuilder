import { Charm } from "../components/Charm/Charm";
import "../style/charmPage.scss";
import { TCharm } from "../components/Charm/index";
import TCcharmjson from "../cardsCharms.json";

export interface PageCharmProps {}

const PageCharm: React.FunctionComponent<PageCharmProps> = (props) => {
  console.log('test');
  
  return (
      <div className="apresentacao01">
          <p>This is the home page.</p>
      </div>
  );
};

export default PageCharm;