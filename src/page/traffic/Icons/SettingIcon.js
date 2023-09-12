const SettingIcon = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={color}
    >
      <path
        d="M19.7445 12.4032L17.9502 11.4113C18.1313 10.4758 18.1313 9.51613 17.9502 8.58065L19.7445 7.58872C19.9509 7.47582 20.0436 7.24195 19.9762 7.0242C19.5087 5.58873 18.7126 4.29034 17.6722 3.2097C17.5121 3.04438 17.251 3.00406 17.0488 3.11696L15.2544 4.10889C14.5005 3.48793 13.6328 3.00809 12.6935 2.69358V0.713745C12.6935 0.487939 12.5292 0.290359 12.2975 0.241972C10.7517 -0.0886716 9.16792 -0.0725426 7.6979 0.241972C7.46623 0.290359 7.30196 0.487939 7.30196 0.713745V2.69761C6.36687 3.01616 5.49917 3.49599 4.74099 4.11293L2.95084 3.12099C2.74445 3.00809 2.48751 3.04438 2.32745 3.21374C1.28706 4.29034 0.490969 5.58873 0.0234244 7.02824C-0.0481816 7.24598 0.0486971 7.47985 0.255091 7.59275L2.04945 8.58468C1.86833 9.52016 1.86833 10.4798 2.04945 11.4153L0.255091 12.4072C0.0486971 12.5202 -0.0439694 12.754 0.0234244 12.9718C0.490969 14.4072 1.28706 15.7056 2.32745 16.7863C2.48751 16.9516 2.74866 16.9919 2.95084 16.879L4.7452 15.8871C5.49917 16.508 6.36687 16.9879 7.30617 17.3024V19.2863C7.30617 19.5121 7.47044 19.7096 7.70211 19.758C9.24796 20.0887 10.8317 20.0725 12.3017 19.758C12.5334 19.7096 12.6977 19.5121 12.6977 19.2863V17.3024C13.6328 16.9838 14.5005 16.504 15.2586 15.8871L17.053 16.879C17.2594 16.9919 17.5163 16.9556 17.6764 16.7863C18.7168 15.7097 19.5129 14.4113 19.9804 12.9718C20.0436 12.75 19.9509 12.5161 19.7445 12.4032ZM9.99771 13.2218C8.14017 13.2218 6.62802 11.7742 6.62802 9.99597C6.62802 8.21775 8.14017 6.77017 9.99771 6.77017C11.8553 6.77017 13.3674 8.21775 13.3674 9.99597C13.3674 11.7742 11.8553 13.2218 9.99771 13.2218Z"
        fill={color}
      />
    </svg>
  );
};

export default SettingIcon;