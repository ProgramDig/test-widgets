import React, {FC} from 'react';

type ButtonListProps = {
    buttons: any[]
}

const ButtonList: FC<ButtonListProps> = ({buttons}) => {
    return (
        <>
            {buttons.map((item, index) => (
                <button
                    key={index}
                    className="flex items-center justify-center w-[38px] h-[38px] rounded-[3px] button-v"
                >
                    <img src={item} alt="icon"/>
                </button>
            ))}
        </>
    );
};

export default ButtonList;