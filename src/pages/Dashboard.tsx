import React from 'react';
import { Calendar, FileText, Users, Video } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { name: 'Consultas Agendadas', value: '3', icon: Calendar },
    { name: 'Casos Ativos', value: '12', icon: FileText },
    { name: 'Clientes', value: '28', icon: Users },
    { name: 'Próxima Consulta', value: 'Hoje, 15:00', icon: Video },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Próximos Compromissos
            </h3>
            <div className="mt-4">
              {/* Lista de compromissos aqui */}
              <p className="text-gray-500">Nenhum compromisso agendado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}