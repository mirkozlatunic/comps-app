import Button from "./Button";
import "./index.css";

const App = () => {
  return (
    <div>
      <div>
        <Button primary rounded>
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary>Buy Now</Button>
      </div>
      <div>
        <Button outline success>
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

export default App;
