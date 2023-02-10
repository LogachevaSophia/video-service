
import { Link } from 'react-router-dom';
import './HistoryBuys.css'
const HistoryBuys = ({data}) =>{

    return(
        <div className='table'>
        <table>
            <tr>
                <th>
                    Номер покупки
                </th>
                <th>
                    Продукт
                </th>
            </tr>
            {data.map(elem=> {
                return(
                    <tr key = {elem.buy_id}>
                    <th>
                       {elem.buy_id}
                    </th>
                    <th>
                        <a href={elem.video_link}>{elem.video_link}</a>
                        
                    </th>

                </tr>
                )
            })}
        </table>
        </div>
    )

}

export default HistoryBuys;