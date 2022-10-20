import { PropTypes } from "prop-types";


const Profile = ({name, bio, profession, children}) => {
    Profile.defaultProps= {name:'Ibukun Agboola',
                           bio:'Scratch here ▒▒▒▒▒▒▒▒▒▒ to unveil my secret bio.',
                           profession : "FullStack Developer",
                           children: `<img src= "/pic/pic.jpg"/>`
                        }
  return (
    <div>
      
      <h1>{name}</h1>
      <h2>{bio}</h2>
      <h3>{profession}</h3>
      {children}
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
