import './App.css';
import Header from "./components/Header";
import Cards from "./components/Cards";
import Pagination from './components/Pagination';
import { useState , useEffect } from 'react';
export default function App()
{
  const [data , setData] = useState([]);
  const [currentPage , setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(4);
  
  function getData()
  {
      fetch('output.json',
      {
      "headers" : {
          "Content-Type" : "application/json",
          "Accept" : "Application/json"
      }
      })
      .then(response => response.json())
      .then(jsonData => setData(jsonData.data));
  }

  useEffect(() => {
      getData()
  } , []);


  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCard = data.slice(indexOfFirstCard , indexOfLastCard);

  function paginate(pageNumber)
  {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="App">
      <Header/>
      <Cards data={currentCard}/>
      <Pagination cardsPerPage={cardsPerPage} totalCards={data.length} paginate={paginate}/>
    </div>
  );
};