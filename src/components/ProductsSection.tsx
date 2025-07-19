import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "./ProductCard";
import { products, categories, priceRanges, sortOptions } from "@/data/products";
import { Filter, SortAsc } from "lucide-react";

export const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const featuredProducts = useMemo(() => {
    return products.filter(product => product.badge === "Mais Alugado").slice(0, 5);
  }, []);

  const newProducts = useMemo(() => {
    return products.filter(product => product.badge === "Lançamento").slice(0, 4);
  }, []);

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
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Products */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Kits{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Mais Alugados
              </span>
            </h2>
            <p className="text-base text-muted-foreground">
              Os favoritos dos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* New Products */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Lançamentos
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Novidades que chegaram para encantar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* All Products with Filters */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Catálogo{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Completo
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore todos os nossos kits de festa
            </p>
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
      </div>
    </section>
  );
};