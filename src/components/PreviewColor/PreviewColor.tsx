import { IIconProps } from '../../types/Icon';
import { PlusIcon } from '../../assets/icons/PlusIcon';
import { PreviewIcon } from '../../assets/icons/PreviewIcon';

import './PreviewColor.css';

export const PreviewColor: React.FC<IIconProps & { refer: any }> = ({ style, fill, refer }) => (
    <div className="previewColor" ref={refer}>
        <div className="previewColor__content">
            <PlusIcon className="previewColor__content__plus" />
            <PreviewIcon fill={fill} />
            <span className="previewColor__content__text">{fill}</span>
        </div>
    </div>
);

PreviewColor.displayName = 'PreviewColor';
