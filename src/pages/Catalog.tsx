import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, priceRanges, sortOptions } from "@/data/products";
import { Filter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    const priceRange = priceRanges[selectedPriceRange];
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.badge === "Lançamento" ? 1 : 0) - (a.badge === "Lançamento" ? 1 : 0));
        break;
      case "popular":
      default:
        filtered.sort((a, b) => (b.badge === "Mais Alugado" ? 1 : 0) - (a.badge === "Mais Alugado" ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para início
            </Link>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Catálogo{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Completo
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore todos os nossos kits de festa
              </p>
            </div>
          </div>

          {/* Filters */}
          <Card className="mb-8 border-primary/10">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden">
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="w-full"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                </div>

                {/* Filters Content */}
                <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Category Filter */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Categoria
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Price Filter */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Faixa de Preço
                      </label>
                      <select
                        value={selectedPriceRange}
                        onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                        className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      >
                        {priceRanges.map((range, index) => (
                          <option key={index} value={index}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sort Filter */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Ordenar por
                      </label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-2 border border-border rounded-md bg-background text-foreground"
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results count */}
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {filteredAndSortedProducts.length} produto(s) encontrado(s)
                </span>
                
                {/* Active filters */}
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== "Todos" && (
                    <Badge variant="secondary" className="text-xs">
                      {selectedCategory}
                    </Badge>
                  )}
                  {selectedPriceRange !== 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {priceRanges[selectedPriceRange].label}
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhum produto encontrado com os filtros selecionados.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSelectedPriceRange(0);
                  setSortBy("popular");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Catalog;