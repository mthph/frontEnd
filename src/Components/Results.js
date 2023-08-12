import {useParams} from 'react-router-dom';

import ResultsRow from './ResultsRow';
const Results = ({houses}) => {


    // Need to filter the houses based on price
        //for this I need to get the county from the location bar ,
            // I need to use useParams and get the county, filter houses
   
    let {price} = useParams();
    console.log(price);
    let filteredHomes = houses.filter((elem) => elem.price == price);
    console.log(filteredHomes);
    return (  
        <div>
            
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">View</th>
                            <th scope="col">County</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        filteredHomes.map((elem) => {
                          return <ResultsRow house={elem}/>
                        })
                        }                        
                        
                    </tbody>
                </table>
            </div>
            

        </div>
    );
}
 
export default Results;