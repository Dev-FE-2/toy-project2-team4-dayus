import { arrEventColor } from '@/constants/constant';
import ColorPickerButton from '../ui/Button/ColorPickerButton';
import * as S from './ColorPicker.style';
import { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setselectedColor] = useState(arrEventColor[0].bgColor);
  const [listShow, setlistShow] = useState(false);

  const handleColorPick = (color: string) => {
    setselectedColor(color);
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
          {arrEventColor.map(({ id, bgColor }) => (
            <S.ColorItem key={id}>
              <ColorPickerButton
                color={bgColor}
                selected={bgColor === selectedColor}
                onClick={() => handleColorPick(bgColor)}
              />
            </S.ColorItem>
          ))}
        </S.ColorList>
      )}
    </S.Container>
  );
};

export default ColorPicker;
