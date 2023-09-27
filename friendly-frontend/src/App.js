import Banner from './components/banner';
import Header from './components/layouts/Header';
import Category from './components/category';
import Mainbanner from './components/Mainbanner';
import Notice from './components/notice';
import MemberList from './pages/MemberList';
import ManagerMain from './pages/ManagerMain';
import { Container } from '@mui/material';
import styled from 'styled-components';



function App() {
  return (
    
    // <ScreenWrapper>
    //   <Header/>
    //   <Mainbanner/>
    //   <Banner/>
    //   <Category/>
    // </ScreenWrapper>

    <ScreenWrapper>
    <ManagerMain/>
    </ScreenWrapper>
    
  );
}

export default App;

const ScreenWrapper = styled.div`
margin-left: 260px;
margin-right: 260px;
`;