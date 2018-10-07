import * as React from 'react';
import { MainContentCard } from '../components/mainContentCard';

export class BussinesPartners extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    render(): any {
        return (
            <MainContentCard
                headerTitle='Bussines Partners'
                btnValue='submit'
                headerImgClassName='icon-bussinesPartner'
            />
        );
    }
};


export default BussinesPartners;