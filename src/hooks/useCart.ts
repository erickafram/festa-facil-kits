import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const CART_STORAGE_KEY = 'infinitos-sonhos-cart';

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        const totalItems = parsedCart.items?.reduce((sum: number, item: CartItem) => sum + item.quantity, 0) || 0;
        const totalPrice = parsedCart.items?.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0) || 0;
        
        setCart({
          items: parsedCart.items || [],
          totalItems,
          totalPrice,
        });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        setCart({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.items.length > 0 || localStorage.getItem(CART_STORAGE_KEY)) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
    
    // Dispatch custom event to notify components about cart changes
    const event = new CustomEvent('cartUpdated', { detail: cart });
    window.dispatchEvent(event);
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existingItem = prev.items.find(cartItem => cartItem.id === item.id);
      
      let newItems: CartItem[];
      if (existingItem) {
        newItems = prev.items.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        newItems = [...prev.items, { ...item, quantity: 1 }];
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      const newCart = {
        items: newItems,
        totalItems,
        totalPrice,
      };
      
      return newCart;
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newItems = prev.items.filter(item => item.id !== itemId);
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart(prev => {
      const newItems = prev.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        items: newItems,
        totalItems,
        totalPrice,
      };
    });
  };

  const clearCart = () => {
    const emptyCart = {
      items: [],
      totalItems: 0,
      totalPrice: 0,
    };
    setCart(emptyCart);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  return {
    items: cart.items,
    totalItems: cart.totalItems,
    totalPrice: cart.totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
};