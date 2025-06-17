import { Outlet } from 'react-router';

export default function mainLayout() {
    return(
        <div className='pb-24'>
            <Outlet />
        </div>
    );
}