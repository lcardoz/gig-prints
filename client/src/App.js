import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import LoginBand from './LoginBand';
import LoginDesigner from './LoginDesigner';
import Signup from './Signup';
import SignupBand from './SignupBand';
import SignupDesigner from './SignupDesigner';
import BandProfile from './BandProfile';
import DesignerProfile from './DesignerProfile';
import BandProjects from './BandProjects';
import DesignerProjects from './DesignerProjects';
import EditBandProfile from './EditBandProfile';

function App() {

  const [band, setBand] = useState(null)
  const [designer, setDesigner] = useState(null)
  const [posters, setPosters] = useState(null)
  const [errors, setErrors] = useState(false)

  const [update, setUpdate] = useState(true)

  useEffect(() => {
    fetch("/authorized/designer")
    .then(res => {
      if(res.ok){
      res.json()
      .then(designer => {
        setDesigner(designer)
      })
      }
    })
  },[])

  useEffect(() => {
      fetch("/authorized/band")
      .then(res => {
        if(res.ok){
        res.json()
        .then(band => {
          setBand(band)
        })
        }
      })
  },[])

  useEffect(() => {
    fetch("/posters")
    .then(res => {
      if(res.ok){
        res.json()
        .then(posters => {
          setPosters(posters)
          // console.log(posters)
        })
      }})
  },[])

  if (errors) return <h1>{errors}</h1>

  return (
    <div className="App">
      <Nav band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} />
      <Routes>
        <Route path="/login/band" element={<LoginBand band={band} setBand={setBand} />} />
        <Route path="/login/designer" element={<LoginDesigner designer={designer} setDesigner={setDesigner} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/band" element={<SignupBand />} />
        <Route path="/signup/designer" element={<SignupDesigner />} />
        <Route path="/signup" element={<Signup />} />
        {band ? <Route path="/bands/:id" element={<BandProfile band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} />} /> : null}
        {designer ? <Route path="/designers/:id" element={<DesignerProfile designer={designer} posters={posters} />} /> : null}
        {band ? <Route path="/bands/:id/projects" element={<BandProjects band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} update={update} />} /> : null}
        {designer ? <Route path="/designers/:id/projects" element={<DesignerProjects band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} update={update} />} /> : null}
        {band ? <Route path="/bands/:id/edit-profile" element={<EditBandProfile band={band} setBand={setBand} />} /> : null}
        <Route path= "/" element={<Home band={band} designer={designer} /> } />
      </Routes>
    </div>
  );
}

export default App;
