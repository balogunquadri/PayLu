import React from 'react'
import HeaderItem from './HeaderItem';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="PAYTEK" Icon={LightningBoltIcon} />
                <HeaderItem title="CUSTOMERS" Icon={BadgeCheckIcon} />
                <HeaderItem title="PRICING" Icon={CollectionIcon} />
                <HeaderItem title="LEARN" Icon={SearchIcon} />
                <HeaderItem title="LOGIN" Icon={UserIcon} />

            </div>

            <div className="flex ">
                <HeaderItem title="Developer" Icon={HomeIcon} />
                <HeaderItem title="Support" Icon={LightningBoltIcon} />
                <HeaderItem title="Sign Up" Icon={BadgeCheckIcon} />
                <HeaderItem title="Blog" Icon={CollectionIcon} />

            </div>
            {/* <h1>Paytek</h1> */}
            {/* <image
                className="object-contain"
                src=""
                width={200}
                height={100}
            /> */}

        </header>


    )
}

export default Header
