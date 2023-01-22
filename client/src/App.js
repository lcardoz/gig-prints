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

  const [update, setUpdate] = useState(true)

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
    <div className="App">
      <Nav band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} allDesigners={allDesigners} setAllDesigners={setAllDesigners} allBands={allBands} setAllBands={setAllBands} search={search} setSearch={setSearch} searchedBands={searchedBands} searchedDesigners={searchedDesigners} />
      <Routes>
        <Route path="/login/band" element={<LoginBand band={band} setBand={setBand} />} />
        <Route path="/login/designer" element={<LoginDesigner designer={designer} setDesigner={setDesigner} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/band" element={<SignupBand />} />
        <Route path="/signup/designer" element={<SignupDesigner />} />
        <Route path="/signup" element={<Signup />} />
        {band ? <Route path="/bands/:id" element={<BandProfile band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} />} /> : <Route path="/bands/:id" element={<DifferentBandProfile searchedBands={searchedBands} posters={posters} setSearch={setSearch}/>} /> }
        {designer ? <Route path="/designers/:id" element={<DesignerProfile designer={designer} posters={posters} />} /> :  <Route path="/designers/:id" element={<DifferentDesignerProfile searchedBands={searchedBands} posters={posters} />} />}
        {band ? <Route path="/bands/:id/projects" element={<BandProjects band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} update={update} />} /> : null}
        {designer ? <Route path="/designers/:id/projects" element={<DesignerProjects band={band} setBand={setBand} designer={designer} setDesigner={setDesigner} posters={posters} setPosters={setPosters} update={update} />} /> : null}
        {band ? <Route path="/bands/:id/edit-profile" element={<EditBandProfile band={band} setBand={setBand} />} /> : null}
        {designer ? <Route path="/designers/:id/edit-profile" element={<EditDesignerProfile designer={designer} setDesigner={setDesigner} />} /> : null}
        <Route path= "/" element={<Home band={band} designer={designer} allDesigners={allDesigners} setAllDesigners={setAllDesigners} allBands={allBands} setAllBands={setAllBands} /> } />
      </Routes>
    </div>
  );
}

export default App;
