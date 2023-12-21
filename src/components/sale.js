import sale from '../image/sale.jpg';
function Sale()
{
    return(
        <div class="sale">
        <img src={sale} alt="sale_image"/>
        <div class="sale-card">
            <h1 class="sale-card__title">Diwali Sale Ending</h1>
            <p>Get big course savings for a prosperous future. Courses from ₹449 ends tonight!</p>
        </div>
    </div>
    );
}

export default Sale