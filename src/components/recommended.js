import C1 from '../image/C1.jpg'
import C2 from '../image/C2.jpg'
import C3 from '../image/C3.jpg'

function Recommended()
{
    return(
        <div className="recommended">
        <h1>Recommended for you</h1>
        <p>Pick the best for you</p>
        <div className="recommended-container">
            <div className="container-card">
                <img src={C1} alt="" />
                <h4>2023 Python Data Visualisation Masterclass</h4>
                <p>Col Steel <br/>
                    4.8 ⭐⭐⭐⭐<br/>
                    &#8377 999 <del>&#8377 1999</del>
                </p>
            </div>
            <div className="container-card">
                <img src={C2} alt="" />
                <h4>2023 Python Data Visualisation Masterclass</h4>
                <p>Col Steel <br/>
                    4.8 ⭐⭐⭐⭐<br/>
                    &#8377 999 <del>&#8377 1999</del>
                </p>
            </div>
            <div className="container-card">
                <img src={C3} alt="" />
                <h4>2023 Python Data Visualisation Masterclass</h4>
                <p>Col Steel <br/>
                    4.8 ⭐⭐⭐⭐<br/>
                    &#8377 999 <del>&#8377 1999</del>
                </p>
            </div>
            <div className="container-card">
                <img src={C1} alt="" />
                <h4>2023 Python Data Visualisation Masterclass</h4>
                <p>Col Steel <br/>
                    4.8 ⭐⭐⭐⭐<br/>
                    &#8377 999 <del>&#8377 1999</del>
                </p>
            </div>
        </div>
    </div>
    );
}

export default Recommended