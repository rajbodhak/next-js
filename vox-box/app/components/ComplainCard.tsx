import React from 'react'
import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ComplainCard = ({ post }: { post: ComplainCardType }) => {
    const { _id, _createdAt, author, views, title, description, category, image } = post;
    return (
        <li className='complain-card group'>
            <div className='flex-between'>
                <p className='complain-card_date'>
                    {formatDate(_createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-slate-300' />
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>
            <div className='flex-between mt-5 gap-5'>
                <div className='flex-1'>
                    <Link href={`/user/${author?._id}`}>
                        <p className='text-16-medium line-clamp-1'>{author?.name}</p>
                    </Link>
                    <Link href={`/complain/${_id}`}>
                        <h3 className='text-26-semibold line-clamp-1'>{title}</h3></Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src="https://placehold.co/45x48" alt="placeholder" width={48} height={48} className="rounded-full" />
                </Link>
            </div>
            <Link href={`/complain/${_id}`}>
                <p className='complain-card_desc'>
                    {description}
                </p>
                <img src={image} alt="complain-image" className="complain-card_img" />
            </Link>

            <div className='flex-between gap-3 mt-5'>
                <p className='text-16-medium'>{category}</p>
                <Button className='complain-card_btn' asChild>
                    <Link href={`/complain/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export default ComplainCard