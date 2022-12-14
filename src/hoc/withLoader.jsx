import React, {useEffect,useState} from "react";
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.jsx'

function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState()
    useEffect (() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res.laptops))
    }, []);

    if (!data) return <LoadingSpinner/>
    
    return <Element {...props} data={data}/>
  }
}

export default withLoader;