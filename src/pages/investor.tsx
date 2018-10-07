import * as React from 'react';
import { MainContentCard } from '../components/mainContentCard';

export class Investors extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    render(): any {
        return (
            <MainContentCard
                headerTitle='Investors'
                btnValue='submit'
                headerImgClassName='icon-investor'
                
            />
        );
    }
};


export default Investors;