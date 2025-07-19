import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  User, 
  ShoppingBag, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  Edit,
  Package,
  Clock,
  CheckCircle,
  Truck,
  Heart,
  Star,
  TrendingUp,
  Gift
} from 'lucide-react';

// Mock orders data
const mockOrders = [
  {
    id: '001',
    date: '2024-01-15',
    status: 'delivered',
    total: 290,
    items: [
      { name: 'Kit Pegue e Monte Minnie', quantity: 1, price: 290 }
    ],
    deliveryDate: '2024-01-17',
    returnDate: '2024-01-18'
  },
  {
    id: '002',
    date: '2024-01-20',
    status: 'in-transit',
    total: 560,
    items: [
      { name: 'Kit Pegue e Monte Futebol', quantity: 1, price: 280 },
      { name: 'Kit Pegue e Monte Flash', quantity: 1, price: 280 }
    ],
    deliveryDate: '2024-01-22',
    returnDate: '2024-01-23'
  },
  {
    id: '003',
    date: '2024-01-25',
    status: 'processing',
    total: 280,
    items: [
      { name: 'Kit pegue e monte Tardezinha', quantity: 1, price: 280 }
    ],
    deliveryDate: '2024-01-27',
    returnDate: '2024-01-28'
  }
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'processing': { label: 'Processando', variant: 'secondary' as const, icon: Clock },
      'in-transit': { label: 'Em trânsito', variant: 'default' as const, icon: Truck },
      'delivered': { label: 'Entregue', variant: 'secondary' as const, icon: CheckCircle }
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {config.label}
      </Badge>
    );
  };

  const totalSpent = mockOrders.reduce((sum, order) => sum + order.total, 0);
  const completedOrders = mockOrders.filter(order => order.status === 'delivered').length;
  const pendingOrders = mockOrders.filter(order => order.status !== 'delivered').length;
  const favoriteProducts = ['Kit Pegue e Monte Minnie', 'Kit Pegue e Monte Futebol'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Olá, {user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-muted-foreground">
            Bem-vindo de volta! Aqui você pode acompanhar seus pedidos e gerenciar sua conta.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant border-primary/10">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-lg font-bold bg-gradient-primary text-primary-foreground">
                      {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="font-semibold text-foreground">{user?.name}</h3>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                    <Badge variant="secondary" className="mt-2">
                      Cliente {user?.role === 'admin' ? 'VIP' : 'Premium'}
                    </Badge>
                  </div>
                  
                  <div className="w-full space-y-3 bg-accent/10 rounded-lg p-4">
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center">
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        Pedidos
                      </span>
                      <span className="font-bold text-primary">{mockOrders.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Total gasto
                      </span>
                      <span className="font-bold text-green-600">{formatPrice(totalSpent)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        Favoritos
                      </span>
                      <span className="font-bold text-red-500">{favoriteProducts.length}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-gradient-primary hover:text-primary-foreground"
                    onClick={logout}
                  >
                    Sair da conta
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-accent/20">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="orders">Meus Pedidos</TabsTrigger>
                <TabsTrigger value="profile">Perfil</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="hover:shadow-elegant transition-all duration-300 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total de Pedidos</p>
                          <p className="text-2xl font-bold text-foreground">{mockOrders.length}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-elegant transition-all duration-300 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Pedidos Concluídos</p>
                          <p className="text-2xl font-bold text-foreground">{completedOrders}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-elegant transition-all duration-300 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Em Andamento</p>
                          <p className="text-2xl font-bold text-foreground">{pendingOrders}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-elegant transition-all duration-300 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Gift className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Carrinho Atual</p>
                          <p className="text-2xl font-bold text-foreground">{totalItems}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <Card className="shadow-elegant border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-primary" />
                      Ações Rápidas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-primary hover:text-primary-foreground">
                        <ShoppingBag className="w-6 h-6" />
                        <span>Novo Pedido</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-primary hover:text-primary-foreground">
                        <Heart className="w-6 h-6" />
                        <span>Meus Favoritos</span>
                      </Button>
                      <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-primary hover:text-primary-foreground">
                        <Phone className="w-6 h-6" />
                        <span>Suporte</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                {/* Recent Orders */}
                <Card className="shadow-elegant border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Package className="w-5 h-5 mr-2 text-primary" />
                      Pedidos Recentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockOrders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/10 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                              <Package className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-medium">Pedido #{order.id}</p>
                              <p className="text-sm text-muted-foreground">
                                {new Date(order.date).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(order.status)}
                            <p className="text-sm font-medium mt-1">{formatPrice(order.total)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="orders" className="space-y-6">
                <Card className="shadow-elegant border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShoppingBag className="w-5 h-5 mr-2 text-primary" />
                      Histórico de Pedidos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-6 hover:shadow-card transition-all duration-300">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-semibold">Pedido #{order.id}</h3>
                              <p className="text-sm text-muted-foreground">
                                Realizado em {new Date(order.date).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                            {getStatusBadge(order.status)}
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>{item.quantity}x {item.name}</span>
                                <span>{formatPrice(item.price * item.quantity)}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex justify-between items-center pt-4 border-t">
                            <div className="text-sm text-muted-foreground">
                              <p>Entrega: {new Date(order.deliveryDate).toLocaleDateString('pt-BR')}</p>
                              <p>Devolução: {new Date(order.returnDate).toLocaleDateString('pt-BR')}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">Total: {formatPrice(order.total)}</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                Ver Detalhes
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile" className="space-y-6">
                <Card className="shadow-elegant border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <User className="w-5 h-5 mr-2 text-primary" />
                        Informações Pessoais
                      </span>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-muted-foreground">Nome Completo</Label>
                        <div>
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4 text-primary" />
                            <p className="font-medium text-foreground">{user?.name}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                        <div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <p className="font-medium text-foreground">{user?.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-muted-foreground">Telefone</Label>
                        <div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-primary" />
                            <p className="font-medium text-foreground">{user?.phone || 'Não informado'}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-muted-foreground">Endereço</Label>
                        <div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <p className="font-medium text-foreground">{user?.address || 'Não informado'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t">
                      <h4 className="font-semibold text-foreground mb-4">Preferências de Conta</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Receber notificações por email</span>
                          <Button variant="outline" size="sm">Ativado</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Receber ofertas especiais</span>
                          <Button variant="outline" size="sm">Ativado</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;