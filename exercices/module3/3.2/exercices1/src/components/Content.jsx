import Exercice from "./Exercice";

const Content = ({notes}) => {    
  return (
      <>
        {notes.map((note) =>
        <Exercice key={note.id} part={note.name} exo={note.exercises} />
        )}
      </>
    );
  };

  export default Content;