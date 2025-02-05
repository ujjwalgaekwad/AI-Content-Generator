import React from 'react'
import SideNavigation from './_components/SideNavigation';

function layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <div>
                <SideNavigation />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout
