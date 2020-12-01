import React from 'react';
import {useParams} from 'react-router-dom';
import Head from '../../components/Helper/Head';

export const UserProfile = () => {
    const {id} = useParams();

    
    return (
        <section>
            <Head title="Perfil"/>
            {id}
        </section>
    )
}

export default UserProfile;
