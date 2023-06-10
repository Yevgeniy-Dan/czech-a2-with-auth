import React, { useState, useEffect } from 'react';

const useKeyOpen = count => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const keyArray = Array.from({ length: count }, (v, k) => {
      return { isOpen: false, key: k };
    });
    setKeys(keyArray);
  }, [count]);

  const getValue = key => {
    return keys.find(k => k.key === key)?.isOpen;
  };

  const toggleKey = key => {
    const updatedKeys = [...keys];
    const objIndex = updatedKeys.findIndex(k => k.key === key);
    updatedKeys[objIndex].isOpen = !updatedKeys[objIndex].isOpen;
    setKeys(updatedKeys);
  };

  return { keys, toggleKey, getValue };
};

export default useKeyOpen;
