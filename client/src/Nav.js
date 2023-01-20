import { useState } from 'react';
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import { Input, Menu, Image, Dropdown, Button, Segment } from 'semantic-ui-react';
import logo_image from "./logopic.png";

function Nav({band, setBand, designer, setDesigner}) {

  // const { id } = useParams()
  // console.log(band)

  const [activeItem, setActiveItem] = useState('home')

  let navigate = useNavigate();

  function handleLogout() {
    fetch(`/logout`, {
      method: 'DELETE'
    })
    .then(r=>{if (r.ok) {
      setBand(null)
      setDesigner(null)
      navigate("/")
    }})
  }  

  if (band) {
    return (
      <Menu secondary pointing>
      <Image as={NavLink} to="/" src={logo_image} width={60} />
      <Menu.Item as={NavLink} to="/" style={{ fontSize: 24 }}
        name='home'
        active={activeItem === 'home'}
        onClick={() => setActiveItem('home')} 
      >
      </Menu.Item>
      <Menu.Item style={{ fontSize: 18 }} position='right'>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      <Dropdown item icon='bars' style={{ fontSize: 24 }} >
        <Dropdown.Menu direction="left">
          <Dropdown.Item as={Link} to={`/bands/${band.id}`} icon='user' text='My Profile' />
          <Dropdown.Item as={Link} to={`/bands/${band.id}/projects`} icon='tasks' text='My Projects' />
          <Dropdown.Item icon='inbox' text='My Inbox' />
          <Dropdown.Item as={Link} to={`/bands/${band.id}/edit-profile`} icon='edit' text='Edit Profile' />
          <Segment basic textAlign={"center"}>
            <Button onClick={handleLogout} style={{ fontSize: 24, textAlign: "center"}} >Logout</Button>
          </Segment>
        </Dropdown.Menu>
      </Dropdown>
      </Menu>
    )
  } else if (designer) {
    return (
      <Menu secondary pointing>
      <Image as={NavLink} to="/" src={logo_image} width={60} />
      <Menu.Item as={NavLink} to="/" style={{ fontSize: 24 }}
        name='home'
        active={activeItem === 'home'}
        onClick={() => setActiveItem('home')} 
      >
      </Menu.Item>
      <Menu.Item style={{ fontSize: 18 }} position='right'>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      <Dropdown item icon='bars' style={{ fontSize: 24 }} >
        <Dropdown.Menu direction="left">
          <Dropdown.Item as={Link} to={`/designers/${designer.id}`}icon='user' text='My Profile' />
          <Dropdown.Item as={Link} to={`/designers/${designer.id}/projects`} icon='tasks' text='My Projects' />
          <Dropdown.Item icon='inbox' text='My Inbox' />
          <Dropdown.Item as={Link} to={`/designers/${designer.id}/edit-profile`} icon='edit' text='Edit Profile' />
          <Segment basic textAlign={"center"}>
            <Button onClick={handleLogout} style={{ fontSize: 24, textAlign: "center"}} >Logout</Button>
          </Segment>
        </Dropdown.Menu>
      </Dropdown>
      </Menu>
    )
  } else {
    return (
      <Menu secondary pointing>
      <Image as={NavLink} to="/" src={logo_image} width={60} />
      <Menu.Item as={NavLink} to="/" style={{ fontSize: 24 }}
        name='home'
        active={activeItem === 'home'}
        onClick={() => setActiveItem('home')} 
      >
      </Menu.Item>
      <Menu.Item as={NavLink} to="/login" style={{ fontSize: 24 }} position='right'
        name='login'
        active={activeItem === 'login'}
        onClick={() => setActiveItem('login')} 
      >
      </Menu.Item>
      <Menu.Item as={NavLink} to="/signup" style={{ fontSize: 24 }}
        name='signup'
        active={activeItem === 'signup'}
        onClick={() => setActiveItem('signup')} 
      >
      </Menu.Item>
    </Menu>
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