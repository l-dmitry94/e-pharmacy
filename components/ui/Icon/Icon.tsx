import { FC, SVGProps } from 'react';
import clsx from 'clsx';

import scss from './Icon.module.scss';

type IconVariant =
    | 'arrow-double-left'
    | 'arrow-double-right'
    | 'arrow-left'
    | 'arrow-right'
    | 'attachment'
    | 'chevron-down'
    | 'close'
    | 'coins'
    | 'facebook'
    | 'filter'
    | 'instagram'
    | 'location'
    | 'phone'
    | 'users'
    | 'youtube'
    | 'elements';

interface IIcon extends SVGProps<SVGSVGElement> {
    variant: IconVariant;
    className?: string;
}

const Icon: FC<IIcon> = ({ variant, className, ...props }) => {
    return (
        <svg className={clsx(scss.icon, className)} {...props}>
            <use href={`/icons/icons.svg#icon-${variant}`}></use>
        </svg>
    );
};

export default Icon;
