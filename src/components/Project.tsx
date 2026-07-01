import './Project_Style.css';
const Project = () => {
  return (
    <section>
      <h1>My Projects</h1>
       <div className='main_div'>\
        <div className="img_box">
          <div className="img_container">
          <img src="https://i.pinimg.com/736x/26/75/f6/2675f6ed6c3fe33254fd189e63cb088b.jpg" alt="" />
        <p>Description of the project goes here.</p>
        </div>
        <div className="show_more">
          <a href="#">Show More</a>
        </div>
        </div>
      </div>
    </section>
    
  );
};
export default Project;