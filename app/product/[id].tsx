"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    interface Product {
        name: string;
        description: string;
        price: number;
    }

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            // Fetch product details based on the id
            fetch(`/api/products/${id}`)
                .then((response) => response.json())
                .then((data) => setProduct(data))
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetail;