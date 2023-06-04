import React from 'react';

const MenuCard = ({ title, subtitle }) => {
  return (
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-4 cursor-pointer transform transition-all duration-300 hover:scale-105">
      <div class="flex items-center">
        <div class="w-1/3">
          <img src="image.jpg" alt="Image" class="w-full h-auto" />
        </div>
        <div class="p-4 flex-1">
          <h3 class="text-xl font-semibold">{title}</h3>
          <p class="text-gray-600 mt-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
