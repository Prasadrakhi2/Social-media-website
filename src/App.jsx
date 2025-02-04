import { useState } from 'react'
import './App.css'
import CreatePost from './Components/CreatePost'
import Footer from './Components/Footer'
import Header from './Components/Header'
import PostLists from './Components/PostLists'
import SideBar from './Components/Sidebar'
import PostListProvider from './Store/Post_Store'

function App() {

  let [selectTab, setSelectTab] = useState("Home");
  
  return (
    <PostListProvider>
    <div className="app-Container">
      <SideBar selectTab={selectTab} setSelectTab={setSelectTab}></SideBar>
      <div className="content">
        <Header></Header>
        {selectTab === 'Home' ? <PostLists></PostLists> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
      
    </div>
    </PostListProvider>
    
  )
}

export default App
