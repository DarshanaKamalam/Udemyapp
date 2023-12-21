import "./index.css";

import Navbar from './components/navbar.js';
import Mnavbar from './components/mnavbar.js';
import Category from './components/category.js';
import Sale from './components/sale.js'
import Recommended from './components/recommended.js'
import Topics from './components/topics.js';
import Reecommended from './components/Reecommended.js';
import Footer from './components/footer.js';

function App()
{
    return(
        <div>
        <Navbar></Navbar>
        <Mnavbar></Mnavbar>
        <Category></Category>
        <Sale></Sale>
        <Recommended></Recommended>
        <Topics></Topics>
        <Reecommended></Reecommended>
        <Footer></Footer>
      </div>
    );
}

export default App