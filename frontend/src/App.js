import './App.css';
import BookList from './components/admin/component.book.list';
import { Route, Routes } from 'react-router-dom';
import BookNew from './components/admin/component.book.new';
import Home from './components/admin/component.home';
import CatList from './components/admin/component.categories.list';
import CatNew from './components/admin/component.categories.new';
import AdminLayout from './components/admin/component.admin.layout';
import BookEdit from './components/admin/component.book.edit';
import Landingpage from './components/admin/component.landing.page';
function App() {
  return (
 <>
   
   <Routes>
    <Route path={'/admin'} element={<AdminLayout/>}>
    <Route path={'accueil'} element={<Landingpage/>}></Route>
      <Route path={'books'} element={<BookList/>}></Route>
      <Route path={'books/new'} element={<BookNew/>}></Route>
      <Route path={'categories'} element={<CatList/>}></Route>
      <Route path={'categories/new'} element={<CatNew/>}></Route>
      <Route path='books/edit/:id' element={<BookEdit/>}></Route> 


    </Route>
    <Route path={'/'} element={<Home/>}>

    </Route>
   </Routes>
  
  </>
  );
}

export default App;
