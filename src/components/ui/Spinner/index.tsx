import * as S from './Spinner.styles';

type SpinnerProps = {
  size?: number;
  text?: string;
};

const Spinner = ({ size = 100, text }: SpinnerProps) => {
  return (
    <S.Wrapper>
      <S.Container size={size}>
        <S.SpinnerRing size={size} />
      </S.Container>
      {text && <S.Text>{text}</S.Text>}
    </S.Wrapper>
  );
};

export default Spinner;
