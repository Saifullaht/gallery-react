function Avatar({ img, details }) {
    return (
      <div className="main1">
        <img src={img} alt={details} />
        <h2 className="text">{details}</h2>
      </div>
    );
  }
  
  export default Avatar;
  