import {useNavigate} from 'react-router-dom';
const ResultsRow = ({house}) => {

    let navigate = useNavigate();


    let onClickHandler = () => {
        navigate(`/searchedhouse/${house._id}`); 
    }

    return ( 
        <tr onClick={onClickHandler}>
            <td>{house.photo}</td>
            <td>{house.county}</td>
        </tr>
     );
}
 
export default ResultsRow;