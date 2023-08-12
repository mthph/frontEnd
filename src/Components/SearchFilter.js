import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const SearchFilter= ({houses}) => {
    // iterate through the county values inhouses
    // return all county
    //store them in a set , to remove duplicates
    //create an array out of it
    //use that in the select field to display options
    let myhouses = houses;
    let counties = Array.from(new Set(myhouses.map((elem) => elem.county)));
    console.log(counties);
    let prices = Array.from(new Set(myhouses.map((elem) => elem.price)));
    console.log(prices);
    
    let navigate = useNavigate();

    let changeHandler = (e) => {
        console.log("change handler" + e.target.value);
        let county = e.target.value;
        navigate(`searchresults/${county}`);

    }

    let priceFilter = (e) => {
        console.log("price filter" + e.target.value);
        let price = e.target.value;
        navigate(`searchedprices/${price}`);
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    Search By County
                    <select onChange={changeHandler} >                        
                        {
                            counties.map((elem)=> <option key={elem} value={elem.county}> {elem} </option>)
                        }
                    </select>
                </div>
                <div className="col-sm-12 ">
                    Search By Prices
                    <select onChange={priceFilter} >                        
                        {
                            prices.map((elem)=> <option key={elem} value={elem.price}> {elem} </option>)
                        }
                    </select>
                </div>
            </div>
        </div>
     );
}
 
export default SearchFilter ;
