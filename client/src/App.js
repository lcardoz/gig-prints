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
import Profile from './Profile';
import BandProjects from './BandProjects';
import DesignerProjects from './DesignerProjects';

function App() {

  const [band, setBand] = useState(null)
  const [designer, setDesigner] = useState(null)
  const [posters, setPosters] = useState(null)
  const [errors, setErrors] = useState(false)

  const [update, setUpdate] = useState(true)

  useEffect(() => {
    fetch("/authorized")
    .then(res => {
      if(res.ok){
        res.json()
        .then(someUserData => {
          if("on_tour" in someUserData) {
            setBand(someUserData)
          } else if ("open_to_work" in someUserData) {
            setDesigner(someUserData)
          } else {
            console.error("useEffect error")
          }
        })
      }
    })
  },[])

  // useEffect(() => {
  //     fetch("/authorized/band")
  //     .then(res => {
  //       if(res.ok){
  //       res.json()
  //       .then(band => {
  //         setBand(band)
  //         // setPosters(band.posters)
  //       })
  //       }
  //     })
  // },[])

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
        {band || designer ? <Route path="/bands/:id" element={<Profile band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} />} /> : null}
        {band || designer ? <Route path="/designers/:id" element={<Profile band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} />} /> : null}
        {band ? <Route path="/bands/:id/projects" element={<BandProjects band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} update={update} />} /> : null}
        {designer ? <Route path="/designers/:id/projects" element={<DesignerProjects band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} update={update} />} /> : null}
        <Route path= "/" element={<Home band={band} designer={designer} /> }/>
      </Routes>
    </div>
  );
}

export default App;
