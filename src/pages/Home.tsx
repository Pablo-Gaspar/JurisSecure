import React from 'react';
import { Video, FileText, Brain, Users } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { FeatureCard } from '../components/FeatureCard';

export function Home() {
  const features = [
    {
      title: 'Consultas Online',
      description: 'Agende consultas e realize videochamadas seguras com advogados especializados.',
      icon: Video
    },
    {
      title: 'Gestão de Casos',
      description: 'Gerencie documentos, prazos e compromissos em um só lugar.',
      icon: FileText
    },
    {
      title: 'IA Jurídica',
      description: 'Utilize inteligência artificial para pesquisas e automação de documentos.',
      icon: Brain
    },
    {
      title: 'Colaboração',
      description: 'Conecte-se com outros profissionais e compartilhe conhecimentos.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Transforme sua prática jurídica com tecnologia
          </h1>
          <div className="mb-8">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Soluções completas para profissionais jurídicos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comece a transformar sua prática jurídica hoje
          </h2>
          <p className="mb-8 text-lg">
            Junte-se a milhares de profissionais que já estão usando o JurisSecure
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
            Criar conta gratuitamente
          </button>
        </div>
      </div>
    </div>
  );
}