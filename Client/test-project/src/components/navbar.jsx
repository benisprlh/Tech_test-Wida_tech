import { Outlet, useNavigate } from "react-router-dom";


export const NavBar = () => {
    const navigate = useNavigate()

  function handleClick(value, e) {
    e.preventDefault();
    navigate(`${value}`)
  }

  return (<>
  
  <nav class="navbar navbar-dark bg-dark">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Navbar</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={(e) => handleClick('', e)}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={(e) => handleClick('add-invoice', e)}>Add Invoice</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={(e) => handleClick('chart', e)}>Graph</a>
        </li>
      </ul>

    </div>
  </div>
</div>
</nav>
<Outlet />
  </>
  )
};
