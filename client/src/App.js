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
import EditDesignerProfile from './EditDesignerProfile';
import DifferentBandProfile from './DifferentBandProfile';
import DifferentDesignerProfile from './DifferentDesignerProfile';

function App() {

  const [band, setBand] = useState(null)
  const [designer, setDesigner] = useState(null)
  const [posters, setPosters] = useState(null)
  const [errors, setErrors] = useState(false)
  const [allDesigners, setAllDesigners] = useState([]);
  const [allBands, setAllBands] = useState([]);
  const [search, setSearch] = useState("")

  const searchedBands = allBands.filter((band)=>{
    if (search==="") {
      return false
  }
    return band.name.toLowerCase().includes(search.toLowerCase())
  })

  const searchedDesigners = allDesigners.filter((designer)=>{
    if (search==="") {
      return false
  }
    return designer.name.toLowerCase().includes(search.toLowerCase())
  })

  // console.log("band:", band)
  // console.log("designer:", designer)

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
    <>
      <Nav band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} search={search} setSearch={setSearch} searchedBands={searchedBands} searchedDesigners={searchedDesigners} />
      <Routes>
        <Route path="/login/band" element={<LoginBand band={band} setBand={setBand} />} />
        <Route path="/login/designer" element={<LoginDesigner designer={designer} setDesigner={setDesigner} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/band" element={<SignupBand />} />
        <Route path="/signup/designer" element={<SignupDesigner />} />
        <Route path="/signup" element={<Signup />} />
        {band ? <Route path="/bands/:id" element={<BandProfile band={band} posters={posters} />} /> : <Route path="/bands/:id" element={<DifferentBandProfile posters={posters} />} /> }
        {designer ? <Route path="/designers/:id" element={<DesignerProfile designer={designer} posters={posters} />} /> :  <Route path="/designers/:id" element={<DifferentDesignerProfile posters={posters} />} />}
        {band ? <Route path="/bands/:id/projects" element={<BandProjects band={band} posters={posters} setPosters={setPosters} />} /> : null}
        {designer ? <Route path="/designers/:id/projects" element={<DesignerProjects designer={designer} posters={posters} setPosters={setPosters} />} /> : null}
        {band ? <Route path="/bands/:id/edit-profile" element={<EditBandProfile band={band} setBand={setBand} />} /> : null}
        {designer ? <Route path="/designers/:id/edit-profile" element={<EditDesignerProfile designer={designer} setDesigner={setDesigner} />} /> : null}
        <Route path= "/" element={<Home band={band} designer={designer} allDesigners={allDesigners} setAllDesigners={setAllDesigners} allBands={allBands} setAllBands={setAllBands} />} />
      </Routes>
    </>
  );
}

export default App;
