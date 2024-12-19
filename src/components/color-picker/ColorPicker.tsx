import { useState } from 'react';

import ColorPickerButton from '../ui/button/ColorPickerButton';
import { arrEventColor } from '@/constants/constant';
import { IEventColorProps } from '@/types/calendar';
import { ColorPickerType } from '@/types/color-picker';
import * as S from './ColorPicker.style';

const ColorPicker = ({ initialColor, onColorChange }: ColorPickerType) => {
  const [selectedColor, setselectedColor] = useState(
    initialColor?.bgColor || arrEventColor[0].bgColor,
  );
  const [listShow, setlistShow] = useState(false);

  const handleColorPick = (color: IEventColorProps) => {
    setselectedColor(color.bgColor);
    onColorChange?.(color);
    setlistShow(prev => !prev);
  };

  return (
    <S.Container>
      <ColorPickerButton
        selected
        color={selectedColor}
        onClick={() => setlistShow(prev => !prev)}
      />
      {listShow && (
        <S.ColorList>
          {arrEventColor.map(color => (
            <S.ColorItem key={color.id}>
              <ColorPickerButton
                color={color.bgColor}
                selected={color.bgColor === selectedColor}
                onClick={() => handleColorPick(color)}
              />
            </S.ColorItem>
          ))}
        </S.ColorList>
      )}
    </S.Container>
  );
};

export default ColorPicker;
