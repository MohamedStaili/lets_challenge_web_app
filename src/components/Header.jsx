import './header.css'
export const Header = () => {
  return (
    <div className="header">
        <span>HEALTH</span>
        <div style={{backgroundColor: 'black' , border: '0px' , borderRadius:'50%'}}><img src="/logo.png" alt="logo"/></div>
        <span>TRACK</span>
    </div>
  )
}