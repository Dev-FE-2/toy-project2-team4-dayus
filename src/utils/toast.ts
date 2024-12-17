import toast from 'react-hot-toast';

const toastSuccess = (message: string) => {
  toast.success(message, {
    duration: 1500,
    style: {
      fontSize: 'var(--font-sm)',
    },
  });
};

const toastError = (message: string) => {
  toast.error(message, {
    duration: 1500,
    style: {
      fontSize: 'var(--font-sm)',
    },
  });
};

export { toastSuccess, toastError };
