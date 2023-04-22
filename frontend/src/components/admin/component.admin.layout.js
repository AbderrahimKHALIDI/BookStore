import { NavLink, Outlet} from 'react-router-dom';
function AdminLayout(){
    return(
        <>
        <div className={'container'}>
        <nav >
            <ul className={'nav nav-tabs nabar-expand-sm bg-light'}>
                <li className={'nav-item'}><NavLink className={'nav-link'} to={"/admin/accueil"}>Accueil</NavLink></li>
                <li className={'nav-item'}><NavLink className={'nav-link'} to={"/admin/books"}>Livre</NavLink></li>
                <li className={'nav-item'}><NavLink className={'nav-link'} to={"/admin/categories"}>Categories</NavLink></li>
            </ul>
        </nav>
    
        <Outlet/>
        
        </div>
        </>
    )

}
export default AdminLayout