import React, {
    useEffect,
    useState
}               from 'react';
import {
    useHistory,
    useParams
} from 'react-router-dom';

import Descr  from '../components/Descr/Descr';
import Slider from '../components/Slider/Slider';

import servicePagesService from '../services/ServicePagesService';

export interface serviceDataInterface {
    h1: string
    primaryText: string
    secondaryText: string
    h2: string
    images: string[]
}

const initialState: serviceDataInterface = {
    h1: '',
    primaryText: '',
    secondaryText: '',
    h2: '',
    images: [],
};

interface HeatingParams {
    key: string
}

const Heating: React.FC = () => {
    const params = useParams<HeatingParams>();
    const history = useHistory();
    const [serviceData, setServiceData] = useState<serviceDataInterface>(initialState);

    useEffect(() => {
        if(!servicePagesService.hasServicePageByKey(params.key)) {
            history.push('/');
        }

        setServiceData(servicePagesService.getServicePageByKey(params.key));
    }, []);

    return (
        <>
            <Descr serviceData={serviceData} />
            <Slider serviceData={serviceData} />
        </>
    )
}

export default Heating;