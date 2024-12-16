import { useCallback, useRef, useState, useEffect } from 'react';

import { DragHandlers } from '@/types/drag-handler';
import { DRAG_CLOSE_THRESHOLD } from '@/constants/constant';

type UseDragProps = {
  onClose: () => void;
};

const useDrag = ({ onClose }: UseDragProps) => {
  const [translateY, setTranslateY] = useState(0); // 모달의 y축 위치값
  const [isClosing, setIsClosing] = useState(false); // 모달이 닫히는 중인지 여부
  const startPosition = useRef(0); // 드래그 시작 지점
  const isDragging = useRef(false); // 드래그 중인지 여부

  const closeAnimation = useCallback(() => {
    setIsClosing(true);
    setTranslateY(window.innerHeight); // 화면 아래로 내림
    setTimeout(onClose, 200); // 애니메이션이 끝나면 모달을 닫음
  }, [onClose]);

  const handleDragStart = useCallback((clientY: number) => {
    startPosition.current = clientY;
    isDragging.current = true;
  }, []);

  const handleDragMove = useCallback((clientY: number) => {
    if (!isDragging.current) return;

    const diff = clientY - startPosition.current;
    if (diff > 0) {
      setTranslateY(diff);
    }
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isDragging.current) return;

    isDragging.current = false;
    if (translateY > DRAG_CLOSE_THRESHOLD) {
      closeAnimation();
    } else {
      setTranslateY(0); // 취소 시에만 원위치로
    }
  }, [closeAnimation, translateY]);

  useEffect(() => {
    setTranslateY(0);
    setIsClosing(false);
  }, [onClose]);

  const handlers: DragHandlers = {
    onTouchStart: e => handleDragStart(e.touches[0].clientY),
    onTouchMove: e => handleDragMove(e.touches[0].clientY),
    onTouchEnd: handleDragEnd,
    onMouseDown: e => handleDragStart(e.clientY),
    onMouseMove: e => handleDragMove(e.clientY),
    onMouseUp: handleDragEnd,
  };

  return { translateY, isClosing, handlers, closeAnimation };
};

export { useDrag };
