import React from 'react';

interface ProductCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-card__image" />
            <div className="product-card__details">
                <h2 className="product-card__title">{title}</h2>
                <p className="product-card__description">{description}</p>
                <p className="product-card__price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;