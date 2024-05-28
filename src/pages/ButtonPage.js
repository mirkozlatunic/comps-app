import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import "./index.css";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary rounded className="mb-5">
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button outline success>
          <GoDatabase />
          See Deal
        </Button>
      </div>
      <div>
        <Button warning>Hide Ads</Button>
      </div>
      <div>
        <Button danger rounded outline>
          Warning
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
