import React, {  useState } from "react";
import "./homePage.css";
import axios from "axios";


let api = "https://blink.up.railway.app/url/shorten";
const HomePage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [result, setResult] = useState("");
  // useEffect(() => {
  //      alert("enter the long url");
  //    },[result]);
  const postData = () => {
    //  e.preventDefault();
    if(!longUrl){
      alert("enter the long url")
    }
    axios
      .post(api, {
        longUrl,
      })
      .then((res) => {
        // console.log(res);
        setResult(res.data.data);
        console.log(res.data.data);
      },(error) => {
        console.log(error);
      });
  };
  // console.log(result);
  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <div className="form">
            <div className="div">
              <div>
                <h1>Enter a long url{result}</h1>
                <span>to make it short</span>
                <input
                  id="input"
                  type="text"
                  name="longUrl"
                  value={longUrl}
                  placeholder="Shorten your url"
                  onChange={(event) => setLongUrl(event.target.value)}
                />
              </div>
              <button
                type="button"
                className="button"
                onClick={() => postData()}
              >
                Make It Short
              </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            {/* <div id="result">
              <a href={result}>{result}</a>
            </div> */}
          </div>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Created a Url shortening service like Bitly and tinyurl for easy
                sharing of long urls, also implemented caching to deliver quick
                responses.
              </p>
              <a href="https://github.com/Deepak9664" className="github">
                github
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Created By - <i className="fa fa-heart"></i>
          <a href="https://www.linkedin.com/in/deepak-singh-25037a159/">
           Deepak singh (Linkdin profile)
          </a>
         </p>
      </footer>
    </div>
  );
};

export default HomePage;
