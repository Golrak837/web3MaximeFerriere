import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
const Course = ({notes}) => {

    return ( 
        
        <div>
        <Header course={notes.name} />
        
        <Content
          notes={notes.parts}
        />
        <Footer
          notes={notes.parts}
        />
      </div>
    )
}
export default Course;