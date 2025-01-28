import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { COMPLAIN_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client';
import { after } from 'next/server';

const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client.withConfig({ useCdn: false }).fetch(COMPLAIN_VIEWS_QUERY, { id });

    after(async () => await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit())
    return (
        <div className='view-container'>
            <div className='absolute -top-2 -right-2'>
                <Ping />
            </div>

            <p className='view-text'>
                <span className='font-black'>{totalViews === 1 ? '1 view' : totalViews > 1 ? totalViews + ' views' : '0 views'}</span>
            </p>
        </div>
    )
}

export default View