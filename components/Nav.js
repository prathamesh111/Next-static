import React from 'react';
import Link from 'next/link'

export default function Nav(){
    return(
        <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
        <div className="text-xl"><Link href="/">Starwars</Link></div>
            <div className="flex items-center">
                <div className="ml-8"><Link href='/people'>People</Link></div>
                <div className="ml-8"><Link href='/planet'>Planet</Link></div>
                <div className="ml-8"><Link  href="/vehicle">Vehicle</Link></div>
            </div>
        </div>
    )
}
