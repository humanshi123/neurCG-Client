"use client"
import { ReferralIcon } from '@/utils/svgIcons';
import React, { useRef } from 'react';

const Page = () => {
    const textRef = useRef<HTMLParagraphElement>(null);

    const handleCopy = () => {
        if (textRef.current) {
            const textToCopy = textRef.current.textContent || '';
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert('Referral link copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        }
    };

return (
    <div>
        <h2 className='section-title mb-5'>My Referral Link</h2>
        <div className='p-5 md:p-10 rounded-lg bg-white'>
        <div className='flex md:flex-row flex-col items-center gap-[17px] justify-between'> 
            <p 
            ref={textRef} 
            className='w-full text-[#828282] border border-[#FFE2CE] px-5 py-3 rounded-[5px] break-all  '
            >https://demo.neurcg.com/animapp/auth/register?ref=We_NEED_YOUR_EMAIL
            </p>
            <div className='md:min-w-[169px] min-w-full '>
            <button 
                onClick={handleCopy} 
                className='w-full text-sm bg-[#E87223] text-white px-[28px] py-[15px] rounded-[5px]'
                >Copy URL
            </button>
                </div>
            </div>
            <ul className='referal-list mt-7'>
                <li className='mb-[13px]'><span><ReferralIcon /> </span>Invite a friend and both of you earn 1 referal bonus point.</li>
                <li><span><ReferralIcon /> </span>5 referal bonus point is 30€</li>
            </ul>
        </div>
    </div>
    );
}

export default Page;
