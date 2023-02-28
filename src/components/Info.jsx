import profilePic from '../assets/Skp.jpg'

function Info() {
  return (
    <>
      <img className="profile-pic" src={profilePic} />
      <p className="name">Siddharth Panjwani</p>
      <p className="role">Frontend Developer</p>
      <p className="website-name">siddharthpanjwani.website</p>
      <div className="buttons-container">
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </>
  );
}

export default Info;