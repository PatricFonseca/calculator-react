import './style.scss';

type ResultProps = {
  value: string;
}

function ResultPanel({value}: ResultProps) {
  return (
    <div 
      className={`result-panel ${(value.length > 11) ? 'small-font' : ''} 
        ${(value.length > 23 ? 'very-small-font' : '' )}
      `} 

    >
      {value}  
    </div>
  )
}


export default ResultPanel;