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
    console.log('useCart: Carregando carrinho do localStorage...');
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    console.log('useCart: Dados salvos no localStorage:', savedCart);
    
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log('useCart: Carrinho parseado:', parsedCart);
        
        const totalItems = parsedCart.items?.reduce((sum: number, item: CartItem) => sum + item.quantity, 0) || 0;
        const totalPrice = parsedCart.items?.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0) || 0;
        
        const loadedCart = {
          items: parsedCart.items || [],
          totalItems,
          totalPrice,
        };
        
        console.log('useCart: Carrinho carregado:', loadedCart);
        setCart(loadedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        setCart({
          items: [],
          totalItems: 0,
          totalPrice: 0,
        });
      }
    } else {
      console.log('useCart: Nenhum carrinho salvo encontrado no localStorage');
    }
  }, []);

  // Save cart to localStorage whenever it changes (but not on initial load)
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
      return; // Don't save on initial load
    }
    
    console.log('useCart: Salvando carrinho no localStorage:', cart);
    
    // Always save to localStorage, even if empty (to clear it)
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    
    console.log('useCart: Carrinho salvo no localStorage');
    
    // Dispatch custom event to notify components about cart changes
    const event = new CustomEvent('cartUpdated', { detail: cart });
    window.dispatchEvent(event);
    
    console.log('useCart: Evento cartUpdated disparado');
  }, [cart, isInitialized]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    console.log('useCart: addToCart chamado com item:', item);
    
    setCart(prev => {
      console.log('useCart: Estado anterior do carrinho:', prev);
      
      const existingItem = prev.items.find(cartItem => cartItem.id === item.id);
      console.log('useCart: Item existente encontrado:', existingItem);
      
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
      
      console.log('useCart: Novo estado do carrinho:', newCart);
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