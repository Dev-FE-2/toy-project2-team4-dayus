import * as S from './Spinner.styles';

type SpinnerProps = {
  size?: number;
  text?: string;
  textSize?: 'xs' | 'sm' | 'base';
};

const Spinner = ({ size = 50, text, textSize = 'sm' }: SpinnerProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.SpinnerRing size={size} />
      </S.Container>
      {text && <S.Text $textSize={textSize}>{text}</S.Text>}
    </S.Wrapper>
  );
};

export default Spinner;
