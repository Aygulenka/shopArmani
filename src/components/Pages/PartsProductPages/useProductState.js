import { useState } from 'react';
import { useCart } from '../../Hooks/CartContext';

const useProductState = (itemName, itemInfo) => {
  const [isZoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCharacteristicsExpanded, setCharacteristicsExpanded] = useState(false);
  const [isPackagingExpanded, setPackagingExpanded] = useState(false);
  const [isAddedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ itemName, itemInfo });
    setAddedToCart(true);
  };

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  const handleMouseMove = (e) => {
    console.log('Mouse Move');
    if (isZoomed) {
      const rect = e.target.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      setPosition({ x, y });
    }
  };

  const toggleCharacteristics = () => {
    setCharacteristicsExpanded(!isCharacteristicsExpanded);
  };

  const togglePackaging = () => {
    setPackagingExpanded(!isPackagingExpanded);
  };

  return {
    isZoomed,
    position,
    isCharacteristicsExpanded,
    isPackagingExpanded,
    isAddedToCart,
    handleAddToCart,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    toggleCharacteristics,
    togglePackaging,
    addToCart
  };
};

export default useProductState;
