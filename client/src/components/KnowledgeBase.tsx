// import React, { useState, useMemo } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Link } from 'wouter';
// import { Search, Book, FileText, Scale, Building, Heart, Car, Home, Briefcase, Shield, User, ShoppingCart, Clock, ArrowRight, Gavel } from 'lucide-react';
// import type { KnowledgeArticle } from '../../../shared/schema';
// import LegalBackground from './LegalBackground';

// export default function KnowledgeBase() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const categories = [
//     { id: 'all', name: 'All Topics', icon: Book, color: 'bg-gray-500' },
//     { id: 'Arrest Rights', name: 'Arrest Rights', icon: Shield, color: 'bg-red-500' },
//     { id: 'Tenant Rights', name: 'Tenant Rights', icon: Home, color: 'bg-blue-500' },
//     { id: 'Cybercrime', name: 'Cybercrime', icon: Shield, color: 'bg-purple-500' },
//     { id: "Women's Safety", name: "Women's Safety", icon: User, color: 'bg-pink-500' },
//     { id: 'Consumer Complaints', name: 'Consumer Complaints', icon: ShoppingCart, color: 'bg-green-500' },
//   ];

//   const { data: articles = [], isLoading, error } = useQuery<KnowledgeArticle[]>({
//     queryKey: ['/api/knowledge'],
//     staleTime: 1000 * 60 * 5, // Cache for 5 minutes
//   });

//   // Real-time filtering with useMemo for performance
//   const filteredArticles = useMemo(() => {
//     if (!articles.length) return [];
    
//     return articles.filter((article) => {
//       const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
//       const matchesSearch = searchQuery === '' || 
//         article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         (article.tags && article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      
//       return matchesCategory && matchesSearch;
//     });
//   }, [articles, selectedCategory, searchQuery]);

//   // Get article count for each category
//   const getCategoryCount = (categoryId: string) => {
//     if (categoryId === 'all') return articles.length;
//     return articles.filter(article => article.category === categoryId).length;
//   };

//   const featuredResources = [
//     {
//       title: 'Legal Document Templates',
//       description: 'Download professionally drafted legal templates for common situations.',
//       icon: FileText,
//       count: '20+ Templates',
//     },
//     {
//       title: 'Case Law Database',
//       description: 'Browse landmark Supreme Court cases across 5 key legal categories.',
//       icon: Scale,
//       count: '15 Cases (3 per category)',
//     },
//     {
//       title: 'State Law Guides',
//       description: 'Comprehensive guides covering laws and regulations for 29 states and 7 union territories.',
//       icon: Book,
//       count: '29 States & 7 UTs',
//     },
//   ];



//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 overflow-hidden">
//       {/* Animated Legal Background */}
//       <LegalBackground variant="page" className="opacity-20" />
      
//       {/* Floating Legal Icons */}
//       <div className="absolute top-20 left-10 animate-float opacity-10">
//         <Scale className="h-16 w-16 text-blue-600" />
//       </div>
//       <div className="absolute bottom-20 right-10 animate-float animation-delay-300 opacity-10">
//         <Gavel className="h-14 w-14 text-emerald-600" />
//       </div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="animate-fade-in-up">
//             <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               Legal Knowledge Base
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-left animation-delay-75">
//               Comprehensive legal resources, guides, and templates to help you understand your rights and navigate legal matters.
//             </p>
//           </div>
//         </div>

//         {/* Featured Resources */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {featuredResources.map((resource, index) => {
//             const Icon = resource.icon;
//             const getResourceLink = () => {
//               if (resource.title === 'Legal Document Templates') return '/templates';
//               if (resource.title === 'Case Law Database') return '/cases';
//               if (resource.title === 'State Law Guides') return '/guides';
//               return '#';
//             };
            
//             return (
//               <Link
//                 key={index}
//                 href={getResourceLink()}
//                 className="card p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer block animate-fade-in-up glass-effect"
//                 style={{ animationDelay: `${index * 150 + 150}ms` }}
//               >
//                 <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl mb-4 animate-bounce-subtle">
//                   <Icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
//                 <p className="text-gray-600 mb-4">{resource.description}</p>
//                 <div className="text-sm font-medium text-blue-600 flex items-center justify-center gap-1 animate-pulse-subtle">
//                   {resource.count}
//                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </Link>
//             );
//           })}
//         </div>

//         {/* Search Bar */}
//         <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-600">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-500 animate-pulse-subtle" />
//             <input
//               type="text"
//               placeholder="Search legal topics, guides, and resources..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-14 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg glass-effect shadow-md"
//               data-testid="search-input"
//             />
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in-right animation-delay-750">
//           {categories.map((category, index) => {
//             const Icon = category.icon;
//             const count = getCategoryCount(category.id);
//             return (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-1 animate-fade-in-up ${
//                   selectedCategory === category.id
//                     ? `${category.color} text-white shadow-lg animate-bounce-subtle`
//                     : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 glass-effect'
//                 }`}
//                 style={{ animationDelay: `${index * 100 + 850}ms` }}
//                 data-testid={`category-${category.id}`}
//               >
//                 <Icon className="h-4 w-4 animate-pulse-subtle" />
//                 <span>{category.name}</span>
//                 <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
//                   selectedCategory === category.id
//                     ? 'bg-white/20 text-white'
//                     : 'bg-gray-100 text-gray-600'
//                 }`}>
//                   {count}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Loading State */}
//         {isLoading && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {[...Array(6)].map((_, index) => (
//               <div key={index} className="card p-8 animate-pulse">
//                 <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
//                 <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
//                 <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
//                 <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
//                 <div className="flex gap-2 mb-4">
//                   <div className="h-6 bg-gray-300 rounded w-16"></div>
//                   <div className="h-6 bg-gray-300 rounded w-20"></div>
//                 </div>
//                 <div className="h-4 bg-gray-300 rounded w-24"></div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Error State */}
//         {error && (
//           <div className="text-center py-12">
//             <div className="text-red-500 mb-4">
//               <Book className="h-16 w-16 mx-auto mb-4" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-2">Failed to load articles</h3>
//             <p className="text-gray-600">Please try refreshing the page.</p>
//           </div>
//         )}

//         {/* Articles Grid */}
//         {!isLoading && !error && (
//           <div>
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold text-gray-900">
//                 {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
//               </h2>
//               <div className="flex items-center gap-4">
//                 <span className="text-gray-600" data-testid="articles-count">
//                   {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
//                 </span>
//                 {searchQuery && (
//                   <button
//                     onClick={() => setSearchQuery('')}
//                     className="text-sm text-blue-600 hover:text-blue-700"
//                     data-testid="clear-search"
//                   >
//                     Clear search
//                   </button>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {filteredArticles.map((article, index) => (
//                 <article 
//                   key={article.id} 
//                   className="card p-8 hover:scale-105 transition-all duration-300 group cursor-pointer animate-fade-in-up glass-effect"
//                   style={{ animationDelay: `${index * 100 + 1000}ms` }}
//                   data-testid={`article-${article.id}`}
//                 >
//                   <div className="flex items-center space-x-4 mb-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium animate-pulse-subtle ${
//                       article.category === 'Arrest Rights' ? 'bg-red-100 text-red-800' :
//                       article.category === 'Tenant Rights' ? 'bg-blue-100 text-blue-800' :
//                       article.category === 'Cybercrime' ? 'bg-purple-100 text-purple-800' :
//                       article.category === "Women's Safety" ? 'bg-pink-100 text-pink-800' :
//                       article.category === 'Consumer Complaints' ? 'bg-green-100 text-green-800' :
//                       'bg-gray-100 text-gray-800'
//                     }`}>
//                       {article.category}
//                     </span>
//                     <div className="flex items-center text-sm text-gray-500">
//                       <Clock className="h-4 w-4 mr-1 animate-bounce-subtle" />
//                       <span>5 min read</span>
//                     </div>
//                   </div>

//                   <Link href={`/knowledge/article/${article.id}`}>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors animate-slide-in-left">
//                       {article.title}
//                     </h3>
//                   </Link>

//                   <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
//                     {article.content.substring(0, 200)}...
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {article.tags?.slice(0, 3).map((tag: string, index: number) => (
//                       <span
//                         key={index}
//                         className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium hover:bg-blue-100 cursor-pointer transition-colors"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           setSearchQuery(tag);
//                         }}
//                         data-testid={`tag-${tag}`}
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                     {article.tags && article.tags.length > 3 && (
//                       <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md font-medium">
//                         +{article.tags.length - 3} more
//                       </span>
//                     )}
//                   </div>

//                   <Link 
//                     href={`/knowledge/article/${article.id}`}
//                     className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group"
//                     data-testid={`read-article-${article.id}`}
//                   >
//                     Read Article
//                     <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                   </Link>
//                 </article>
//               ))}
//             </div>

//             {/* No Results State */}
//             {filteredArticles.length === 0 && (
//               <div className="text-center py-12" data-testid="no-articles">
//                 <Book className="h-16 w-16 text-gray-300 mx-auto mb-4" />
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
//                 <p className="text-gray-600 mb-4">
//                   {searchQuery 
//                     ? `No articles match "${searchQuery}" in the ${selectedCategory === 'all' ? 'selected categories' : selectedCategory} category.`
//                     : `No articles available in the ${selectedCategory} category.`
//                   }
//                 </p>
//                 <div className="space-x-4">
//                   {searchQuery && (
//                     <button
//                       onClick={() => setSearchQuery('')}
//                       className="text-blue-600 hover:text-blue-700 font-medium"
//                     >
//                       Clear search
//                     </button>
//                   )}
//                   {selectedCategory !== 'all' && (
//                     <button
//                       onClick={() => setSelectedCategory('all')}
//                       className="text-blue-600 hover:text-blue-700 font-medium"
//                     >
//                       View all categories
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Search, Book, FileText, Scale, Home, Shield, User, ShoppingCart, Clock, ArrowRight, Gavel } from 'lucide-react';
import type { KnowledgeArticle } from '../../../shared/schema';
import LegalBackground from './LegalBackground';

export default function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: Book, color: 'bg-gray-500' },
    { id: 'Arrest Rights', name: 'Arrest Rights', icon: Shield, color: 'bg-red-500' },
    { id: 'Tenant Rights', name: 'Tenant Rights', icon: Home, color: 'bg-blue-500' },
    { id: 'Cybercrime', name: 'Cybercrime', icon: Shield, color: 'bg-purple-500' },
    { id: "Women's Safety", name: "Women's Safety", icon: User, color: 'bg-pink-500' },
    { id: 'Consumer Complaints', name: 'Consumer Complaints', icon: ShoppingCart, color: 'bg-green-500' },
  ];

  const { data: articles = [], isLoading, error } = useQuery<KnowledgeArticle[]>({
    queryKey: ['/api/knowledge'],
    staleTime: 1000 * 60 * 5,
  });

  const filteredArticles = useMemo(() => {
    if (!articles.length) return [];
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.tags && article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return articles.length;
    return articles.filter(article => article.category === categoryId).length;
  };

  const featuredResources = [
    {
      title: 'Legal Document Templates',
      description: 'Download professionally drafted legal templates for common situations.',
      icon: FileText,
      count: '20+ Templates',
    },
    {
      title: 'Case Law Database',
      description: 'Browse landmark Supreme Court cases across 5 key legal categories.',
      icon: Scale,
      count: '15 Cases (3 per category)',
    },
    {
      title: 'State Law Guides',
      description: 'Comprehensive guides covering laws and regulations for 29 states and 7 union territories.',
      icon: Book,
      count: '29 States & 7 UTs',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 overflow-hidden">
      {/* Legal Background */}
      <LegalBackground variant="page" className="opacity-20" />

      {/* Static Legal Icons */}
      <div className="absolute top-20 left-10 opacity-10">
        <Scale className="h-16 w-16 text-blue-600" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Gavel className="h-14 w-14 text-emerald-600" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Legal Knowledge Base
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal resources, guides, and templates to help you understand your rights and navigate legal matters.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredResources.map((resource, index) => {
            const Icon = resource.icon;
            const getResourceLink = () => {
              if (resource.title === 'Legal Document Templates') return '/templates';
              if (resource.title === 'Case Law Database') return '/cases';
              if (resource.title === 'State Law Guides') return '/guides';
              return '#';
            };

            return (
              <Link
                key={index}
                href={getResourceLink()}
                className="card p-6 text-center cursor-pointer block glass-effect"
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="text-sm font-medium text-blue-600 flex items-center justify-center gap-1">
                  {resource.count}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-500" />
            <input
              type="text"
              placeholder="Search legal topics, guides, and resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg glass-effect shadow-md"
              data-testid="search-input"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const count = getCategoryCount(category.id);
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 glass-effect'
                }`}
                data-testid={`category-${category.id}`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="card p-8">
                <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
                <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-gray-300 rounded w-16"></div>
                  <div className="h-6 bg-gray-300 rounded w-20"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="text-red-500 mb-4">
              <Book className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Failed to load articles</h3>
            <p className="text-gray-600">Please try refreshing the page.</p>
          </div>
        )}

        {/* Articles */}
        {!isLoading && !error && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all'
                  ? 'All Articles'
                  : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-gray-600" data-testid="articles-count">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                </span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-sm text-blue-600 hover:text-blue-700"
                    data-testid="clear-search"
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="card p-8 group cursor-pointer glass-effect"
                  data-testid={`article-${article.id}`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        article.category === 'Arrest Rights'
                          ? 'bg-red-100 text-red-800'
                          : article.category === 'Tenant Rights'
                          ? 'bg-blue-100 text-blue-800'
                          : article.category === 'Cybercrime'
                          ? 'bg-purple-100 text-purple-800'
                          : article.category === "Women's Safety"
                          ? 'bg-pink-100 text-pink-800'
                          : article.category === 'Consumer Complaints'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>5 min read</span>
                    </div>
                  </div>

                  <Link href={`/knowledge/article/${article.id}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.content.substring(0, 200)}...
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags?.slice(0, 3).map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium hover:bg-blue-100 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchQuery(tag);
                        }}
                        data-testid={`tag-${tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags && article.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md font-medium">
                        +{article.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/knowledge/article/${article.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group"
                    data-testid={`read-article-${article.id}`}
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-12" data-testid="no-articles">
                <Book className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">
                  {searchQuery
                    ? `No articles match "${searchQuery}" in the ${
                        selectedCategory === 'all'
                          ? 'selected categories'
                          : selectedCategory
                      } category.`
                    : `No articles available in the ${selectedCategory} category.`}
                </p>
                <div className="space-x-4">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Clear search
                    </button>
                  )}
                  {selectedCategory !== 'all' && (
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all categories
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
