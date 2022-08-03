import React, {useState, useEffect}  from 'react'
import axios from 'axios'


const useRequestData = (url, initialState, headers) => {
const [data, setData] = useState(initialState)


useEffect(() => {
axios
.get(url,    {
headers
})
.then((res) =>{console.log(res.data)
setData(res.data)})
.catch((err) => {console.log(window.alert("ERROR"))})
}, [url]);

return data

}

export default useRequestData