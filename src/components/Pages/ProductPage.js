// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductPage = ({ itemInfo }) => {
//   // Use the useParams hook to get the route parameters
//   const { itemName } = useParams();

//   // Use the item name to get the corresponding item details
//   const item = itemInfo[itemName];

//   if (!item) {
//     // Handle the case where the item is not found
//     console.error(`Item "${itemName}" not found in itemInfo.`);
//     return <div>Item not found</div>;
//   }

//   // Render your product details using the 'item' object
//   return (
//     <div>
//       <h2>{item.fullName}</h2>
//       {/* Render other details about the item */}
//       <img src={item.image} alt={itemName} />
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default ProductPage;
