import axios from "axios";
import { useState, useEffect } from "react";

function HomePage() {
  const [data, setData] = useState([]);
  const [network, setNetwork] = useState([])

  

  //fetch data from the api -> http://api.citybik.es/v2/ using axios.

  const getGeoData = async () => {
    try {
      const response = await axios("http://api.citybik.es/v2/networks");
      setData(response.data.networks);
      console.log("the data:", response.data.networks[5].name)
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    //axios call
    getGeoData();
  }, []);


  return (
    <div>
      <h1>This is the front page</h1>
      {data.map((oneNetwork) => {
          return( 
              <div key={oneNetwork.id}>
            {oneNetwork.name}
          </div>)
      })}
    </div>
  );
}

export default HomePage;
