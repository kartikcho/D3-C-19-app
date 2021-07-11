import React from 'react'

type Props = {
    label: string,
    onClick?: (e:  React.MouseEvent<HTMLButtonElement>) => void,
}

export default function Button({label, onClick}: Props) {
    return (
        <button className="px-8 py-2 hover:bg-white hover:text-customred rounded-full border-2 border-customred bg-customred text-white transition duration-200 ease-in-out" onClick={onClick}>
            {label}
        </button>
    )
}
