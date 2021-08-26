import Book from './books.js'  /* React Component */
import './books1.js' /* Web Component Native */
import React, { Fragment, useState, useEffect} from 'react';


    
function App(){
  const [data, setData] = useState(null);        
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      async function getData() {
          const response = await fetch('./books.json');
          const json     = await response.json();
          setData(json);
          setLoaded(true);
      }
      getData();
  },[])
  console.log('loaded:', loaded, 'data:', data);

  return (<>
      <div className="container">
          <h1>React Components</h1>    
          {loaded && data.books.map(
              (book, i) =>
                  <Fragment>
                    <Book data={book} key={i}> </Book>
                    
                    <mit-book
                        title={book.title}
                        subtitle={book.subtitle}
                        author={book.author}
                        publisher={book.publisher}
                        description={book.description}  
                    >
                    
                    </mit-book>
                        
                </Fragment>
          
          
          )}
      </div>        
  </>);   
}
      
export default App;
