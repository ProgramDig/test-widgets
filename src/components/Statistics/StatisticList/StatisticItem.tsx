import React, {FC} from 'react';
import {Statistic} from "../../../types";

type StatisticItemProps = {
    item: Statistic
    index: number
}

const StatisticItem: FC<StatisticItemProps> = ({item, index}) => {
    return (
        <div key={index} className="flex flex-row gap-4 items-center justify-start w-[277px]">
            <div className="rounded-[30px] p-[9px]" style={{ background: item.background }}>
                <img src={item.icon} />
            </div>

            <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
                <div
                    className="text-left relative self-stretch flex items-center justify-start"
                    style={{color: 'var(--light-typographycolor-headingtext, linear-gradient(to left, rgba(255, ' +
                            '255, 255, 0.10), rgba(255, 255, 255, 0.10)), linear-gradient(to left, #4b465c, #4b465c))',
                        font: "var(--light-basictypography-h5heading, 600 18px/24px 'Public Sans', sans-serif)",
                    }}
                >
                    {item.value}
                </div>

                <div
                    className="text-left relative self-stretch flex items-center justify-start"
                    style={{color:
                            'var(--light-typographycolor-bodytext, linear-gradient(to left, rgba(255, ' +
                            '255, 255, 0.20), rgba(255, 255, 255, 0.20)), linear-gradient(to left, #4b465c, #4b465c))',
                        font: "var(--light-basictypography-paragraphsmall, 400 13px/20px 'Public Sans', sans-serif)",
                    }}
                >
                    {item.title}
                </div>
            </div>
        </div>
    );
};

export default StatisticItem;