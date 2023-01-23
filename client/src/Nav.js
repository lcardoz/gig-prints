import { useState } from 'react';
import { NavLink, Link, useNavigate} from "react-router-dom";
import { Input, Card, Menu, Dropdown, Button, Segment } from 'semantic-ui-react';
import gigprintslogo from "./gig-prints.png";

function Nav({band, setBand, designer, setDesigner, allDesigners, setAllDesigners, allBands, setAllBands, search, setSearch, searchedBands, searchedDesigners, setDifferentUser}) {

  // const { id } = useParams()
  // console.log(band)

  const [activeItem, setActiveItem] = useState('home');
  
  let navigate = useNavigate();

  function handleLogout() {
    fetch(`/logout`, {
      method: 'DELETE'
    })
    .then(r=>{if (r.ok) {
      setBand(null)
      setDesigner(null)
      setSearch("")
      navigate("/")
    }})
  }  

  if (band) {
    return (
      <div className="test-test">
        <Menu secondary pointing>
          <Menu.Item 
            as={NavLink} to="/" 
            name='home'
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')} 
            >
            <img src={gigprintslogo} alt='Home' 
              style={{width: "250px", marginLeft:"8px", marginRight:"8px"}}
            />
          </Menu.Item>
          <Menu.Item style={{ fontSize: 18 }} position='right'>
            <div>
              <Input style ={{width: "300px", height: "35px"}} 
                icon='search' 
                placeholder='Search Designers...' 
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
                <div style={{ position: "absolute"}}>
                  {searchedDesigners.map(result => (
                    <Card 
                    as={Link} to={`/designers/${result.id}`} 
                    onClick={() => {
                      setSearch("")}}
                    style={{border: "1px solid black", margin: "0px", borderRadius: "2px", padding: "5px", backgroundColor:"white", width: "300px"}} key={result.id}>
                      {result.name}
                    </Card>
                  ))}
                </div>
            </div>
          </Menu.Item>
          <Dropdown item icon='bars' style={{ fontSize: 24}} >
            <Dropdown.Menu direction="left" style={{ fontSize: 20, color: "black" }}>
              <Dropdown.Item as={Link} to={`/bands/${band.id}`} icon='user' text='My Profile' />
              <Dropdown.Item as={Link} to={`/bands/${band.id}/projects`} icon='tasks' text='My Projects' />
              {/* <Dropdown.Item icon='inbox' text='My Inbox' /> */}
              <Dropdown.Item as={Link} to={`/bands/${band.id}/edit-profile`} icon='edit' text='Edit Profile' />
              <Segment basic textAlign={"center"} style={{margin: "0 auto"}}>
                <Button className="violet ui button" onClick={handleLogout} style={{ fontSize: 18, textAlign: "center"}} >Logout</Button>
              </Segment>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    )
  } else if (designer) {
    return (
      <div className="test-test">
        <Menu secondary pointing >
          <Menu.Item 
            as={NavLink} to="/" 
            name='home'
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')} 
            >
            <img src={gigprintslogo} alt='Home' 
              style={{width: "250px", marginLeft:"8px", marginRight:"8px"}}
            />
          </Menu.Item>
          <Menu.Item style={{ fontSize: 18 }} position='right'>
            <div>
              <Input style ={{width: "300px", height: "35px"}} 
                icon='search' 
                placeholder='Search Bands...' 
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
                <div style={{ position: "absolute"}}>
                  {searchedBands.map(result => (
                    <Card 
                    as={Link} to={`/bands/${result.id}`}
                    onClick={() => {
                      setSearch("")}} 
                    style={{width: "300px", margin: "0px", padding:"5px", border: "1px solid black", borderRadius: "2px", backgroundColor:"white"}} key={result.id}>
                      {result.name}
                    </Card>
                  ))}
                </div>
            </div>
          </Menu.Item>
          <Dropdown item icon='bars'  style={{ fontSize: 24 }}>
            <Dropdown.Menu direction="left" style={{ fontSize: 20 }}>
              <Dropdown.Item as={Link} to={`/designers/${designer.id}`}icon='user' text='My Profile' />
              <Dropdown.Item as={Link} to={`/designers/${designer.id}/projects`} icon='tasks' text='My Projects' />
              {/* <Dropdown.Item icon='inbox' text='My Inbox' /> */}
              <Dropdown.Item as={Link} to={`/designers/${designer.id}/edit-profile`} icon='edit' text='Edit Profile' />
              <Segment basic textAlign={"center"} style={{margin: "0 auto"}}>
                <Button className="violet ui button" onClick={handleLogout} style={{ fontSize: 18, textAlign: "center"}} >Logout</Button>
              </Segment>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    )
  } else {
    return (
      <div className="test-test">
        <Menu secondary pointing >
        <Menu.Item 
          as={NavLink} to="/" 
          name='home'
          active={activeItem === 'home'}
          onClick={() => setActiveItem('home')} 
          >
          <img src={gigprintslogo} alt='Home' 
            style={{width: "250px", marginLeft:"8px", marginRight:"8px"}}
          />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/login" style={{fontSize: 24}} position='right'
          name='login'
          active={activeItem === 'login'}
          onClick={() => setActiveItem('login')} 
        >
        </Menu.Item>
        <Menu.Item as={NavLink} to="/signup" style={{fontSize: 24}}
          name='signup'
          active={activeItem === 'signup'}
          onClick={() => setActiveItem('signup')} 
        >
        </Menu.Item>
      </Menu>
    </div>
    )
  }

  // return (
  //   <Menu secondary pointing>
  //     <Image as={NavLink} to="/" src={logo_image} width={60} />
  //     <Menu.Item as={NavLink} to="/" style={{ fontSize: 24 }}
  //       name='home'
  //       active={activeItem === 'home'}
  //       onClick={() => setActiveItem('home')} 
  //     >
  //     </Menu.Item>
  //     {band || designer ? 
  //     <>
  //     <Menu.Item style={{ fontSize: 18 }} position='right'>
  //       <Input icon='search' placeholder='Search...' />
  //     </Menu.Item>
  //     <Dropdown item icon='bars' style={{ fontSize: 24 }} >
  //       <Dropdown.Menu direction="left">
  //         <Dropdown.Item icon='user' text='My Profile' />
  //         <Dropdown.Item icon='tasks' text='My Projects' />
  //         <Dropdown.Item icon='inbox' text='My Inbox' />
  //         <Segment basic textAlign={"center"}>
  //           <Button onClick={handleLogout} style={{ fontSize: 24, textAlign: "center"}} >Logout</Button>
  //         </Segment>
  //       </Dropdown.Menu>
  //     </Dropdown>
  //     </> : 
  //     <>
  //     <Menu.Item as={NavLink} to="/login" style={{ fontSize: 24 }} position='right'
  //       name='login'
  //       active={activeItem === 'login'}
  //       onClick={() => setActiveItem('login')} 
  //     >
  //     </Menu.Item>
  //     <Menu.Item as={NavLink} to="/signup" style={{ fontSize: 24 }}
  //       name='signup'
  //       active={activeItem === 'signup'}
  //       onClick={() => setActiveItem('signup')} 
  //     >
  //     </Menu.Item>
  //     </>}
  //   </Menu>
  // )


}

export default Nav;