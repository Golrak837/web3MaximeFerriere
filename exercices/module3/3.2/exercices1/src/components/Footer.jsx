const Footer = ({notes}) => {
  let number = 0;
  {notes.map((note) => {
    number += note.exercises
  }) } 
  return (
      <p>
        Number of exercises{" "}
        {number}
      </p>
    );
  };

  export default Footer;