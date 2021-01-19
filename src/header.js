import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  return (
      <div className="image-header">
        <div className="blur py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="d-inline-block align-middle">
                  <h1 className="white">CHELSEA'S</h1>
                  <h1 className="favorite-heading white">FAVORITE THINGS</h1>
                  <p className="white" >Learn a few fun facts about things I love. Hover over the images to learn more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Header;
