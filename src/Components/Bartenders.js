import bartendersCSS from "./Bartenders.module.css";
import BartenderLeft from "./BartenderLeft";
import BartenderRight from "./BartenderRight";

const Bartenders = (props) => {
  let left = true;
  return (
    <div className={bartendersCSS.bartenders}>
      <div id="bartenders">
        <h1 className={bartendersCSS.title}>GET TO KNOW YOUR BARTENDERS</h1>
        {props.bartenders.map((bartender) => {
          if (left) {
            left = !left;
            return <BartenderLeft bartender={bartender} key={bartender.id} />;
          } else {
            left = !left;
            return <BartenderRight bartender={bartender} key={bartender.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default Bartenders;
