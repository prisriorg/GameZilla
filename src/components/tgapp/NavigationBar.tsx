'use client'

import { useTab } from '@/contexts/TabContext'
import { TabType } from '@/utils/types'
import { AiFillHome, AiFillPlusCircle, AiFillProduct, AiFillSignal } from 'react-icons/ai'

const NavigationBar = () => {
    const { activeTab, setActiveTab } = useTab()

    const tabs: { id: TabType; label: string; Icon: React.FC<{ className?: string }> }[] = [
        { id: 'home', label: 'Home', Icon: AiFillHome },
        { id: 'bots', label: 'Bots', Icon: AiFillSignal },
        { id: 'refers', label: 'Refers', Icon: AiFillProduct },
        { id: 'history', label: 'Hisrory', Icon: AiFillPlusCircle },
    ]

    return (
        <div className="flex justify-center w-full">
            <div className="fixed bottom-0 bg-black border-gray-800 w-full max-w-sm">
                <div className="grid grid-cols-4">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex flex-col items-center  ${isActive ?'bg-black':'bg-zinc-900'} border rounded-md  m-2 p-2`}
                            >
                                <tab.Icon
                                    className={`w-6 h-6 ${isActive ? 'text-[#ffffff]' : 'text-[#727272]'}`}
                                />
                                <span
                                    className={`text-xs font-medium ${isActive ? 'text-[#ffffff]' : 'text-[#727272]'}`}
                                >
                                    {tab.label}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NavigationBar