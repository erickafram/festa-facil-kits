import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
  Truck
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Minha Conta
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus pedidos e informações pessoais
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
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
                  </div>
                  
                  <div className="w-full space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Pedidos realizados</span>
                      <span className="font-medium">{mockOrders.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total gasto</span>
                      <span className="font-medium text-primary">{formatPrice(totalSpent)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
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
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="orders">Meus Pedidos</TabsTrigger>
                <TabsTrigger value="profile">Perfil</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
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
                  
                  <Card>
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
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Carrinho Atual</p>
                          <p className="text-2xl font-bold text-foreground">{totalItems}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle>Pedidos Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockOrders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                              <Package className="w-6 h-6 text-accent-foreground" />
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
                <Card>
                  <CardHeader>
                    <CardTitle>Histórico de Pedidos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-6">
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
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Informações Pessoais
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Nome</p>
                          <p className="font-medium">{user?.name}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">{user?.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Telefone</p>
                          <p className="font-medium">{user?.phone || 'Não informado'}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Endereço</p>
                          <p className="font-medium">{user?.address || 'Não informado'}</p>
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