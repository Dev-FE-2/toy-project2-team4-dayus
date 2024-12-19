import SalaryAccordion from '@/components/accordion/SalaryAccordion';
import SalaryList from '@/components/list/SalaryList';
import SalaryModal from '@/components/modal/SalaryModal';
import Tab from '@/components/ui/tab';
import { PAGE_TABS } from '@/constants/constant';
import { SalaryListItem, spreadListItem } from '@/types/salary';
import { useEffect, useState } from 'react';
import * as S from './SalaryPage.styles';
import { useNavigate } from 'react-router-dom';
import useSalaryList from '@/hooks/useSalaryList';
import formatSalaryDetail from '@/utils/formatSalaryDetail';

const SalaryPage = () => {
  const [selected, setSelected] = useState('/salary');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSalary, setModalSalary] = useState<spreadListItem[]>([]);
  const [modalTitle, setModalTitle] = useState('');
  const navigate = useNavigate();

  const { salaryList, isLoading, loadMore } = useSalaryList();
  useEffect(() => {
    navigate(selected);
  }, [navigate, selected]);

  const handleOpenModal = (salary: SalaryListItem) => {
    setModalSalary(formatSalaryDetail(salary));
    setModalTitle(salary.title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Container>
      <Tab items={PAGE_TABS} selected={selected} setSelected={setSelected} />
      <SalaryAccordion />
      <SalaryList
        isLoading={isLoading}
        listItem={salaryList}
        onLoadMore={loadMore}
        onModal={handleOpenModal}
      />
      <SalaryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        salary={modalSalary}
        title={modalTitle}
      />
    </S.Container>
  );
};

export default SalaryPage;
