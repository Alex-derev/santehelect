import React, {useEffect} from 'react';
import {
	Switch,
	Route,
  } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Heating from './pages/Heating';
import servicePagesService from "./services/ServicePagesService";


const Application: React.FC = () => {

    useEffect(() => {
        servicePagesService.setServicePages();
    }, []);

    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" children={<Home />} exact={true} />
                <Route path="/service/:key" children={<Heating />} exact={true} />
            </Switch>
            <Footer/>
        </>
    );
}
export default Application;




// axios   форматы хэширования
//1. При инициализации приложения проверяем есть ли в localStorage ключ servicePages
    // 1.1 Создать обработчик обращений к localStorage в котором будет метод checkServicePages в котором будет проверка если по ключу servicePages в localStorage ничего не будет то мы делаем запрос на back get-initial-state после этого записфваем в localStorage данные которые пришли и нихрена не возвращаемю
// 1.1.1 Дальше должен быть метод getServicePages в котором будет вызов метод checkServicePages и возврат данных по ключу ServicePages.
// 1.2 Дальше на node.js нужно прочитать файл json и вернуть то, что прочитал в файле.
// 2. В компоненте Heating буду доставать ключ и обращаться к localStorage через getServicePages и перебирать ключи через Object.keys и сравнивать если ключ нашелся то засовываю в state значение по ключу из объекта который пришел из localStorage.
