import { Pagination as MPagination } from '@mui/material';

interface Props {
  page: number;
  count: number;
  onChange: (v: number) => void;
}

const Pagination = ({ page, count, onChange = () => {} }: Props) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };

  return (
    <MPagination
      page={page}
      count={count}
      shape="rounded"
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default Pagination;
