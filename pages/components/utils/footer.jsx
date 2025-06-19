import { useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    return (
        <div className="border-t-2 mt-[50px]">
            <p className="font-bold text-base capitalize text-center py-[20px]">
                &copy; {year} copy right by MuhammedMostafaSalem
            </p>
        </div>
    )
}

export default Footer
