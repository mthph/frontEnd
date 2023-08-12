import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import House from './Components/House';
import SearchFilter from './Components/SearchFilter';
import { useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import SearchedHouse from './Components/SearchedHouse';
import SearchResults from './Components/SearchResults';
import axios from 'axios';
import Results from './Components/Results'
import Login from './Components/Login';
import InquiryList from './Components/InquiryList';
import SignUp from './Components/Signup';

function App() {
  let [allHouses, setAllHouses] = useState([])
  useEffect(() => {
    //try {
    async function getHousesInfo(){
      // let resp = await fetch('houses.json')
      //let resp = await axios.get('http://localhost:3002/');
      const resp = await axios.get(process.env.REACT_APP_LINKTOBACKEND);
      //console.log(resp);
      let data = await resp.data;
      setAllHouses(data)
    } //catch (error) 
    getHousesInfo()
    
  },[])


  return (
    <div className="App bg-secondary">    
     <Header/>
     <SearchFilter houses={allHouses}/>
   
    <Routes>
          <Route path ="/" element={<House houses={allHouses}/>} />
          <Route path="searchresults/:county" element={<SearchResults houses={allHouses}/>} />
          <Route path="searchedhouse/:id" element={<SearchedHouse houses={allHouses}/>} />
          <Route path="searchedprices/:price" element={<Results houses={allHouses}/>}/>
          <Route path="login" element={<Login/>} />
          <Route path="inquiries" element={<InquiryList/>} />    
          <Route path="signup" element={<SignUp/>} />      
   
    </Routes>

    </div>
  );
}

export default App;
