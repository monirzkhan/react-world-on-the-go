
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'

const CountriesPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json());

function App() {
  

  return (
    <>
      
      <Suspense fallback={<h3>Countries are Loading........</h3>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
     
    </>
  )
}

export default App
