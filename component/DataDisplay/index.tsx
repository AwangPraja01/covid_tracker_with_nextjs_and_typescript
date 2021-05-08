import Moment from "react-moment";
import NumberFormat from "react-number-format";

interface Props {
  title: string;
  total: number;
  color: string;
  updatedDate: string;
}

const DataDisplay = ({ total, updatedDate, title, color }: Props) => {
  return (
    <div className='flex flex-col'>
      <span className='text-base font-open-sans'>{title}</span>
      <span className={`text-2xl mb-2 font-open-sans font-bold text${color}`}>
        <span>Total : </span>
        <span>
          <NumberFormat
            value={total}
            displayType={"text"}
            thousandSeparator={true}
          />
        </span>
      </span>
      <span className='text-lg font-open-sans font-bold'>
        <Moment format='DD MMMM YYYY'>{updatedDate}</Moment>
      </span>
    </div>
  );
};

export default DataDisplay;
