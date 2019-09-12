import React, {useEffect,useState} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import ImageSection from "./components/ImageSection/ImageSection.js";
import BottomContent from "./components/BottomContent/BottomContent";
import Advert from  "./images/advertisement.png";
import { apiData } from "./data";
import axios from 'axios';
// const asyncUsers = asyncComponent(()=> {import('../Views/Users/Users')});
// const asyncComponentApp = asyncComponent(()=>import("../Layouts/Dashboard/DashboardLayout.js"))


// const { explanation, media_type, url, hdUrl, date, title, copyright } = apiData;

function App() {

const [apiData, setApiData] = useState({url:""})

useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response =>{
      const data = response.data;
      console.log(data);
      setApiData(data);
//addLoadEvent(data.url,preloader)

  })
  .catch(err =>{
    console.log(err)
  })
},[])

function preloader(url) {
		var img1 = new Image();
		img1.src = "http://domain.tld/path/to/image-001.gif";
}

function addLoadEvent(url,func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func(url);
		}
	}
}


  return (
    <div className="App-Container animated zoomIn">
      <Nav />
      <div className="App">
        <div className="App-Content">
            <Header />
            <div className="two-contents">
            <div>
              <ImageSection {...apiData} />
              <BottomContent {...apiData} />
            </div>
           {/*<div> <img src={Advert} alt="Advert" /></div>*/}
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
