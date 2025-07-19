import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  Users, 
  Package, 
  DollarSign,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  Eye,
  TrendingUp,
  Calendar,
  ShoppingBag,
  AlertCircle,
  CheckCircle2,
  Clock,
  Star
} from 'lucide-react';

// Mock data
const mockStats = {
  totalRevenue: 45680,
  totalOrders: 156,
  totalCustomers: 89,
  totalProducts: 42,
  monthlyGrowth: 12.5,
  pendingOrders: 8,
  completedToday: 12,
  averageRating: 4.8
};

const mockOrders = [
  {
    id: '001',
    customer: 'João Silva',
    email: 'joao@email.com',
    date: '2024-01-15',
    status: 'delivered',
    total: 290,
    items: 1
  },
  {
    id: '002',
    customer: 'Maria Santos',
    email: 'maria@email.com',
    date: '2024-01-20',
    status: 'in-transit',
    total: 560,
    items: 2
  },
  {
    id: '003',
    customer: 'Pedro Costa',
    email: 'pedro@email.com',
    date: '2024-01-25',
    status: 'processing',
    total: 280,
    items: 1
  }
];

const mockCustomers = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    orders: 3,
    totalSpent: 870,
    lastOrder: '2024-01-15'
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@email.com',
    orders: 2,
    totalSpent: 560,
    lastOrder: '2024-01-20'
  }
];

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'processing': { label: 'Processando', variant: 'secondary' as const },
      'in-transit': { label: 'Em trânsito', variant: 'default' as const },
      'delivered': { label: 'Entregue', variant: 'secondary' as const }
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-card shadow-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Decorae - Painel Admin
              </h1>
              <p className="text-muted-foreground">Gerencie sua loja de decorações</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">Olá, {user?.name}</p>
                <p className="text-xs text-muted-foreground">Administrador</p>
              </div>
              <Button variant="outline" onClick={logout} className="hover:bg-destructive hover:text-destructive-foreground">
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-accent/20 p-1">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="customers">Clientes</TabsTrigger>
            <TabsTrigger value="products">Produtos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Pedidos Hoje</p>
                      <p className="text-2xl font-bold">{mockStats.completedToday}</p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Pendentes</p>
                      <p className="text-2xl font-bold">{mockStats.pendingOrders}</p>
                    </div>
                    <Clock className="w-8 h-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Avaliação</p>
                      <p className="text-2xl font-bold">{mockStats.averageRating}</p>
                    </div>
                    <Star className="w-8 h-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Crescimento</p>
                      <p className="text-2xl font-bold">+{mockStats.monthlyGrowth}%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-elegant transition-all duration-300 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Receita Total</p>
                      <p className="text-2xl font-bold text-foreground">
                        {formatPrice(mockStats.totalRevenue)}
                      </p>
                      <p className="text-xs text-green-600 flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +{mockStats.monthlyGrowth}% este mês
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total de Pedidos</p>
                      <p className="text-2xl font-bold text-foreground">{mockStats.totalOrders}</p>
                      <Progress value={75} className="mt-2 h-2" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                      <ShoppingBag className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Clientes</p>
                      <p className="text-2xl font-bold text-foreground">{mockStats.totalCustomers}</p>
                      <p className="text-xs text-blue-600 mt-1">+5 novos esta semana</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Produtos</p>
                      <p className="text-2xl font-bold text-foreground">{mockStats.totalProducts}</p>
                      <p className="text-xs text-orange-600 mt-1">3 em baixo estoque</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Package className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Alerts */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-800">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Atenção Necessária
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-orange-700">• 3 produtos com estoque baixo</p>
                    <p className="text-sm text-orange-700">• 2 pedidos aguardando confirmação</p>
                    <p className="text-sm text-orange-700">• 1 avaliação negativa para revisar</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Tudo em Ordem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-green-700">• Sistema funcionando perfeitamente</p>
                    <p className="text-sm text-green-700">• Backup realizado hoje</p>
                    <p className="text-sm text-green-700">• Todas as entregas no prazo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="shadow-elegant border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingBag className="w-5 h-5 mr-2 text-primary" />
                    Pedidos Recentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockOrders.slice(0, 5).map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors">
                        <div>
                          <p className="font-medium">#{order.id} - {order.customer}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(order.date).toLocaleDateString('pt-BR')}
                          </p>
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

              <Card className="shadow-elegant border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                    Produtos Mais Alugados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10">
                      <span className="text-sm">Kit Pegue e Monte Minnie</span>
                      <Badge className="bg-primary text-primary-foreground">23 aluguéis</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-secondary/5 to-secondary/10">
                      <span className="text-sm">Kit Pegue e Monte Futebol</span>
                      <Badge className="bg-secondary text-secondary-foreground">18 aluguéis</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-accent/5 to-accent/10">
                      <span className="text-sm">Kit pegue e monte Tardezinha</span>
                      <Badge className="bg-accent text-accent-foreground">15 aluguéis</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="orders" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Gerenciar Pedidos</h2>
                <p className="text-muted-foreground">Acompanhe e gerencie todos os pedidos</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </div>

            <Card className="shadow-elegant border-primary/10">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar pedidos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4 hover:shadow-card transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">Pedido #{order.id}</h3>
                          <p className="text-sm text-muted-foreground">
                            {order.customer} - {order.email}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(order.status)}
                          <Button variant="outline" size="sm" className="hover:bg-blue-500 hover:text-white">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="hover:bg-green-500 hover:text-white">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Data: {new Date(order.date).toLocaleDateString('pt-BR')}</span>
                        <span>Itens: {order.items}</span>
                        <span className="font-medium">Total: {formatPrice(order.total)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customers" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Gerenciar Clientes</h2>
                <p className="text-muted-foreground">Visualize e gerencie sua base de clientes</p>
              </div>
              <Button className="bg-gradient-primary hover:shadow-glow">
                <Plus className="w-4 h-4 mr-2" />
                Novo Cliente
              </Button>
            </div>

            <Card className="shadow-elegant border-primary/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {mockCustomers.map((customer) => (
                    <div key={customer.id} className="border rounded-lg p-4 hover:shadow-card transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{customer.name}</h3>
                          <p className="text-sm text-muted-foreground">{customer.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">
                            {customer.orders} pedidos - {formatPrice(customer.totalSpent)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Último pedido: {new Date(customer.lastOrder).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Gerenciar Produtos</h2>
                <p className="text-muted-foreground">Adicione e gerencie seus produtos</p>
              </div>
              <Button className="bg-gradient-primary hover:shadow-glow">
                <Plus className="w-4 h-4 mr-2" />
                Novo Produto
              </Button>
            </div>

            <Card className="shadow-elegant border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2 text-primary" />
                  Adicionar Novo Produto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product-name">Nome do Produto</Label>
                    <Input id="product-name" placeholder="Ex: Kit Pegue e Monte..." className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="product-price">Preço</Label>
                    <Input id="product-price" type="number" placeholder="280" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="product-category">Categoria</Label>
                    <Input id="product-category" placeholder="Ex: Infantil Feminino" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="product-stock">Estoque</Label>
                    <Input id="product-stock" type="number" placeholder="10" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="product-description">Descrição</Label>
                  <Textarea id="product-description" placeholder="Descrição do produto..." className="mt-1" />
                </div>
                <Button className="bg-gradient-primary hover:shadow-glow">
                  Adicionar Produto
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;