function NavBar() {
  return (
    <>
      <header className="fix">
        <div className="logo">K S Bakraniya</div>
        <div className="hamburger rounded-circle bg-white p-2" id="ham">
          <i className="fa-regular fa-note-sticky"></i>
        </div>
        <nav className="nav-bar">
          <ul className='list-unstyled'>
            <li><a href="#" className="active"><i className="fa-regular fa-note-sticky"></i>&ensp;Notes</a></li>
          </ul>
        </nav>
      </header>      
    </>
  )
}

export default NavBar
