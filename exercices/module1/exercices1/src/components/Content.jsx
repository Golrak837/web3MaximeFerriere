import Exercice from "./Exercice";

const Content = (props) => {
    return (
      <>
        <Exercice part={props.part1} exo={props.exo1} />
        <Exercice part={props.part2} exo={props.exo2} />
        <Exercice part={props.part3} exo={props.exo3} />
      </>
    );
  };

  export default Content;