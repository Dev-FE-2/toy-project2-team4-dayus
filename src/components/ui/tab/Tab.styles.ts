import styled from 'styled-components';

interface ITabButton {
  $active: boolean;
}

export const TabWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const TabList = styled.ul`
  display: flex;
  align-items: center;
`;

export const TabItem = styled.li`
  /* 탭 UI 레이아웃 변경 대비용 */
`;

export const TabButton = styled.button<ITabButton>`
  font-size: var(--font-base);
  font-weight: bold;
  padding: var(--spacing-1);
  // 탭 활성화시 검은색 텍스트 | 비활성화시 회색 텍스트
  color: ${props =>
    props.$active ? 'var(--color-black)' : 'var(--color-gray-600)'};
  // 탭 활성화시 검은색 아래 테두리 | 비활성화시 테두리 없음
  border-bottom: ${props =>
    props.$active ? '1px solid var(--color-black)' : '1px solid transparent'};
`;
