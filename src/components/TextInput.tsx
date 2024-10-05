import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    style?: React.CSSProperties;
    icon?: React.ReactNode;
};

const TextInput: React.FC<Props> = ({ style, icon, ...props }) => {
    return (
        <div className="bg-white mt-3 px-4 py-4 rounded-full flex items-center justify-between">
            <input
                className="text-black font-medium text-base w-9/12 placeholder-gray-500 h-full"
                placeholder={props.placeholder}
                {...props}
            />
            {icon && <span className="ml-2">{icon}</span>}
        </div>
    );
};

export default TextInput;
