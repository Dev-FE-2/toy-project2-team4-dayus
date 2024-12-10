import { getSalaryItem, getSalaryList } from '@/api';
import SalaryAccordion from '@/components/accordion/SalaryAccordion';
import SalaryList from '@/components/list/SalaryList';
import SalaryModal from '@/components/Modal/SalaryModal';
import Tab from '@/components/ui/Tab';
import { PAGE_TABS } from '@/constants/constant';
import {
  ISalary,
  SalaryList as SalaryListProps,
  SalaryListItem,
} from '@/types/salary';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './SalaryPage.styles';
import { useNavigate } from 'react-router-dom';

const SalaryPage = () => {
  const [selected, setSelected] = useState('/salary');
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadMore, setHasLoadMore] = useState(true);
  const [page, setPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectSalary, setSelectSalary] = useState<ISalary | null>(null);
  const [modalSalary, setModalSalary] = useState<ISalary | null>(null);
  const [salaryList, setSalaryList] = useState<SalaryListItem[]>([]);
  const isInitialRender = useRef(true);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(selected);
  }, [navigate, selected]);

  const fetchSalaryItem = useCallback(async () => {
    try {
      const response: ISalary = await getSalaryItem();
      setSelectSalary(response);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }, []);

  useEffect(() => {
    fetchSalaryItem();
  }, [fetchSalaryItem]);

  const fetchSalaryList = useCallback(async () => {
    if (isLoading || !hasLoadMore) return;
    setIsLoading(true);
    try {
      const response: SalaryListProps = await getSalaryList(page, 10);
      const { currentPage, data, totalPage } = response;

      setSalaryList(prevList => [...prevList, ...data]);

      setHasLoadMore(currentPage + 1 < totalPage);
      if (hasLoadMore) {
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [page, isLoading, hasLoadMore]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      fetchSalaryList();
    }
  }, [fetchSalaryList]);

  const handleOpenModal = useCallback(async (salarySn: string) => {
    if (!salarySn) return;
    try {
      const response = await getSalaryItem(salarySn);
      setModalSalary(response);
      setIsModalOpen(true);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setModalSalary(null);
  }, []);

  return (
    <S.Container>
      <Tab items={PAGE_TABS} selected={selected} setSelected={setSelected} />
      {selectSalary && <SalaryAccordion {...selectSalary} />}
      <SalaryList
        isLoading={isLoading}
        listItem={salaryList}
        onLoadMore={fetchSalaryList}
        onModal={handleOpenModal}
      />
      {modalSalary && (
        <SalaryModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          salary={modalSalary}
        />
      )}
    </S.Container>
  );
};

export default SalaryPage;
