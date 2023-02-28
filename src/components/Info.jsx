import profilePic from '../assets/Skp.jpg'

function Info() {
  return (
    <div className='info-section'>
      <img className="profile-pic" src={profilePic} />
      <p className="name">Siddharth Panjwani</p>
      <p className="role">Frontend Developer</p>
      <p className="website-name">siddharthpanjwani.website</p>
      <div className="buttons-container">
        <button className='mail-btn'>
          <i class="fa-solid fa-envelope fa-lg"></i>
          <span className='email-btn-text'>Email</span>
        </button>
        <button className='linkedin-btn'>
          <i class="fa-brands fa-linkedin fa-lg"></i>
          <span className='linkedin-btn-text'>LinkedIn</span>
        </button>
      </div>
    </div>
  );
}

export default Info;