import './App.css';
import Avatar from './component/Avatar.jsx';

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      details: "this is a camera r9",
    },
    {
      img: "https://www.shutterstock.com/image-photo/camera-260nw-610909205.jpg",
      details: "User 2",
    },
    {
      img: "https://cdn.mos.cms.futurecdn.net/4wpKrH93D37dDPTisdqGy4-970-80.jpg.webp",
      details: "User 3",
    },
    {
      img: "https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1-1920x1441.jpg",
      details: "User 4",
    },
  ];

  return (
    <div id="root">
      <h1 className="heading1">USER PROFILES</h1>
      <div className="main0">
        {users.map((data, ind) => (
          <Avatar
            key={ind}
            img={data.img}
            details={data.details}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
