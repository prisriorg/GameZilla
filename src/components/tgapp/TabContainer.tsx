'use client'

import { useTab } from '@/contexts/TabContext'
import HomeDashboard from './HomeDashboard'
import BotsPage from './BotsPage'
import RefersPage from './RefersPage'
import HistoryPage from './HistoryPage'

const TabContainer = () => {
    const { activeTab } = useTab()

    return (
        <div className="flex-1 overflow-hidden max-w-md mx-auto pt-[20px] pb-[72px]">
             {activeTab==="home"?<HomeDashboard/>:activeTab==="bots"?<BotsPage/>:activeTab==="refers"?<RefersPage id={"rttjgtihjtd"}/>:<HistoryPage/>}
        </div>
    )
}

export default TabContainer