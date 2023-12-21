import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Udemy</h2>
      </div>
      <div className="search">

        <FontAwesomeIcon icon={faSearch} style={{ color: '#000000' }} />
        <input type="search" placeholder="Search for anything here. Tech, Business, Art..." />
      </div>
      <div className="icons">
        <p>Course</p>
        <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__pop">
            <p>No Courses Purchased Yet</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faCartShopping} style={{ color: '#000000' }} />
        <FontAwesomeIcon icon={faBell} style={{ color: '#000000' }} />
        <FontAwesomeIcon icon={faUser} style={{ color: '#000000' }} />
      </div>
    </div>
  );
}

export default Navbar




