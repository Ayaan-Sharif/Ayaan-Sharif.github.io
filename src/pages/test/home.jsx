import React from "react";
import HoverEffect from "../../components/Hovereffect/Hovereffect.jsx";
import loading from "../../assets/loading.svg";
import me from "../../assets/me.jpg";
import "./Home.scoped.scss";

const AsyncImage = (props) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);
  React.useEffect(() => {
    const handleLoad = () => setLoadedSrc(props.src);
    const image = new Image();
    image.addEventListener("load", handleLoad);
    image.src = props.src;
    return () => image.removeEventListener("load", handleLoad);
  }, [props.src]);

  return (
    <img
      className={
        loadedSrc === props.src ? props.className : props.className + " loading"
      }
      src={loadedSrc === props.src ? props.src : loading}
      alt={props.alt}
      title={props.title}
    />
  );
};

const Test = () => {
  return (
    <div className="body">
     
      <div className="home-container">
        <HoverEffect />
        <div id="profiles">
          <div className="profile">
            <div className="profile-content">
              <div className="profile-pic">
                <img
                  className="profile-pic-image"
                  src="https://ayxxn-shxrif.me/static/media/me.444e16c1dabca2be9844.jpg"
                  alt="Profile"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
