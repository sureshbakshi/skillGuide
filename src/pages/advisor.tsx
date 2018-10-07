import * as React from 'react';
import { MainContentCard } from '../components/mainContentCard';

export class Advisors extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    render(): any {
        return (
            <MainContentCard
                headerTitle='Advisors'
                btnValue='submit'
                headerImgClassName='icon-idea'
            />
        );
    }
};


export default Advisors;