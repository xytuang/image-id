import { useState } from "react"
import axios from "axios"


function App() {
  const [file, setFile] = useState(null)

  const handleUpload = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = "http://127.0.0.1:5000/upload"
    const formData = new FormData()
    formData.append('file', file)
    formData.append('filename', file.name)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }
    try {
      axios.post(url, formData, config).then((response) => {console.log(response.data)})
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleUpload}/>
        <button type="Submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
