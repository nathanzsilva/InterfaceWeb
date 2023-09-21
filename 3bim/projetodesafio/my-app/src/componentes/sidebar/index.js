import './sidebar.css'
import icon from'./../../images/icon.png'

export const SideBar = () => {
    return (
        <div className="sidebar flex aic collumn gap15 pad10">
            <img src={icon}/>
            <h3>User</h3><hr/>
            <h3>Favoritos</h3><hr/>
            <h3>blablabla</h3><hr/>
            <h3>Configuração</h3><hr/>
        </div>
    )
}