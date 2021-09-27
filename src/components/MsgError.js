import React from 'react';

const MsgError = ({ message }) => {
  return (
    <>
      <p className="bg-red p-2 w-11/12 mx-auto text-grey font-bold text-center tablet:py-3 tablet:text-2xl laptop:text-xl laptop:p-1">
        {message}
      </p>
    </>
  );
};

export default MsgError;
