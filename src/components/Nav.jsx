import { useNavigate } from 'react-router-dom'
function Nav() {

  const navigate = useNavigate()

    return (
      <nav className="navigation">
        <div className='navlink' onClick={() => navigate('/')}>Home</div>
        <div className='navlink' onClick={() => navigate('/argonautes')}>Equipe</div>
        <div className='navlink' onClick={() => navigate('/embarquement')}>Embarquement</div>
      </nav>
    );
  }
  
  export default Nav;