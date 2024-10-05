import React from 'react';

type Props = {
    label: string;
    onPress?: () => void;
    loading?: boolean;
};

const Button: React.FC<Props> = ({ label, onPress, loading }) => {
    return (
        <button
            onClick={onPress}
            disabled={loading}
            className={`bg-black rounded-2xl py-4 flex items-center justify-center ${loading ? 'opacity-50' : ''}`}
        >
            {loading ? (
                <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"></path>
                </svg>
            ) : (
                <span className="font-semibold text-base text-white">{label}</span>
            )}
        </button>
    );
};

export default Button;
