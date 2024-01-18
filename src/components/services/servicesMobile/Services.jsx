import "./services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="titleContainer">
        <div className="title">
          <img src="./people.webp" alt="peopleimg" />
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </div>
      <div className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            optio vel perspiciatis ab assumenda
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            optio vel perspiciatis ab assumenda
          </p>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
